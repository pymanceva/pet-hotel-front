import { Flex, Popover, Text, Title } from '@mantine/core';

import { ButtonIcon } from '@/shared/components/Buttons';
import { EditIcon } from '@/shared/ui/icons/EditIcon';
import { TrashboxIcon } from '@/shared/ui/icons/TrashboxIcon';
import Caption from '@/shared/components/Typography/Caption/Caption';
import Description from '@/shared/components/Typography/Description/Description';
import { ICategory } from '../types/ICategory';

interface ICategoryProps {
  id?: number;
  name: string;
  description: string;
  handleDelete: (id: number) => void;
}

const CategoryItem: React.FC<ICategoryProps> = ({
  name,
  description,
  handleDelete,
  id,
}: ICategory) => {
  return (
    <Flex
      direction="column"
      gap={8}
      py={32}
      px={24}
      miw={248}
      style={{
        boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.09)',
        border: '1px solid rgba(246, 248, 255, 1)',
      }}
    >
      <Caption>Категория</Caption>
      <Description>{name}</Description>
      <Popover width={200} position="bottom" shadow="md">
        <Popover.Target>
          <Caption>Описание</Caption>
        </Popover.Target>
        <Popover.Dropdown style={{ position: 'absolute', bottom: '0' }}>
          <Text size="xs">{description}</Text>
        </Popover.Dropdown>
      </Popover>
      <Flex display="flex" gap={12} justify="end">
        <ButtonIcon Icon={<EditIcon />} handleClick={() => {}} />
        <ButtonIcon
          Icon={<TrashboxIcon />}
          handleClick={() => handleDelete(id)}
        />
      </Flex>
    </Flex>
  );
};

export default CategoryItem;
