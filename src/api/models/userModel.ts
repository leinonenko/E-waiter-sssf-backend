import mongoose from 'mongoose';
import {User} from '../../interfaces/IUser';

const userModel = new mongoose.Schema<User>({
  name: {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tableNumber: {type: Number, required: true},
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model<User>('User', userModel);
