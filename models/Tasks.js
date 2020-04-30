const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({  
    title: {
        type:String
    },
    project:{
        type:String
    },
    members: {
        type: Array // Array of Member ID's
    },
    duedate: {
        type: Date
    },
    urgency: {
        type:String
    },
    completed: {
        type: Date
    },
    completedOnTime:{
        type: Boolean
    }
}, {timestamps: true});


module.exports = mongoose.model('Tasks', tasksSchema);