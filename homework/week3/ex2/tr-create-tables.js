const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'transactions'
});

connection.connect();

// CREATE TABLE account
connection.query("CREATE TABLE if not exists account(account_number int Primary Key, balance int)", (err, result) => {
    if (err) throw err;
    console.log('table account cteatet', result);

});

// CREATE TABLE account_changes
connection.query("CREATE TABLE if not exists account_changes(change_number int Primary Key, account_number int, amount int, changed_date date, remark varchar(80),FOREIGN KEY (account_number) REFERENCES account(account_number));", (err, result) => {
    if (err) throw err;
    console.log('table account_changes cteatet', result);

});

connection.end();