const mongoose = require('mongoose');

// Best to give this a name like `User`, rather than `Schema`, as it's more descriptive
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

// You would normally name the model for a single "thing" that you're working with,
// So, `user` instead of `users`
module.exports = mongoose.model('user', Schema);




  