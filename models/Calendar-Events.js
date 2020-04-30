const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({  
    title: {
        type:String
    },
    eventType:{
        type:String
    },
    memberAttached:{
        type:Boolean
    },
    membersAttached:{
        type:Array // Array of Member ID's if event has Member Attached to true
    },
    startdate: {
        type: String
    },
    enddate: {
        type: Date
    },
    urgency: {
        type:String
    }
}, {timestamps: true});


module.exports = mongoose.model('Events', eventsSchema);