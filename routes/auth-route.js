const express =  require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.render('login')
});

router.get('/facebook',(req,res)=>{
    res.send('Logging with fb');
});

router.get('/logout',(req,res)=>{
    res.send('Logging out');
});

module.exports = router;
