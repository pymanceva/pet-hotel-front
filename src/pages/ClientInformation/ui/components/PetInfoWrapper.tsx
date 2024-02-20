import { Flex, Text } from '@mantine/core';
import { FC } from 'react';
import { Animal } from '@/pages/Client/model/types';
import { animalInfo } from '@/widgets/Grids/ClientGrid/Client';
import { Button } from '@/shared/components/Buttons';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';
import { ButtonSize } from '@/shared/components/Buttons/Button/lib/sizeControl';
import { PlusIcon } from '@/shared/ui/icons/PlusIcon';
import { PetInformationCard } from '@/widgets/PetInformationCard/ui/PetInformationCard';

export const PetInfoWrapper: FC<{
  onOpen: () => void;
  animals: Animal[];
}> = ({ animals, onOpen }) => {
  return (
    <Flex justify="space-between">
      {animals.length > 0 ? (
        <Flex>
          <PetInformationCard
            animals={animals}
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
        leftIcon={<PlusIcon color="black" />}
        style={{ marginTop: '31px', marginRight: '31px' }}
        onClick={onOpen}
      >
        <Text fw="700" fz="12px" lh="18px">
          Добавить питомца
        </Text>
      </Button>
    </Flex>
  );
};
