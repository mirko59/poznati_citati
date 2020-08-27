const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });

// Povezivanje sa bazom podataka
mongoose.connect(process.env.DATABASE,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

mongoose.Promise = global.Promise; // Govori Mongoose da koristi ES6 premise
mongoose.connection.on('error', (err) => {
  console.error(`Database Connection Error → ${err.message}`);
});

require('./Models/Posts');

const app = require('./app');

// pokrece server na portu 3000
const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
})