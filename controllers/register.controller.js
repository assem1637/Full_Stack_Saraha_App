import userModel from '../models/user.mode.js';
import bcrypt from 'bcrypt';




export const Register = (req, res, next) => {


    if (req.session.isLoggedIn) {

        res.redirect('/messages');

    } else {

        res.render('register.ejs', {

            isLoggedIn: req.session.isLoggedIn,
            errors: req.flash('infoError'),

        });

    };

};



export const handleRegister = async (req, res, next) => {

    const { name, age, email, password } = req.body;
    const user = await userModel.findOne({ email });


    if (user) {

        res.redirect('/register');

    } else {


        bcrypt.hash(password, 5, async function (err, hash) {

            await userModel.insertMany({ name, age, email, password: hash });
            res.redirect('/login');


        });

    };


};