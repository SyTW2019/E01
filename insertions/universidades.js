const mongoose = require('mongoose');
const Universidad = require('../models/uni');
const config = require('../config/database');


mongoose.connect(config.database, {dbName: 'planedu'});


let createUni = new Universidad({
    name: "Universidad de La Laguna",
    address: "https://www.ull.es/"
});

Universidad.addUni(createUni, (err) => {
    if(err)
        console.log("Error al registrar la universidad: " + err);
    else
        console.log("Universidad registrada correctamente.");
})