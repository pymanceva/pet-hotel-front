import { Group, Tabs } from '@mantine/core';
import ContentHeader from '@/widgets/ContentHeader/ui/ContentHeader';
import { RoomGrid } from '@/widgets/Grids';

const RoomPage = () => {
  return (
    <Group px="md" w="100%">
      <ContentHeader
        handleClick={() => {}}
        contentTitle="Номера"
        actionText="Создать новый номер"
      />
      <Tabs defaultValue="active" orientation="horizontal" w="100%">
        <Tabs.List style={{ marginBottom: '20px' }}>
          <Tabs.Tab value="active">Действующие</Tabs.Tab>
          <Tabs.Tab value="deleted">Удаленные</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="active" w="100%">
          <RoomGrid />
        </Tabs.Panel>
        <Tabs.Panel value="deleted">
          <RoomGrid />
        </Tabs.Panel>
      </Tabs>
    </Group>
  );
};

export default RoomPage;
