const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const memberSchema = new mongoose.Schema({  
    email: {
        type:String,
        max:255,
        min: 6,
        unique:true
    },
    mobile:{
        type: Number
    },
    fullnames:{
        type:String,
        required:true
    },
    projects:{
        type:Array // Array of Project Id's / Project Name
        
    },
    role:{
        type:String,
        required:true
    },
    hasBankAccount:{
        type:Boolean
    },
    bank:{
        type: String
    },
    bankAccountNumber:{
        type: Number
    },
    bankAccountName:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
}, {timestamps: true});

memberSchema.plugin(uniqueValidator, {message: 'Member Exists.'});


module.exports = mongoose.model('Member', memberSchema);