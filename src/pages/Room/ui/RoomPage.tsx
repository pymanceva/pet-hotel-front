import { Box, Button, Flex, Loader, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useParams } from 'react-router-dom';
import { useGetRoomById } from '../api/queries';
import { RoomItem } from '@/entities/room';
import { ErrorPage } from '@/pages/Error';
import { FormForRoom } from '@/features/create-room/ui/form-for-room';

const RoomPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetRoomById(id);
  const [opened, { open, close }] = useDisclosure(false);
  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <ErrorPage />;
  }
  return (
    <Box
      style={{
        display: 'flex',
        padding: '20px',
        flexDirection: 'column',
      }}
    >
      <Flex>
        <RoomItem
          number={data.number}
          type={data.type}
          id={data.id}
          isAvailable={data.isAvailable}
          price={data.price}
          size={data.size}
        />
        <Button onClick={open}>Редактировать комнату</Button>
        <Modal
          onClose={close}
          opened={opened}
          title="Редактировать комнату"
          withCloseButton={false}
        >
          <FormForRoom
            isEdit
            onClose={close}
            data={{ ...data, isAvailable: data.isAvailable }}
          />
        </Modal>
      </Flex>
    </Box>
  );
};

export default RoomPage;
