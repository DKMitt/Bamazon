var mysql = require("mysql");
var inquirer = require("inquirer");

// the methode to setup the code to the database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "DKMitt!#!#1313",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
	if (err) throw err;
});


// function to get all items available for bidding, and allow you to place a bid
var bamBuy = function() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer.prompt([
      {
        name: "choice",
        type: "list",
        choices: function() {
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push("ID: " + results[i].item_id + "    " + results[i].product_name + "     " + "Price: $ " + results[i].price  + "     " + "Qty: " + results[i].stock_quantity);
          }
          return choiceArray;
        },
        message: "Which item would you like to order?"
      },
      {
        name: "stock_quantity",
        type: "input",
        message: "How many would you would you like?"
      }
    ]).then(function(answer) {
      // get the information of the chosen product
      var chosenItem;
      for (var i = 0; i < results.length; i++) {
        if (results[i].product_name === answer.choice) {
          chosenItem = results[i];
        }
      }

      // // determine if stock_quantity is availble
      // if (chosenItem.stock_quantity < parseInt(answer.stock_quantity)) {
      //   
      // stock_quantity was available, so update db, let the customer know, and start over
      //   connection.query("UPDATE products SET ? WHERE ?", [{
      //     stock_quantity: answer.stock_quantity
      //   }, {
      //     item_id: chosenItem.item_id
      //   }], function(error) {
      //     if (error) throw err;
      //     console.log("Order placed successfully!\n");
      //     // bamBuy();
      //   });
      // }
      // else {
      //   // stock_quantity wasn't available, and start over
        console.log("Your order failed. Please try again...\n");
        bamBuy();
      // }
    });
  });
};

bamBuy();