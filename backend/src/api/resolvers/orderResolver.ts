import {Order} from '../../interfaces/IOrder';
import orderModel from '../models/orderModel';

export default {
  Query: {
    //get all orders
    orders: async (_parent: any, _args: any): Promise<Order[]> => {
      const orders = await orderModel.find();
      return orders;
    },
    //get order by id
  },
  Mutation: {},
};
