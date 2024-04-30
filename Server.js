const express = require ('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())


mongoose.connect("mongodb://localhost:27017/SMS").then(()=>{
    console.log("Database connected successfully...")
}).catch((err) => console.log(err))


const studentRoute = require("./routes/studentRouter")

app.use(studentRoute);




app.listen(1000 , () => console.log("Server is Runing on port 5000")) 