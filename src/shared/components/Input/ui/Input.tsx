import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { Input as MTInput, MantineRadius, MantineSize } from '@mantine/core';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  placeholder: string;
  size?: MantineSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  radius?: MantineRadius;
  width?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, size, leftIcon, rightIcon, radius, width, ...rest }, ref) => {
    return (
      <MTInput
        leftSection={leftIcon}
        placeholder={placeholder}
        rightSection={rightIcon}
        radius={radius}
        width={width}
        ref={ref}
        size={size}
        {...rest}
      />
    );
  },
);
