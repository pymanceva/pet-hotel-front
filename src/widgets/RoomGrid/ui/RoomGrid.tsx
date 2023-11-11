import { Grid, Text } from '@mantine/core';
import Columns from './Columns';
import { useGetAllRooms } from '@/pages/RoomList/api/queries';
import { IRequestForRoomCreation } from '@/shared/types/request';

const RoomGrid: React.FC = () => {
  const { data } = useGetAllRooms();
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      {data ? (
        <Columns rooms={data as IRequestForRoomCreation[]} />
      ) : (
        <Text> Список комнат пуст</Text>
      )}
    </Grid>
  );
};

export default RoomGrid;
