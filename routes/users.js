const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../dbconfig/database');


//register
router.post('/register', async (req, res, next) => {
let isNewUser = await User.UsernameExists(req.body.username)
if(!isNewUser) return res.json({success: false, message:'Este usuario ya se encuentra registrado' })
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.status(404).json({success: false, msg: 'Fallo al registrar el usuario'});
    }
    else {
      res.status(200).json({success: true, msg: 'Usuario registrado'});
    }
  })
});

//Authenticate
//### ESTO ES PARA HACERLO CON CONTRASEÑAS HASHEADAS DE FORMA MAS SEGURA PERO NO FUNCIONA###
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username}, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.status(404).json({success: false, msg: 'Usuario no encontrado'});
    }
      User.comparePassword(password, user.password, (err, isMatch) => { //isMatch Devuelve si las contraseñas coinciden 
        if (err) throw err;
        if (isMatch) {
          const token = jwt.sign({user}, config.secret, {
            expiresIn: 604800 //1 semana en segundos
          });
          
          res.json({
            success: true,
            msg: 'Autenticacion realizada correctamente',
            token: 'JWT ' + token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.status(401).json({ success: false, msg: 'Contraseña incorrecta' });
        }
  });
  });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => { //Lo del pasapote es para proteger la ruta 
  res.json({user: req.user});
}); 

module.exports = router;