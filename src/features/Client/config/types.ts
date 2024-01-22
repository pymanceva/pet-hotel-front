export interface Step<T> {
  label: string;
  fields: {
    name: keyof T;
    label: string;
  }[];
}

export interface FormData {
  firstName: string;
  lastName: string;
  middleName?: string;
  rating?: string;
  phoneNumber: string;
  secondNumber?: string;
  otherContacts?: string;
  address?: string;
  referringPerson?: string;
  whereDidYouFindUs?: string;
}
