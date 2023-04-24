import {Document} from 'mongoose';
import {Category} from './ICategory';

interface Product extends Document {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  category: Category;
}

export {Product};
