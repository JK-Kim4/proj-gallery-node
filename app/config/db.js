const { Client } = require('pg');

var client = new Client({
    user : 'testuser',
    host : 'localhost',
    database : 'testdb',
    password : 'testuser',
    port : 5432,
});

client.connect((err) => {
    if(err)
        console.log(err);
    else
        console.log("succesfully connected");
});

module.exports = client;