import { FC } from 'react';
import { Flex } from '@mantine/core';
import { Button } from '@/shared/components/Buttons';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';

interface PetCreationModalFooterProps {
  onCancel: () => void;
  onClick: () => void;
}

export const PetCreationModalFooter: FC<PetCreationModalFooterProps> = ({
  onCancel,
  onClick,
}) => {
  return (
    <Flex justify="space-between">
      <Button onClick={onClick}>Далее</Button>
      <Button variant={ButtonVariant.secondary} onClick={onCancel}>
        Отменить
      </Button>
    </Flex>
  );
};
