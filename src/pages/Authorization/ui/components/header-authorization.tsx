import { FC } from 'react';
import { Flex, Image, Text, Title } from '@mantine/core';
import logo from '@/assets/petlogo.svg';

const HeaderAuthorization: FC = () => {
  return (
    <div>
      <Flex direction="column" justify="center" align="center">
        <Image
          src={logo}
          alt="logo"
          style={{
            width: '64px',
            height: '64px',
          }}
        />
        <Title>Pet’s home</Title>
        <Flex
          direction="column"
          justify="center"
          align="center"
          style={{ width: '298px' }}
        >
          <Text mt="24px" size="xl" fw="bold">
            Вход в систему
          </Text>

          <Text style={{ lineHeight: '24px' }} ta="center">
            Система управления средством размещения в едином интерфейсе
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default HeaderAuthorization;
