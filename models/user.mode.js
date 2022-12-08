import mongoose from "mongoose";



const userSchema = mongoose.Schema({

    name: String,
    age: Number,
    email: String,
    password: String

});



const userModel = mongoose.model('user', userSchema);


export default userModel;