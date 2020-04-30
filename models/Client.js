const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const clientSchema = new mongoose.Schema({  
    email: {
        type:String,
        max:255,
        min:6
    },
    name:{
        type:String,
        unique:true
    },
    mobile:{
        type:Number
    }
}, {timestamps: true});

clientSchema.plugin(uniqueValidator, {message: 'Client Exists.'});


module.exports = mongoose.model('Client', clientSchema);