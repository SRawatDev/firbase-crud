const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
passport.use(
    new GoogleStrategy(
        {
            clientID: "",
            clientSecret: "",
            callbackURL: 'http://localhost:4000/auth/google/callback',
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// const googleauth = async () => {
//     passport.authenticate('google', {
//         scope: ['email', 'profile'],
//     })
// }

// const redirect = async () => {
//     passport.authenticate('google', {
//         successRedirect: '/auth/protected',
//         failureRedirect: '/auth/google/failure',
//     })
// }

const data = async (request, response) => {
    response.send("hello there")
}

const something = async (request, response) => {
    response.send("something went wrong")
}
const sendfile = async (request, response) => {
    response.sendfile("index.html")
}

module.exports = { irect, data, something, sendfile }