import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EMutationKeys as EMutationCategoryKeys } from './keys';
import { IRequestForCategoryCreation } from '@/shared/types/request';
import CategoryService from '../../api/category.service';
import { ERoomQueries } from '@/pages/Categories/api/keys';

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EMutationCategoryKeys.CREATE_CATEGORY],
    mutationFn: (data: IRequestForCategoryCreation) =>
      CategoryService.postCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ERoomQueries.GET_ALL_CATEGORIES],
      });
    },
  });
};
