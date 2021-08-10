let cards = require('/Users/a.sinyagina/WebstormProjects/node-kanban/card/cardsAll.js');

function cardCreate(req, res) {
    const newCard = req.body;
    cards.push({ id: Math.random().toString(), ...newCard });
    res.send('Card created');
}

module.exports = cardCreate;