const mongoose = require('mongoose');
const config = require('../config/database');

const UniSchema = mongoose.Schema({
  name: {
    type: String
  },
  address: {
    type: String, // Desglosar / Página web en lugar de dirección (?)
    required: true
  }
  // Grados
});

// Create user / Use this from outside / Send it to the mongoDB
const Universidad = module.exports = mongoose.model('Universidad', UniSchema);