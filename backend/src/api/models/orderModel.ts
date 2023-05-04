import mongoose from 'mongoose';
import {Order} from '../../interfaces/IOrder';

const orderModel = new mongoose.Schema<Order>({
  id: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true,
  },
  totalPrice: {
    type: Number,
  },
  tableNumber: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
  },
});

export default mongoose.model<Order>('Order', orderModel);
