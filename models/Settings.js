const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({  
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
        type:String,
        required:true
    }
}, {timestamps: true});


module.exports = mongoose.model('Settings', settingsSchema);