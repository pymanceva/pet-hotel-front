import { useMutation } from '@tanstack/react-query';
import { PetControllerService } from '../../../../../generated/services/PetControllerService';
import { EMutationKeys } from './keys';
import { INewPetDto } from '../../../../../generated/models/NewPetDto';

export const usePetCreate = () => {
  return useMutation({
    mutationKey: [EMutationKeys.CREATE_PET],
    mutationFn: (data: INewPetDto) => PetControllerService.addPet(1, data),
  });
};

export const usePetUpdate = (id: number) => {
  return useMutation({
    mutationKey: [`${EMutationKeys.UPDATE_PET} ${id}`],
    mutationFn: (data: INewPetDto) =>
      PetControllerService.updatePet(1, id, data),
  });
};
