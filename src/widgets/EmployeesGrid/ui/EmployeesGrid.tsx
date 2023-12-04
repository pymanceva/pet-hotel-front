import { Grid } from '@mantine/core';
import styles from './EmployeesGrid.module.css';
import { Employee } from '@/entities/employee';
import { EmployeesHeader } from './EmployeesHeader';

export const EmployeesGrid = () => {
  return (
    <div style={{ width: '100%' }}>
      <EmployeesHeader />
      <Grid
        w="100%"
        gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}
        classNames={{
          inner: styles.innerContent,
          root: styles.content,
          col: styles.col,
        }}
      >
        <Employee
          name="Иванов Иван ИвановичИвановичИванович"
          position="Менеджер"
        />
        <Employee
          name="Иванов Иван Иванович"
          position="МенеджерМенеджерМенеджерМенеджер"
        />
        <Employee
          name="Иванов Иван Иванович"
          position="МенеджерМенеджерМенеджерМенеджер"
        />
      </Grid>
    </div>
  );
};
