import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EMutationKeys as EMutationRoomKeys } from './keys';
import { IRequestForRoomCreation } from '@/shared/types/request';
import { ERoomQueries } from '@/pages/RoomList/api/const';
import RoomService from '../../api/room.service';

export const useCreateRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EMutationRoomKeys.CREATE_ROOM],
    mutationFn: (data: IRequestForRoomCreation) => RoomService.postRoom(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ERoomQueries.GET_ALL_ROOMS] });
    },
  });
};
