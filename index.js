const express = require('express');
const path = require('path');
const app = express();

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/destinos', (req, res) => {
    res.sendFile(path.join(__dirname, 'destinos.html'));
});

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'events.html'));
});

app.get('/publicar_sitio', (req, res) => {
    res.sendFile(path.join(__dirname, 'publicar_sitio.html'));
});

app.get('/restaurante1', (req, res) => {
    res.sendFile(path.join(__dirname, 'restaurante1.html'));
});

app.get('/restaurantes', (req, res) => {
    res.sendFile(path.join(__dirname, 'restaurantes.html'));
});

const puerto = 3000;
app.listen(puerto, () => {
    console.log(`La aplicación está escuchando en el puerto ${puerto}`);
});
