import ky from 'ky';
import { API_URL } from '../const/const';

export const api = ky.create({
  prefixUrl: API_URL,
  headers: { 'X-PetHotel-User-Id': '1' },
});
