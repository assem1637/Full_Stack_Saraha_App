import Joi from 'joi';



const schema = Joi.object({

    name: Joi.string().min(3).max(30).required(),
    age: Joi.number().min(10).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repassword: Joi.ref('password')

});



const validation = (req, res, next) => {


    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {

        req.flash('infoError', error.details);
        res.redirect('/register');

    } else {

        next();

    };


};


export default validation;