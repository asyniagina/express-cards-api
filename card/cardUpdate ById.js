let cards = require('/Users/a.sinyagina/WebstormProjects/node-kanban/card/cardsAll.js');

function cardUpdateById(req, res) {
      const cardId = req.params.cardId2;
      const card = req.body;

      cards = cards.map(el => el.id === cardId ? ({ ...card, id: el.id }) : el );

      res.send('Card updated');
  }

  module.exports = cardUpdateById;