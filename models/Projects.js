const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const projectsSchema = new mongoose.Schema({  
    title: {
        type:String,
        unique:true
    },
    client:{
        type:String
    },
    budget:{
        type:Number
    },
    targets:{
        type:Array // Array of targets / objectives for proposed for project success.
    },
    targetsMet:{
        type:Array // Array of how many of the above targets were met
    },
    targetsPercentage:{
        type:Number // Percentage of targets met over total targets
    },
    description:{
        type:String,
        max:255,
        min:6
    }
}, {timestamps: true});

projectsSchema.plugin(uniqueValidator, {message: 'Project Exists.'});


module.exports = mongoose.model('Project', projectsSchema);