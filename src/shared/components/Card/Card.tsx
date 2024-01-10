import React from 'react';
import { Card as MantineCard, CardProps } from '@mantine/core';

interface MyCardProps extends CardProps {
  isGray?: boolean;
  width?: string;
}

const Card: React.FC<MyCardProps> = ({
  children,
  isGray,
  width = '296px',
  ...rest
}) => {
  return (
    <MantineCard
      style={{
        padding: '32px 24px',
        backgroundColor: isGray ? '#F6F8FF' : '#FFFFFF',
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.09)',
        width,
      }}
      {...rest}
    >
      {children}
    </MantineCard>
  );
};

export default Card;
