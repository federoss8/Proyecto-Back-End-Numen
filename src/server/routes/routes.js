const express = require('express');
const userSchema = require('../models/userModels');
const productSchema = require('../models/productsModels');
const router = express.Router();

// crear usuario

router.post('/usuarios', (req, res) => {
    const user = userSchema(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

// crear producto

router.post('/productos', (req, res) => {
    const product = productSchema(req.body);
    product.save().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//obtener todos los usuarios

router.get('/usuarios', (req, res) => {
    userSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//obtener todos los productos

router.get('/productos', (req, res) => {
    productSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//obtener un usuario

router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    userSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//obtener un producto

router.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    productSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//actualizar un usuario

router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email, adress } = req.body;
    userSchema.updateOne({ _id: id}, { $set: {name, age, email, adress}}).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//actualizar un producto

router.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { name, color, size } = req.body;
    productSchema.updateOne({ _id: id}, { $set: {name, color, size}}).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//borrar un usuario

router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    userSchema.findByIdAndRemove({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//borrar un producto

router.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productSchema.findByIdAndRemove({ _id: id}).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

module.exports = router; 