import { api } from '@/shared/api/api.service';
import { IRequestForRoomCreation } from '@/shared/types/request';

export default class RoomService {
  static async getAllRooms() {
    try {
      const response = await api.get('rooms').json();
      return response;
    } catch (err) {
      throw new Error('Failed to get rooms');
    }
  }

  static async getRoomById(id: number) {
    try {
      const response = await api.get(`rooms/${id}`).json();
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
}
