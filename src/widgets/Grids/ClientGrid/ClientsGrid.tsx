import { useNavigate } from 'react-router-dom';
import { Flex } from '@mantine/core';
import Grid from '@/shared/components/Grid/ui/Grid';
import { GridHeader } from '@/shared/components/Grid/ui/GridHeader';
import { Person } from '@/pages/Client/model/types';
import Client from './Client';

interface IProps {
  data: Person[];
}

export const ClientsGrid = (props: IProps) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <>
      <GridHeader
        firstColTitle="Данные клиента"
        secondColTitle="Данные питомцев"
      />

      <Grid>
        <Flex direction="column">
          {data.map((client) => {
            return (
              <Client
                navigateToClientPage={() => navigate(`/client/${client.id}`)}
                key={client.id}
                client={client}
              />
            );
          })}
        </Flex>
      </Grid>
    </>
  );
};
