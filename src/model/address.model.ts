import {ILocation} from './Location.model'

export interface IAddress {
  key?: string;
  nickName?: string;
  addressLine?: string;
  streetName?: string;
  suburb?: string;
  city?: string;
  houseNumber?: string;
  province?: string;
  country?: string;
  code?: string;
  primary?: boolean;
  location?: ILocation;

}
export class Address implements IAddress {
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
    location?: ILocation
  ) {}
}
