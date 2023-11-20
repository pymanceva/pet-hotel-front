import { MantineRadius } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { ReactNode } from 'react';

interface INotificationProps {
  title: string;
  message: string;
  withCloseButton?: boolean;
  icon?: ReactNode;
  radius?: MantineRadius;
}

export const callNotification = ({
  message,
  title,
  icon: Icon,
  withCloseButton = true,
  radius = 'md',
}: INotificationProps) => {
  notifications.show({
    title,
    message,
    icon: Icon,
    withCloseButton,
    radius,
  });
};
