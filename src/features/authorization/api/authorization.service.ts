import { HTTPError } from 'ky';
import { api } from '@/shared/api/api.service';
import { IAuthorization } from '../types/types';
import { IUser } from '@/entities/user';

export default class AuthorizationService {
  static async authorize(data: IAuthorization) {
    try {
      return await api.post('login', { json: data }).json<IUser>();
    } catch (err) {
      if (err instanceof HTTPError) {
        throw new Error(err.message);
      } else {
        console.error(err);
        throw new Error('Ошибка сервера');
      }
    }
  }
}
