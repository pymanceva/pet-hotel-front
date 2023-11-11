import { FC, useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Button,
  Container,
  Drawer,
  Flex,
  Select,
  Space,
  Text,
  TextInput,
} from '@mantine/core';
import {
  ERoomType,
  IRequestForRoomCreation,
  IRequestForRoomUpdate,
} from '../../../../shared/types/request';
import {
  isAvailableSelectItems,
  roomTypeSelectItems,
} from '../../../../shared/const/const';
import { useCreateRoom } from '../api/mutations';
import { useUpdateRoom } from '../../update-room/api';

interface IProps {
  isEdit?: boolean;
  data?: IRequestForRoomUpdate;
  onClose?: () => void;
}

export const FormForRoom: FC<IProps> = ({ isEdit = false, data, onClose }) => {
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);
  const { mutateAsync: handleRoomCreation } = useCreateRoom();
  const { mutateAsync: handleUpdateRoom } = useUpdateRoom();
  const form = useForm<IRequestForRoomCreation>({
    initialValues: {
      number: '',
      isAvailable: false,
      type: ERoomType.BABY_SIZE,
      price: undefined,
      size: undefined,
    },
    validate: {
      isAvailable: (value) => (value ? undefined : 'Выберите что-либо'),
      number: (value) => (value ? undefined : 'Введите название номера'),
      price: (value) => (value ? undefined : 'Введите стоиость'),
      size: (value) => (value ? undefined : 'Введите размер'),
    },
  });

  useEffect(() => {
    if (isEdit && data) {
      form.setValues(data);
      form.resetDirty(data);
    }
  }, []);

  const handleCancelButtonClick = () => {
    if (!form.isDirty()) {
      onClose?.();
      return;
    }
    setIsDrawerOpened(true);
  };
  const handleConfirmationClick = () => {
    setIsDrawerOpened(false);
    onClose?.();
  };
  const handleDrawerCancelClick = () => {
    setIsDrawerOpened(false);
  };
  const handleCreate = async () => {
    await handleRoomCreation?.(form.values);
    onClose?.();
  };
  const handleUpdate = async () => {
    if (!data) {
      return;
    }

    await handleUpdateRoom?.(form.values as IRequestForRoomUpdate);
    onClose?.();
  };

  return (
    <form onSubmit={form.onSubmit(isEdit ? handleUpdate : handleCreate)}>
      <TextInput
        placeholder="Введите название номера..."
        {...form.getInputProps('number')}
      />

      <Space h="10" />
      <TextInput
        placeholder="Введите цену..."
        {...form.getInputProps('price')}
      />
      <Space h="10" />
      <TextInput
        placeholder="Введите размер комнаты"
        {...form.getInputProps('size')}
      />
      <Space h="10" />
      <Select
        placeholder="Выберите доступность комнаты"
        data={isAvailableSelectItems}
        defaultValue={isAvailableSelectItems[0].label}
        {...form.getInputProps('isAvailable')}
      />
      <Space h="10" />
      <Select
        placeholder="Выберите тип комнаты"
        data={roomTypeSelectItems}
        {...form.getInputProps('type')}
      />
      <Space h="10" />
      <Flex justify="space-between">
        <Button color="red" onClick={handleCancelButtonClick}>
          Отмена
        </Button>
        {!isEdit && <Button type="submit">Создать</Button>}
        {isEdit && <Button type="submit">Изменить</Button>}
      </Flex>
      <Drawer
        opened={isDrawerOpened}
        withCloseButton={false}
        onClose={handleConfirmationClick}
        position="right"
      >
        <Drawer.Body h="100%">
          <Container h="100%">
            <Flex direction="column" justify="space-between">
              <Text>
                Вы ввели данные. Вы уверены, что хотите покинуть форму?
              </Text>
              <Flex justify="space-between">
                <Button color="red" onClick={handleDrawerCancelClick}>
                  Отмена
                </Button>
                <Button onClick={handleConfirmationClick}>Покинуть</Button>
              </Flex>
            </Flex>
          </Container>
        </Drawer.Body>
      </Drawer>
    </form>
  );
};
