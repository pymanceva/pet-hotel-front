import { Checkbox, Flex, Input, Text } from '@mantine/core';
import { FC, useCallback, useState } from 'react';
import { useNewPetFormContext } from '../../config/form-context';
import { Title } from '@/shared/ui/Title';
import { AdditionalInfoButton } from './AdditionalInfoButton';
import { CheckboxGroup } from '@/shared/components/Checkbox-group/CheckboxGroup';
import { INewPetDto } from '../../../../../../generated/models/NewPetDto';

export const HealthInformation: FC = () => {
  const form = useNewPetFormContext();

  const [isInitialInfoShown, setIsInitialInfoShown] = useState(false);

  const toggleInfoButton = useCallback(
    () => setIsInitialInfoShown((p) => !p),
    [],
  );

  const isChronicDiseaseNotChecked =
    form.values.chronicDisease !== undefined && !form.values.chronicDisease;

  const isAllergyNotChecked =
    form.values.allergy !== undefined && !form.values.allergy;

  const additionalInfo = () => {
    return (
      <>
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Дата последнего посещения ветврача"
          {...form.getInputProps('vetVisitDate')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Причина последнего посещения врача"
          {...form.getInputProps('lastVetVisitReason')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Дата обработки от глистов/паразитов"
          {...form.getInputProps('parasites')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Даты обработки от блох/клещей с указанием препарата"
          {...form.getInputProps('fleaMite')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Перенесенные операции (кастрация)"
          {...form.getInputProps('surgery')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Перенесенные заболевания"
          {...form.getInputProps('pastDisease')}
        />

        <CheckboxGroup
          label="Есть ли аллергия?"
          renderContent={() => (
            <>
              <Checkbox
                label="Да"
                labelPosition="left"
                radius="xl"
                checked={form.values.allergy}
                onChange={() => form.setFieldValue('allergy', true)}
              />
              <Checkbox
                label="Нет"
                labelPosition="left"
                radius="xl"
                checked={isAllergyNotChecked}
                onChange={() => form.setFieldValue('allergy', false)}
              />
            </>
          )}
        />

        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="На что аллергия?"
          disabled={isAllergyNotChecked}
          {...form.getInputProps('allergyType')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Дата начала течки (для сук)"
          disabled={
            !form.values.sex || form.values.sex !== INewPetDto.ESex.FEMALE
          }
          {...form.getInputProps('heatDate')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Контакты ветврача"
          {...form.getInputProps('vetData')}
        />
      </>
    );
  };
  return (
    <div style={{ marginTop: '24px' }}>
      <Title size="20px" fontWeight="700">
        Здоровье
      </Title>
      <Flex mt="24px" w="520px" direction="column">
        <Input
          placeholder="Даты последних прививок, названия вакцин"
          radius="xl"
          {...form.getInputProps('vaccine')}
        />

        <CheckboxGroup
          label="Есть ли хронические заболевания?"
          renderContent={() => (
            <>
              <Checkbox
                label="Да"
                labelPosition="left"
                radius="xl"
                checked={form.values.chronicDisease}
                onChange={() => form.setFieldValue('chronicDisease', true)}
              />
              <Checkbox
                label="Нет"
                labelPosition="left"
                radius="xl"
                checked={isChronicDiseaseNotChecked}
                onChange={() => form.setFieldValue('chronicDisease', false)}
              />
            </>
          )}
        />

        <Input
          placeholder="Какие хронические заболевания?"
          radius="xl"
          disabled={isChronicDiseaseNotChecked}
          mt="24px"
          {...form.getInputProps('chronicDiseaseType')}
        />
        <AdditionalInfoButton
          isAdditionalFieldsShown={isInitialInfoShown}
          onToggle={toggleInfoButton}
        />
        {isInitialInfoShown && additionalInfo()}
      </Flex>
    </div>
  );
};
