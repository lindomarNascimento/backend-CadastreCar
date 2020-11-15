const express = require('express')
const cors = require('cors')

const connection = require('./database/index')
const CreateCars = require('./controllers/createCars')
const ListCars = require('./controllers/listCars')

connection()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/create', async (req, res) => {
    const { renavam, descriptionVehicle, manufacturer, yearManufacturer, board, valueVehicle, ipva } = req.body;
    try { 
        const newCar = await new CreateCars(renavam, descriptionVehicle, manufacturer, yearManufacturer, board, valueVehicle, ipva)

        return res.send({ newCar })
    } catch (err) {
        return res.status(400).send({ 'error': err.message })
    }
})

app.get('/', async (req, res) => {
    try { 
        const cars = await new ListCars()

        return res.send({ cars })
    } catch (err) {
        return res.status(400).send({ 'error': err.message })
    }
})

app.listen(3333, () => {
    console.log('🐉 Back-end Started!')
})
