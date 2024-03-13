import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EMutationKeys } from './keys';
import { IRequestForCategoryUpdate } from '@/shared/types/request';

import CategoryService from '../../api/category.service';
import { ECategoryQueries } from '@/pages/Categories/api/keys';

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EMutationKeys.UPDATE_CATEGORY],
    mutationFn: (data: IRequestForCategoryUpdate) =>
      CategoryService.updateCategory(data),
    onSuccess: (d) => {
      queryClient.invalidateQueries({
        queryKey: [`${ECategoryQueries.GET_ALL_CATEGORIES} ${d.id}`],
      });
    },
  });
};
