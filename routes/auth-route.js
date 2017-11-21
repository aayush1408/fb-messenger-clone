const express =  require('express');
const passport = require('passport');
const passportSetup = require('../config/passport-setup.js');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.render('login')
});

router.get('/facebook',passport.authenticate('facebook',{
    scope:['user_friends']
}));

router.get('/logout',(req,res)=>{
    res.send('Logging out');
});
router.get('/facebook/redirect',passport.authenticate('facebook'),(req,res)=>{
    res.send('You reached the callback url');
});
module.exports = router;
