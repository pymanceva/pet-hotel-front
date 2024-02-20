import { IUserDto } from '../../../../generated/models/UserDto';

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: IUserDto.ERole;
}

export interface IInitialState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  removeUser: () => void;
}
