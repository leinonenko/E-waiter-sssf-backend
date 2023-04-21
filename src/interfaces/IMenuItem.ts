import {Document} from 'mongoose';
import {Category} from './ICategory';

interface MenuItem extends Document {
  name: string;
  category: Category;
  price: number;
  size: number;
  description: string;
}

export {MenuItem};
