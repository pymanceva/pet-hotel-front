import {
  Button,
  Flex,
  Group,
  Image,
  Modal,
  Select,
  Space,
  TextInput,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { useForm } from '@mantine/form';
import { FC } from 'react';
import { ERoomType } from '@/shared/types/request';

export const Header: FC = () => {
  const form = useForm({
    initialValues: {
      type: ERoomType.BABY_SIZE,
      number: '',
      isAvailable: false,
      price: 0,
      size: 0,
    },
  });

  const handleButtonClick = () => {
    modals.openConfirmModal({
      title: 'Создание комнаты',
    });
  };
  return (
    <Group h="100%" w="100%" justify="space-between" px="md">
      <Image alt="LOGO" />
      <Flex w="200px" justify="space-between" align="center">
        <Button onClick={handleButtonClick}>Создать комнату</Button>
      </Flex>
    </Group>
  );
};
