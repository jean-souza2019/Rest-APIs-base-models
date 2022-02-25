const sqlite3 = require('sqlite3');
const dbName = process.env.DB_NAME ? process.env.DB_NAME : 'db.sqlite';

const db = new sqlite3.Database(dbName);

const citiesSchema =
    ` CREATE TABLE IF NOT EXISTS cities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL) `;

const clientsSchama =
    ` CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName VARCHAR(255) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    birthDate date NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(255) NOT NULL) `;

db.serialize(() => {
    db.run('PRAGMA foreign_keys=ON');
    db.run(citiesSchema);
    db.run(clientsSchama);
});

process.on('SIGINT', () =>
    db.close(() => {
        process.exit(0);
    })
);

module.exports = db;