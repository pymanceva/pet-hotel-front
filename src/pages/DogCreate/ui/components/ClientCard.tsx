import { FC } from 'react';
import { Flex, Text } from '@mantine/core';
import { getFullName } from '@/entities/employee/utils/getFullName';
import Card from '@/shared/components/Card/Card';
import { Field } from '@/shared/components/Field/Field';
import { RatingIcon } from '@/shared/ui/icons/RatingIcon';

interface IProps {
  name: string;
  surname?: string;
  middleName?: string;
  rating?: string;
}
export const ClientCard: FC<IProps> = ({
  name,
  middleName,
  rating,
  surname,
}) => {
  return (
    <Card isGray h="168px">
      <Field
        fieldName="ФИО клиента"
        renderContent={() => (
          <Text>
            <Flex>
              {getFullName(name, surname, middleName)} <RatingIcon /> {rating}
            </Flex>
          </Text>
        )}
      />
      <Field
        fieldName="Тип животного"
        renderContent={() => <Text>Собака</Text>}
      />
    </Card>
  );
};
