import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import dbConnection from './config/dbConnection.js';
import homeRouter from './routes/home.route.js';
import registerRouter from './routes/register.route.js';
import loginRouter from './routes/login.route.js';
import messagesRouter from './routes/messages.route.js';
import userRouter from './routes/user.route.js';
import session from 'express-session';
import MongoDBStore from 'connect-mongodb-session';
import flash from 'connect-flash';



const app = express();
const port = process.env.PORT || 3000;

dbConnection();


let DBStore = MongoDBStore(session);

var store = new DBStore({
    uri: process.env.DB,
    collection: 'mySessions'
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
}));


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(flash());

app.use(homeRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(messagesRouter);
app.use(userRouter);


app.get('/logout', (req, res, next) => {

    req.session.destroy(function (err) {

        res.redirect('/login');

    });

});



app.get('*', (req, res, next) => {

    res.redirect('/');

});


app.listen(port, () => {

    console.log('Server Is Running...');

});