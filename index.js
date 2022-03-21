const express = require('express');
const router = express.Router();
const {User} = require('../models/user');


router.get('/api/users', (req, res) =>{
    User.find({}, (err, data) => {
        if(!err){
            res.send(data)
        }else{
            console.log(err);
        }
    })
});

router.post('/api/addUser', (req, res) =>{
    const users = new User({
        user: req.body.user,
        password: req.body.password
    });
    users.save((err, data) =>{
        res.status(200).json({code: 200, message: 'User Added', addUser:data});
    })
})

module.exports = router;