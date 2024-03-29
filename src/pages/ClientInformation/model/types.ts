import { Person } from '@/pages/Client/model/types';

export type TClientInformation = Omit<Person, 'animals'>;
export type TPet = 'dog' | 'cat' | 'other';
