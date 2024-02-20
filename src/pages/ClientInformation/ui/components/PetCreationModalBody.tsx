import { Text, Select } from '@mantine/core';
import { FC } from 'react';
import { RatingIcon } from '@/shared/ui/icons/RatingIcon';
import { SELECT_DATA } from '../../model/const';
import { TPet } from '../../model/types';

interface PetCreationModalBodyProps {
  name: string;
  rating: number;
  onChangePet: (value: TPet) => void;
  error?: string;
}

export const PetCreationModalBody: FC<PetCreationModalBodyProps> = ({
  name,
  rating,
  onChangePet,
  error,
}) => {
  return (
    <div>
      <div>
        <Text size="sm" c="#757575">
          ФИО клиента
        </Text>
        <Text>
          {name} <RatingIcon /> {rating}
        </Text>
      </div>
      <div>
        <Text fz="20px" fw="700" mt="24px" mb="16px">
          Тип животного
        </Text>
        <Select
          placeholder="Выберите тип животного"
          radius="xl"
          data={SELECT_DATA}
          onChange={(value) => onChangePet(value as TPet)}
          mb="32px"
          error={error}
        />
      </div>
    </div>
  );
};
