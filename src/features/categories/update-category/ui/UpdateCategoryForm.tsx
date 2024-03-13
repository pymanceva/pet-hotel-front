import { FC, useEffect } from 'react';
import { IRequestForCategoryUpdate } from '@/shared/types/request';
import { useCategoryForm } from '../../create-category/hooks/useCategoryForm';
import { CategoryForm } from '../../ui/CategoryForm';
import { useUpdateCategory } from '@/features/categories/update-category/api/mutations';

interface UpdateCategoryFormProps {
  data?: IRequestForCategoryUpdate;
  onClose?: () => void;
}

const UpdateCategoryForm: FC<UpdateCategoryFormProps> = ({ data, onClose }) => {
  const { mutateAsync: handleUpdateRoom } = useUpdateCategory();
  const { form } = useCategoryForm();

  useEffect(() => {
    if (data) {
      form.setValues(data);
      form.resetDirty(data);
    }
  }, []);

  const handleUpdate = async () => {
    if (!data) {
      return;
    }

    await handleUpdateRoom?.(form.values as IRequestForCategoryUpdate);
    onClose?.();
  };
  return (
    <CategoryForm
      onClose={onClose}
      handleSubmit={handleUpdate}
      form={form}
      btnText="Изменить"
    />
  );
};

export default UpdateCategoryForm;
