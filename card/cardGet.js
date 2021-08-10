let cards = require('/Users/a.sinyagina/WebstormProjects/node-kanban/card/cardsAll.js');

function cardGet(req, res) {
    res.send(cards);
}

module.exports = cardGet;