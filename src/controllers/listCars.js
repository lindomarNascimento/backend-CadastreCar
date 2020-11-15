const Cars = require('../models/index')

class listCar {
    constructor() {
        const list = Cars.find()
        
        return list
    }
}

module.exports = listCar