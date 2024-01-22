import React from 'react';
import { Flex, Text } from '@mantine/core';
import Card from '@/shared/components/Card/Card';
import { formatPhoneNumber } from '@/shared/helper/formatPhoneNumber';
import { Animal, Person } from '@/pages/Client/model/types';

interface ClientProps {
  client: Person;
}

interface AnimalInfo {
  label: string;
  value: keyof Animal;
}

const Client: React.FC<ClientProps> = ({ client }) => {
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

  const animalInfo: AnimalInfo[] = [
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

  return (
    <Flex gap="12px" justify="column">
      <Card mb="lg" radius="lg" ml="lg" isGray>
        {cardInfo.map((info) => (
          <Flex direction="column" mb="12px">
            <Text size="sm" c="gray">
              {info.label}
            </Text>
            <Text>{info.value}</Text>
          </Flex>
        ))}
      </Card>
      {animals.length &&
        animals.map((animal) => (
          <Card mb="lg" radius="lg" ml="lg">
            {animalInfo.map((info) => (
              <Flex direction="column" mb="12px">
                <Text size="sm" c="gray">
                  {info.label}
                </Text>
                <Text>{animal[info.value]}</Text>
              </Flex>
            ))}
          </Card>
        ))}
    </Flex>
  );
};

export default Client;
