export enum ERoomType {
  BABY_SIZE = 'baby_size',
  STANDARD = 'standard',
  LUX = 'lux',
  CATS = 'cats',
  EXOTS = 'exots',
  LIKE_HOME = 'like_home',
}

export interface IRequestForRoomCreation {
  id?: number;
  number: string;
  price?: number;
  size?: number;
  type: ERoomType;
  isAvailable?: boolean;
}
