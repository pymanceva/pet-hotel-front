import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EMutationKeys as EMutationRoomKeys } from './keys';
import { IRequestForRoomUpdate } from '@/shared/types/request';
import RoomService from '../../api/room.service';
import { ESingleRoomQueries } from '@/pages/Room/api/const';

export const useUpdateRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EMutationRoomKeys.UPDATE_ROOM],
    mutationFn: (data: IRequestForRoomUpdate) => RoomService.updateRoom(data),
    onSuccess: (d) => {
      queryClient.invalidateQueries({
        queryKey: [`${ESingleRoomQueries.GET_ROOM_BY_KEY} ${d.id}`],
      });
    },
  });
};
