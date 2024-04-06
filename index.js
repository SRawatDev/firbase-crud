const express = require("express");
const session = require("express-session")
const router = require("./routing/router");
const passport = require("passport");
const path = require('path');
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));
app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.session());
app.use("/", router);
app.use('/auth/logout', (req, res) => {
    req.session.destroy();
    res.send('See you again!');
});
app.listen(port, () => {
    console.log(`Server is running on port number ${port}.`);
});
