const fs = require('fs');
module.exports = {
    newContact: (object, list) => {
        let newUserNumericValue = 1000000 + (list.length + 1);
        list.forEach(x => {
            if (x.id == newUserNumericValue){
                newUserNumericValue += 20000;
            }
        })
        //let newUserUniqueId = object.firstName.replace(' ', '%20') + object.lastName.replace(' ', '%20') + newUserNumericValue.toString();
        object["id"] = newUserNumericValue.toString();
        let newObject = {
            "id": object.id,
            "firstName": object.firstName,
            "lastName": object.lastName,
            "email": object.email,
            "phone": object.phone,
            "group": object.group,
            "picture": undefined
        };
        return newObject;
    },
    writeUser: (list) => {
        let data = JSON.stringify(list, null, 2);
        var options = {flags: 'w', encoding: 'utf-8'};
        fs.writeFileSync('./contacts.json', data, options);
    }
}
