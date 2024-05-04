require("dotenv").config();
const express = require("express");
const { connectBD } = require("./src/config/db");
const personajesRouter = require("./src/api/routes/personajes");
const ligasRouter = require("./src/api/routes/ligas");

const app = express();

app.use(express.json());

connectBD();

app.use("/api/v1/ligas", ligasRouter);
app.use("/api/v1/personajes", personajesRouter);

app.use("*", (req, res, next) =>{
    return res.status(404).json("Route not found")
});

app.listen(3000, () =>{
    console.log("servidor levantado en: http://localhost:3000 💪");
})