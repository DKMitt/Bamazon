CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT(15) NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(7,2),
  stock_quantity INT(5) NOT NULL,
  PRIMARY KEY (item_id)
);

USE bamazon;
SELECT * FROM products;