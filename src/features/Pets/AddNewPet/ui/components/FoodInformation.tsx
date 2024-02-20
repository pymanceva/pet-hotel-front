import { Checkbox, Flex, Input, Slider, Text } from '@mantine/core';
import { FC, useCallback, useState } from 'react';
import { useNewPetFormContext } from '../../config/form-context';
import { AdditionalInfoButton } from './AdditionalInfoButton';
import { MARKS_FOR_SLIDER } from '../../config/const';
import { CheckboxGroup } from '@/shared/components/Checkbox-group/CheckboxGroup';
import { Title } from '@/shared/ui/Title';

const FoodInformation: FC = () => {
  const [isAdditionalFieldsShown, setIsAdditionalFieldsShown] = useState(false);

  const onToggle = useCallback(() => setIsAdditionalFieldsShown((p) => !p), []);

  const form = useNewPetFormContext();

  const maxValue = MARKS_FOR_SLIDER[MARKS_FOR_SLIDER.length - 1].value;

  const isMedicineNotChecked =
    form.values.isMedicine !== undefined && !form.values.isMedicine;

  const additionalInfo = () => {
    return (
      <>
        <Flex mb="24px" direction="column">
          <Text>Количество кормлений в день</Text>
          <Slider
            marks={MARKS_FOR_SLIDER}
            max={maxValue}
            min={MARKS_FOR_SLIDER[0].value}
            defaultValue={MARKS_FOR_SLIDER[0].value}
            label={null}
            {...form.getInputProps('feedingQuantity')}
          />
        </Flex>
        <Input
          placeholder="Название корма/консервов"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('feedName')}
        />
        <Input
          placeholder="Состав корма/консервов"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('feedComposition')}
        />
        <Input
          placeholder="Норма на 1 кормление"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('feedingRate')}
        />
        <Input
          placeholder="Особенности кормления"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('feedingPractice')}
        />
        <Input
          placeholder="Разрешенные лакомства и их количество"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('treat')}
        />
        <CheckboxGroup
          label="Необходимы лекарства, витамины?"
          renderContent={() => (
            <>
              <Checkbox
                label="Да"
                labelPosition="left"
                radius="xl"
                checked={form.values.isBitePeople}
                onChange={() => form.setFieldValue('isMedicine', true)}
              />
              <Checkbox
                label="Нет"
                labelPosition="left"
                radius="xl"
                checked={isMedicineNotChecked}
                onChange={() => form.setFieldValue('isMedicine', false)}
              />
            </>
          )}
        />
        <Input
          placeholder="Название, режим приема лекарств/витаминов и доза"
          radius="xl"
          mt="16px"
          w="100%"
          disabled={isMedicineNotChecked}
          {...form.getInputProps('medicineRegimen')}
        />
      </>
    );
  };

  return (
    <div style={{ marginTop: '24px' }}>
      <Title size="20px" fontWeight="700">
        Питание
      </Title>
      <Flex mt="24px" w="520px" direction="column">
        <Input
          placeholder="Вид корма (сухой/натуралка/консервы)"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('foodType')}
        />
        <AdditionalInfoButton
          isAdditionalFieldsShown={isAdditionalFieldsShown}
          onToggle={onToggle}
        />
        {isAdditionalFieldsShown && additionalInfo()}
      </Flex>
    </div>
  );
};

export default FoodInformation;
