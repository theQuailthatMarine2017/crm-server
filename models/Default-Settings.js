const mongoose = require('mongoose');

const defaultsettingsSchema = new mongoose.Schema({  
    imgLogo: {
        type:String
    },
    businessName: {
        type:String
    },
    businessEmail:{
        type:String
    },
    businessMobile:{
        type:Number
    },
    businessLocation:{
        type:String
    },
    bankAccountName:{
        type:String
    },
    bankAccountNumber:{
        type:Number
    }
}, {timestamps: true});


module.exports = mongoose.model('Default-Settings', defaultsettingsSchema);