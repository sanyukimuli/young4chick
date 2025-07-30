const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose'); 

const userSchema = new mongoose.Schema({
   firstName:{
    type: String,
    required: true,
    trim: true
   },
   lastName:{
    type: String,
    required: true,
    trim: true
   },
   username:{
    type: String,
    required: true,
    trim: true,
    unique: true
   },
   address:{
     type: String,
    required: true,
    trim: true
   },
   phoneNumber:{
    type: String,
    required: true,
    trim: true
   },
   email:{
    type: String,
    required: true,
    trim: true,
    unique: true
   },
   age:{
    type: Number,
    required: true,
    trim: true,
   },
   gender:{
    type: String,
    enum: ['Male', 'Female', 'Other'], //only these values are allowed
    required: true 
   },
   nin:{
    type: String,
    required: true,
    trim: true
   },
   recName:{
    type: String,
    required: true,
    trim: true 
   },
   recNin:{
    type: String,
    required: true,
    trim: true
   }


   

});

userSchema.plugin(passportLocalMongoose, {
    usernameField:'email'
}); 

module.exports = mongoose.model('User', userSchema);
