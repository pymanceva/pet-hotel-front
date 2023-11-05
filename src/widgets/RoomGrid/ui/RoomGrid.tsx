import { Grid } from '@mantine/core';
import { RoomItem } from '@/entities/room';
import { mockData } from './MockData';

const RoomGrid: React.FC = () => {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      {mockData.map((item) => (
        <Grid.Col key={item.id} span={4}>
          <RoomItem {...item} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default RoomGrid;
