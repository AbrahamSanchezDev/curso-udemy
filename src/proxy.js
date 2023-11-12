const express = require("express");
const axios = require("axios");

const app = express();
//CMD -> CURL
//AXIOS -> var
const PORT = 3000;

// install npm install axios express cors
// url para la funcion
// asi se declara el async
// req entrada
// res sale
// app.get('/test', async (req,res)=>{
//     res.send('esta es mi primera api!, hola mundo!');
// });

app.get("/mm", async (req, res) => {
  res.send("resultado via API!");
});
//localhost:3000/hola-mundo?mivariable=jojojo%20%21&miOtraVariable=XD%21
app.get("/test", async (req, res) => {
  var texto = req.query.mivariable;
  var texto2 = req.query.miOtraVariable;

  if (texto != null || texto2 != null) res.send(texto + " " + texto2);
  else res.send("esta es mi primera api!, hola mundo!");
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
