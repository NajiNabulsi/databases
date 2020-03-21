const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'AuthorsAndResearch'
});

connection.connect();

connection.query("SELECT COUNT(Research_Papers.paper_title) FROM Research_Papers INNER JOIN Authors ON Authors.author_no = Research_Papers.author_no WHERE Authors.gender ='f';",
    (err, result) => {
        if (err) throw err;
        console.log('the Sum of research papers published by all female authors is :', result);

    });

connection.query("SELECT AVG(h_index) FROM Authors GROUP BY university",
    (err, result) => {
        if (err) throw err;
        console.log('Average of the h-index of all authors per university :', result);

    });

connection.end();