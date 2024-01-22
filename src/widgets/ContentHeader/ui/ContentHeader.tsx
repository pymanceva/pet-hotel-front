import { Flex, Title } from '@mantine/core';
import { Button } from '../../../shared/components/Buttons';
import { PlusIcon } from '@/shared/ui/icons/PlusIcon';
import { ButtonSize } from '../../../shared/components/Buttons/Button/lib/sizeControl';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';

interface ContentHeaderProps {
  handleClick: () => void;
  contentTitle: string;
  actionText: string;
  buttonVariant?: ButtonVariant;
  colorIcon?: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  handleClick,
  contentTitle,
  actionText,
  buttonVariant,
  colorIcon,
}) => {
  return (
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
        {contentTitle}
      </Title>
      <Button
        handleClick={handleClick}
        icon={<PlusIcon color={colorIcon} />}
        size={ButtonSize.small}
        variant={buttonVariant}
      >
        {actionText}
      </Button>
    </Flex>
  );
};

export default ContentHeader;
