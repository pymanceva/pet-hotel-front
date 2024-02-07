export enum ERoomType {
  BABY_SIZE = 'BABY_SIZE',
  STANDARD = 'STANDART',
  LUX = 'LUX',
  CATS = 'CATS',
  EXOTS = 'EXOTS',
  LIKE_HOME = 'LIKE_HOME',
}

export interface IRequestForRoomCreation {
  id?: number;
  number: string;
  price?: number;
  size?: number;
  type: ERoomType;
  isAvailable?: boolean;
}

export interface IRequestForRoomUpdate {
  id: number;
  number: string;
  price?: number;
  size?: number;
  type: ERoomType;
  isAvailable?: boolean;
}

export interface IRoom {
  id: number;
  number: string;
  type: ERoomType;
  size: number;
  isAvailable: boolean;
  price: number;
}

export interface ICategory {
  id: number;
  name: string;
  description?: string;
}

export interface IRequestForCategoryCreation {
  name: string;
  description?: string;
}

export interface IRequestForCategoryUpdate {
  id: number;
  name: string;
  description?: string;
}
