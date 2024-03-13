import { useQuery } from '@tanstack/react-query';
import { ECategoryQueries } from './keys';
import CategoryService from '@/features/categories/api/category.service';

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: [ECategoryQueries.GET_ALL_CATEGORIES],
    queryFn: () => CategoryService.getAllCategoriess(),
  });
};
