const dbTest = require('./config');
const clientRepository = require('../src/repositories/clientRepository');
const cityRepository = require('../src/repositories/cityRepository');

run = async () => {
    try {
        const city = await cityRepository.add({
            name: 'Aragua',
            state: 'SC'
        });

    } catch (error) {
        console.error('Error in insert city', error);
    }

    try {
        const client = await clientRepository.add({
            fullName: 'Jean Marcos de Souza',
            sex: 'M',
            birthDate: '1999-01-01',
            age: 22,
            city: 'Passo fundo'
        });
    } catch (error) {
        console.error('Error in insert client', error);
    }
}
run();