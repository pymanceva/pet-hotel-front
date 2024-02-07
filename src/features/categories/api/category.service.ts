import { HTTPError } from 'ky';
import { api } from '@/shared/api/api.service';
import {
  ICategory,
  IRequestForCategoryCreation,
  IRequestForRoomCreation,
} from '@/shared/types/request';

export default class CategoryService {
  static async getAllCategoriess() {
    try {
      const response = await api.get('categories').json();
      return response;
    } catch (err) {
      throw new Error('Failed to get rooms');
    }
  }

  static async postCategory(data: IRequestForCategoryCreation) {
    try {
      const response = await api
        .post('categories', { json: data })
        .json<ICategory>();
      return response;
    } catch (err) {
      throw new Error('Failed to get room by ID');
    }
  }

  static async postRoom(data: IRequestForRoomCreation) {
    try {
      const response = await api.post('rooms', { json: data }).json();
      return response;
    } catch (err) {
      throw new Error('Failed to post room!');
    }
  }

  static async updateRoom(data: IRequestForRoomCreation) {
    try {
      const response = await api
        .patch(`rooms/${data.id}`, { json: data })
        .json<IRequestForRoomCreation>();
      return response;
    } catch (err) {
      if (err instanceof HTTPError) {
        throw new Error(err.message);
      } else {
        throw new Error('Failed to update room');
      }
    }
  }

  static async deleteRoom(id?: string) {
    try {
      await api.delete(`rooms/${id}`);
    } catch (err) {
      if (err instanceof HTTPError) {
        throw new Error(err.message);
      } else {
        throw new Error('Failed to delete room');
      }
    }
  }
}
