import { FC } from 'react';
import { useCreateRoom } from '../api/mutations';
import { useRoomForm } from '../../hooks/useRoomForm';
import { RoomForm } from '../../ui/RoomForm';

interface CreateRoomFormProps {
  onClose?: () => void;
}

const CreateRoomForm: FC<CreateRoomFormProps> = ({ onClose }) => {
  const { mutateAsync: handleRoomCreation } = useCreateRoom();
  const { form } = useRoomForm();
  const handleCreate = async () => {
    await handleRoomCreation?.(form.values);
    onClose?.();
  };

  return (
    <RoomForm
      onClose={onClose}
      handleSubmit={handleCreate}
      form={form}
      btnText="Создать"
    />
  );
};

export default CreateRoomForm;
