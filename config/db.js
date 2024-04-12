const mongoose = require('mongoose');

let connectDB= async ()=>{
    let conn = await mongoose.connect(process.env.DB_URI)
    console.log("MONGODB connected successfully")
    console.log(conn.connection.host)
}   


module.exports = connectDB