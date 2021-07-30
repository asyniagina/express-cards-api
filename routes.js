let cards = [
    {id: '1', name: 'First card', status: 'todo', priority: 2},
    { id: '2', name: 'Second card', status: 'todo', priority: 5},
    { id: '3', name: 'Next card', status: 'todo', priority: 10},
];

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    })

    app.get('/card', (req, res) => {
        res.send(cards);
    })

    app.delete('/card/:cardId2', (req, res) => {
        const cardId = req.params.cardId2;

        cards = cards.filter(el => el.id !== cardId);

        res.send(cards);
    })

    app.post('/card', (req, res) => {
        const newCard = req.body;
        cards.push({ id: Math.random().toString(), ...newCard });
        res.send('Card created');
    })

    app.patch('/card/:cardId2', (req, res) => {
        const cardId = req.params.cardId2;
        const card = req.body;

        cards = cards.map(el => el.id === cardId ? ({ ...card, id: el.id }) : el );

        res.send('Card updated');
    })
}
module.exports = routes;