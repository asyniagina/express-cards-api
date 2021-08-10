let cards = require('/Users/a.sinyagina/WebstormProjects/node-kanban/card/cardsAll.js');

function cardDelete(req, res) {
    const cardId = req.params.cardId2;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards);
}

module.exports = cardDelete;