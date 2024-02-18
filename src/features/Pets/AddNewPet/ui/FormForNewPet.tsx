import { FC } from 'react';
import { NewPetFormProvider, useNewPetForm } from '../config/form-context';
import { GeneralInformation } from './components/GeneralInformation';
import { HealthInformation } from './components/HealthInformation';
import { validateNewPet } from '../utils/validate';
import { INITIAL_VALUES_FOR_NEW_DOG_CREATION } from '../config/const';
import { getMappedDataForRequest } from '../utils/mapper';
import { INewPetDto } from '../../../../../generated/models/NewPetDto';
import { BehaviorInformation } from './components/BehaviorInformation';
import FoodInformation from './components/FoodInformation';

export const FormForNewPet: FC<{
  ownerId: number;
  onSubmit: (data: INewPetDto) => void;
}> = ({ ownerId, onSubmit }) => {
  const form = useNewPetForm({
    validate(values) {
      return validateNewPet(values);
    },
    initialValues: {
      ...INITIAL_VALUES_FOR_NEW_DOG_CREATION,
    },
  });

  return (
    <NewPetFormProvider form={form}>
      <form
        onSubmit={form.onSubmit((values) =>
          onSubmit(getMappedDataForRequest(values, ownerId)),
        )}
        id="new-pet-form"
      >
        <GeneralInformation />
        <HealthInformation />
        <BehaviorInformation />
        <FoodInformation />
      </form>
    </NewPetFormProvider>
  );
};
