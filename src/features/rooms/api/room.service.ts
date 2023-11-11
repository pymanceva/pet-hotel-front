import { HTTPError } from 'ky';
import { api } from '@/shared/api/api.service';
import { IRequestForRoomCreation, IRoom } from '@/shared/types/request';

export default class RoomService {
  static async getAllRooms() {
    try {
      const response = await api.get('rooms/withPrice').json();
      return response;
    } catch (err) {
      throw new Error('Failed to get rooms');
    }
  }

  static async getRoomById(id: number) {
    try {
      const response = await api.get(`rooms/${id}/withPrice`).json<IRoom>();
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
}
