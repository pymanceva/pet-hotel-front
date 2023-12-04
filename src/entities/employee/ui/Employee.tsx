import { Grid, Group, Title } from '@mantine/core';
import { ButtonIcon } from '@/shared/components/Buttons';
import { EditIcon } from '@/shared/ui/icons/EditIcon';
import TrashboxIcon from '@/shared/ui/icons/TrashboxIcon';

interface IEmployee {
  name: string;
  position: string;
}

export const Employee: React.FC<IEmployee> = ({ name, position }) => {
  return (
    <Grid.Col span={12}>
      <Group justify="space-between">
        <Group justify="space-between">
          <Title order={5} w="248px" fw={400}>
            {name}
          </Title>
          <Title order={5} w="248px" fw={400}>
            {position}
          </Title>
        </Group>
        <Group justify="center">
          <ButtonIcon Icon={<EditIcon />} handleClick={() => {}} />
          <ButtonIcon Icon={<TrashboxIcon />} handleClick={() => {}} />
        </Group>
      </Group>
    </Grid.Col>
  );
};
