const mySql = require('mysql');
var prompt = require('prompt');

function getPopulation(Country, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    const conn = mySql.createConnection({
        host: 'localhost',
        user: 'hyfuser',
        password: 'hyfpassword',
        database: 'world'
    });

    conn.connect();

    conn.query(
        `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = ` + conn.escape(code),
        function(err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result[0].Population);
            console.log(result[0].Population);

        }
    );

    conn.end();
}

getPopulation('Country', 'Aruba', 'ABW', (res) => {
    console.log(res);
});


function getPromt() {

    const conn = mySql.createConnection({
        host: 'localhost',
        user: 'hyfuser',
        password: 'hyfpassword',
        database: 'world',
        multipleStatements: true
    });

    conn.connect();

    prompt.start();


    prompt.get(['name'], function(err, result) {
        //
        // Log the results.
        //
        console.log('Command-line input received:');
        console.log('  name: ' + result.name);


        function getPopulation(cb) {
            const conn = mySql.createConnection({
                host: 'localhost',
                user: 'hyfuser',
                password: 'hyfpassword',
                database: 'world',
                multipleStatements: true
            });

            conn.connect();

            conn.query(
                `SELECT * FROM Country WHERE Name = ${result.name}`,
                function(err, result) {
                    if (err) cb(err);
                    if (result.length == 0) cb(new Error("Not found"));
                    cb(null, result[0]);
                    console.log(result[0]);

                }
            );

            conn.end();
        }
        return getPopulation(res => {
            console.log(res);

        });
    });
}

getPromt();