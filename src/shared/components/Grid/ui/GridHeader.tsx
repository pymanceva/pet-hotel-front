import { Grid, Group, Title } from '@mantine/core';
import styles from './Grid.module.css';

interface GridHeaderProps {
  firstColTitle: string;
  secondColTitle: string;
}

export const GridHeader: React.FC<GridHeaderProps> = ({
  firstColTitle,
  secondColTitle,
}) => {
  return (
    <Grid
      w="100%"
      gutter={{ base: 5, xl: 50 }}
      classNames={{ inner: styles.inner, root: styles.root }}
    >
      <Grid.Col span={12} bg="rgba(213, 225, 255, 1)">
        <Group>
          <Title order={5} w="248px" fw={400}>
            {firstColTitle}
          </Title>
          <Title order={5} w="248px" fw={400}>
            {secondColTitle}
          </Title>
        </Group>
      </Grid.Col>
    </Grid>
  );
};
