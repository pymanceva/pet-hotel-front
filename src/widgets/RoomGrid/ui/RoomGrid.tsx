import { useMemo } from 'react';
import { Grid, Text } from '@mantine/core';
import { RoomItem } from '@/entities/room';
import { useGetAllRooms } from '../api/queries';

const RoomGrid: React.FC = () => {
  const { data, isLoading } = useGetAllRooms();
  const items = useMemo(
    () =>
      data?.map((item) => (
        <Grid.Col key={item.id} span={4}>
          <RoomItem {...item} />
        </Grid.Col>
      )),
    [],
  );
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      {items?.length ? (
        items
      ) : (
        <Text size="lg">Вы пока еще не добавили никаких комнат</Text>
      )}
    </Grid>
  );
};

export default RoomGrid;
