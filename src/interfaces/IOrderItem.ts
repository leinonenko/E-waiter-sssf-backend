import {Document} from 'mongoose';

interface OrderItem extends Document {
  user: User;
  menuItem: MenuItem;
  totalPrice: number;
  tableNumber: number;
  comments?: string;
}

export {Category};
