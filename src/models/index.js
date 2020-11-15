const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
    renavam: {
        type: 'number',
        require: true,
        primaryKey: true
    },
    descricao_veiculo: {
        type: 'string',
        require: true,
        lowercase: true,
    },
    montadora: {
        type: 'string',
        require: true,
    },
    anoFabricacao: {
        type: 'date',
        require: true,
    },
    placa: {
        type: 'string',
        require: true,
    },
    valorVeiculo: {
        type: 'number',
        require: true
    },
    ipva: {
        type: 'number',
    }
})

const User = mongoose.model('Carros', CarsSchema);

module.exports = User;
