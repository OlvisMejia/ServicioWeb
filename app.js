const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile('C:/Users/olvis/OneDrive/Escritorio/Servidor web/indexx.html');
});
app.listen(3000, () => {
console.log('Conectado');
});

