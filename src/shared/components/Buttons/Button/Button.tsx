import React, { CSSProperties } from 'react';
import { Button as MTButton } from '@mantine/core';
import styles from './Button.module.css';
import { ButtonSize, sizeControl } from './lib/sizeControl';
import { ButtonVariant, variantControl } from './lib/variantControl';
import { PlusIcon } from '@/shared/ui/icons/PlusIcon';

interface ButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  btnStyles?: CSSProperties;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  handleClick,
  children,
  size = ButtonSize.medium,
  variant = ButtonVariant.primary,
  btnStyles,
  icon,
}) => {
  return (
    <MTButton
      leftSection={icon || undefined}
      style={{ ...sizeControl(size), ...btnStyles }}
      classNames={variantControl(variant, styles)}
      radius={26}
      onClick={handleClick}
    >
      {children}
    </MTButton>
  );
};
