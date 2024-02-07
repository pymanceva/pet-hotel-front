import { FC } from 'react';

import { useCreateCategory } from '../api/mutations';
import { useCategoryForm } from '../hooks/useCategoryForm';
import CategoryForm from '../../ui/CategoryForm';

interface CreateCategoryFormProps {
  onClose?: () => void;
}

const CreateCategoryForm: FC<CreateCategoryFormProps> = ({ onClose }) => {
  const { mutateAsync: handleCategoryCreation } = useCreateCategory();
  const { form } = useCategoryForm();
  const handleCreate = async () => {
    await handleCategoryCreation?.(form.values);
    onClose?.();
  };

  return (
    <CategoryForm
      onClose={onClose}
      handleSubmit={handleCreate}
      form={form}
      btnText="Создать"
    />
  );
};

export default CreateCategoryForm;
