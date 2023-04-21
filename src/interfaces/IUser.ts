import {Document} from 'mongoose';

interface User extends Document {
  id: ID;
  name: string;
  email: string;
  password: string;
  tableNumber: number;
}

interface UserIdWithToken {
  id: string;
  token: string;
  role: 'admin' | 'user';
}

export {User, UserIdWithToken};
