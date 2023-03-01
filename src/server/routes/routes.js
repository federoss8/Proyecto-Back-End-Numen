const express = require('express');
const userSchema = require('../models/userModels');
//const productSchema = require('../models/productsModels');
const router = express.Router();

// crear usuario

router.post('/usuarios', (req, res) => {
    const user = userSchema(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

// crear producto

router.post('/productos', (req, res) => {
    res.send('crear producto');
});


module.exports = router; 