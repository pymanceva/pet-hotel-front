import { Box, Text, Title } from '@mantine/core';

const RoomPage = () => {
  return (
    <Box
      style={{
        display: 'flex',
        padding: '20px',
        flexDirection: 'column',
      }}
    >
      <Title order={5}>Room №42</Title>
      <Box>
        <Text size="md">Price:100</Text>
        <Text size="md">Size:20m^2</Text>
        <Text size="md">Type:lux</Text>
        <Text size="md">Available</Text>
      </Box>
    </Box>
  );
};

export default RoomPage;
