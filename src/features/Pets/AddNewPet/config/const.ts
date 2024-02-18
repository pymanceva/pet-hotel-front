import { ComboboxItem } from '@mantine/core';
import { TNewDog } from './types';
import { INewPetDto } from '../../../../../generated/models/NewPetDto';

export const SEX_SELECT_DATA: ComboboxItem[] = [
  {
    label: 'Мальчик',
    value: 'MALE',
  },
  {
    label: 'Девочка',
    value: 'FEMALE',
  },
  {
    label: 'Гермафродит',
    value: 'HERMAPHRODITE',
  },
];

export const MARKS_FOR_SLIDER = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
];

export const INITIAL_VALUES_FOR_NEW_DOG_CREATION: TNewDog = {
  birthDate: '',
  breed: '',
  name: '',
  sex: undefined,
  type: INewPetDto.EType.DOG,
  additionalData: undefined,
  allergy: undefined,
  allergyType: undefined,
  barkHowl: undefined,
  chronicDisease: undefined,
  chronicDiseaseType: undefined,
  color: undefined,
  dayWalking: undefined,
  defecateAtHome: undefined,
  feedComposition: undefined,
  eveningWalking: undefined,
  feedingPractice: undefined,
  feedingQuantity: undefined,
  feedingRate: undefined,
  feedName: undefined,
  feedType: undefined,
  fleaMite: undefined,
  foodFromTable: undefined,
  furnitureDamage: undefined,
  isBitePeople: undefined,
  isDogTraining: undefined,
  isExhibition: undefined,
  isMedicine: undefined,
  heatDate: undefined,
  markAtHome: undefined,
  medicineRegimen: undefined,
  morningWalking: undefined,
  newPeople: undefined,
  playWithDogs: undefined,
  pastDisease: undefined,
  reasonOfBite: undefined,
  sign: undefined,
  specialCare: undefined,
  stayAlone: undefined,
  stayWithoutMaster: undefined,
  surgery: undefined,
  toys: undefined,
  trainingName: undefined,
  treat: undefined,
  vaccine: undefined,
  vetData: undefined,
  vetVisitDate: undefined,
  vetVisitReason: undefined,
  walking: undefined,
};
