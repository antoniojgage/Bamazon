CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products(
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL primary key,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wolverine #1", "Marvel", 7, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Batman #542", "DC", 20, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Deadpool #3", "Marvel", 10, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Death of Superman", "DC", 30, 15);