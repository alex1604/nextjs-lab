module.exports = {
    filter: (group, list) => {
        //TODO:
        if (group === 'all') return list
        else {
            let newList = [];
            list.forEach(x => {
                if (x.group === group) newList.push(x)
            })
            return JSON.stringify(newList);
        }
    },
    search: (searchTerm, list) =>{
        let newList = [];
        list.forEach(x => 
            Object.values(x).find( prop => prop.includes(searchTerm)) ?
            newList.push(x) : null
        );
        return JSON.stringify(newList);
    }
}