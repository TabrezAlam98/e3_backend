const mongoose=require("mongoose");

const usersSchema=mongoose.Schema({
  "Title":{type:String},
  "Note":String,
  "Tags":String
})

const UsersModel=mongoose.model("users",usersSchema)

module.exports={UsersModel}