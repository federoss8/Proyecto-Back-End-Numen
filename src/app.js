const app = require('./server/server');

const PORT = 8000;

app.listen(PORT, () => console.log('Server corriendo en ', PORT));