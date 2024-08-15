
const mongoose=require('mongoose')

 const controlSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,

    }, email:{
        type:String,
        required:true,
        
    }, subject:{
        type:String,
        required:true,
        
    }, message:{
        type:String,
        required:true,
        
    }


 })


 const users=mongoose.model('users',controlSchema)

 module.exports=users