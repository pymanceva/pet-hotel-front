import { useForm } from '@mantine/form';
import { IRequestForCategoryCreation } from '@/shared/types/request';

export const useCategoryForm = () => {
  const form = useForm<IRequestForCategoryCreation>({
    initialValues: {
      name: '',
      description: '',
    },
    validate: {
      name: (value) => (value ? undefined : 'Введите название'),
      description: (value) => (value ? undefined : 'Введите описание'),
    },
  });

  return { form };
};
