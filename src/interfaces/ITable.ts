import {Document} from 'mongoose';
import {Order} from './IOrder';

interface Table extends Document {
  number: number;
  orders: [Order];
}

export {Table};
