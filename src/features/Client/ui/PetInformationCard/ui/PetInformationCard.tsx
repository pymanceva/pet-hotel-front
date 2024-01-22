import React from 'react';
import { Flex, Text, Button, ActionIcon } from '@mantine/core';
import Card from '@/shared/components/Card/Card';
import { Animal } from '@/pages/Client/model/types';
import { AnimalInfo } from '@/widgets/Grids/ClientGrid/Client';
import { EditIcon } from '@/shared/ui/icons/EditIcon';

type AnimalCardProps = {
  animalInfo: AnimalInfo[];
  animals: Animal[];
  isEditable?: boolean;
};

export const PetInformationCard: React.FC<AnimalCardProps> = ({
  animalInfo,
  animals,
  isEditable,
}) => {
  return animals.map((animal) => (
    <Card mb="lg" radius="lg" ml="lg" mt="24px">
      {animalInfo.map((info) => (
        <Flex direction="column" mb="12px" key={info.label}>
          <Text size="sm" c="gray">
            {info.label}
          </Text>
          <Text>{animal[info.value]}</Text>
        </Flex>
      ))}
      {isEditable && (
        <Flex justify="flex-end">
          <ActionIcon
            style={{ cursor: 'pointer' }}
            variant="transparent"
            size="lg"
          >
            <EditIcon />
          </ActionIcon>
        </Flex>
      )}
    </Card>
  ));
};
