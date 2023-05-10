const express = require('express')
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  res.send('entre')
})

router.post('/login', (req, res) =>{
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then((user) => {
        if (!user) return res.sendStatus(401);
        user.validatePassword(password)
          .then((isValid) => {
            if (!isValid) return res.sendStatus(401);
           res.send(user)
        });
      });
  } );

router.post('/signup',(req, res)=>{
  console.log('entreeeeeee ',req.body);
  User.create(req.body)
  .then((user)=>{res.send(user)})
  .catch((error)=>{console.log(error)})
} )

// router.post("/logout", (req, res) => {
//   res.clearCookie("token");

//   res.sendStatus(204);
// });

module.exports = router;