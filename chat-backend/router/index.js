const router = require('express').Router();
module.exports = router

router.get(`/home`,(req,res)=>{
    return res.send('Home Screen');
})

router.use('/', require('./auth'))
router.use('/users', require('./user'))
router.use('/chats', require('./chat'))