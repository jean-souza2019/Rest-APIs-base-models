const ClientController = require('../controllers/clientController');

module.exports = app => {
    app.route('/client').post(ClientController.add);
    app.route('/client/id/:id').get(ClientController.getById);
    app.route('/client/name/:name').get(ClientController.getByName);
    app.route('/client/:id').delete(ClientController.delete);
    app.route('/client/:id').put(ClientController.toUpdate);
}