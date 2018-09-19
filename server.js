const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const http = require('http');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

const getContacts = require('./getContacts.js');
const postContact = require('./postContact.js');
const searchById = require('./searchById');
let list = require('./contacts.json');

app.prepare()
    .then(() => {
        const handleError = (err, res) => {
            res
              .status(500)
              .contentType("text/plain")
              .end("Oops! Something went wrong! ", err);
          };
        const server = express()
        const upload = multer({
            dest: "./temp"
            // you might also want to set some limits: https://github.com/expressjs/multer#limits
        });

        /*server.use((req, res, next) => {
            res.send('Hello, I am a server who has been called: ');
            next()
        })*/
        server.get("/", express.static(path.join(__dirname, "./components")));

        server.get('/api/search', (req, res) => {
            let searchTerm = req.query.q;
            res.send(getContacts.search(searchTerm, list));
        })

        server.get('/api/simpleFilter/:function', (req, res) => {
            let group = req.params.function;
            res.send(getContacts.filter(group, list))
        });

        server.get('/api/delete', (req, res) => {
          let deleteId = req.query.id;
          list = list.filter( x =>  x.id !== deleteId );
          let json = JSON.stringify(list);

          fs.writeFile('./contacts.json',json,'utf8', (err)=> {
            if (err) {
                throw err
            }
            console.log("the file was deleted");
          });
          res.send(json);
        });

        server.post('/api/registerNewContact',

            upload.single("userPhoto"), (req, res) => {
                console.log(req);
                let newUser = postContact.newContact(req.body,list);
                let newUserId = newUser.firstName.replace(/ /g, '%20') + '%20' + newUser.lastName.replace(/ /g, '%20') + '%20' + newUser.id;

                const tempPath = req.file.path;
                const targetPath = path.join(__dirname, "./static/user_images/" + newUserId + ".jpg");

                if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
                    fs.rename(tempPath, targetPath, err => {
                        if (err) return handleError(err, res);

                        newUser.picture = "./static/user_images/" + newUserId + ".jpg";
                        console.log(newUser);
                        list.push(newUser);
                        postContact.writeUser(list);

                        // function that registers the rest of the data
                        res
                            .status(200)
                            .contentType("text/plain")
                            .end("New contact added");
                    });
                } else {
                    newUser.picture = "./static/user_images/defaultUser.jpg";
                    list.push(newUser);
                    postContacts.writeUser(list);
                    fs.unlink(tempPath, err => {
                        if (err) return handleError(err, res);

                        res
                            .status(403)
                            .contentType("text/plain")
                            .end("Only .jpg files are allowed!");
                    });
                    //res.send(postContacts.procesPost(req, res, newContact, list));
                }
            })

            server.get('/api/editContact/:id', urlencodedParser,
                (req, res) => {
                    console.log(req.params.id);
                    //res.send(req.body);
                    let searchId = req.params.id;
                    let body = req.query;
                    res.send(searchById.thisId(searchId, body, list));
            })

        server.get('*', (req, res) => {
            return handle(req, res)

        })

        const port = 3000;
        server.listen(port, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:' + port)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
