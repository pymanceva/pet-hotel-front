import { FC } from 'react';
import { Button, Flex, Group, Image, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CreateRoomForm from '@/features/rooms/create-room/ui/CreateRoomForm';

export const Header: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group h="100%" w="100%" justify="space-between" px="md">
      <Modal opened={opened} onClose={close} title="Создание комнаты">
        <CreateRoomForm onClose={close} />
      </Modal>
      <Image alt="LOGO" />
      <Flex w="200px" justify="space-between" align="center">
        <Button onClick={open}>Создать комнату</Button>
      </Flex>
    </Group>
  );
};
