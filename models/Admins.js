const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = new mongoose.Schema({  
    email: {
        type:String,
        max:255,
        min:6
    },
    fullnames:{
        type:String
    },
    password:{
        type:String
    }
}, {timestamps: true});

adminSchema.plugin(uniqueValidator, {message: 'Admin Exists.'});


module.exports = mongoose.model('Admins', adminSchema);