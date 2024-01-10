import { FC, useEffect, useState } from 'react';
import {
  Button,
  Group,
  TextInput,
  Pagination,
  Flex,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContentHeader from '@/widgets/ContentHeader/ui/ContentHeader';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';
import { SearchIcon } from '@/shared/ui/icons/SearchIcon';
import { ClientsGrid } from '@/widgets/Grids/ClientGrid/ClientsGrid';

import { STEPS } from '../../../features/Client/config/config';
import { MultiStepModal } from '@/features/Client';
import { Person } from '../model/types';
import { fetchData } from '../model/mock';

export const ClientPage: FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    fetchData().then((d) => setData(d));
  }, []);

  return (
    <Group w="100%" px="md">
      <ContentHeader
        actionText="Добавить клиента"
        contentTitle="Клиенты"
        handleClick={open}
        buttonVariant={ButtonVariant.secondary}
        colorIcon="black"
      />
      <MultiStepModal
        steps={STEPS}
        isOpen={opened}
        onClose={close}
        renderTitle={() => <Title order={3}>Новый клиент</Title>}
      />

      <TextInput
        placeholder="Введите ФИО или телефон клиента"
        leftSection={<SearchIcon />}
        radius="lg"
        rightSection={
          <Button
            size="compact-md"
            radius="lg"
            style={{ position: 'absolute', right: '4px' }}
          >
            Найти
          </Button>
        }
        style={{ width: '450px' }}
      />

      <ClientsGrid data={data} />

      <Flex
        justify="center"
        w="100%"
        direction="column"
        align="center"
        gap="12px"
      >
        {/* TODO: Пагинация */}
        <Pagination total={1} />
        <Text c="gray">
          {data.length} из {data.length}
        </Text>
      </Flex>
    </Group>
  );
};
