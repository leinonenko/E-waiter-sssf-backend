import {Document} from 'mongoose';
import {Product} from './IProduct';

interface MenuItem extends Document {
  id: number;
  product: Product;
  price: number;
  quantity: number;
}

export {MenuItem};
