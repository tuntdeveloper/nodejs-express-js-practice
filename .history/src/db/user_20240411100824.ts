import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String},
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, select: false},
        accessToken: {type: String, select: false}
    }
})


export const UserModel = mongoose.model('User', UserSchema);

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne ({email});
export const getUserByAccessToken = (token: string) => UserModel.findOne({'authentication.accessToken':})


