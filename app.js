//Javascript The Fetch API
//take the response and return responseFormatJson
//Then take access to the data 

fetch('data/data.json').then((response) => {

    //Getting Response 
    console.log('Resolved', response);
    //Taking the formatJson of this response
    return response.json();

}).then( data => {

    //taking this promise to get data
    console.log(data);

}).catch((error) => {

    console.log('Rejected', error);

});

