const db = require('../../database/config');

module.exports = {
    add: ({ name, state }) => {
        return new Promise((resolve, reject) => {
            db.get(
                `INSERT INTO cities (name, state)
                VALUES (?, ?);`,
                [name, state],
                (error, row) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(row);
                });
        });
    },

    getByName: name => {
        return new Promise((resolve, reject) => {
            db.all(
                `SELECT * FROM cities
                WHERE name = ?`,
                [name],
                (error, row) => {
                    console.log(row)
                    if (error) {
                        return reject('City not found.');
                    }

                    return resolve(row);
                });
        });
    },

    getByState: state => {
        return new Promise((resolve, reject) => {
            db.all(
                `SELECT * FROM cities
                WHERE state = ?`
                , [state],
                (error, rows) => {
                    if (error) {
                        return reject('No city found.');
                    }

                    return resolve(rows);
                });
        });
    }

};