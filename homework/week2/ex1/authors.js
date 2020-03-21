const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'AuthorsAndResearch'
});

connection.connect();

// Create a table Authors
connection.query("create table if not exists Authors(author_no int Primary Key not null, author_name varchar(50), university varchar(50), date_of_birth date, h_index int, gender enum('m', 'f'));", err => {
    if (err) throw err;
});

// Write a query that adds a foreign key column to Authors table that references the column author_no.

connection.query('ALTER TABLE Authors ADD column Frinds int', err => {
    if (err) throw err;
});

connection.query('ALTER TABLE Authors ADD CONSTRAINT FK_Frinds FOREIGN KEY (Frinds) REFERENCES Authors(author_no)', err => {
    if (err) throw err;
});

connection.end();