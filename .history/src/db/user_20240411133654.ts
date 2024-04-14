
import db from 'mysql';

const UserSchema = new db({
    userName: {type: String, required: true},
    email: {type: String},
    authentication: {
        salt: {type: String, select: false},
        password: {type: String, required: true, select: false},
        accessToken: {type: String, select: false}
    }
})


export const UserModel = mongoose.model('User', UserSchema);

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne ({email});
export const getUserByAccessToken = (token: string) => UserModel.findOne({'authentication.accessToken': token})
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) => UserModel.findById(id).deleteOne();
export const updateUserById = (id: string, value: Record<string, any>) => UserModel.findByIdAndUpdate({ id, value});