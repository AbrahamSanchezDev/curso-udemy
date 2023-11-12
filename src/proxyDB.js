const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3001;

var datos = [];
//localhost:3001/hola-mundo?mivariable=jojojo%20%21&miOtraVariable=XD%21
//localhost:3001/api
app.get("/api", async (req, res) => {
  res.json(datos);
});
// unix 1/1/1970 cantidad de segundos pasados desde que se agregaron los relogs a las pcs
//localhost:3001/api?dato={contenido a agregar}
app.post("/api", async (req, res) => {

    var info = req.query.dato;
    const info = {
        id:Date.now(),
        texto:informacion,
    };
    datos.push(info);
    res.send("datos fueron");
    res.json(datos);
});
//localhost:3001/api/{id}?texto={nuevo texto}
app.put("/api/:id", async (req, res) => {

    const id = parseInt(req.params.id);
    const elDato = datos.find(t => t.id == id);
    elDato.texto = elDato.query.texto || elDato.texto;
    res.send("datos fueron");
    res.json(datos);
});

//localhost:3001/api/{id}?texto={nuevo texto}
app.delete("/api/:id", async (req, res) => {

    const id = parseInt(req.params.id);
  
    datos =datos.filter(t=> t.id !== id);
    res.send("datos fueron");
    res.json(datos);
});

//Configurar cabeceras CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  req.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, () => {
  console.log(`Servidor proxi funcionando en el puerto ${PORT}`);
});
