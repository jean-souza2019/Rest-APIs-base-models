const ClientRepository = require('../repositories/clientRepository');

class Client {
    constructor(client) {
        this.id = client.id;
        this.fullName = client.fullName;
        this.sex = client.sex;
        this.birthDate = client.birthDate;
        this.age = client.age;
        this.city = client.city;
        // Create validations params;
    }

    add() {
        return ClientRepository.add(this);
    }

    static async getById(id) {
        const clientInformation = await ClientRepository.getById(id);
        if (!clientInformation) {
            return null;
        }
        return clientInformation;
    }

    static async getByName(name) {
        const clientInformation = await ClientRepository.getByName(name);
        if (!clientInformation) {
            return null;
        }
        return clientInformation;
    }

    static async delete(id) {
        if (! await Client.getById(id)) {
            return (`Client ${id} not exists`)
        }
        return await ClientRepository.delete(id);
    }

    async toUpdate() {
        if (! await Client.getById(this.id)) {
            return (`Client ${this.id} not exists`)
        }

        return await ClientRepository.toUpdate(this);
    }

}

module.exports = Client;