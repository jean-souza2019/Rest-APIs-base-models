const CityRespository = require('../repositories/cityRepository');

class City {
    constructor(city) {
        this.id = city.id;
        this.name = city.name;
        this.state = city.state;
        // Create validations params;
    }

    add() {
        return CityRespository.add(this);
    };

    static async getByName(name) {
        const cityInformation = await CityRespository.getByName(name);
        if (!cityInformation) {
            return null;
        }
        return cityInformation;
    };

    static async getByState(state) {
        const citiesInformations = await CityRespository.getByState(state);
        if (!citiesInformations) {
            return null;
        }
        return citiesInformations;
    }

};

module.exports = City;