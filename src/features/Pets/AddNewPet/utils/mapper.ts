import { INewPetDto } from '../../../../../generated/models/NewPetDto';
import { TNewDog } from '../config/types';

export const getMappedDataForRequest = (
  data: TNewDog,
  ownerId: number,
): INewPetDto => ({
  ...data,
  ownerId,
  sex: data.sex || INewPetDto.ESex.MALE,
});
