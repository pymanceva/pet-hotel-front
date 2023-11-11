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
