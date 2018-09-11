module.exports = {
    processGet : function (path, list){
        if (path.url == '/api/allContacts'){
            return JSON.stringify(list);
        }
        // Fri sök ('/api/search?q=') skickas med requesten:
        else if(path.url.indexOf('/search') != -1){
            let query = path.query.q; // hämta sökord (query parameter)
            
            // TODO: Söka genom hela agendan med det angivna ord:

        }
        // Grupp sök [family, friends...] ('/api/searchByGroup?group=') skickas med requesten:
        else if(path.url.indexOf('/searchByGroup') != -1){
            let query = path.query.group; // hämta grupp (query parameter)
            
            // TODO: Söka genom hela agendan och hämta alla kontakter inom
            // den angivna grupp:

        }
        else {
            return "Whoops. This is embarrassing. Your search didn't match any results"
        }
    }
}