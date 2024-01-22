import React from 'react';
import { Flex, Text } from '@mantine/core';
import Card from '@/shared/components/Card/Card';
import { formatPhoneNumber } from '@/shared/helper/formatPhoneNumber';
import { Animal, Person } from '@/pages/Client/model/types';
import { PetInformationCard } from '@/features/Client/ui/PetInformationCard/ui/PetInformationCard';

interface ClientProps {
  client: Person;
  navigateToClientPage: () => void;
}

export interface AnimalInfo {
  label: string;
  value: keyof Animal;
}

export const animalInfo: AnimalInfo[] = [
  {
    label: 'Имя питомца',
    value: 'name',
  },
  {
    label: 'Тип',
    value: 'type',
  },
  {
    label: 'Подтип',
    value: 'subtype',
  },
];

const Client: React.FC<ClientProps> = ({ client, navigateToClientPage }) => {
  const { animals } = client;

  const cardInfo = [
    {
      label: 'ФИО',
      value: `${client.surname} ${client.name} ${client.middleName}`,
    },
    {
      label: 'Основной телефон',
      value: formatPhoneNumber(client.mainPhone),
    },
    {
      label: 'Второй телефон',
      value: formatPhoneNumber(client.optionalPhone),
    },
  ];

  return (
    <Flex gap="12px" justify="column">
      <Card mb="lg" radius="lg" ml="lg" isGray onClick={navigateToClientPage}>
        {cardInfo.map((info) => (
          <Flex direction="column" mb="12px">
            <Text size="sm" c="gray">
              {info.label}
            </Text>
            <Text>{info.value}</Text>
          </Flex>
        ))}
      </Card>
      {animals.length && (
        <PetInformationCard
          animalInfo={animalInfo}
          animals={animals.slice(0, 3)}
        />
      )}
    </Flex>
  );
};

export default Client;
