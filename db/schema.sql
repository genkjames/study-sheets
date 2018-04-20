-- Database
DROP DATABASE IF EXISTS study_db;

CREATE DATABASE study_db;

\c study_db

-- Tables
DROP TABLE IF EXISTS worksheets;
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS options;
DROP TABLE IF EXISTS users;

CREATE TABLE subjects (
  id SERIAL PRIMARY KEY,
  subject TEXT NOT NULL
);

CREATE TABLE types (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL
);

CREATE TABLE worksheets (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  subject_id INTEGER REFERENCES subjects(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password_digest TEXT NOT NULL
);

CREATE TABLE userworksheets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  worksheet_id INTEGER REFERENCES worksheets(id)
);

CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  question TEXT NOT NULL,
  worksheet_id INTEGER REFERENCES worksheets(id)
);

CREATE TABLE options (
  id SERIAL PRIMARY KEY,
  card_id INTEGER REFERENCES cards(id),
  type_id INTEGER REFERENCES types(id),
  option TEXT NOT NULL,
  isTrue BOOLEAN NOT NULL
);

