
const express =require("express");
// var bodyParser = require('body-parser')
const { connection } =require("./config/db");
const {usersRouter}=require("./routes/users.routes")
require('dotenv').config()
//app.use(bodyParser.json())
var app = express()
app.use(express.json())

var cors = require('cors')

 
app.use(cors())

 app.use("/users",usersRouter)


app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log(`listening on port ${process.env.PORT}`)
    }
    catch(err){
        console.log(err)
        console.log("something went wrong")
    }
    
})