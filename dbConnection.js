const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:QSBU.EPxJdRkV8$@cluster0.8skz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

function dbConnection() {
  mongoose.connect(connectionString, options)
      .then(() => console.log('Mongo connection OK'))
      .catch(err => console.log(err))
}

module.exports = dbConnection;