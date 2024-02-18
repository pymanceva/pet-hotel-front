import { useDisclosure } from '@mantine/hooks';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TPet } from '../../model/types';

export const usePetCreation = () => {
  const [
    isPetCreationOpened,
    { open: openPetCreationModal, close: closePetCreationModal },
  ] = useDisclosure(false);
  const [selectedPet, setSelectedPet] = useState<TPet | undefined>();
  const [error, setError] = useState<string>();

  const handleSelectPet = useCallback((key: TPet) => {
    setSelectedPet(key);
    setError(undefined);
  }, []);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (!selectedPet) {
      setError('Обязательное поле. Пожалуйста, выберете тип животного.');
      return;
    }

    switch (selectedPet as TPet) {
      case 'dog':
        navigate('/create/dog');
        break;
      case 'cat':
        navigate('/create/cat');
        break;
      default:
        break;
    }
  }, [selectedPet]);

  return {
    handleClick,
    handleSelectPet,
    isPetCreationOpened,
    openPetCreationModal,
    closePetCreationModal,
    error,
  };
};
