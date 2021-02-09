import axios from 'axios';
import {IClient} from "@/model/client.model";
const baseApiUrl = 'api/client';
export default class ClientService {

  public find(key: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      axios
        .get(`${baseApiUrl}/${key}`)
        .then((res: { data: string | PromiseLike<string> | undefined; }) => resolve(res.data))
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  public findAll(): Promise<IClient[]> {
    return new Promise<IClient[]>((resolve, reject) => {
      axios
        .get(`${baseApiUrl}/retrieveAll`)
        .then((res: { data: IClient[] | PromiseLike<IClient[]> | undefined; }) => {
          resolve(res.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  public save(entity: IClient): Promise<IClient> {
    return new Promise<IClient>((resolve, reject) => {
      axios
        .put(`${baseApiUrl}/save`,entity)
        .then((res: { data: IClient | PromiseLike<IClient> | undefined; }) => {
          resolve(res.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  public update(entity: IClient): Promise<IClient> {
    return new Promise<IClient>((resolve, reject) => {
      axios
        .put(`${baseApiUrl}/update`,entity)
        .then((res: { data: IClient | PromiseLike<IClient> | undefined; }) => {
          resolve(res.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}
