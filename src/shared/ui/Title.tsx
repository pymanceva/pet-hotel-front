import { MantineFontSize, Text } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';

export const Title: FC<
  {
    size?: MantineFontSize;
    fontWeight?: string;
  } & PropsWithChildren
> = ({ size, fontWeight, children }) => {
  return (
    <Text fw={fontWeight || 400} size={size || 'md'}>
      {children}
    </Text>
  );
};
