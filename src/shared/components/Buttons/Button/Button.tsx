import React, { ButtonHTMLAttributes, CSSProperties, forwardRef } from 'react';
import { Button as MTButton } from '@mantine/core';
import styles from './Button.module.css';
import { ButtonSize, sizeControl } from './lib/sizeControl';
import { ButtonVariant, variantControl } from './lib/variantControl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  btnStyles?: CSSProperties;
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      handleClick,
      children,
      size = ButtonSize.medium,
      variant = ButtonVariant.primary,
      btnStyles,
      icon,
      ...props
    },
    ref,
  ) => {
    return (
      <MTButton
        ref={ref}
        leftSection={icon || undefined}
        style={{ ...sizeControl(size), ...btnStyles }}
        classNames={variantControl(variant, styles)}
        radius={26}
        onClick={handleClick}
        {...props}
      >
        {children}
      </MTButton>
    );
  },
);
