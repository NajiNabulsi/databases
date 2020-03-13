const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'world'
});

connection.connect();

connection.query('SELECT Name FROM country WHERE Population > 8000000', function(error, results, fields) {
    if (error) throw error;
    console.log('the country with population more than 8 Million : ', results);
});

connection.query("SELECT Name FROM country WHERE Name like '%land'", function(error, results, fields) {
    if (error) throw error;
    console.log('countries that have “land” in their names : ', results);
});

connection.query("SELECT Name FROM city WHERE Population > 500000 and Population < 1000000", function(error, results, fields) {
    if (error) throw error;
    console.log('countries with limit population : ', results);
});

connection.query("SELECT Name FROM country WHERE Continent = 'Europe'", function(error, results, fields) {
    if (error) throw error;
    console.log('countries in Europe : ', results);
});

connection.query("SELECT * FROM country ORDER BY SurfaceArea DESC", function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.query("SELECT * FROM city WHERE CountryCode = 'NLD';", function(error, results, fields) {
    if (error) throw error;
    console.log('names of all the cities in the Netherlands : ', results);
});

connection.query("SELECT Name, Population FROM city WHERE ID = 6", function(error, results, fields) {
    if (error) throw error;
    console.log('population of Rotterdam : ', results);
});


connection.query("SELECT * FROM country ORDER BY SurfaceArea LIMIT 10", function(error, results, fields) {
    if (error) throw error;
    console.log('top 10 countries by Surface Area : ', results);
});

connection.query("SELECT * FROM city ORDER BY Population LIMIT 10;", function(error, results, fields) {
    if (error) throw error;
    console.log('the top 10 most populated cities : ', results);
});

connection.query("SELECT SUM(Population) AS Population FROM country", function(error, results, fields) {
    if (error) throw error;
    console.log('population number of the world : ', results);
});

connection.end();