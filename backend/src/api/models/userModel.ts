import mongoose from 'mongoose';
import {User} from '../../interfaces/IUser';

const userModel = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: true,
  },
});

userModel.set('toJSON', {
  virtuals: true,
});

export default mongoose.model<User>('User', userModel);
