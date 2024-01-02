const _mainController = require('../controller/mainController')();

module.exports = app => {
    app.route('/api').get(_mainController.exampleGet)
}