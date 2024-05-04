const mongoose = require("mongoose");

const personajeSchema = new mongoose.Schema({
    imagen:{ type: String, require: true },
    nombre: { type: String, require: true },
    poder: { type: String, require: true },
    estatura:{ type: Number, require: true },
    categoria:{ type: String, requiere: true },
}, {
    timestamps: true,
    collection: "personajes"
})

const personaje = mongoose.model("personajes", personajeSchema, "personajes");
module.exports = personaje