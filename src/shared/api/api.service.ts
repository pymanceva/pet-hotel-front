import ky from 'ky';
import Cookies from 'js-cookie';
import { API_URL } from '../const/const';

export const api = ky.create({
  prefixUrl: API_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        const userId = Cookies.get('X-PetHotel-User-Id');
        if (userId) {
          request.headers.set('X-PetHotel-User-Id', userId);
        }
      },
    ],
  },
});
