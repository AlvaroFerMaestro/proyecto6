const liga = require("../models/ligas");

const getligas = async (req, res, next) => {
    try {
        const ligas = await liga.find().populate("personajes");
        return res.status(200).json(ligas);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getligaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const liga = await liga.findById(id).populate("personajes");
        return res.status(200).json(liga);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}


const postliga = async (req, res, next) => {
    try {
        const newliga = new liga(req.body);
        const ligasave = await newliga.save();
        return res.status(201).json(ligasave);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const putliga = async (req, res, next) => {
    try {
        const { id } = req.params;
        const oldliga = await liga.findById(id)
        const newliga = new liga(req.body);
        newliga.personajes = [...oldliga.personajes, ...req.body.personajes],

        newliga._id = id;
        const ligaUpDate = await liga.findByIdAndUpdate(id, newliga, {
            new: true,
        });
        return res.status(200).json(ligaUpDate);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const deleteliga = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ligaDelete = await liga.findByIdAndDelete(id).populate("personajes");
        return res.status(200).json(ligaDelete);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}


module.exports = {
    getligas,
    getligaById,
    postliga,
    putliga,
    deleteliga 
}