import userModel from "../models/user.mode.js";


export const User = async (req, res, next) => {

    const user = await userModel.findOne({ _id: req.params.id });

    res.render('user.ejs', {

        isLoggedIn: req.session.isLoggedIn,
        name: user.name,
        Id: user._id,
        protocol: req.protocol,
        host: req.headers.host

    });

};