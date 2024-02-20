import { FC } from 'react';
import { Flex, Text } from '@mantine/core';

import { TClientInformation } from '@/pages/ClientInformation/model/types';
import { getFullName } from '@/entities/employee/utils/getFullName';
import { RatingIcon } from '@/shared/ui/icons/RatingIcon';
import { Field } from '../../../shared/components/Field/Field';
import { formatPhoneNumber } from '@/shared/helper/formatPhoneNumber';
import { Button } from '@/shared/components/Buttons';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';
import { ButtonSize } from '@/shared/components/Buttons/Button/lib/sizeControl';
import { EditIconForButton } from '@/shared/ui/icons/EditIconForButton';

interface ClientInformationCardProps {
  client: TClientInformation;
}

export const ClientInformationCard: FC<ClientInformationCardProps> = ({
  client,
}) => {
  const {
    actualAddress,
    mainPhone,
    middleName,
    name,
    optionalPhone,
    otherContacts,
    rating,
    source,
    surname,
    trustedMan,
  } = client;

  const fullName = getFullName(name, middleName, surname);

  const NameField = (
    <Text>
      {fullName} <RatingIcon />
      {rating}
    </Text>
  );
  return (
    <Flex p="24px 32px" justify="space-between">
      <Flex direction="column">
        <div>
          <Field fieldName="ФИО" renderContent={() => NameField} />
          <Field
            fieldName="Основной телефон"
            renderContent={() => <Text>{formatPhoneNumber(mainPhone)}</Text>}
          />
          <Field
            fieldName="Второй телефон"
            renderContent={() => (
              <Text>{formatPhoneNumber(optionalPhone)}</Text>
            )}
          />
          <Field
            fieldName="Прочие контакты"
            renderContent={() => <Text>{otherContacts}</Text>}
          />
        </div>
      </Flex>
      <Flex direction="column">
        <div>
          <Field
            fieldName="Фактический адрес"
            renderContent={() => <Text>{actualAddress}</Text>}
          />
          <Field
            fieldName="Доверенное лицо"
            renderContent={() => <Text>{trustedMan}</Text>}
          />
          <Field
            fieldName="Откуда узнал о гостинице"
            renderContent={() => <Text>{source}</Text>}
          />
        </div>
      </Flex>

      <Button
        variant={ButtonVariant.secondary}
        size={ButtonSize.small}
        rightIcon={<EditIconForButton />}
      >
        <div>
          <Text fw="700" fz="12px" lh="18px">
            Редактировать
          </Text>
        </div>
      </Button>
    </Flex>
  );
};
