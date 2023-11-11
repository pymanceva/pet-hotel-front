import { useQuery } from '@tanstack/react-query';
import { ERoomQueries } from './const';
import RoomService from '@/features/rooms/api/room.service';

export const useGetAllRooms = () => {
  return useQuery({
    queryKey: [ERoomQueries.GET_ALL_ROOMS],
    queryFn: () => RoomService.getAllRooms(),
  });
};
