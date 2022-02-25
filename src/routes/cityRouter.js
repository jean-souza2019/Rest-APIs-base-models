const CityController = require('../controllers/cityController');

module.exports = app => {
    app.route('/city').post(CityController.add);
    app.route('/city/:name').get(CityController.getByName);
    app.route('/state/:state').get(CityController.getByState);
}