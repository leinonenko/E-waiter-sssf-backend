import mongoose from 'mongoose';
import {MenuItem} from '../../interfaces/IMenuItem';

const menuItemModel = new mongoose.Schema<MenuItem>({
  id: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<MenuItem>('MenuItem', menuItemModel);
