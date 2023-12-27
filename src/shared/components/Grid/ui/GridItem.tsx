import { Grid, Group, Title } from '@mantine/core';
import { ButtonIcon } from '@/shared/components/Buttons';
import { EditIcon } from '@/shared/ui/icons/EditIcon';
import { TrashboxIcon } from '@/shared/ui/icons/TrashboxIcon';

interface ItemProps {
  firstColText: string;
  secondColText: string;
}

export const GridItem: React.FC<ItemProps> = ({
  firstColText,
  secondColText,
}) => {
  return (
    <Grid.Col span={12}>
      <Group justify="space-between">
        <Group justify="space-between">
          <Title order={5} w="248px" fw={400}>
            {firstColText}
          </Title>
          <Title order={5} w="248px" fw={400}>
            {secondColText}
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
