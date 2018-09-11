const express = require('express')
const app = express()
const getContacts = require('./getContacts.js')
const postContacts = require('./postContacts.js');
const list = require ('./contacts.json');
let reg = /[a-z]*/
app.get('/api' + reg, (req, res) => {
    res.send(getContacts.processGet(req, list));
})

app.post('/api/registerNewContact', (req, res) => {
    res.send(postContacts.procesPost(req, list)); 
    /* returnerar '500' om internal server error eller '200'
    om den lyckades spara nya kontakten
    */
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))