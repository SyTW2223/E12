const request = require('supertest')
const app = require('../app');
const mongoose = require("mongoose");

mongoose.connect('mongodb://equipo12:equipo12@172.16.130.61:27017/Proyecto', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// DEFINICION DE VARIABLES
let id_usuario = ""
let token_usuario = ""

describe('Posts funcionan', () => {
    it('Autenticacion de un usuario', async () => {
        const res = await request(app)
        .post('users/authenticate')
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*')
        .send({
            "username": "dani",
            "password": "dani'"
        });
        expect(res.statusCode).toEqual(200);
    });
  });