const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'transactions'
});

connection.connect();

const amount = ['insert into account value(101, 5000)', 'insert into account value(102, 5000)'];

connection.query(amount[0], (err, result) => {
    if (err) throw err;
    console.log('value added to the database', result);

});

connection.query(amount[1], (err, result) => {
    if (err) throw err;
    console.log('value added to the database', result);

});

connection.end();