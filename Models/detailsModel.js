
 const mongoose= require('mongoose')

 const detailSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    course: {
        type:String,
        required:true
    },
    place: {
        type:String,
        required:true
    }, 
    whatsapp: {
        type:String,
        required:true
    }

 })


 const students= mongoose.model('students',detailSchema)

  module.exports=students

