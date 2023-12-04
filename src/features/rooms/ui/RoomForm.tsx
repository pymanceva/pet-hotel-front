import { FC, useState } from 'react';
import { Button, Flex, Select, Space, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import {
  isAvailableSelectItems,
  roomTypeSelectItems,
} from '@/shared/const/const';
import RoomDrawer from './Drawer';
import {
  IRequestForRoomCreation,
  IRequestForRoomUpdate,
} from '@/shared/types/request';

interface IRoomForm {
  onClose?: () => void;
  handleSubmit: () => void;
  form: UseFormReturnType<IRequestForRoomCreation | IRequestForRoomUpdate>;
  btnText: string;
}

export const RoomForm: FC<IRoomForm> = ({
  onClose,
  handleSubmit,
  form,
  btnText,
}) => {
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);
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

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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
        <Button type="submit">{btnText}</Button>
      </Flex>
      <RoomDrawer
        isDrawerOpened={isDrawerOpened}
        handleConfirmationClick={handleConfirmationClick}
        handleDrawerCancelClick={handleDrawerCancelClick}
      />
    </form>
  );
};

export default RoomForm;
