export interface IMenuItem {
  key?: string;
  menuKey?: string;
  categoryKey?:string;
  name?:string;
  description?:string;
  image?:string;
  size?:string;
  specialKey?:string;
  price?:number;
}
export class MenuItem implements IMenuItem {
  constructor (
    key?: string,
    menuKey?: string,
    categoryKey?:string,
    name?:string,
    description?:string,
    image?:string,
    size?:string,
    specialKey?:string,
    price?:number
  ) {}
}
