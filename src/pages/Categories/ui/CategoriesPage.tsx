import { Group, Tabs } from '@mantine/core';
import ContentHeader from '@/widgets/ContentHeader/ui/ContentHeader';
import CategoryGrid from '@/widgets/Grids/CategoryGrid/CategoryGrid';

const CategoriesPage = () => {
  return (
    <Group px="md" w="100%">
      <ContentHeader
        handleClick={() => {}}
        contentTitle="Категории"
        actionText="Создать новую категорию"
      />
      <CategoryGrid />
    </Group>
  );
};

export default CategoriesPage;
