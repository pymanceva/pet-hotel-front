import { ActionIcon } from '@mantine/core';
import React, { forwardRef } from 'react';

interface ButtonIconProps {
  Icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  handleClick: () => void;
}

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ Icon, handleClick, ...props }, ref) => {
    return (
      <ActionIcon
        variant="white"
        size="lg"
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        {Icon}
      </ActionIcon>
    );
  },
);
