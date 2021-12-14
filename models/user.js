const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required:true
    },
    last_name:  {
        type: String,
        required:true
    },
    date_of_birth:  {
        type: Date,
        required:true
    },
    school:  {
        type: String,
        required:true
    },

});
const  User = mongoose.model('user', userSchema);
module.exports = User ;