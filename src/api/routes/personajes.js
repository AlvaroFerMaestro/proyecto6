const personajesRouter = require("express").Router();

const { getpersonajes, getpersonajeById, getpersonajeByPoder, getpersonajeByEstatura, postpersonaje, deletepersonaje, putpersonaje } = require("../controllers/personajes");



personajesRouter.get("/estatura", getpersonajeByEstatura);
personajesRouter.get("/poder", getpersonajeByPoder),
personajesRouter.get("/:id", getpersonajeById);
personajesRouter.delete("/:id", deletepersonaje);
personajesRouter.post("/", postpersonaje);
personajesRouter.get("/", getpersonajes);
personajesRouter.put("/:id", putpersonaje);


module.exports = personajesRouter;
 

