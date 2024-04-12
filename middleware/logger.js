const {red, green , blue, } = require('console-log-colors')


exports.logger = (req, res, next)=>{
    // attach any value to the request object
    req.hello = "Hello Leul"
    console.log('Request protocol ', req.protocol)
    console.log(blue('Request original Url  ', req.originalUrl))
    next()
}