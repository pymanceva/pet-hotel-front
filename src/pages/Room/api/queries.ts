import { useQuery } from '@tanstack/react-query';
import { ESingleRoomQueries } from './const';
import RoomService from '@/features/rooms/api/room.service';

export const useGetRoomById = (id?: string) => {
  return useQuery({
    queryKey: [`${ESingleRoomQueries.GET_ROOM_BY_KEY} ${id}`],
    queryFn: () => RoomService.getRoomById(Number(id)),
    enabled: !!id,
  });
};
