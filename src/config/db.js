const mongoose = require("mongoose");

const connectBD = async () =>{
try {
    await mongoose.connect(process.env.BD_URL);
    console.log("La base de datos esta bien conectada 👌");
} catch (error) {
    console.log("🧨 Algo ha explotado te toca MIRARLO 🤯");
}
}

module.exports = { connectBD }