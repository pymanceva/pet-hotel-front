import { Button, Container, Drawer, Flex, Text } from '@mantine/core';
import { FC } from 'react';

interface RoomDrawerProps {
  isDrawerOpened: boolean;
  handleConfirmationClick: () => void;
  handleDrawerCancelClick: () => void;
}

const RoomDrawer: FC<RoomDrawerProps> = ({
  isDrawerOpened,
  handleConfirmationClick,
  handleDrawerCancelClick,
}) => {
  return (
    <Drawer
      opened={isDrawerOpened}
      withCloseButton={false}
      onClose={handleConfirmationClick}
      position="right"
    >
      <Drawer.Body h="100%">
        <Container h="100%">
          <Flex direction="column" justify="space-between">
            <Text>Вы ввели данные. Вы уверены, что хотите покинуть форму?</Text>
            <Flex justify="space-between">
              <Button color="red" onClick={handleDrawerCancelClick}>
                Отмена
              </Button>
              <Button onClick={handleConfirmationClick}>Покинуть</Button>
            </Flex>
          </Flex>
        </Container>
      </Drawer.Body>
    </Drawer>
  );
};

export default RoomDrawer;
