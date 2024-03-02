import { Flex, Text } from '@mantine/core';
import { FC } from 'react';

export const CheckboxGroup: FC<{
  label: string;
  renderContent?: () => JSX.Element;
}> = ({ label, renderContent }) => {
  return (
    <Flex direction="column">
      <Text fw="400" fz="16px">
        {label}
      </Text>
      <Flex gap="lg">{renderContent?.()}</Flex>
    </Flex>
  );
};
