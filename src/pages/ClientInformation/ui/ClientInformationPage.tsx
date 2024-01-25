import React, { CSSProperties } from 'react';
import { Flex, Text } from '@mantine/core';
import { GridHeader } from '@/shared/components/Grid/ui/GridHeader';
import { ClientInformationCard } from '@/features/Client';
import { PetInformationCard } from '@/features/Client/ui/PetInformationCard/ui/PetInformationCard';
import { animalInfo } from '@/widgets/Grids/ClientGrid/Client';
import { InformationWrapper } from '@/features/Client/ui/InformationWrapper/ui/InformationWrapper';
import { Animal } from '@/pages/Client/model/types';
import { Button } from '@/shared/components/Buttons';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';
import { ButtonSize } from '@/shared/components/Buttons/Button/lib/sizeControl';
import { PlusIcon } from '@/shared/ui/icons/PlusIcon';

const styles: CSSProperties = {
  borderRadius: '0px 0px 8px 8px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.09)',
  marginBottom: '40px',
};
export const ClientInformationPage: React.FC = () => {
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

  const mainContentForPet = (
    <Flex justify="space-between">
      {client.animals.length > 0 ? (
        <Flex>
          <PetInformationCard
            animals={client.animals}
            animalInfo={animalInfo}
            isEditable
          />
        </Flex>
      ) : (
        <Text c="#757575" ta="center" mt="40px">
          Пока нет добавленных питомцев
        </Text>
      )}
      <Button
        variant={ButtonVariant.secondary}
        size={ButtonSize.small}
        icon={<PlusIcon color="black" />}
        style={{ marginTop: '31px', marginRight: '31px' }}
      >
        <Text fw="700" fz="12px" lh="18px">
          Добавить питомца
        </Text>
      </Button>
    </Flex>
  );

  return (
    <div>
      <InformationWrapper
        renderContent={() => (
          <div style={{ ...styles }}>
            <ClientInformationCard client={client} />
          </div>
        )}
        renderHeader={() => <GridHeader firstColTitle="Личные данные" />}
      />

      <InformationWrapper
        renderHeader={() => <GridHeader firstColTitle="Питомцы" />}
        renderContent={() => mainContentForPet}
      />
    </div>
  );
};
