const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const leadsSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true
    },
    name:{
        type:String,
        unique:true
    },
    companyName:{
      type:String
    },
    natureOfBusiness:{
      type:String
    },
    mobile:{
        type:Number
    },
    leadLevel:{
      type:String
    }
}, {timestamps: true});

leadsSchema.plugin(uniqueValidator, {message: 'Leads Exists.'});


module.exports = mongoose.model('Leads', leadsSchema);
