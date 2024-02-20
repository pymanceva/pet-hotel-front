import { FC, useCallback, useState } from 'react';
import { Checkbox, Flex, Input } from '@mantine/core';
import { Title } from '@/shared/ui/Title';
import { useNewPetFormContext } from '../../config/form-context';
import { CheckboxGroup } from '@/shared/components/Checkbox-group/CheckboxGroup';
import { AdditionalInfoButton } from './AdditionalInfoButton';

export const BehaviorInformation: FC = () => {
  const form = useNewPetFormContext();

  const [isAdditionalFieldsShown, setIsAdditionalFieldsShown] = useState(false);

  const toggleInfoButton = useCallback(
    () => setIsAdditionalFieldsShown((p) => !p),
    [],
  );
  const isBitePeopleNotChecked =
    form.values.isBitePeople !== undefined && !form.values.isBitePeople;
  const additionalInfo = () => {
    return (
      <>
        <Input
          placeholder="Есть ли опыт разлуки с хозяином?"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('stayWithoutMaster')}
        />
        <Input
          placeholder="Лает / воет в одиночестве?"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('barkHowl')}
        />
        <Input
          placeholder="Портит ли вещи, мебель?"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('furnitureDamage')}
        />
        <Input
          placeholder="Ворует ли еду со стола?"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('foodFromTable')}
        />
        <Input
          placeholder="Справляет ли  нужду дома?"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('defecateAtHome')}
        />
        <Input
          placeholder="Метит дома?"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('markAtHome')}
        />
        <CheckboxGroup
          label="Кусал ли кого-то когда-нибудь?"
          renderContent={() => (
            <>
              <Checkbox
                label="Да"
                labelPosition="left"
                radius="xl"
                checked={form.values.isBitePeople}
                onChange={() => form.setFieldValue('isBitePeople', true)}
              />
              <Checkbox
                label="Нет"
                labelPosition="left"
                radius="xl"
                checked={isBitePeopleNotChecked}
                onChange={() => form.setFieldValue('chronicDisease', false)}
              />
            </>
          )}
        />
        <Input
          placeholder="Причина, почему кусал"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('reasonOfBite')}
        />
        <Input
          placeholder="Играет / гуляет с другими собаками?"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('playWithDogs')}
        />
        <Input
          placeholder="Любимые игрушки, игры"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('toys')}
        />
        <Input
          placeholder="Сколько раз в день привык гулять?/Гуляет ли на улице?"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('walking')}
        />
        <Input
          placeholder="Утро. Привычное время прогулок"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('morningWalking')}
        />
        <Input
          placeholder="День. Привычное время прогулок"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('dayWalking')}
        />
        <Input
          placeholder="Вечер. Привычное время прогулок"
          radius="xl"
          mt="16px"
          w="100%"
          {...form.getInputProps('eveningWalking')}
        />
      </>
    );
  };

  const isDogTrainingNotChecked =
    form.values.isDogTraining !== undefined && !form.values.isDogTraining;
  return (
    <div style={{ marginTop: '24px' }}>
      <Title size="20px" fontWeight="700">
        Поведение и уход
      </Title>
      <Flex mt="24px" w="520px" direction="column">
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Умеет ли оставаться один?"
          {...form.getInputProps('stayAlone')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Требуется ли спец уход, какой?"
          {...form.getInputProps('specialCare')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Как относится к незнакомым людям?"
          {...form.getInputProps('newPeople')}
        />
        <Input
          radius="xl"
          mt="16px"
          w="100%"
          placeholder="Умеет ли оставаться один?"
          {...form.getInputProps('stayAlone')}
        />
        <CheckboxGroup
          label="Прошел ли курс послушания?"
          renderContent={() => (
            <>
              <Checkbox
                label="Да"
                labelPosition="left"
                radius="xl"
                checked={form.values.isDogTraining}
                onChange={() => form.setFieldValue('isDogTraining', true)}
              />
              <Checkbox
                label="Нет"
                labelPosition="left"
                radius="xl"
                checked={isDogTrainingNotChecked}
                onChange={() => form.setFieldValue('isDogTraining', false)}
              />
            </>
          )}
        />
        <AdditionalInfoButton
          isAdditionalFieldsShown={isAdditionalFieldsShown}
          onToggle={toggleInfoButton}
        />
        {isAdditionalFieldsShown && additionalInfo()}
      </Flex>
    </div>
  );
};
