import Grid from '@/shared/components/Grid/ui/Grid';
import { GridHeader } from '@/shared/components/Grid/ui/GridHeader';
import { GridItem } from '@/shared/components/Grid/ui/GridItem';

export const RoomGrid = () => {
  return (
    <>
      <GridHeader firstColTitle="Категория" secondColTitle="Номер комнаты" />
      <Grid>
        <GridItem firstColText="Домашняя" secondColText="666" />
      </Grid>
    </>
  );
};
