import { Grid as MTGrid } from '@mantine/core';
import styles from './Grid.module.css';

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <MTGrid
      w="100%"
      gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}
      classNames={{
        inner: styles.innerContent,
        root: styles.content,
        col: styles.col,
      }}
    >
      {children}
    </MTGrid>
  );
};

export default Grid;
