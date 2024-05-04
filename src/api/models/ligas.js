const mongoose = require("mongoose");

const ligaSchema = new mongoose.Schema({
    imagen:{ type: String, require: true },
    nombre: { type: String, require: true },
    personajes: [{ type: mongoose.Types.ObjectId, ref: "personajes", required: false }]
}, {
    timestamps: true,
    collection: "ligas"
})

const liga = mongoose.model("ligas", ligaSchema, "ligas");
module.exports = liga;