const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

const getContacts = require('./getContacts.js')
const postContacts = require('./postContacts.js');
const list = require('./contacts.json')

app.prepare()
    .then(() => {
        const server = express()
    
        /*server.use((req, res, next) => {
            res.send('Hello, I am a server who has been called: ');
            next()
        })*/

        server.get('/api/search', (req, res) => {
            let searchTerm = req.query.q;
            res.send(getContacts.search(searchTerm, list));
        })

        server.get('/api/simpleFilter/:function', (req, res) => {
            let group = req.params.function;
            res.send(getContacts.filter(group,list))  
        });

        /*server.post('/api/registerNewContact', (req, res) => {
            let newContact = req.body;
            res.send(postContacts.procesPost(newContact, list));
        })*/

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