import { useForm } from '@mantine/form';
import {
  Flex,
  Group,
  Modal,
  PasswordInput,
  Select,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@/shared/components/Buttons';

import { PlusIcon } from '@/shared/ui/icons/PlusIcon';
import { ButtonSize } from '@/shared/components/Buttons/Button/lib/sizeControl';
import { IUserDto } from '../../../../generated/models/UserDto';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';
import { useCreateUser } from '../api/mutation';
import { EmployeeGrid } from '@/widgets/Grids';

export const EmployeePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<IUserDto & { confirmPassword: string }>({
    initialValues: {
      email: '',
      role: IUserDto.ERole.ROLE_USER,
      firstName: '',
      isActive: true,
      lastName: '',
      middleName: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      confirmPassword(value, values) {
        if (!value) {
          return 'Подтвердите пароль';
        }
        if (value !== values.password) {
          return 'Введите корректный пароль';
        }
      },
      firstName(value) {
        if (!value) {
          return 'Введите имя';
        }
        if (value.length < 2) {
          return 'Введите корректное имя';
        }
      },
      email(value) {
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          return 'Введите корректный email';
        }
      },
      role(value) {
        if (!value) {
          return 'Выберите должность';
        }
      },
      password(value) {
        if (!value) {
          return 'Введите пароль';
        }
        if (value.length < 5) {
          return 'Введите пароль более 5 символов';
        }
      },
    },
  });

  const { mutateAsync } = useCreateUser();

  const handleClose = () => {
    close();
    form.reset();
  };

  const handleSubmit = async (values: IUserDto) => {
    const role = (Object.keys(IUserDto.ERole) as IUserDto.ERole[]).find(
      (key) => IUserDto.ERole[key] === values.role,
    );
    const { email, firstName, isActive, lastName, middleName, password } =
      values;
    await mutateAsync({
      email,
      role: role as IUserDto.ERole,
      firstName,
      isActive,
      lastName: lastName || undefined,
      middleName: middleName || undefined,
      password,
    });
    close();
    form.reset();
  };

  const formForNewUser = (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        {...form.getInputProps('lastName')}
        placeholder="Фамилия"
        radius="xl"
        mt="lg"
      />
      <TextInput
        {...form.getInputProps('firstName')}
        placeholder="Имя*"
        radius="xl"
        mt="lg"
      />

      <TextInput
        {...form.getInputProps('middleName')}
        placeholder="Отчество"
        radius="xl"
        mt="lg"
      />
      <TextInput
        {...form.getInputProps('email')}
        radius="xl"
        placeholder="Адрес электронной почты*"
        mt="lg"
      />
      <Select
        data={Object.values(IUserDto.ERole)}
        {...form.getInputProps('role')}
        radius="xl"
        placeholder="Должность*"
        mt="lg"
        defaultValue={form.values.role}
      />

      <PasswordInput
        radius="xl"
        {...form.getInputProps('password')}
        placeholder="Пароль*"
        mt="lg"
      />
      <PasswordInput
        radius="xl"
        {...form.getInputProps('confirmPassword')}
        placeholder="Пароль повторно"
        mt="lg"
      />
      <Flex justify="space-between" mt="lg">
        <Button type="submit">Добавить</Button>
        <Button variant={ButtonVariant.secondary} onClick={handleClose}>
          Отменить
        </Button>
      </Flex>
    </form>
  );
  return (
    <Group px="md" w="100%">
      <Flex
        w="100%"
        mih={50}
        gap="sm"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        style={{ height: '48px' }}
      >
        <Title order={2} fw={800} style={{ fontSize: '36px' }}>
          Команда
        </Title>
        <Button handleClick={open} icon={<PlusIcon />} size={ButtonSize.small}>
          Добавить сотрудника
        </Button>
      </Flex>
      <EmployeeGrid />
      <Modal opened={opened} onClose={handleClose} title="Новый сотрудник">
        {formForNewUser}
      </Modal>
    </Group>
  );
};
