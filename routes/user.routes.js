const express = require('express');
const router = express.Router();


router.get('/logout', (req, res) => {
  res.render('logout');
});

const isLogged = (req, res, next) => {
  if(!req.user){
    res.redirect('/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {name: req.user.displayName, picture: req.user.photos[0].value});
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settingProf');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});






module.exports = router;