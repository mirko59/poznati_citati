const express = require('express'); // importuje express
const app = express(); 

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Logger
app.use(logger('dev'));

// body parsers
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// importuje rute
const routes = require('./Routes/PostsRoutes');
// middleware za nase rute
app.use('/', routes);

// exportuje app
module.exports = app;
