import { FC, useState } from 'react';
import { Button, Flex, Space, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import {
  IRequestForCategoryCreation,
  IRequestForCategoryUpdate,
} from '@/shared/types/request';
import CategoryDrawer from './Drawer';

interface ICategoryForm {
  onClose?: () => void;
  handleSubmit: () => void;
  form: UseFormReturnType<
    IRequestForCategoryCreation | IRequestForCategoryUpdate
  >;
  btnText: string;
}

export const CategoryForm: FC<ICategoryForm> = ({
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
        placeholder="Введите название категории..."
        {...form.getInputProps('name')}
      />
      <Space h="10" />
      <TextInput
        placeholder="Введите описание..."
        {...form.getInputProps('price')}
      />
      <Space h="10" />
      <Flex justify="space-between">
        <Button color="red" onClick={handleCancelButtonClick}>
          Отмена
        </Button>
        <Button type="submit">{btnText}</Button>
      </Flex>
      <CategoryDrawer
        isDrawerOpened={isDrawerOpened}
        handleConfirmationClick={handleConfirmationClick}
        handleDrawerCancelClick={handleDrawerCancelClick}
      />
    </form>
  );
};

export default CategoryForm;
