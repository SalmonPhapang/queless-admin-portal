
export interface ICategory {
  key?: string;
  name?: string;
  icon?: string;
  details?: string;
  date?: string;
}
export class Category implements ICategory {
  constructor (
    key?: string,
    name?: string,
    icon?: string,
    details?: string,
    date?: string
  ) {}
}
