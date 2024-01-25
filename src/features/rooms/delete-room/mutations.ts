import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EMutationKeys as EMutationRoomKeys } from './keys';
import { ERoomQueries } from '@/pages/RoomList/api/const';
import RoomService from '../api/room.service';

export const useDeleteRoom = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [`${EMutationRoomKeys.DELETE_ROOM}`],
    mutationFn: (id?: string) => RoomService.deleteRoom(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ERoomQueries.GET_ALL_ROOMS] });
      navigate('/');
    },
  });
};
