import { HTTPError } from 'ky';
import { api } from '@/shared/api/api.service';
import { ICategory, IRequestForCategoryCreation } from '@/shared/types/request';

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

  static async updateCategory(id: number, data?: IRequestForCategoryCreation) {
    try {
      const response = await api
        .patch(`categories/${id}`, { json: data })
        .json<IRequestForCategoryCreation>();
      return response;
    } catch (err) {
      if (err instanceof HTTPError) {
        throw new Error(err.message);
      } else {
        throw new Error('Failed to update room');
      }
    }
  }

  static async deleteCategory(id?: number) {
    try {
      const response = await api.delete(`categories/${id}`).json();
      return response;
    } catch (err) {
      if (err instanceof HTTPError) {
        throw new Error(err.message);
      } else {
        throw new Error('Failed to delete room');
      }
    }
  }
}
