import { Text } from '@mantine/core';
import { FC } from 'react';

interface FieldProps {
  fieldName: string;
  renderContent: () => JSX.Element;
}

export const Field: FC<FieldProps> = ({ fieldName, renderContent }) => {
  return (
    <>
      <Text c="#757575">{fieldName}</Text>
      {renderContent()}
    </>
  );
};
