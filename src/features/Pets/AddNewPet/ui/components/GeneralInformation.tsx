import { FC, useState } from 'react';
import { Checkbox, FileInput, Flex, Input, Select } from '@mantine/core';
import { Title } from '@/shared/ui/Title';
import { useNewPetFormContext } from '../../config/form-context';
import { SEX_SELECT_DATA } from '../../config/const';
import { AdditionalInfoButton } from './AdditionalInfoButton';

interface GeneralInformationProps {}
const AdditionalInfo = () => {
  return (
    <>
      <Input radius="xl" mt="16px" w="100%" placeholder="Окрас" />
      <Input
        radius="xl"
        mt="16px"
        w="100%"
        placeholder="Чип, Клеймо, Особые приметы"
      />
      {/* TODO: Добавить кастомный дроп для файлов по макетам, пока просто мок */}
      <FileInput radius="xl" mt="16px" w="100%" />
    </>
  );
};

export const GeneralInformation: FC<GeneralInformationProps> = () => {
  const [isAdditionalFieldsShown, setIsAdditionalFieldsShown] =
    useState<boolean>(false);
  const form = useNewPetFormContext();
  const onToggle = () => setIsAdditionalFieldsShown((p) => !p);

  return (
    <div style={{ marginTop: '24px' }}>
      <Title size="20px" fontWeight="700">
        Общая информация
      </Title>
      <Flex w="520px" direction="column">
        <Input
          placeholder="Кличка*"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('name')}
        />
        <Input
          placeholder="Порода*"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('breed')}
        />
        <Flex w="100%" justify="space-between">
          {/* TODO: Добавить кастомный календарь, пока мок */}
          <Input
            placeholder="Дата рождения*"
            radius="xl"
            mt="16px"
            w="100%"
            {...form.getInputProps('birthDate')}
          />
          <Input
            placeholder="Возраст*"
            radius="xl"
            mt="16px"
            ml="16px"
            w="100%"
            {...form.getInputProps('age')}
            disabled
          />
          <Select
            placeholder="Пол*"
            radius="xl"
            mt="16px"
            ml="16px"
            w="100%"
            data={SEX_SELECT_DATA}
            {...form.getInputProps('sex')}
          />
        </Flex>
        <Flex align="center">
          <Checkbox
            mt="16px"
            label="Выставочная собака"
            labelPosition="right"
            styles={{
              label: {
                fontSize: '16px',
                textAlign: 'center',
              },
            }}
            {...form.getInputProps('isExhibition')}
          />
        </Flex>
        <AdditionalInfoButton
          isAdditionalFieldsShown={isAdditionalFieldsShown}
          onToggle={onToggle}
        />
        {isAdditionalFieldsShown && AdditionalInfo()}
      </Flex>
    </div>
  );
};
