DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);
CREATE TABLE role(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  salary DECIMAL,
  department_id int
);
