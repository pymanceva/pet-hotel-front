import { useQuery } from '@tanstack/react-query';
import ky from 'ky';

import { ESingleRoomQueries } from './const';
import { API_URL } from '@/shared/const/const';
import { IRequestForRoomCreation } from '@/shared/types/request';

export const useGetRoomById = (id?: string) => {
  return useQuery({
    queryKey: [`${ESingleRoomQueries.GET_ROOM_BY_KEY} ${id}`],
    queryFn: () =>
      ky.get(`${API_URL}/rooms/${id}`).json<IRequestForRoomCreation>(),
    enabled: !!id,
  });
};
