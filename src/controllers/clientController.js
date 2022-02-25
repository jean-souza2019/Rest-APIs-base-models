const ClientModel = require('../models/clientModel');

module.exports = {
    add: async (req, res) => {
        const { fullName, sex, birthDate, age, city } = req.body;
        try {
            const client = new ClientModel({
                fullName,
                sex,
                birthDate,
                age,
                city
            });
            await ClientModel.add();

            res.status(201).send(client);
        } catch (error) {
            throw new Error(error);
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        try {
            const client = await ClientModel.getById(id);

            res.status(200).send(client);
        } catch (error) {
            throw new Error(error);
        }
    },

    getByName: async (req, res) => {
        const name = req.params.name;
        try {
            const client = await ClientModel.getByName(name);

            res.status(200).send(client);
        } catch (error) {
            throw new Error(error);
        }
    },

    delete: async (req, res) => {
        const id = req.params.id;
        // fazer validação do id antes
        try {
            await ClientModel.delete(id);

            res.status(200).send(`Client ${id} has been deleted`);
        } catch (error) {
            throw new Error(error);
        }
    },

    toUpdate: async (req, res) => {
        const id = req.params.id;
        // fazer validação do id antes
        try {
            const { fullName, sex, birthDate, age, city } = req.body;
            const client = new ClientModel({
                id,
                fullName,
                sex,
                birthDate,
                age,
                city
            });



            await client.toUpdate();

            res.status(200).send(`Client ${id} has been updated`);
        } catch (error) {
            throw new Error(error);
        }
    },


}