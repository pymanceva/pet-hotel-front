import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  Flex,
  Grid,
  Group,
  Modal,
  Select,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Button, ButtonIcon } from '@/shared/components/Buttons';
import { EditIcon } from '@/shared/ui/icons/EditIcon';
import { TrashboxIcon } from '@/shared/ui/icons/TrashboxIcon';
import { UserDto } from '../../../../generated/models/UserDto';

import { useDeleteUser, useUpdateUser } from '@/pages/Employees/api/mutation';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';
import { UpdateUserDto } from '../../../../generated/models/UpdateUserDto';
import { getFullName } from '../utils/getFullName';

export const Employee: React.FC<UserDto> = ({
  firstName,

  lastName,
  middleName,
  role,
  email,
  id,
}) => {
  const { mutateAsync: deleteUser } = useDeleteUser();
  const { mutateAsync: updateUser } = useUpdateUser();

  const [
    openedDeleteModal,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);

  const [openedEditModal, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);

  const form = useForm<UpdateUserDto>({
    initialValues: {
      email,
      firstName,
      lastName,
      middleName,
      role,
    },
  });
  if (!id) {
    return;
  }

  const handleDeleteClick = async () => {
    await deleteUser(id);
    closeDeleteModal();
  };

  const formForDeleteModal = (
    <div>
      <div>
        <Text>
          Сотрудник будет удален из списка ваших сотрудников и восстановить его
          будет невозможно
        </Text>
      </div>
      <Flex
        direction="column"
        mt="xl"
        style={{
          backgroundColor: '#F6F8FF',
          borderRadius: '16px',
          padding: '16px',
        }}
      >
        <Text fw="bolder">{getFullName(firstName, lastName, middleName)}</Text>
        <Text>{UpdateUserDto.role[role]}</Text>
      </Flex>
      <Flex justify="space-between" mt="xl">
        <Button variant={ButtonVariant.primary} onClick={handleDeleteClick}>
          Удалить
        </Button>
        <Button variant={ButtonVariant.secondary} onClick={closeDeleteModal}>
          Отменить
        </Button>
      </Flex>
    </div>
  );
  const handleSubmit = async (values: UpdateUserDto) => {
    const roleForRequest = (
      Object.keys(UpdateUserDto.role) as UserDto.role[]
    ).find((key) => UpdateUserDto.role[key] === values.role);

    await updateUser({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName || undefined,
      middleName: values.middleName || undefined,
      role: roleForRequest as UserDto.role,
      id,
    });
    closeEditModal();
  };

  const formForEditUser = (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput label="ФИО" {...form.getInputProps('name')} radius="xl" />
      <TextInput
        label="Адрес электронной почты"
        {...form.getInputProps('email')}
        radius="xl"
      />
      <Select
        label="Должность"
        data={Object.values(UpdateUserDto.role)}
        // value={Object.values(UpdateUserDto.role)[0]}
        {...form.getInputProps('role')}
        radius="xl"
      />

      <Flex justify="space-between" mt="lg">
        <Button type="submit">Сохранить</Button>
        <Button variant={ButtonVariant.secondary} onClick={closeEditModal}>
          Отменить
        </Button>
      </Flex>
    </form>
  );
  return (
    <Grid.Col span={12}>
      <Group justify="space-between">
        <Group justify="space-between">
          <Title order={5} w="248px" fw={400}>
            {`${firstName} ${middleName} ${lastName}`}
          </Title>
          <Title order={5} w="248px" fw={400}>
            {UpdateUserDto.role[role]}
          </Title>
        </Group>
        <Group justify="center">
          <ButtonIcon Icon={<EditIcon />} handleClick={openEditModal} />
          <ButtonIcon Icon={<TrashboxIcon />} handleClick={openDeleteModal} />
        </Group>
      </Group>
      <Modal
        opened={openedDeleteModal}
        onClose={closeDeleteModal}
        title={
          <Text fw="bolder" style={{ fontSize: '24px' }}>
            Удалить сотрудника?
          </Text>
        }
        style={{
          borderRadius: '16px',
        }}
      >
        {formForDeleteModal}
      </Modal>
      <Modal
        opened={openedEditModal}
        onClose={closeEditModal}
        title={
          <Text fw="bolder" style={{ fontSize: '24px' }}>
            Редактировать данные сотрудника
          </Text>
        }
        style={{
          borderRadius: '16px',
        }}
      >
        {formForEditUser}
      </Modal>
    </Grid.Col>
  );
};
