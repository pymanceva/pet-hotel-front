import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Text, Title } from '@mantine/core';
import { IRequestForRoomCreation } from '@/shared/types/request';

const RoomItem: React.FC<IRequestForRoomCreation> = ({
  id,
  number,
  price,
  size,
  type,
  isAvailable,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`room/${id}`);
  };
  return (
    <Box
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      onClick={() => handleClick()}
    >
      <Title order={5}>Room №{number}</Title>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
        <Grid.Col span={6}>
          <Text size="md">Price: {price}</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text size="md">Size: {size}m^2</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text size="md">Type: {type}</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text size="md">{isAvailable ? 'Available' : 'Unavailable'}</Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default memo(RoomItem);
