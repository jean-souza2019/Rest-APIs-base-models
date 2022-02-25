const db = require('../../database/config');

module.exports = {
    add: ({ fullName, sex, birthDate, age, city }) => {
        return new Promise((resolve, reject) => {
            db.get(
                `INSERT INTO clients (fullName, sex, birthDate, age, city)
                VALUES (?, ?, ?, ?, ?);`,
                [fullName, sex, birthDate, age, city],
                (error, row) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(row);
                });
        });
    },

    getById: (id) => {
        return new Promise((resolve, reject) => {
            db.get(
                `SELECT * FROM clients
                WHERE id = ?` ,
                [id],
                (error, row) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(row);
                });
        });
    },

    getByName: (name) => {
        return new Promise((resolve, reject) => {
            db.get(
                `SELECT * FROM clients
                WHERE name = ?` ,
                [name],
                (error, row) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(row);
                });
        });
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.get(
                `DELETE FROM clients
                WHERE id = ?` ,
                [id],
                (error, row) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(row);
                });
        });
    },

    toUpdate: ({ id, fullName, sex, birthDate, age, city }) => {
        return new Promise((resolve, reject) => {
            db.get(
                `UPDATE clients SET fullName = ?, sex = ?,
                        birthDate = ?, age = ?, city = ? 
                WHERE id = ?` ,
                [fullName, sex, birthDate, age, city, id],
                (error, row) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(row);
                });
        });
    }

}