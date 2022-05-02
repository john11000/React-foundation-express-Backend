const db = require('../mongo')


const bibliotecaSchema = db.Schema({
titulo : String,
caratula : String,
descripcion : String,
contenido : String,
})

const biblioteca = db.model("biblioteca", bibliotecaSchema)

module.exports = biblioteca;