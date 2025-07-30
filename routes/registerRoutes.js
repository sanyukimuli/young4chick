const express = require('express');
const router = express.Router(); // lets you organize your routes into seperate files instead of putting everything inside server.js 

// GET register form
router.get('/register', (req, res) => {
  res.render('index'); //your pug where the signup is
});

// POST register form submission
router.post('/register', (req, res) => {
  console.log('Registration attempt:', req.body); // logs { email: ..., password: ... }
  res.send('You have succesfully registered!');
});

module.exports=router;
