const mongoose = require('mongoose');

const invoicesSchema = new mongoose.Schema({  
    client: {
        type:String
    },
    cost:{
        type:Number
    },
    project:{
        type:String
    },
    filePath: {
        type:String
    },
    fileName: {
        type:String
    }
}, {timestamps: true});


module.exports = mongoose.model('Invoices', invoicesSchema);