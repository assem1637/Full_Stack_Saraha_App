import mongoose from "mongoose";



const msgSchema = mongoose.Schema({

    message: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    }

});



const msgModel = mongoose.model('message', msgSchema);


export default msgModel;