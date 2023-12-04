import { Grid, Group, Title } from '@mantine/core';
import styles from './EmployeesGrid.module.css';

export const EmployeesHeader = () => {
  return (
    <Grid
      w="100%"
      gutter={{ base: 5, xl: 50 }}
      classNames={{ inner: styles.inner, root: styles.root }}
    >
      <Grid.Col span={12} bg="rgba(213, 225, 255, 1)">
        <Group>
          <Title order={5} w="248px" fw={400}>
            Имя
          </Title>
          <Title order={5} w="248px" fw={400}>
            Должность
          </Title>
        </Group>
      </Grid.Col>
    </Grid>
  );
};
