export interface Person {
  id: number;
  surname: string;
  name: string;
  middleName: string;
  mainPhone: string;
  optionalPhone: string;
  otherContacts: string;
  actualAddress: string;
  trustedMan: string;
  source: string;
  rating: number;
  animals: Animal[];
}

export interface Animal {
  name: string;
  type: string;
  subtype: string;
}
