"use strict";

const mySql = require("mysql");

const connction = mySql.createConnection({
  ost: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "AuthorsAndResearch"
});

connction.connect();

const authors = [
  {
    author_no: 1,
    author_name: "Naji",
    university: "Amsterdam",
    date_of_birth: "1973-06-20",
    h_index: 100,
    gender: "m",
    frinds: 1
  },
  {
    author_no: 2,
    author_name: "Hani",
    university: "Amsterdam",
    date_of_birth: "1973-05-10",
    h_index: 250,
    gender: "m",
    frinds: 1
  },
  {
    author_no: 3,
    author_name: "Mahmod",
    university: "Amsterdam",
    date_of_birth: "1990-04-15",
    h_index: 30,
    gender: "m",
    frinds: 2
  },
  {
    author_no: 4,
    author_name: "Mahmod",
    university: "Harvard",
    date_of_birth: "1990-04-15",
    h_index: 350,
    gender: "m",
    frinds: 2
  },
  {
    author_no: 5,
    author_name: "Fadi",
    university: "Harvard",
    date_of_birth: "1991-05-15",
    h_index: 400,
    gender: "m",
    frinds: 3
  },
  {
    author_no: 6,
    author_name: "Ali",
    university: "Harvard",
    date_of_birth: "1994-11-15",
    h_index: 520,
    gender: "m",
    frinds: 3
  },
  {
    author_no: 7,
    author_name: "Ibrahim",
    university: "Harvard",
    date_of_birth: "1980-05-15",
    h_index: 50,
    gender: "m",
    frinds: 5
  },
  {
    author_no: 8,
    author_name: "George",
    university: "Damascus",
    date_of_birth: "1993-01-01",
    h_index: 40,
    gender: "m",
    frinds: 6
  },
  {
    author_no: 9,
    author_name: "Susan",
    university: "Damascus",
    date_of_birth: "1997-03-01",
    h_index: 109,
    gender: "f",
    frinds: 6
  },
  {
    author_no: 10,
    author_name: "Jackie",
    university: "Damascus",
    date_of_birth: "1992-04-11",
    h_index: 409,
    gender: "f",
    frinds: 6
  },
  {
    author_no: 11,
    author_name: "Annika",
    university: "Damascus",
    date_of_birth: "1996-11-27",
    h_index: 101,
    gender: "f",
    frinds: 10
  },
  {
    author_no: 12,
    author_name: "Hnnika",
    university: "Groningen",
    date_of_birth: "1991-12-28",
    h_index: 234,
    gender: "f",
    frinds: 10
  },
  {
    author_no: 13,
    author_name: "Carola",
    university: "Groningen",
    date_of_birth: "1998-03-30",
    h_index: 56,
    gender: "f",
    frinds: 9
  },
  {
    author_no: 14,
    author_name: "Carolien",
    university: "Groningen",
    date_of_birth: "1993-01-01",
    h_index: 810,
    gender: "f",
    frinds: 9
  },
  {
    author_no: 15,
    author_name: "Dima",
    university: "Groningen",
    date_of_birth: "1990-08-14",
    h_index: 170,
    gender: "f",
    frinds: 14
  }
];

const researches = [
  {
    paper_id: 1,
    paper_title: "Corona",
    conference: "Amestrdam",
    publish_date: "2020-01-15",
    author_no: 1
  },
  {
    paper_id: 200,
    paper_title: "html",
    conference: "Den Haag",
    publish_date: "2020-02-20",
    author_no: 3
  },
  {
    paper_id: 350,
    paper_title: "JS",
    conference: "London",
    publish_date: "2019-02-20",
    author_no: 5
  },
  {
    paper_id: 150,
    paper_title: "marketing",
    conference: "Fransa ",
    publish_date: "2018-05-25",
    author_no: 6
  },
  {
    paper_id: 501,
    paper_title: "marketing",
    conference: "Fransa ",
    publish_date: "2020-11-25",
    author_no: 6
  },
  {
    paper_id: 300,
    paper_title: "Rese_a",
    conference: "conf_a",
    publish_date: "2019-10-20",
    author_no: 2
  },
  {
    paper_id: 450,
    paper_title: "Rese_b",
    conference: "conf_b",
    publish_date: "2019-09-10",
    author_no: 15
  },
  {
    paper_id: 50,
    paper_title: "Rese_b",
    conference: "conf_b",
    publish_date: "2019-07-09",
    author_no: 10
  },
  {
    paper_id: 51,
    paper_title: "Rese_c",
    conference: "conf_c",
    publish_date: "1980-07-11",
    author_no: 13
  },
  {
    paper_id: 52,
    paper_title: "Rese_d",
    conference: "conf_d",
    publish_date: "2019-07-07",
    author_no: 13
  },
  {
    paper_id: 53,
    paper_title: "Rese_e",
    conference: "conf_e",
    publish_date: "2019-02-01",
    author_no: 3
  },
  {
    paper_id: 54,
    paper_title: "Rese_f",
    conference: "conf_f",
    publish_date: "2019-04-15",
    author_no: 5
  },
  {
    paper_id: 55,
    paper_title: "Rese_g",
    conference: "conf_g",
    publish_date: "2019-02-01",
    author_no: 7
  },
  {
    paper_id: 56,
    paper_title: "Rese_h",
    conference: "conf_h",
    publish_date: "2020-02-01",
    author_no: 9
  },
  {
    paper_id: 57,
    paper_title: "Rese_k",
    conference: "conf_k",
    publish_date: "2019-04-15",
    author_no: 11
  },
  {
    paper_id: 10,
    paper_title: "Corona",
    conference: "Amestrdam",
    publish_date: "2020-01-15",
    author_no: 1
  },
  {
    paper_id: 20,
    paper_title: "html",
    conference: "Den Haag",
    publish_date: "2020-02-20",
    author_no: 3
  },
  {
    paper_id: 35,
    paper_title: "JS",
    conference: "London",
    publish_date: "2019-02-20",
    author_no: 5
  },
  {
    paper_id: 15,
    paper_title: "marketing",
    conference: "Fransa ",
    publish_date: "2018-05-25",
    author_no: 6
  },
  {
    paper_id: 500,
    paper_title: "marketing",
    conference: "Fransa ",
    publish_date: "2020-11-25",
    author_no: 6
  },
  {
    paper_id: 310,
    paper_title: "Rese_a",
    conference: "conf_a",
    publish_date: "2019-10-20",
    author_no: 2
  },
  {
    paper_id: 420,
    paper_title: "Rese_b",
    conference: "conf_b",
    publish_date: "2019-09-10",
    author_no: 15
  },
  {
    paper_id: 510,
    paper_title: "Rese_z",
    conference: "conf_b",
    publish_date: "2019-07-09",
    author_no: 10
  },
  {
    paper_id: 505,
    paper_title: "Rese_c",
    conference: "conf_c",
    publish_date: "1980-07-11",
    author_no: 13
  },
  {
    paper_id: 520,
    paper_title: "Rese_d",
    conference: "conf_d",
    publish_date: "2019-07-07",
    author_no: 13
  },
  {
    paper_id: 530,
    paper_title: "Rese_e",
    conference: "conf_e",
    publish_date: "2019-02-01",
    author_no: 3
  },
  {
    paper_id: 504,
    paper_title: "Rese_f",
    conference: "conf_f",
    publish_date: "2019-04-15",
    author_no: 5
  },
  {
    paper_id: 550,
    paper_title: "Rese_g",
    conference: "conf_g",
    publish_date: "2019-02-01",
    author_no: 7
  },
  {
    paper_id: 560,
    paper_title: "Rese_h",
    conference: "conf_h",
    publish_date: "2020-02-01",
    author_no: 9
  },
  {
    paper_id: 570,
    paper_title: "Rese_k",
    conference: "conf_k",
    publish_date: "2019-04-15",
    author_no: 11
  }
];

// for (let i = 0; i < authors.length; i++) {
//   connction.query(
//     `insert into Authors values (${authors[i].author_no},'${authors[i].author_name}', '${authors[i].university}', '${authors[i].date_of_birth}', ${authors[i].h_index},'${authors[i].gender}' ,${authors[i].frinds})`,
//     err => {
//       if (err) throw err;
//     }
//   );
// }

// connction.query(
//   "CREATE TABLE if not exists Research_Papers(paper_id int Primary Key not null, paper_title varchar(50), conference varchar(50),       publish_date date, author_no int, FOREIGN Key(author_no) REFERENCES Authors(author_no))",
//   err => {
//     if (err) throw err;
//   }
// );

// for (let i = 0; i < researches.length; i++) {
//   connction.query(
//     `insert into Research_Papers values (${researches[i].paper_id}, '${researches[i].paper_title}','${researches[i].conference}', '${researches[i].publish_date}', ${researches[i].author_no})`,
//     err => {
//       if (err) throw err;
//     }
//   );
// }

connction.query(
  `CREATE TABLE if not exists authers_research(author_no INT NOT NULL, paper_id INT NOT NULL)`,
  err => {
    if (err) throw err;
  }
);

connction.query(
    `alter table authers_research add constraint fk_authers_research__authors foreign key(author_no) references authors(author_no);`,
    err => {
      if (err) throw err;
    }
  );

  connction.query(
    `alter table authers_research add constraint  fk_authers_research__research_papers foreign key(paper_id) references research_papers(paper_id);`,
    err => {
      if (err) throw err;
    }
  );

connction.end();
