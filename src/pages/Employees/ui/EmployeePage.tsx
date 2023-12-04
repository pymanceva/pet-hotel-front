import { Flex, Group, Modal, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@/shared/components/Buttons';
import { EmployeesGrid } from '@/widgets/EmployeesGrid/ui/EmployeesGrid';
import { PlusIcon } from '@/shared/ui/icons/PlusIcon';
import { ButtonSize } from '@/shared/components/Buttons/Button/lib/sizeControl';
import { Input } from '@/shared/components/Input/ui/Input';

export const EmployeePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Group px="md" w="100%">
      <Flex
        w="100%"
        mih={50}
        gap="sm"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        style={{ height: '48px' }}
      >
        <Title order={2} fw={800} style={{ fontSize: '36px' }}>
          Команда
        </Title>
        <Button handleClick={open} icon={<PlusIcon />} size={ButtonSize.small}>
          Добавить сотрудника
        </Button>
      </Flex>
      <EmployeesGrid />
      <Modal opened={opened} onClose={close} title="Новый сотрудник">
        <Input placeholder="Фамилия" />
      </Modal>
    </Group>
  );
};
