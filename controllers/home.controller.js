

export const Home = (req, res, next) => {

    res.render('home.ejs', { isLoggedIn: req.session.isLoggedIn });

};