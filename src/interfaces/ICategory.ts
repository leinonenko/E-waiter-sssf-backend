import {Document} from 'mongoose';

interface Category extends Document {
  type: 'food' | 'drinks';
}

export {Category};
