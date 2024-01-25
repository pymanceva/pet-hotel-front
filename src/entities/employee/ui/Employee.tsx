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
import { IUserDto } from '../../../../generated/models/UserDto';

import { useDeleteUser, useUpdateUser } from '@/pages/Employees/api/mutation';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';
import { IUpdateUserDto } from '../../../../generated/models/UpdateUserDto';
import { getFullName } from '../utils/getFullName';

export const Employee: React.FC<IUserDto> = ({
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

  const form = useForm<IUpdateUserDto>({
    initialValues: {
      email,
      firstName,
      lastName,
      middleName,
      role: role as IUpdateUserDto.ERole,
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
        <Text>{IUpdateUserDto.ERole[role]}</Text>
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
  const handleSubmit = async (values: IUpdateUserDto) => {
    const roleForRequest = (
      Object.keys(IUpdateUserDto.ERole) as IUserDto.ERole[]
    ).find((key) => IUpdateUserDto.ERole[key] === values.role);

    await updateUser({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName || undefined,
      middleName: values.middleName || undefined,
      role:
        roleForRequest !== undefined
          ? (roleForRequest as IUpdateUserDto.ERole)
          : undefined,
      id,
    });
    closeEditModal();
  };

  const formForEditUser = (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="Фамилия"
        {...form.getInputProps('lastName')}
        radius="xl"
      />
      <TextInput
        label="Имя*"
        {...form.getInputProps('firstName')}
        radius="xl"
      />
      <TextInput
        label="Отчество"
        {...form.getInputProps('middleName')}
        radius="xl"
      />
      <TextInput
        label="Адрес электронной почты"
        {...form.getInputProps('email')}
        radius="xl"
      />
      <Select
        label="Должность"
        data={Object.values(IUpdateUserDto.ERole)}
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
            {getFullName(firstName, lastName, middleName)}
          </Title>
          <Title order={5} w="248px" fw={400}>
            {IUpdateUserDto.ERole[role]}
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
