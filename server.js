const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const {red, green , blue, } = require('console-log-colors')
const {logger} = require('./middleware/logger')
const morgan = require('morgan')
const colors = require('colors')
const bootcamps = require('./routes/bootcamps')
const connectDB = require('./config/db')

dotenv.config({path: path.join(__dirname, 'config','config.env')})

const app = express();


connectDB()

app.use(express.json())

// app.use(logger)
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}


app.use('/api/v1/bootcamps',bootcamps)




let server = app.listen(process.env.PORT || 5000, console.log(`Running server on port ${process.env.PORT} in ${process.env.NODE_ENV}`.green.bold))



// handling unhandled rejections

process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error : ${err.message}`.red.bold)
    server.close(()=>process.exit(1))
})