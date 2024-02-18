import { IUserDto } from '../../../generated/models/UserDto';

export interface InitialStateForPetCreateOwner {
  user: IUserDto | null;
  setUser: (user: IUserDto) => void;
  removeUser: () => void;
}
