const express =  require('express');
const passport = require('passport');
const passportSetup = require('../config/passport-setup.js');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.render('login')
});

router.get('/facebook',passport.authenticate('facebook'));

router.get('/logout',(req,res)=>{
    res.send('Logging out');
});
router.get('/facebook/redirect',(req,res)=>{
    res.send('YOu reached the callback url');
})
module.exports = router;
