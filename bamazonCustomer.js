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
    console.log("The Server is running!!");
    console.log("  ");
  }
});

// display all items available includes ids name and price of items.

connection.query("SELECT * FROM products", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log("ID: " + res[i].item_id + "  " + " Item: " + res[i].product_name + "  " + "Price:" + " $ " + res[i].price + "  \n");
    // console.log("  ");
  }
  console.log("-----------------------------------------------------");
});


// the app should prompt user with two messages
//  	what is the id of the item you would like to buy?
//  	what is the quantity of the item that you would like to buy?



inquirer.prompt([
	{
		type: "input",
		message: "what is the ID of the product you want to buy?",
		name: "item_id"
	},
	{
		type: "input",
		message: "How many would you like to buy?",
		name: "stock_quantity"
	}

]).then(function(user) {



  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));

  // If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.input) {

    console.log("==============================================");
    console.log("");
    console.log("You selected item id: " + user.item_id);
    console.log("Quantity ordered: " + user.stock_quantity);
    console.log("");
    console.log("==============================================");

  // If the user does not confirm, then a message is provided and the program quits.
  }

  else {

    console.log("");
    console.log("");
    console.log("That's okay, come back again when you are ready.");
    console.log("");
    console.log("");

  }

});












// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customers request.

// If not the app should log a phrase like `Insufficient quantity!` and then prevent the order from going through.

// However if your store does have enough of the product, you should fulfill the customers order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

