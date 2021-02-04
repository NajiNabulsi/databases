const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'AuthorsAndResearch'
});

connection.connect();

connection.query("SELECT a1.author_name as Authors ,a2.author_name as Frinds FROM Authors AS a1 INNER JOIN Authors AS a2 ON a1.author_no = a2.Frinds", (err, result) => {
    if (err) throw err;
    console.log('the names of the authers', result);

});

connection.query("SELECT  Authors.author_name, Research_Papers.paper_title FROM Authors INNER JOIN Research_Papers ON Authors.author_no = Research_Papers.author_no", (err, result) => {
    if (err) throw err;
    console.log('columns of authors and their pubished ', result);

});
connection.end();