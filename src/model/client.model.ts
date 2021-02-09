import {IAddress} from './address.model'

export interface IClient {
  key?: string;
  name?: string;
  userName?: string;
  enterpriseNumber?: string;
  contactNumber?: string;
  email?: string;
  profileImage?: string;
  coverImage?: string;
  address?: IAddress
}
export class Client implements IClient {
  constructor (
    key?: string,
    name?: string,
    userName?: string,
    enterpriseNumber?: string,
    contactNumber?: string,
    email?: string,
    profileImage?: string,
    coverImage?: string,
    address?: IAddress
  ) {}
}
