import {IOrderItem} from './orderItem.model'

export interface IOrder {
  key?: string;
  userKey?: string;
  orderNumber?: string;
  orderTime?: string;
  preparedTime?: string;
  collectedTime?: string;
  specialInstructions?: string;
  fee?: number;
  subTotal?: number;
  total?: number;
  driverTip?: number;
  orderItems?: IOrderItem[];

}
export class Order implements IOrder {
  constructor (
    key?: string,
    nickName?: string,
    addressLine?: string,
    streetName?: string,
    suburb?: string,
    city?: string,
    houseNumber?: string,
    province?: string,
    country?: string,
    code?: string,
    primary?: boolean,
    orderItems?: IOrderItem[]
  ) {}
}
