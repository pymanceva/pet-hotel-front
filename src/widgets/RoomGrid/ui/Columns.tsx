import { memo } from 'react';
import { Grid } from '@mantine/core';
import { IRequestForRoomCreation } from '@/shared/types/request';
import { RoomItem } from '@/entities/room';

const Columns: React.FC<{ rooms: IRequestForRoomCreation[] }> = ({ rooms }) => {
  return (
    rooms &&
    rooms.map((room) => (
      <Grid.Col key={room.id} span={4}>
        <RoomItem {...room} />
      </Grid.Col>
    ))
  );
};

export default memo(Columns);
