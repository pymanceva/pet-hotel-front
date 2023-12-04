import { ActionIcon } from '@mantine/core';
import React from 'react';

interface ButtonIconProps {
  Icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  handleClick: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  Icon,
  handleClick,
}) => {
  return (
    <ActionIcon variant="white" size="lg" onClick={handleClick}>
      {Icon}
    </ActionIcon>
  );
};
