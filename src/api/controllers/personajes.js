/* const personaje = require("../models/personajes");



const getpersonajes = async (req, res, next) =>{
    try {
        const personajes = await personaje.find();
        return res.status(200).json(personajes);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}
const getpersonajeById = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const Personaje = await personaje.findById(id);
        return res.status(200).json(Personaje);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}
const getpersonajeByPoder = async (req, res, next) =>{
    try {
        const { poder } = req.params;
        const personajes = await personaje.find ({ poder });
        return res.status(200).json(personajes);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}
const getpersonajeByEstatura = async (req, res, next) =>{
    try {
        const { estatura } = req.params;
        const estaturas = await Personaje.find ({ estatura: { $lt: estatura } });
        return res.status(200).json(estaturas);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const postpersonaje = async (req, res, next) =>{
    try {
        const newPersonaje = new personaje(req.body);
        const PersonajeSave = await newPersonaje.save();
        return res.status(201).json(PersonajeSave);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const putpersonaje = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const newPersonaje = new Personaje(req.body);
        newPersonaje._id = id;
        const personajeUpDate = await Personaje.findByIdAndUpdate(id, newPersonaje,{
            new: true,
        });
        return res.estatus(200).json(personajeUpDate);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const deletepersonaje = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const personajeDelete = await Personaje.findByIdAndDelete(id);
        return res.estatus(200).json(personajeDelete);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
} */


const personaje = require("../models/personajes");

const getpersonajes = async (req, res, next) => {
    try {
        const personajes = await personaje.find();
        return res.status(200).json(personajes);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getpersonajeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const Personaje = await personaje.findById(id);
        return res.status(200).json(Personaje);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getpersonajeByPoder = async (req, res, next) => {
    try {
        const { poder } = req.query;
        const personajes = await personaje.find({ poder });
        return res.status(200).json(personajes);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getpersonajeByEstatura = async (req, res, next) => {
    try {
        const { estatura } = req.params;
        const estaturas = await personaje.find({ estatura: { $lt: estatura } });
        return res.status(200).json(estaturas);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const postpersonaje = async (req, res, next) => {
    try {
        const newPersonaje = new personaje(req.body);
        const PersonajeSave = await newPersonaje.save();
        return res.status(201).json(PersonajeSave);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const putpersonaje = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newPersonaje = new personaje(req.body);
        newPersonaje._id = id;
        const personajeUpDate = await personaje.findByIdAndUpdate(id, newPersonaje, {
            new: true,
        });
        return res.status(200).json(personajeUpDate);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const deletepersonaje = async (req, res, next) => {
    try {
        const { id } = req.params;
        const personajeDelete = await personaje.findByIdAndDelete(id);
        return res.status(200).json(personajeDelete);
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}


module.exports = {
    getpersonajes,
    getpersonajeById,
    getpersonajeByPoder,
    getpersonajeByEstatura,
    postpersonaje,
    putpersonaje,
    deletepersonaje 
}