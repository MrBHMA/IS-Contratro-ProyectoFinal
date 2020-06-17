const express = require('express');
const exphbs = require('express-handlebars');
const path = require ('path');
const morgan = require('morgan');
// Initializations
const app = express();
// Settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views' ));
app.engine('.hbs', exphbs({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Middle Ware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/contratos.routes'));
//Global Variables

//static files
app.use(express.static(path.join(__dirname, 'public' )));
//app.use('/static',express.static('public'))

module.exports = app;
