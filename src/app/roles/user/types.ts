import { UserDto } from '../../../../generated/models/UserDto';

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: UserDto.role;
}

export interface IInitialState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  removeUser: () => void;
}
