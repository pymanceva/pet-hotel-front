import { FC } from 'react';
import { Button } from '@/shared/components/Buttons';
import { DownArrowIcon } from '@/shared/ui/icons/DownArrowIcon';
import { ButtonVariant } from '@/shared/components/Buttons/Button/lib/variantControl';
import { UpArrowIcon } from '@/shared/ui/icons/UpArrowIcon';

export const AdditionalInfoButton: FC<{
  isAdditionalFieldsShown: boolean;
  onToggle: () => void;
}> = ({ isAdditionalFieldsShown, onToggle }) => {
  const Icon = isAdditionalFieldsShown ? UpArrowIcon : DownArrowIcon;
  return (
    <Button
      onClick={onToggle}
      rightIcon={<Icon />}
      variant={ButtonVariant.ghost}
      color="#0145AB"
    >
      {isAdditionalFieldsShown
        ? 'Скрыть дополнительные поля'
        : 'Отобразить все поля'}
    </Button>
  );
};
