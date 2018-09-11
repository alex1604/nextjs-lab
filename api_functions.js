module.exports = {
    getAnimals : function (path, list){
        if (path.url == '/api/allAnimals'){
            return JSON.stringify(list);
        }
        else if(path.url.indexOf('/getNumberOfLegs') != -1){
            let animal = path.query.animal;
            return JSON.stringify(list[`${animal}`].legs);
        }
        else {
            return '404 not found'
        }
    }
}