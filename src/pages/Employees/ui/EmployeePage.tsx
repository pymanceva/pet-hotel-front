import { Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Input } from '@/shared/components/Input/ui/Input';
import ContentHeader from '@/widgets/ContentHeader/ui/ContentHeader';
import { EmployeeGrid } from '@/widgets/Grids';

export const EmployeePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Group px="md" w="100%">
      <ContentHeader
        handleClick={open}
        contentTitle="Команда"
        actionText="Добавить сотрудника"
      />
      <EmployeeGrid />
      <Modal opened={opened} onClose={close} title="Новый сотрудник">
        <Input placeholder="Фамилия" />
      </Modal>
    </Group>
  );
};
