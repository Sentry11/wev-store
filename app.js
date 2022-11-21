const express = require("express")
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = config.get('port')  || 5000



app.use(express.json({ extended:true}))
app.use(cors())
app.use('/api/auth', require('./routes/auth.rotes'))
app.use('/api/data', require('./routes/data.routes'))



async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useCreateIndex:true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT} ... `))
    }
    catch (e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}



start()