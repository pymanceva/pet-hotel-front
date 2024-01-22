import React, { CSSProperties, useState } from 'react';
import { useForm } from '@mantine/form';
import { IMaskInput } from 'react-imask';
import { Modal, Button, TextInput, Flex, Input } from '@mantine/core';
import { FormData, Step } from '../../config/types';

import {
  INITIAL_VALUES_FOR_MULTI_STEP_FORM_NEW_CLIENT,
  validateNewClientData,
} from '../../config/config';

interface MultiStepModalProps {
  isOpen: boolean;
  onClose: () => void;
  steps: Step<FormData>[];
  renderTitle: () => JSX.Element;
}
const style: CSSProperties = {
  boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.16)',
};
const initialStep = 0;

export const MultiStepModal: React.FC<MultiStepModalProps> = ({
  isOpen,
  onClose,
  steps,
  renderTitle,
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const form = useForm<FormData>({
    initialValues: INITIAL_VALUES_FOR_MULTI_STEP_FORM_NEW_CLIENT,
    validate(values) {
      return validateNewClientData(values, currentStep);
    },
    validateInputOnChange: true,
  });

  const currentStepFields = steps[currentStep].fields;

  const handleClose = () => {
    onClose();
    form.reset();
    setCurrentStep(initialStep);
  };

  const handleNextStep = () => {
    form.validate();
    if (form.isValid()) {
      setCurrentStep((p) => p + 1);
    }
  };
  const handlePreviousStep = () => setCurrentStep((p) => p - 1);

  const isThereErrors = Object.keys(form.errors).length > 0;

  return (
    <Modal
      opened={isOpen}
      onClose={handleClose}
      size="md"
      title={renderTitle()}
      radius="16px"
      style={{ ...style }}
    >
      <form onSubmit={form.onSubmit(console.log)}>
        <Modal.Title fw="bold" mb="24px">
          {steps[currentStep].label}
        </Modal.Title>
        <Modal.Body>
          {currentStepFields.map(({ name, label }) => {
            const isFieldMobile =
              name === 'phoneNumber' || name === 'secondNumber';

            return (
              <div key={name}>
                {isFieldMobile ? (
                  <Input.Wrapper mb="24px">
                    <Input
                      component={IMaskInput}
                      mask="+7 (000) 000-00-00"
                      placeholder={label}
                      radius="xl"
                      {...form.getInputProps(name)}
                    />
                    <Input.Error>{form.errors[name]}</Input.Error>
                  </Input.Wrapper>
                ) : (
                  <TextInput
                    placeholder={label}
                    styles={{
                      error: {
                        textAlign: 'center',
                      },
                    }}
                    radius="xl"
                    mb="24px"
                    {...form.getInputProps(name)}
                  />
                )}
              </div>
            );
          })}
          <Flex
            mt="lg"
            justify={currentStep === 0 ? 'flex-end' : 'space-between'}
          >
            {currentStep > 0 && (
              <Button
                onClick={handlePreviousStep}
                variant="outline"
                radius="xl"
                c="black"
                color="black"
                p="auto 44px"
                disabled={isThereErrors}
              >
                Назад
              </Button>
            )}
            {currentStep < steps.length - 1 ? (
              <Button onClick={handleNextStep} radius="xl">
                Следующий шаг
              </Button>
            ) : (
              <Button radius="xl" type="submit">
                Создать клиента
              </Button>
            )}
          </Flex>
        </Modal.Body>
      </form>
    </Modal>
  );
};
