import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CategoryService from '../api/category.service';
import { EMutationKeys } from './keys';
import { ECategoryQueries } from '@/pages/Categories/api/keys';

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [`${EMutationKeys.DELETE_CATEGORY}`],
    mutationFn: (id?: number) => CategoryService.deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ECategoryQueries.GET_ALL_CATEGORIES],
      });
      navigate('/categories');
    },
  });
};
