const cardCreate = require('./card/cardCreate');
const cardDelete = require('./card/cardDelete');
const cardUpdateById = require('./card/cardUpdate ById');
const cardGet = require('./card/cardGet');
const cardHome = require('./card/cardHome');


function routes(app) {
    app.get('/', cardHome)
    app.get('/card', cardGet)
    app.delete('/card/:cardId2', cardDelete)
    app.post('/card', cardCreate)
    app.patch('/card/:cardId2', cardUpdateById)
}
module.exports = routes;