import {Document} from 'mongoose';
import {Order} from './IOrder';

interface Table extends Document {
  tableNumber: number;
  orders: [Order];
}

export {Table};
