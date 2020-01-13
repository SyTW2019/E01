const mongoose = require('mongoose');
const config = require('../config/database');

const ApuntesSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  asignatura: {
    type: String, 
    required: true
  },
  curso: {
    type: String
  },
  grado: {
    type: String
  },
  universidad: {
    type: String
  },
  // Usuario que sube los apuntes
  usuario: { 
    type: String
  },
  // Autor de los apuntes
  autor: {
    type: String, 
    required: true
  }
});

// Crea Apuntes / Uso desde el exterior / Envío a MongoDB
const Apuntes = module.exports = mongoose.model('Apunte', ApuntesSchema);

// Consulta y devuelve apuntes según su Id
module.exports.getApuntesById = function(id, callback) {
  Apuntes.findById(id, callback);
}

// Consulta y devuelve apuntes según su nombre
module.exports.getApuntesByName = function(name, callback) {
  const query = {
    titulo: name
  }
  Apuntes.findOne(query, callback);
}

// Consulta y actualiza apuntes
module.exports.updateApuntes = function(id, req, callback) {
  Apuntes.findByIdAndUpdate(id, req.body, {new: true}, callback);
}

// Elimina apuntes
module.exports.deleteApuntes = function(id, callback) {
  Apuntes.findByIdAndDelete(id, callback);
}

// Añade un nuevo documento a la colección
module.exports.addApuntes = function(newApuntes, callback) {
  newApuntes.save(callback);
}