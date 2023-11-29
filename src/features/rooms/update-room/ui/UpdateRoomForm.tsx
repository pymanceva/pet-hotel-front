import { IRequestForRoomUpdate } from '@/shared/types/request';
import { useUpdateRoom } from '../api';
import { useRoomForm } from '../../hooks/useRoomForm';
import { FC, useEffect } from 'react';
import RoomForm from '../../ui/RoomForm';

interface UpdateRoomFormProps {
  data?: IRequestForRoomUpdate;
  onClose?: () => void;
}

const UpdateRoomForm: FC<UpdateRoomFormProps> = ({ data, onClose }) => {
  const { mutateAsync: handleUpdateRoom } = useUpdateRoom();
  const { form } = useRoomForm();

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

    await handleUpdateRoom?.(form.values as IRequestForRoomUpdate);
    onClose?.();
  };
  return (
    <RoomForm
      onClose={onClose}
      handleSubmit={handleUpdate}
      form={form}
      btnText="Изменить"
    />
  );
};

export default UpdateRoomForm;
