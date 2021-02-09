import {ILocation} from './Location.model'
import {IAddress} from "./address.model";
import {IOrder} from "./order.model";

export interface IUser{
  key?: string;
  name?: string;
  surname?: string;
  email?: string;
  cellNumber?: string;
  address?: IAddress[];
  emailVerified?: boolean;
  orders?: IOrder[]
}
export class User implements IUser {
  constructor (
    key?: string,
    name?: string,
    surname?: string,
    email?: string,
    cellNumber?: string,
    address?: IAddress[],
    houseNumber?: string,
    province?: string,
    country?: string,
    code?: string,
    primary?: boolean,
    orders?: IOrder[]
  ) {}
}
