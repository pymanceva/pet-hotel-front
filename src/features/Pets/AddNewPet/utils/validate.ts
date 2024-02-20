import { checkForLetters } from '@/shared/helper/checkForLetters';
import { INewPetDto } from '../../../../../generated/models/NewPetDto';
import { TNewDog } from '../config/types';

export const validateNewPet = (data: TNewDog) => {
  const errors: Partial<Record<keyof INewPetDto, string>> = {};

  if (!data.name) {
    errors.name = 'Пожалуйста, заполните это поле';
  }
  if (data.name && data.name.length < 2 && !checkForLetters(data.name)) {
    errors.name = 'Кличка питомца должна содержать минимум 2 буквенных символа';
  }
  if (!data.breed) {
    errors.breed = 'Пожалуйста, заполните это поле';
  }
  if (data.breed && data.breed.length < 2 && !checkForLetters(data.breed)) {
    errors.breed =
      'Порода питомца должна содержать минимум 2 буквенных символа';
  }
  if (!data.birthDate) {
    errors.birthDate = 'Пожалуйста, заполните это поле';
  }
  if (!data.sex) {
    errors.sex = 'Пожалуйста, заполните это поле';
  }

  return errors;
};
