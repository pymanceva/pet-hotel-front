import { useQuery } from '@tanstack/react-query';
import ky from 'ky';

import { ERoomQueries } from './const';
import { API_URL } from '@/shared/const/const';
import { IRequestForRoomCreation } from '@/shared/types/request';

export const useGetAllRooms = () => {
  return useQuery({
    queryKey: [ERoomQueries.GET_ALL_ROOMS],
    queryFn: () => ky.get(`${API_URL}/rooms`).json<IRequestForRoomCreation[]>(),
  });
};
