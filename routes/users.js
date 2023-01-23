const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../dbconfig/database');
const http = require("https");
const { json } = require('body-parser');

//register
router.post('/register', async (req, res, next) => {

  //console.log(req)
  let areEmptyF = await User.Emptyfields(req.body.name, req.body.email, req.body.username, req.body.password)
  if(!areEmptyF) return res.status(400).json({success: false, msg:'Por favor rellene todos los campos'})

  let isNewEmail = await User.EmailExists(req.body.email)
  if(!isNewEmail) return res.status(409).json({success: false, msg:'Este email ya se encuentra en uso'})

  let isNewUser = await User.UsernameExists(req.body.username)
  if(!isNewUser) return res.status(409).json({success: false, msg:'Este usuario ya se encuentra registrado' })

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
  //console.log(req)
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
          
          res.status(200).json({
            success: true,
            msg: 'Autenticacion realizada correctamente',
            token: 'JWT ' + token,
            username: user.username
          });
        } else {
          return res.status(401).json({ success: false, msg: 'Contraseña incorrecta' });
        }
  });
  });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => { //Lo del pasapote es para proteger la ruta 
  res.status(200).json(req.user);
}); 

module.exports = router;

