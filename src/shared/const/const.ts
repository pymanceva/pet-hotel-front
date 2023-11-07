import { ComboboxItem } from '@mantine/core';
import { ERoomType } from '../types/request';

export const isAvailableSelectItems: ComboboxItem[] = [
  { label: 'Доступна', value: 'yes' },
  { label: 'Недоступна', value: 'no' },
];

export const roomTypeSelectItems: ComboboxItem[] = [
  { label: ERoomType.BABY_SIZE, value: ERoomType.BABY_SIZE },
  { label: ERoomType.CATS, value: ERoomType.CATS },
  { label: ERoomType.EXOTS, value: ERoomType.EXOTS },
  { label: ERoomType.LUX, value: ERoomType.LUX },
  { label: ERoomType.STANDARD, value: ERoomType.STANDARD },
];

export const API_URL = 'http://localhost:8080';
