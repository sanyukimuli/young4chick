const express = require('express');
const router = express.Router();
// lets you organize your routes into seperate files instead of putting everything inside server.js 
const ensureLogin = require('connect-ensure-login'); // ensure only logged in users can use route
const Request = require('../models/Request');

// View hub
router.get('/yfhub', ensureLogin.ensureLoggedIn('/login'), async (req, res) => {
  const requests = await Request.find({ userId: req.user._id });
  res.render('youngFarmerHub', { user: req.user, requests });
});

// Submit request
router.post('/request', ensureLogin.ensureLoggedIn('/login'), async (req, res) => {
  const { type, quantity } = req.body;
  await Request.create({ userId: req.user._id, type, quantity });
  res.redirect('/farmer/yfhub');
});

module.exports = router;
