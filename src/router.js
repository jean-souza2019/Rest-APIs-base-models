const CityRouter = require('./routes/cityRouter');
const ClientRouter = require('./routes/clientRouter');

module.exports = app => {
    CityRouter(app);
    ClientRouter(app);
}