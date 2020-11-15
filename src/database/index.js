const mongoose = require('mongoose')
const connect = () => {
    try {
        mongoose.connect('mongodb+srv://lindomar:BZSMMCZWJBF5cODu@cluster0.sc6ck.mongodb.net/<dbname>?retryWrites=true&w=majority',
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })

            console.log('banco conectado')
    } catch (err) {
        console.log(err)
    }

}

module.exports = connect
