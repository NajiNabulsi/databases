const mySql = require('mysql');
const connection = mySql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'meetup'
});

connection.connect();

// Create a table called Invitee
connection.query('create table Invitee(invitee_no int, invitee_name varchar(50), invited_by varchar(30))', (err, result, filds) => {
    if (err) throw err;
});

// Create a table called Room 
connection.query('create table Room(room_no int, room_name varchar(20), floor_number int)', (err, result) => {
    if (err) throw err;
});

// Create a table called Meeting 
connection.query('create table meeting(meeting_no int, meeting_title varchar(50), starting_time TIME, ending_time TIME, room_no int)', (err, result, filds) => {
    if (err) throw err;
});


// Insert 5 rows into each table
const InsertToInvitee = [
    "insert into invitee values (1, 'Naji', 'HYF')",
    "insert into invitee values (2, 'Ibraheem', 'wouter')",
    "insert into invitee values (3, 'Ramzi', 'Noer')",
    "insert into invitee values (4, 'Jo', 'naji')",
    "insert into invitee values (5, 'Jone', 'Mahmoud')"
];

const InsertToRoom = [
    "insert into room values (101, 'Amsterdam', 3)",
    "insert into room values (100, 'Berlin', 4)",
    "insert into room values (40, 'Copenhagen', 1)",
    "insert into room values (45, 'IKEA', 1)",
    "insert into room values (201, 'Africa', 11)"
];

const InsertToMeeting = [
    "insert into meeting values(100, 'haijdi', '12:00', '01:00', 101)",
    "insert into meeting values(100, 'johen', '04:00', '05:00', 100)",
    "insert into meeting values(100, 'java', '05:00', '05:30', 103)",
    "insert into meeting values(100, 'html', '06:00', '07:00', 104)",
    "insert into meeting values(100, 'css', '08:00', '08:30', 90)"
];

InsertToInvitee.forEach(ele => {

    connection.query(ele, (err, result) => {
        console.log("the reply is ", result);
    });

});

InsertToRoom.forEach(ele => {
    connection.query(ele, (err, result) => {
        if (err) throw err;
        console.log(result);

    })
});

InsertToMeeting.forEach(ele => {
    connection.query(ele, (err, result) => {
        if (err) throw err;
        console.log(result);

    })
});

connection.end();