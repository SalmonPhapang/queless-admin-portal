export interface ILocation {
  key?: string;
  latitude?: string;
  longitude?: string;
}
export class Location implements ILocation {
  constructor (
    key?: string,
    latitude?: string,
    longitude?: string
  ) {}
}
