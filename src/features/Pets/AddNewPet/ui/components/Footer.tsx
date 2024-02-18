import { Flex } from '@mantine/core';
import { FC } from 'react';
import { Button } from '@/shared/components/Buttons';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';

interface IProps {
  onSaveText: string;
  onCancelText: string;
  onCancel: () => void;
  formId?: string;
}

const Footer: FC<IProps> = ({ onSaveText, onCancelText, onCancel, formId }) => {
  return (
    <div
      style={{
        boxShadow: '0px -4px 8px 0px #00000017',
        height: '100px',
      }}
    >
      <Flex align="center" h="100%" justify="flex-end" gap="md">
        <Button type="submit" variant={ButtonVariant.primary} form={formId}>
          {onSaveText}
        </Button>
        <Button onClick={onCancel} variant={ButtonVariant.secondary}>
          {onCancelText}
        </Button>
      </Flex>
    </div>
  );
};

export default Footer;
