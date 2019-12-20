const mongoose = require('mongoose');
const Apuntes = require('../models/apuntes');
const config = require('../config/database');


mongoose.connect(config.database, {dbName: 'planedu'});

let createApuntes = new Apuntes({
    titulo:      "Prueba de apuntes",
    asignatura:  "Sistemas y Tecnologías Web",
    curso:       "Cuarto",
    grado:       "Ingeniería Informática",
    universidad: "Universidad de La Laguna",
    usuario:     "Unocualquiera",
    autor:       "Borja García"
});

Apuntes.addApuntes(createApuntes, (err) => {
    if(err)
        console.log("Error al añadir apuntes: " + err);
    else
        console.log("Apuntes añadidos correctamente.");
})
