const express = require('express')
const app = express()
const getContacts = require('./getContacts.js')
const postContacts = require('./postContacts.js');
const list = require ('./contacts.json');
let reg = /[a-z]*/
let regIsQuery = /?=[?]/
let regNoQuery = /?![?]/

app.use((req,res,next) =>{
    res.send('Hello, I am a server who has been called');
    next();
})
app.get('/api/:function' + regNoQuery, (req, res) => {
    let functionName = req.params.function;
    //res.send(getContacts[`${functionName}`](list));
    res.send(getContacts.simpleMethod(functionName, list))
});
app.get('/api/search' + regIsQuery + reg, (req, res) => {
    //res.send(getContacts.allContacts(req, list));
    res.send(getContacts.searchMethod(req, list));
})

app.post('/api/registerNewContact', (req, res) => {
    let newContact = req.body;
    res.send(postContacts.procesPost(newContact, list)); 
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))