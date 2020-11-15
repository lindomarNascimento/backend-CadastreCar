const Cars = require('../models/index')

class createCar {
    constructor(renavam, descriptionVehicle, manufacturer, yearManufacturer, board, valueVehicle, ipva ) {
         const create = Cars.create({
            renavam, 
            'descricao_veiculo': descriptionVehicle, 
            'montadora': manufacturer, 
            'anoFabricacao': yearManufacturer, 
            'placa': board, 
            'valorVeiculo':valueVehicle, 
            ipva 
        })

        return create
    }
}

module.exports = createCar