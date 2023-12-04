import { Input as MTInput } from '@mantine/core';

interface InputProps {
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <MTInput placeholder={placeholder} />;
};
