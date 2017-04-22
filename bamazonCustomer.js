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

connection.connect(function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("connected as id " + connection.threadId);
    console.log("  ");
  }
});


// display all items available includes ids name and price of items.

connection.query("SELECT * FROM products", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log("ID: " + res[i].item_id + "  " + " Item: " + res[i].product_name + "  " + "Price:" + " $ " + res[i].price + "   ");
    console.log("  ");
  }
  console.log("-----------------------------------------------------");
});




// the app should prompt user with two messages
//  	what is the id of the item you would like to buy?
//  	what is the quantity of the item that you would like to buy?

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customers request.

// If not the app should log a phrase like `Insufficient quantity!` and then prevent the order from going through.

// However if your store does have enough of the product, you should fulfill the customers order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

