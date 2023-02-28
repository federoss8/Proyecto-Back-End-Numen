const app = require('./server/server');

const PORT = process.env.PORT || 3000;

// routes

app.get("/", (req, res) => {
    res.send("Bienvenido a mi API")
});

app.listen(PORT, () => console.log('Server corriendo en ', PORT));