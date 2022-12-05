
const express =require("express");
const { connection } =require("./config/db");
const {usersRouter}=require("./routes/users.routes")
require('dotenv').config()

app.use(express.json())

var cors = require('cors')
var app = express()
 
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