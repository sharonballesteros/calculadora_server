const express = require('express');
const app = express();
const port = 3000;

// Middleware para poder leer datos enviados por el usuario
app.use(express.json());

// Ruta principal para verificar que el servidor funciona
app.get('/', (req, res) => {
    res.send('Servidor de Calculadora - FES Aragón');
});

// Endpoint para sumar
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 + num2;
    res.json({ operacion: 'Suma', resultado: resultado });
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});
