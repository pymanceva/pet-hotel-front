import { Grid, Popover, Text } from '@mantine/core';

import CategoryItem from '@/entities/category/ui/CategoryItem';
import { ICategory } from '@/shared/types/request';

const gridColStyle = {};

interface ICategoryGridProps {
  data: ICategory[];
  handleDeleteCategory: (id: number) => void;
}

const CategoryGrid: React.FC<ICategoryGridProps> = ({
  data,
  handleDeleteCategory,
}) => {
  return (
    <Grid gutter={20} w="100%" m={10} mih={300} display="flex">
      {data &&
        data?.map((category: ICategory) => (
          <Grid.Col key={category.id} style={gridColStyle} span={3}>
            <CategoryItem
              id={category.id}
              description={category.description || ''}
              name={category.name}
              handleDelete={handleDeleteCategory}
            />
          </Grid.Col>
        ))}
    </Grid>
  );
};

export default CategoryGrid;
