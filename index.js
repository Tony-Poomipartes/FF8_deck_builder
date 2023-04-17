require('dotenv').config();
const express = require('express');
const expressSession = require('express-session');


const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

app.use(router);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
