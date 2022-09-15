const express = require('express');

const albumRoutes = require('./routes/album-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use('/api/search', albumRoutes);

app.use( (req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
} )

app.use( (error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error ocurred!' });
} )

app.listen(5000);