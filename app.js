const usu = require("./usuarios.js")
const express = require("express")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("/", (req, res) => {

    res.send(
        `Selecione que quiere hacer
      ver la lista de usuarios
      <a href="/usuarios"> lista de usuarios </a>
     <p> agregar un nuevo usuario</p>
      <form action="/usuarios" method="post">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required>
        <label for="nombre">Edad</label>
        <input type="number" id="edad" name="edad" required>
        <label for="nombre">Lugar de Nacimiento</label>
        <input type="text" id="lugar" name="lugar" required>
        <button type="submit"> Agregar usuario</button>
      </form>

    `);
})
app.get(`/usuarios`, (req, res) => {

    res.json(usu);
});
app.get(`/usuarios/:nombre`, (req, res) => {

    console.log(req.params['nombre']);
    const usuario = usu.find((usuario) => usuario.nombre === req.params['nombre']);
    res.send(usuario)

});
app.post("/usuarios", (req, res) => {
    const nuevoUsuario = {
        id: usu.length + 1,
        nombre: req.body.nombre,
        edad: req.body.edad,
        lugarProcedencia: req.body.lugarProcedencia
    };
    usu.push(nuevoUsuario)
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("Exprees escuchando en el puerto 3000")
});


