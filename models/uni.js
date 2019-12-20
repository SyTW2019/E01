const mongoose = require('mongoose');
const config = require('../config/database');
//const Grado = require('../models/grado');

const UniSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // Página web
  address: {
    type: String, 
    required: true
  }
  // Grados que oferta
/*  grados: {
    type: [Grado], // Array de objetos "grado"
    required: true
  }*/
});

// Crea Universidad / Uso desde el exterior / Envío a MongoDB
const Universidad = module.exports = mongoose.model('Universidade', UniSchema);

// Consulta y devuelve una universidad según su Id
module.exports.getUniById = function(id, callback) {
  Universidad.findById(id, callback);
}

// Consulta y devuelve una universidad según su nombre
module.exports.getUniByName = function(uniname, callback) {
  const query = {
    name: uniname
  }
  Universidad.findOne(query, callback);
}

// Añade un nuevo documento a la colección
module.exports.addUni = function(newUni, callback) {
  newUni.save(callback);
}