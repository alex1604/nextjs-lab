const writeUser = require('./postContact').writeUser;
module.exports = {
    thisId: (searchId, newBody, list) => {
        let replaceBody = (x, newBody) => {

            for (let prop in newBody) {
                if(newBody[prop] != ""){
                    console.log(x[prop]);
                    x[prop] = newBody[prop]
                }
              }
            /*if (x.firstName = ''){null}else{
                x.firstName = newBody.firstName;
            }
            x.lastName = newBody.lastName;
            x.phone = newBody.phone;
            x.email = newBody.email;
            x.group = newBody.group;*/
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
