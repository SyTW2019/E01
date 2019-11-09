const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Universidad = require('../models/uni');
/*
//Registra una Universidad
router.post('/register', (req, res, next) => {      // <----- HAY QUE PENSAR CÓMO GESTIONAR ESTO!
  // Crea una nueva Universidad con la información proporcionada en la petición
  let newUni = new Universidad({
    name: req.body.name,
    address: req.body.address
  });

  // Añade la universidad a la base de datos
  Uni.addUni(newUni, (err) => {
    // Si no se ha podido registrar
    if (err) {
      res.json({
        success: false,
        msg: 'Fallo al registrar la universidad'
      });
      // Si se ha podido registrar
    } else {
      res.json({
        success: true,
        msg: 'Universidad registrada correctamente'
      });
    }
  });
});

// Router module for make the petitions
module.exports = router;
*/