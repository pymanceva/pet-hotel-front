import { ERoomType, IRequestForRoomCreation } from '@/shared/types/request';

export const mockData: IRequestForRoomCreation[] = [
  {
    id: 1,
    number: '101',
    price: 100,
    size: 20,
    type: ERoomType.BABY_SIZE,
    isAvailable: true,
  },
  {
    id: 2,
    number: '102',
    price: 150,
    size: 25,
    type: ERoomType.STANDARD,
    isAvailable: true,
  },
  {
    id: 3,
    number: '103',
    price: 200,
    size: 30,
    type: ERoomType.LUX,
    isAvailable: false,
  },
  {
    id: 4,
    number: '104',
    price: 120,
    size: 22,
    type: ERoomType.CATS,
    isAvailable: true,
  },
  {
    id: 5,
    number: '105',
    price: 180,
    size: 28,
    type: ERoomType.EXOTS,
    isAvailable: true,
  },
  {
    id: 6,
    number: '201',
    price: 250,
    size: 35,
    type: ERoomType.LIKE_HOME,
    isAvailable: false,
  },
  {
    id: 7,
    number: '202',
    price: 130,
    size: 23,
    type: ERoomType.BABY_SIZE,
    isAvailable: true,
  },
  {
    id: 8,
    number: '203',
    price: 190,
    size: 29,
    type: ERoomType.STANDARD,
    isAvailable: true,
  },
  {
    id: 9,
    number: '204',
    price: 220,
    size: 32,
    type: ERoomType.LUX,
    isAvailable: false,
  },
  {
    id: 10,
    number: '205',
    price: 140,
    size: 24,
    type: ERoomType.CATS,
    isAvailable: true,
  },
];