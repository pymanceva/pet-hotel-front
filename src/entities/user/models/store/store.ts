import { create } from 'zustand';
import { IInitialState } from '@/app/roles';

export const useUserStore = create<IInitialState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));
