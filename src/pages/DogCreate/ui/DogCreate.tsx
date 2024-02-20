import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { Title } from '@/shared/ui/Title';
import { FormForNewPet } from '@/features/Pets/AddNewPet/ui/FormForNewPet';
import { usePetCreateOwner } from '@/shared/store/store';
import { usePetCreate } from '@/features/Pets/AddNewPet/api/mutation';
import { ClientCard } from './components/ClientCard';
import Footer from '@/features/Pets/AddNewPet/ui/components/Footer';

export const DogCreate: FC = () => {
  const { user } = usePetCreateOwner();
  const { mutateAsync } = usePetCreate();
  const navigate = useNavigate();

  const onCancel = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div>
      <div style={{ marginTop: '24px', marginLeft: '24px' }}>
        <Title size="36px" fontWeight="800">
          Создание нового питомца
        </Title>
        <Flex gap="24px">
          <FormForNewPet ownerId={user?.id!} onSubmit={mutateAsync} />
          <ClientCard
            // @ts-ignore
            name={user?.name}
            // @ts-ignore
            rating={user?.rating}
            // @ts-ignore
            middleName={user?.middleName}
            // @ts-ignore
            surname={user?.surname}
          />
        </Flex>
      </div>
      <Footer
        onSaveText="Сохранить"
        onCancelText="Закрыть"
        onCancel={onCancel}
        formId="new-pet-form"
      />
    </div>
  );
};
