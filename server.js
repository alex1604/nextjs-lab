function callMyApi(){
    fetch(
        'http://localhost:3000/api/getNumberOfLegs?animal=dog',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": '*'
            }
        }
    ).then(response => console.log(response.json()))
    .catch(error => console.log(error))
}
callMyApi()