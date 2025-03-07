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

// Ruta específica para "Reservación"
app.get("/reservacion", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "reservacion.html"));
});

// Ruta específica para "Acerca de Nosotros"
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "about.html"));
});

// Servir el archivo 'index.html' por defecto para cualquier otra ruta
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});

// Manejo de errores
app.use((req, res, next) => {
  res.status(404);
  // responder con html
  if (req.accepts("html")) {
    res.send("Page Not Found");
    return;
  }
  // responder con json
  if (req.accepts("json")) {
    res.send({ error: "Not Found" });
    return;
  }
  // responder con texto plano
  res.send("Not Found");
});
