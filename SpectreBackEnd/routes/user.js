var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const {ObjectID} = require('mongodb');

const collectionName = 'models';

var user = require('../models/user');
router.post('/auth/login', function (req, res) {
    console.log(req.body);
    user.find({ email: req.body.email})
        .exec()
        .then(function(users){
            if(users.length<1){
                return res.status(200).json({
                    message: "User not found"
                });
            }
            if(users[0].password === req.body.password){
                const token = jwt.sign({
                    email: users[0].email,
                    userId: users[0]._id
                },
                "secret",
                {
                    expiresIn: "1h"
                });
                return res.status(200).json({
                    message: "Auth successful",
                    token: token
                });
            }else{
                return res.status(401).json({
                    message: "User auth failed"
                });
            }
        })
        .catch(function(err){
            res.status(500).json({
              error: err
            });
        });
});

router.post('/auth/register', function (req, res) {
    var user1 = {
        email: req.body.email,
        password: req.body.password
    };
    let newUser = new user(user1);
    newUser.save()
        .then((data) => {
            if(data.length<1){
                return res.status(400).json({
                    message: "Registration Not successfull"
                });
            }
            else{
                return res.status(200).json({
                    message: "Registration successful",
                    token: token
                });
            }
        })
        .catch((error)=>{
            res.status(500).json({
                error: error
            });
        })

});
// Return router
module.exports = router;