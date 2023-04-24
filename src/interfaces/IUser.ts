import {Document} from 'mongoose';
import { Table } from './ITable';

interface User extends Document {
  id: number;
  name: string;
  email: string;
  password: string;
  tableNumber: Table;
}

interface UserIdWithToken {
  id: string;
  token: string;
  role: 'admin' | 'user';
}

export {User, UserIdWithToken};
