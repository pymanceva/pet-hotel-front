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
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      handleClick,
      children,
      size = ButtonSize.medium,
      variant = ButtonVariant.primary,
      btnStyles,
      leftIcon,
      rightIcon,
      color,
      ...props
    },
    ref,
  ) => {
    return (
      <MTButton
        ref={ref}
        leftSection={leftIcon || undefined}
        rightSection={rightIcon || undefined}
        style={{ ...sizeControl(size), ...btnStyles }}
        classNames={variantControl(variant, styles)}
        radius={26}
        onClick={handleClick}
        color={color}
        {...props}
      >
        {children}
      </MTButton>
    );
  },
);
