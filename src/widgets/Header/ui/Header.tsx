import { FC } from 'react';
import { Container, Group, Image, Text } from '@mantine/core';
import logo from '@/app/assets/petlogo.svg';
import { Button, ButtonIcon } from '@/shared/components/Buttons';
import { ButtonSize } from '@/shared/components/Buttons/Button/lib/sizeControl';
import { UserIcon } from '@/shared/ui/icons/UserIcon';

export const Header: FC = () => {
  return (
    <Group
      h="100%"
      w="100%"
      px="md"
      justify="space-between"
      style={{ boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 0.09)' }}
    >
      <Group justify="space-between">
        <Group justify="space-between" px="md">
          <Image
            src={logo}
            alt="logo"
            style={{
              width: '32px',
              height: '32px',
            }}
          />
          <Text fw={700}>Pet’s home</Text>
        </Group>
        <Container>Меню</Container>
        <Container>Сетка бронирований</Container>
        <Container>Заезды/Выезды</Container>
      </Group>
      <Group>
        <Button handleClick={() => {}} size={ButtonSize.medium}>
          Добавить бронирование
        </Button>
        <ButtonIcon Icon={<UserIcon />} handleClick={() => {}} />
      </Group>
    </Group>
  );
};
