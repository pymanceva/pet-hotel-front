import { Flex } from '@mantine/core';
import Grid from '@/shared/components/Grid/ui/Grid';
import { GridHeader } from '@/shared/components/Grid/ui/GridHeader';
import Client from './Client';
import { Person } from '@/pages/Client/model/types';

interface IProps {
  data: Person[];
}

export const ClientsGrid = (props: IProps) => {
  const { data } = props;

  return (
    <>
      <GridHeader
        firstColTitle="Данные клиента"
        secondColTitle="Данные питомцев"
      />

      <Grid>
        <Flex direction="column">
          {data.map((client) => {
            return <Client key={client.id} client={client} />;
          })}
        </Flex>
      </Grid>
    </>
  );
};
