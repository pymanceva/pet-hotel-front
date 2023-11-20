import { create } from 'zustand';
import { IInitialState } from '../types/types';

export const useUserStore = create<IInitialState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));
