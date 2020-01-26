const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('db is connected'))
.catch(error => console.error(error));

module.exports = mongoose;