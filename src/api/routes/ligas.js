const ligasRouter = require("express").Router();
const { getligas, getligaById, postliga, deleteliga, putliga } = require("../controllers/ligas");

ligasRouter.get("/:id", getligaById);
ligasRouter.delete("/:id", deleteliga);
ligasRouter.post("/", postliga);
ligasRouter.get("/", getligas);
ligasRouter.put("/:id", putliga);


module.exports = ligasRouter;
 