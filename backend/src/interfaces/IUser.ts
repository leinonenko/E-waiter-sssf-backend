import {Document} from 'mongoose';

interface User extends Document {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

interface UserIdWithToken {
  id: string;
  token: string;
  role: 'admin' | 'user';
}

export {User, UserIdWithToken};
