import { useMutation, useQueryClient } from '@tanstack/react-query';
import ky from 'ky';
import { EMutationKeys as EMutationRoomKeys } from './keys';
import { IRequestForRoomCreation } from '@/shared/types/request';
import { API_URL } from '@/shared/const/const';
import { ERoomQueries } from '@/widgets/RoomGrid/api/const';

export const useCreateRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EMutationRoomKeys.CREATE_ROOM],
    mutationFn: (data: IRequestForRoomCreation) => {
      return ky.post(`${API_URL}/rooms`, { json: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ERoomQueries.GET_ALL_ROOMS] });
    },
  });
};
