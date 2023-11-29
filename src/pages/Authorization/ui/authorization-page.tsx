import { FC } from 'react';
import { Flex } from '@mantine/core';
import HeaderAuthorization from './components/header-authorization';
import { AuthorizationForm } from '@/features/authorization';

export const AuthorizationPage: FC = () => {
  return (
    <div>
      <Flex direction="column" align="center">
        <HeaderAuthorization />
        <AuthorizationForm />
      </Flex>
    </div>
  );
};
