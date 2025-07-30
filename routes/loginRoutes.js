const express = require('express');
const router = express.Router(); // lets you organize your routes into seperate files instead of putting everything inside server.js 

// GET login form
router.get('/login', (req, res) => {
  res.render('index'); //your pug where the login is 
});

// POST login form submission
router.post('/login', (req, res) => {
  console.log('Login attempt:', req.body); // logs { email: ..., password: ... }
  res.redirect('/farmer/yfhub');
});

module.exports = router; 