import {Schema, model} from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    online: boolean;
    comparePassword: (password: string) => Promise<Boolean>
};

const UserSchema = new Schema ({
    firstName: {
        type: String,
        required: [true, 'First name is required.']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.']
    },
    email: {
        type: String,
        required:[true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    online: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/client/public/assets/images/avatars/default.png'
    },
    auth: {
        type: Object,
        required: false
    }
});

UserSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

export const User = model<IUser>('User', UserSchema);