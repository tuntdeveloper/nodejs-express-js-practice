import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
  userName: string;
  email: string;
  lastName: string;
  password: string;
  salt: string;
}

const UserSchema: Schema = new Schema({
    userName: {}
email: {}
lastName: {}
password: {}
salt: {}


    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  });

export const UserModel: Model<IUser> = model('User', UserSchema);

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) =>  UserModel.findOne ({'email': email});
export const getUserByAccessToken = (token: string) => UserModel.findOne({'authentication.accessToken': token})
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) => UserModel.findById(id).deleteOne();
export const updateUserById = (id: string, value: Record<string, any>) => UserModel.findByIdAndUpdate({ id, value});