import { useQuery } from '@tanstack/react-query';
import { EQueriesKeys } from './keys';
import { PetControllerService } from '../../../../../generated/services/PetControllerService';

export const useGetPetById = (id: number) => {
  return useQuery({
    queryKey: [`${EQueriesKeys.GET_PET_BY_ID} ${id}`],
    queryFn: () => PetControllerService.getPetById(1, id),
    enabled: !!id,
  });
};
