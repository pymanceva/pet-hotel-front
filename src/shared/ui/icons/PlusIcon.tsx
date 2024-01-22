import { FC } from 'react';

export const PlusIcon: FC<{ color?: string }> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={color ?? 'white'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8H12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color ?? 'white'}
      />
      <path
        d="M8 12V4"
        stroke={color ?? 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
