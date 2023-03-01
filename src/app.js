const express = require('express');
const app = require('./server/server');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./server/routes/routes');



const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

// routes

app.get("/", (req, res) => {
    res.send("Bienvenido a mi API")
});

//mongo db connection

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error(error));

app.listen(PORT, () => console.log('Server corriendo en ', PORT));