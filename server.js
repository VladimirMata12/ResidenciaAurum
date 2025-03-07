const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

// Servir archivos estáticos desde la carpeta 'public' y 'dist'
app.use(express.static("public"));
app.use(express.static("dist"));

app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    res.setHeader("Content-Type", "application/javascript");
  }
  next();
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});

//Manejo de errores

app.use((req, res, next) => {
  if (req.accepts("html")) {
    res.status(404).send("Page Not Found");
  } else if (req.accepts("json")) {
    res.status(404).send({ error: "Not Found" });
  } else {
    res.status(404).send("Not Found");
  }
});
