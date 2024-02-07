import { Grid, Popover, Text } from '@mantine/core';

import CategoryItem from '@/entities/category/ui/CategoryItem';

const gridColStyle = {};

const CategoryGrid = () => {
  return (
    <Grid gutter={20} w="100%" m={10} mih={300}>
      <Grid.Col span={3}>
        <CategoryItem />
      </Grid.Col>
      <Grid.Col span={3}>
        <CategoryItem />
      </Grid.Col>
      <Grid.Col span={3}>
        <CategoryItem />
      </Grid.Col>
      <Grid.Col span={3}>
        <CategoryItem />
      </Grid.Col>
    </Grid>
  );
};

export default CategoryGrid;
