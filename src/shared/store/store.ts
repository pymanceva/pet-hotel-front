import { create } from 'zustand';
import { InitialStateForPetCreateOwner } from '../types/store-types';

export const usePetCreateOwner = create<InitialStateForPetCreateOwner>(
  (set) => ({
    user: null,
    setUser: (user) => set({ user }),
    removeUser: () => set({ user: null }),
  }),
);
