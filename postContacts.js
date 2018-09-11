module.exports = {
        /*
        post request skulle se ut så här:

        fetch('/api/registerNewContact',
        {
            method: 'POST',
            body: {
                "name": "Elin Jakobson",
                "phone": "0762082239",
                "email": "elin.jakobson@gmail.com",
                "group": "friends",
                "picture": "./public/img/elinjakobson000003.jpg"
            }
        }
        )
        */
    processPost : function (req, list){
        let newContact = req.body;
        let result;
        try {
            /*
            write new json contact object

            if success => result = '200'
            */
        } catch {
            result = '500';
        } finally {
            return result
        }
    }
}