const mongoose = require('mongoose')


const softEnqSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    }, service: {
        type: String,
        required: true

    }, message: {
        type: String,
        required: true

    },



})

const Softwares= mongoose.model('Softwares',softEnqSchema)

module.exports=Softwares