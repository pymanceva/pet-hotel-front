import { FC } from 'react';
import { InformationWrapper } from '@/features/Client';
import { PetInfoWrapper } from './PetInfoWrapper';
import { GridHeader } from '@/shared/components/Grid/ui/GridHeader';
import { Animal } from '@/pages/Client/model/types';

export const PetList: FC<{ animals: Animal[]; onOpen: () => void }> = ({
  animals,
  onOpen,
}) => {
  return (
    <InformationWrapper
      renderHeader={() => <GridHeader firstColTitle="Питомцы" />}
      renderContent={() => <PetInfoWrapper animals={animals} onOpen={onOpen} />}
    />
  );
};
