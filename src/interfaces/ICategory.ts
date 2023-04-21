import {Document} from 'mongoose';

interface Category extends Document {
  name: string;
  type: 'food' | 'drinks';
}

export {Category};
