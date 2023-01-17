const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); //Para hashear la contraseña
const config = require('../dbconfig/database');

//User schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

UserSchema.statics.UsernameExists = async function(username) { //Creamos un metodo para ver si el usuario ya existe
  if(!username) throw new Error('Usuario Invalido (no hay)')
  try {
    const user = await this.findOne({username})
    if(user) return false
  
    return true; //como un else
  } catch (error) {
    console.log('Ese nombre de usuario ya está en uso!!!', error.message)
    return false
  }
} 

UserSchema.statics.EmailExists = async function(email) { //Creamos un metodo para ver si el usuario ya existe
  if(!email) throw new Error('Email Invalido (no hay)')
  try {
    const emailV = await this.findOne({email})
    if(emailV) return false
  
    return true; //como un else
  } catch (error) {
    console.log('Ese email ya está en uso!!!', error.message)
    return false
  }
}

UserSchema.statics.Emptyfields = async function(name, email, username, password) {
  if (!name || !email || !username || !password) {
    console.log('Por favor, rellene todos los campos')
    //throw new Error('Hay campos vacios')
    return false
  }
  return true
}


const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findById(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(String(newUser.password), salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}