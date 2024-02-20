import { createFormContext } from '@mantine/form';
import { TNewDog } from './types';

export const [NewPetFormProvider, useNewPetFormContext, useNewPetForm] =
  createFormContext<TNewDog>();
