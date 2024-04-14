import mongoose from "mongoose";

const Produc = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String},
    authentication: {
        salt: {type: String, select: false},
        password: {type: String, required: true, select: false},
        accessToken: {type: String, select: false}
    }
})

