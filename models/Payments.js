const mongoose = require('mongoose');

const paymentsSchema = new mongoose.Schema({  
    paymentType: {
        type:Number
    },
    paymentDescription:{
        type:String
    },
    memberToPay:{
        type:String
    },
    amount:{
        type:Number
    }
}, {timestamps: true});


module.exports = mongoose.model('Payments', paymentsSchema);