const CityModel = require('../models/cityModel');

module.exports = {
    add: async (req, res) => {
        try {
            const city = new CityModel(req.body);
            await city.add();

            res.status(201).send(city);
        } catch (error) {
            throw new Error(error);
        }
    },

    getByName: async (req, res) => {
        try {
            const name = req.params.name;
            const cityInformation = await CityModel.getByName(name);

            res.status(200).send(cityInformation);
        } catch (error) {
            throw new Error(error);
        }
    },

    getByState: async (req, res) => {
        try {
            const state = req.params.state;
            const citiesInformation = await CityModel.getByState(state);

            res.status(200).send(citiesInformation);
        } catch (error) {
            throw new Error(error);
        }
    }
};