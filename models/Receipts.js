const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({  
    client: {
        type:String
    },
    amount:{
        type:String
    },
    description:{
        type:String
    },
    filePath: {
        type:String
    },
    fileName: {
        type:String
    }
}, {timestamps: true});


module.exports = mongoose.model('Receipts', receiptSchema);