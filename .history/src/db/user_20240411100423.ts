import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String},
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, select: false},
        
    }
})