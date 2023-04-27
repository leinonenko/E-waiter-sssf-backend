import {NextFunction, Request, Response} from 'express';
import CustomError from '../../classes/CustomError';
import {User} from '../../interfaces/IUser';
import LoginMessageResponse from '../../interfaces/LoginMessageResponse';
import userModel from '../models/userModel';
import {GraphQLError} from 'graphql';

export default {
  Query: {
    //get all users
    getUsers: async () => {
      const users = await userModel.find();
      console.log(users);
      return users;
    },
    // get user by id
    getUserById: async (_parent: undefined, args: any) => {
      return await userModel.findById(args.id);
    },
  },
  Mutation: {
    //register user
    registerUser: async (_parent: undefined, args: {user: User}) => {
      const response = await fetch(`${process.env.AUTH_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(args.user),
      });
      if (!response.ok) {
        throw new GraphQLError('Error registering user');
      }
      const user = (await response.json()) as LoginMessageResponse;
      return user;
    },
    updateProfile: async (_parent: undefined, args: User) => {
      return await userModel.findByIdAndUpdate(args.id, args, {new: true});
    },
    deleteUser: async (_parent: undefined, args: User) => {
      return await userModel.findByIdAndDelete(args.id);
    },
  },
};
