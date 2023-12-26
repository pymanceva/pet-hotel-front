import Grid from '@/shared/components/Grid/ui/Grid';
import { GridHeader } from '@/shared/components/Grid/ui/GridHeader';

export const EmployeeGrid = () => {
  return (
    <>
      <GridHeader firstColTitle="Имя" secondColTitle="Должность" />
      <Grid>Сотрудники</Grid>
    </>
  );
};
