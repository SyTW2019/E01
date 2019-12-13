const express = require('express');
const router = express.Router();
const Apuntes = require('../models/apuntes');

// Leer lista completa de Apuntes
router.get('/apuntes', (req, res, next) => {

    Apuntes.find({}, (err, apuntes) => {
        if (err)
            res.send(err);
        res.json(apuntes);
    });

});

// Crear Apuntes
router.post('/apuntes', (req, res, next) => {

    let apuntesObj = {
        titulo: req.body.titulo,
        asignatura: req.body.asignatura,
        curso: req.body.curso,
        grado: req.body.grado,
        universidad: req.body.universidad,
        usuario: req.body.usuario,
        autor: req.body.autor
    }

    let newApuntes = new Apuntes(apuntesObj);
    newApuntes.save((err, apuntes) => {
        if (err) 
            res.send(err);
        res.json(apuntes);
    });

});

// Leer Apuntes según su Id
router.get('/apuntes/:id', (req, res, next) => {

    Apuntes.findById(req.params.id, (err, apuntes) => {
        if (err) 
            res.send(err);
        res.json(apuntes);
    });

});

// Actualizar Apuntes según su Id
router.put('/apuntes/:id', (req, res, next) => {

    Apuntes.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, apuntes) => {
        if (err) 
            res.send(err);
        res.json(apuntes);
    });

});

// Eliminar Apuntes según su Id
router.delete('/apuntes/:id', (req, res, next) => {

    Apuntes.remove({ _id: req.params.id }, (err, apuntes) => {
        if (err) 
            res.send(err);
        res.json({
            success: false,
            msg: 'Apuntes eliminados correctamente'
        });
    });

});

// Router module for make the petitions
module.exports = router;
