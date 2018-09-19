const writeUser = require('./postContact').writeUser;
module.exports = {
    thisId: (searchId, newBody, list) => {
        let replaceBody = function (x, newBody) {
            x.firstName = newBody.firstName;
            x.lastName = newBody.lastName;
            x.phone = newBody.phone;
            x.email = newBody.email;
            x.group = newBody.group;
        }
        list.forEach(x =>
            x.id === searchId ?
            replaceBody(x, newBody)
            : null
        );
        writeUser(list);
        return 'Contact was updated.'
    }
}
