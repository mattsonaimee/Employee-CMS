const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '#Nachos11',
    database: 'employees_db',
});




// function which prompts the user for what action they should take

const start = () => {
    inquirer
      .prompt({
        name: 'addOrView',
        type: 'list',
        message: 'Would you like to [ADD] a department in departments or [VIEW] a employee in employees?',
        choices: ['ADD', 'VIEW', 'EXIT'],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
        if (answer.addOrView === 'ADD') {
          ADD();
        } else if (answer.addOrView === 'VIEW') {
          VIEW();
        } else {
          connection.end();
        }
      });
  };

// function to handle posting new items up for auction
  const ADD = () => {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: 'id',
          type: 'input',
          message: 'What is the department id ?',
        },
        {
          name: 'name',
          type: 'input',
          message: 'What is the department name ?',
        },
        {        
          validate(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          },
        },
      ])
      .then((answer) => {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          'INSERT INTO department SET ?',
          // QUESTION: What does the || 0 do?
          {
            id_name: id.item,
            name: answer.name,
            // starting_bid: answer.startingBid || 0,
            // highest_bid: answer.startingBid || 0,
          },
          (err) => {
            if (err) throw err;
            console.log('Your auction was created successfully!');
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  };
  





const viewDB = () => {
    console.log('viewing all data from DB...\n');
    connection.query('SELECT * FROM employee_db', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
});
};

