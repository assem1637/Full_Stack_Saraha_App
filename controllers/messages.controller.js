import msgModel from '../models/message.model.js';



export const Messages = async (req, res, next) => {

    let allMsgUser = await msgModel.find({ userId: req.session.userId });

    let finalMsg = [];

    if (allMsgUser) {

        allMsgUser.map((message) => finalMsg.push(message.message));

    };

    if (req.session.isLoggedIn) {

        res.render('messages.ejs', {

            isLoggedIn: req.session.isLoggedIn,
            name: req.session.name,
            Id: req.session.userId,
            protocol: req.protocol,
            host: req.headers.host,
            messagesUser: finalMsg,

        });


    } else {

        res.redirect('/login');

    };


};



export const handleMessage = async (req, res, next) => {


    const { message } = req.body;
    await msgModel.insertMany({ message, userId: req.params.id });
    res.redirect('/user/' + req.params.id);


};