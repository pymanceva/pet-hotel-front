import { INewPetDto } from '../../../../../generated/models/NewPetDto';

export type TNewDog = {
  name: string;
  breed: string;
  birthDate: string; // "dd.MM.yyyy"
  type: INewPetDto.EType;
  sex: INewPetDto.ESex | undefined;
  color?: string;
  sign?: string;
  isExhibition?: boolean;
  vetVisitDate?: string; // "dd.MM.yyyy"
  vetVisitReason?: string;
  vaccine?: string;
  fleaMite?: string;
  surgery?: string;
  pastDisease?: string;
  allergy?: boolean;
  allergyType?: string;
  heatDate?: string;
  chronicDisease?: boolean;
  chronicDiseaseType?: string;
  vetData?: string;
  stayAlone?: string;
  specialCare?: string;
  stayWithoutMaster?: string;
  isDogTraining?: boolean;
  trainingName?: string;
  barkHowl?: string;
  furnitureDamage?: string;
  foodFromTable?: string;
  defecateAtHome?: string;
  markAtHome?: string;
  newPeople?: string;
  isBitePeople?: boolean;
  reasonOfBite?: string;
  playWithDogs?: string;
  toys?: string;
  walking?: string;
  morningWalking?: string;
  dayWalking?: string;
  eveningWalking?: string;
  feedingQuantity?: number;
  feedType?: string;
  feedName?: string;
  feedComposition?: string;
  feedingRate?: string;
  feedingPractice?: string;
  treat?: string;
  isMedicine?: boolean;
  medicineRegimen?: string;
  additionalData?: string;
};
