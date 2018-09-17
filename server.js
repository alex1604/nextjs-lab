const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const http = require('http');

const getContacts = require('./getContacts.js')
//const postContacts = require('./postContacts.js');
const list = require('./contacts.json')

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

        server.post('/api/registerNewContact',

            upload.single("userPhoto"), (req, res) => {

                const tempPath = req.file.path;
                console.log(req.file.path);
                const targetPath = path.join(__dirname, "./static/user_images/AlejandroGarcia1000001.jpg");

                if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
                    fs.rename(tempPath, targetPath, err => {
                        if (err) return handleError(err, res);


                        // function that registers the rest of the data
                        res
                            .status(200)
                            .contentType("text/plain")
                            .end("File uploaded!");
                    });
                } else {
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
