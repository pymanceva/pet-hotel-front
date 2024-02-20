import { Employee } from '@/entities/employee';
import Grid from '@/shared/components/Grid/ui/Grid';
import { GridHeader } from '@/shared/components/Grid/ui/GridHeader';
import { useGetUsers } from '@/widgets/EmployeesGrid/model/api/queries';

export const EmployeeGrid = () => {
  const { data } = useGetUsers();
  return (
    <>
      <GridHeader firstColTitle="Имя" secondColTitle="Должность" />
      <Grid>
        {data?.map((employee) => (
          <Employee key={employee.id} {...employee} />
        ))}
      </Grid>
    </>
  );
};
