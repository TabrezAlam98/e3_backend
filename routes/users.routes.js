
const express=require("express");
const {UsersModel}=require("../models/Users.model")

const usersRouter=express.Router();


// validator
const validator=(req,res,next)=>{
    if(req.method==='POST'){
        const payload=req.body;
        if(payload.Title && payload.Note && payload.Tags){
            next();
        }else{
            res.send("missing field")
        }
    }else{
        next();
    }
}
usersRouter.use(validator)


usersRouter.get("/users",async(req,res)=>{
    const data=await UsersModel.find()
    res.send(data)
})


usersRouter.post("/create",async(req,res)=>{
    const post=req.body;
    const users=new UsersModel(post)
    await users.save();
    res.send(users)
})


usersRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    await UsersModel.findByIdAndDelete({_id:id});
    res.send("Deleted")
})

usersRouter.put("/update/:id",async(req,res)=>{
    const id=req.params.id;
    const post=req.body;
    await UsersModel.findByIdAndUpdate({_id:id},post)
    res.send("Modified data")
})


module.exports={usersRouter}