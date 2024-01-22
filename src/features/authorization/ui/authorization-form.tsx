import { Button, Flex, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';
import { useAuthorization } from '../api/mutations/mutations';

interface IValuesAuthForm {
  email: '';
  password: '';
}

export const AuthorizationForm: FC = () => {
  const form = useForm<IValuesAuthForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      // eslint-disable-next-line no-confusing-arrow
      email: (value) =>
        /^\S+@\S+$/.test(value)
          ? null
          : 'Email введен некорректно. Пример: example@domain.ru',
      password: (value) => (value ? null : 'Введите пароль'),
    },
    validateInputOnChange: false,
  });
  const { mutateAsync: authorization, isPending } = useAuthorization();
  return (
    <form
      onSubmit={form.onSubmit((val) => authorization(val))}
      style={{ width: '391px' }}
    >
      <Flex direction="column" mt="lg">
        <TextInput
          placeholder="Адрес электронной почты"
          label="Электронная почта"
          radius="lg"
          styles={{
            error: {
              textAlign: 'center',
            },
          }}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          placeholder="Пароль"
          label="Пароль"
          radius="lg"
          styles={{
            error: {
              textAlign: 'center',
            },
          }}
          {...form.getInputProps('password')}
        />
        <Button
          mt="lg"
          c="white"
          color="black"
          radius="lg"
          fullWidth
          loading={isPending}
          type="submit"
        >
          Войти
        </Button>
      </Flex>
    </form>
  );
};
