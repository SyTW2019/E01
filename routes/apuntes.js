const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Universidad = require('../models/uni');
const Apuntes = require('../models/apuntes');


// Crear Apuntes
router.post('/apuntes/create', (req, res, next) => {
    
    // Se extrae de la petición el contenido de los apuntes
    let newApuntes = new Apuntes({
        titulo:      req.body.titulo,
        asignatura:  req.body.asignatura,
        curso:       req.body.curso,
        grado:       req.body.grado,
        universidad: req.body.universidad,
        usuario:     req.body.usuario,
        autor:       req.body.autor
      });

      // Añade los apuntes de la petición a la bdd
      Apuntes.addApuntes(newApuntes, (err) => {
        // En caso de error al introducirlos
        if (err) {
            res.json({
              success: false,
              msg: 'Se ha producido un error al introducir los apuntes'
            });
        }
        // En caso de introducirlos correctamente
        else {
            res.json({
              success: true,
              msg: 'Apuntes añadidos correctamente'
            });
        }
      });

});

// Consultar lista de Apuntes
router.get('/apuntes', (req, res, next) => {

    Apuntes.find({}, (err, apuntes) => {
        if (err) {
            res.json({
              success: false,
              msg: 'Se ha producido un error al recuperar los apuntes'
            });
        }
        else {
            res.json(apuntes);
        }
    })

});

// Consultar lista de Apuntes según un título dado
router.get('/apuntes/search/:titulo', (req, res, next) => {

    // Títulos que contengan la cadena recibida
    const title = req.params.titulo;

    Apuntes.find({titulo: { "$regex": title, "$options": "i" }}, (err, apuntes) => {
        if (err) {
            res.json({
              success: false,
              msg: 'Se ha producido un error al recuperar los apuntes'
            });
        }
        else {
            res.json(apuntes);
        }
    })

});

// Consultar Apuntes
router.get('/apuntes/:id', (req, res, next) => {

    // Id de los apuntes solicitados
    const apuntesId = req.params.id;

    // Consulta en función del Id
    Apuntes.getApuntesById(apuntesId, (err, apuntes) => {
        if (err) {
            res.json({
              success: false,
              msg: 'Se ha producido un error al recuperar los apuntes'
            });
        }
        else if (!apuntes) {
            res.json({
                success: false,
                msg: 'Los apuntes solicitados no existen'
              });
        }
        else {
            res.json({
                success: true,
                objSolicitado: apuntes
              });
        }
    });

});

// Actualizar Apuntes
router.post('/apuntes/:id', (req, res, next) => {

    // Id de los apuntes solicitados
    const apuntesId = req.params.id;

    // Actualiza los apuntes según su Id
    Apuntes.updateApuntes(apuntesId, req, (err, apuntes) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Se ha producido un error al recuperar los apuntes'
            });
        }
        else if (!apuntes) {
            res.json({
                success: false,
                msg: 'Los apuntes solicitados no existen'
            });
        }
        else {
            res.json({
                success: true,
                objSolicitado: apuntes
            });
        }
    });

});

// Eliminar Apuntes
router.delete('/apuntes/:id', (req, res, next) => {

    // Id de los apuntes solicitados
    const apuntesId = req.params.id;

    // Elimina los apuntes según su Id
    Apuntes.deleteApuntes(apuntesId, (err, apuntes) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Se ha producido un error al recuperar los apuntes'
            });
        }
        else if (!apuntes) {
            res.json({
                success: false,
                msg: 'Los apuntes solicitados no existen'
            });
        }
        else {
            res.json({
                success: true,
                msg: 'Apuntes eliminados correctamente'
            });
        }
    });

});


// Módulo router de Express para que puedan hacerse las peticiones
module.exports = router;
