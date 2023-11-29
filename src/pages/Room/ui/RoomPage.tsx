import { Box, Button, Flex, Loader, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useParams } from 'react-router-dom';
import { useGetRoomById } from '../api/queries';
import { RoomItem } from '@/entities/room';
import { ErrorPage } from '@/pages/Error';
import { FormForRoom } from '@/features/rooms/create-room/ui/form-for-room';
import { useDeleteRoom } from '@/features/rooms/delete-room/mutations';
import UpdateRoomForm from '@/features/rooms/update-room/ui/UpdateRoomForm';

const RoomPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetRoomById(id);
  const { mutateAsync: deleteRoom } = useDeleteRoom();
  const [opened, { open, close }] = useDisclosure(false);
  const [
    openedDeleteModal,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);
  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <ErrorPage />;
  }
  const handleDeleteRoom = async () => {
    await deleteRoom(id);
  };
  return (
    <Box
      style={{
        display: 'flex',
        padding: '20px',
        flexDirection: 'column',
      }}
    >
      <Flex justify="space-between">
        <RoomItem
          number={data.number}
          type={data.type}
          id={data.id}
          isAvailable={data.isAvailable}
          price={data.price}
          size={data.size}
        />
        <Flex direction="column" gap="md">
          <Button onClick={open}>Редактировать комнату</Button>
          <Button onClick={openDeleteModal} variant="outline" color="red">
            Удалить комнату
          </Button>
        </Flex>
        <Modal
          onClose={close}
          opened={opened}
          title="Редактировать комнату"
          withCloseButton={false}
        >
          <UpdateRoomForm onClose={close} data={{ ...data }} />
        </Modal>
        <Modal
          onClose={closeDeleteModal}
          opened={openedDeleteModal}
          title="Удалить комнату"
        >
          <Text size="lg">Вы уверены, что хотите удалить данную комнату?</Text>
          <Flex justify="space-between">
            <Button color="red" onClick={closeDeleteModal}>
              Отмена
            </Button>
            <Button onClick={handleDeleteRoom}>Удалить</Button>
          </Flex>
        </Modal>
      </Flex>
    </Box>
  );
};

export default RoomPage;
