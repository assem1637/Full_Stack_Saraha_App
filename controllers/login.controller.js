import userModel from "../models/user.mode.js";
import bcrypt from 'bcrypt';


export const Login = (req, res, next) => {

    if (req.session.isLoggedIn) {

        res.redirect('/messages');

    } else {

        res.render('login.ejs', { isLoggedIn: req.session.isLoggedIn });

    };

};




export const handleLogin = async (req, res, next) => {

    const { email, password } = req.body;
    const user = await userModel.findOne({ email });


    if (user) {

        const match = await bcrypt.compare(password, user.password);

        if (match) {

            var hour = 3600000;
            req.session.cookie.expires = new Date(Date.now() + hour);
            req.session.cookie.maxAge = hour;

            req.session.userId = user._id;
            req.session.name = user.name;
            req.session.isLoggedIn = true;

            res.redirect('/messages');

        } else {

            res.redirect('/login');

        };


    } else {


        res.redirect('/login');

    };

};