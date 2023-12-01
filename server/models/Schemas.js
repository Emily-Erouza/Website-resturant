const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

  
    userName: {
        type: String,
        required: true
    },

    emailAddress: {
        type: String,
        required: true
    },

    homeAddress: {
        type: String,
        required: true
    },

    BankName: {
        type: String,
        required: true
    },

    AccNumber: {
        type: String,
        required: true
    },
    Items: {
        type: String,
        required: true
    }
  

});

module.exports = mongoose.model('user', Schema);




  