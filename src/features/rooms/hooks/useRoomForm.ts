import { useForm } from '@mantine/form';
import { ERoomType, IRequestForRoomCreation } from '@/shared/types/request';

export const useRoomForm = () => {
  const form = useForm<IRequestForRoomCreation>({
    initialValues: {
      number: '',
      isAvailable: false,
      type: ERoomType.BABY_SIZE,
      price: undefined,
      size: undefined,
    },
    validate: {
      isAvailable: (value) => (value ? undefined : 'Выберите что-либо'),
      number: (value) => (value ? undefined : 'Введите название номера'),
      price: (value) => (value ? undefined : 'Введите стоиость'),
      size: (value) => (value ? undefined : 'Введите размер'),
    },
  });

  return { form };
};
