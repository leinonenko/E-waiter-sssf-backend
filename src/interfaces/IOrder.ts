import {Document} from 'mongoose';
import {User} from './IUser';
import {MenuItem} from './IMenuItem';
import {Table} from './ITable';

interface Order extends Document {
  id: number;
  customer: User;
  menuItem: MenuItem;
  totalPrice: number;
  tableNumber: Table;
  comments?: string;
}

export {Order};
