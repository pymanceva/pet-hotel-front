export enum EUserRoles {
  ROLE_BOSS = 'ROLE_BOSS',
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_USER = 'ROLE_USER',
  ROLE_FINANCIAL = 'ROLE_FINANCIAL',
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: EUserRoles;
}

export interface IInitialState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  removeUser: () => void;
}
