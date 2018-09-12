module.exports = {
    all : list => {
        return JSON.stringify(list);
    },
    friends : list => {
        //TODO:
        return JSON.stringify(list);
    },
    family : list => {
        //TODO:
        return JSON.stringify(list);
    },
    simpleMethod : (functionName, list) => {
        this[`${functionName}`](list);
    },
    searchMethod : (req, list) => {
        // Fri sök ('/api/search?q=') skickas med requesten:
        // all queries must be format 'q=searchTerm'
        let queryTerm = req.query.q;
        // Not sure this code below works, remains to test:
        return JSON.parse(list).filter((x) => x === queryTerm);
    },
}