const mongoose = require("mongoose");

/*const alunasSchema = new mongoose.Schema({
    nome: { type: String},
    dateOfBirth: { type: Date},
    nasceuEmSp: {type: Boolean}
    livros:[{
        titulo: String,
        leu: Boolean,
    }],
}) */ //jeito certo// 

const AlunasSchema = new mongoose.Schema({
    nome: { type: String},
    dateOfBirth: { type: String},
    nasceuEmSp: {type: String},
    livros:[{
        _id: false,
        titulo: String,
        leu: String,
    }]
}, {
    versionKey: false
})

const Alunas = mongoose.model('Alunas', AlunasSchema);

module.exports = Alunas;

