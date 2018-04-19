-- Database
DROP DATABASE IF EXISTS study_db;

CREATE DATABASE study_db;

\c study_db

-- Tables
DROP TABLE IF EXISTS worksheets;
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS options;
DROP TABLE IF EXISTS users;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL
);

CREATE TABLE types (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password_digest TEXT NOT NULL
);

CREATE TABLE worksheets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE options (
  id SERIAL PRIMARY KEY,
  type_id INTEGER REFERENCES types(id),
  option TEXT NOT NULL,
  isTrue BOOLEAN NOT NULL
);

CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  question TEXT NOT NULL,
  worksheet_id INTEGER REFERENCES worksheets(id),
  option_id INTEGER REFERENCES options(id)
);
