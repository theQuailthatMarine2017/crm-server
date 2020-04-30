const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    title: {
        type:String
    },
    lead:{
        type:String
    },
    body:{
      type:String
    }
}, {timestamps: true});


module.exports = mongoose.model('Proposal', proposalSchema);