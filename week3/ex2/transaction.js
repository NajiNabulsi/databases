const mySql = require('mysql');
const util = require('util');

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'transactions'
});

const execQuery = util.promisify(connection.query.bind(connection))


// change_number, account_number, amount, changed_date, remark

async function transactionsData(amount, accountFrom, accountTo) {
    const autoCommit = `set autocommit = 0;`;
    const tran = `start transaction;`;
    const rollback = `rollback;`;
    const commit = `commit;`;

    const transferAmount = `UPDATE account SET balance = balance - ${amount} WHERE account_number = ${accountFrom}`;
    const transferFrom = `UPDATE account SET balance = balance + ${amount} WHERE account_number = ${accountTo}`;
    const transferChange = `insert INTO account_changes value(1, ${accountFrom}, ${amount},'2020-03-01','Amount transfered')`;
    connection.connect();
    try {
        await execQuery(autoCommit);
        await execQuery(tran);
        await execQuery(transferAmount);
        await execQuery(transferChange)
        await execQuery(commit);
    } catch (err) {
        execQuery(rollback);
        console.log('there is a error', err);

    }
    connection.end();
}

transactionsData(1000, 101, 102);