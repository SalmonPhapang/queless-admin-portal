import {IMenuItem} from './menuItem.model'

export interface IOrderItem {
  key?: string;
  menuItemKey?: string;
  quantity?:number;
  menuItem?:IMenuItem
}
export class OrderItem implements IOrderItem {
  constructor (
    key?: string,
    menuItemKey?: string,
    quantity?:number,
    menuItem?:IMenuItem
  ) {}
}
