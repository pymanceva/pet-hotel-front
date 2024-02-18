import React, { useEffect } from 'react';
import { Modal, Text } from '@mantine/core';
import { Animal } from '@/pages/Client/model/types';
import { PetCreationModalBody } from './components/PetCreationModalBody';
import { getFullName } from '@/entities/employee/utils/getFullName';
import { PetCreationModalFooter } from './components/PetCreationModalFooter';
import { usePetCreation } from './hooks/usePetCreation';
import { ClientDetails } from './components/ClientDetails';
import { PetList } from './components/PetList';
import { usePetCreateOwner } from '@/shared/store/store';

const client = {
  id: 104,
  surname: 'Петров',
  name: 'Фёдор',
  middleName: 'Мартиросяныч',
  mainPhone: '79123456789',
  optionalPhone: '71234567890',
  otherContacts: 'VK - FSumkin, TG - @Fumkin',
  actualAddress: 'г. Омск, ул. Омуля д.15, кв.32',
  trustedMan: 'Гендальф, +79217775533',
  source: 'Рассказали друзья',
  rating: 3,
  animals: Array.from<Animal>({ length: 3 }).fill({
    name: 'Venus',
    type: 'Dog',
    subtype: 'Golden Retriever',
  }),
};

export const ClientInformationPage: React.FC = () => {
  const {
    closePetCreationModal,
    handleClick,
    handleSelectPet,
    isPetCreationOpened,
    openPetCreationModal,
    error,
  } = usePetCreation();
  const { setUser } = usePetCreateOwner();

  useEffect(() => {
    // @ts-ignore
    setUser(client);
  }, []);

  return (
    <div>
      <ClientDetails client={client} />

      <PetList animals={client.animals} onOpen={openPetCreationModal} />
      <Modal
        onClose={closePetCreationModal}
        opened={isPetCreationOpened}
        radius="md"
        size="680px"
        centered
        style={{
          boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.16)',
          paddingBottom: 0,
        }}
      >
        <div>
          <Modal.Body>
            <Text mb="16px" fz="24px" fw="800">
              Новый питомец
            </Text>
            <PetCreationModalBody
              name={getFullName(client.name, client.surname, client.middleName)}
              rating={client.rating}
              onChangePet={handleSelectPet}
              error={error}
            />

            <PetCreationModalFooter
              onCancel={closePetCreationModal}
              onClick={handleClick}
            />
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};
