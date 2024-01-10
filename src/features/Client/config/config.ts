import { FormData, Step } from './types';

export const INITIAL_VALUES_FOR_MULTI_STEP_FORM_NEW_CLIENT: FormData = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  middleName: '',
  otherContacts: '',
  rating: '',
  referringPerson: '',
  secondNumber: '',
  whereDidYouFindUs: '',
};

export const STEPS: Step<FormData>[] = [
  {
    label: 'Шаг 1: ФИО',
    fields: [
      { name: 'firstName', label: 'Имя*' },
      { name: 'lastName', label: 'Фамилия*' },
      { name: 'middleName', label: 'Отчество' },
      { name: 'rating', label: 'Рейтинг' },
    ],
  },
  {
    label: 'Шаг 2: Контакты',
    fields: [
      { name: 'phoneNumber', label: 'Основной телефон*' },
      { name: 'secondNumber', label: 'Дополнительный телефон' },
      { name: 'otherContacts', label: 'Другие контакты' },
    ],
  },
  {
    label: 'Шаг 3: Дополнительная информация',
    fields: [
      { name: 'address', label: 'Фактический адрес*' },
      { name: 'referringPerson', label: 'Доверенное лицо' },
      { name: 'whereDidYouFindUs', label: 'Откуда узнал о нас' },
    ],
  },
];

/**
 * Validates the given form data based on the current step.
 *
 * @param {FormData} values - The form data to be validated.
 * @param {number} currentStep - The current step of the form.
 * @return {Partial<FormData>} The errors object containing any validation errors.
 */
export const validateNewClientData = (
  values: FormData,
  currentStep: number,
) => {
  const errors: Partial<FormData> = {};

  switch (currentStep) {
    case 0:
      if (!values.firstName) {
        errors.firstName = 'Пожалуйста, заполните это поле';
      }
      if (!values.lastName) {
        errors.lastName = 'Пожалуйста, заполните это поле';
      }
      if (values.firstName.length > 0 && values.firstName.length < 2) {
        errors.firstName =
          'Имя не может содержать меньше двух буквенных символов';
      }
      if (values.lastName.length > 0 && values.lastName.length < 2) {
        errors.lastName =
          'Фамилия не может содержать меньше двух буквенных символов';
      }
      if (values.firstName && !/^[a-zA-Z]+$/.test(values.firstName)) {
        errors.firstName =
          'Пожалуйста, используйте в этом поле только буквенные символы';
      }
      if (values.lastName && !/^[a-zA-Z]+$/.test(values.lastName)) {
        errors.lastName =
          'Пожалуйста, используйте в этом поле только буквенные символы';
      }
      if (values.rating && Number.isNaN(+values.rating)) {
        errors.rating = 'Введите число';
      }

      break;
    case 1:
      if (values.phoneNumber.replace(/[^0-9]/g, '').length < 11) {
        errors.phoneNumber = 'Введите корректный номер';
      }
      if (
        values.secondNumber &&
        values.secondNumber.replace(/[^0-9]/g, '').length < 11
      ) {
        errors.secondNumber = 'Введите корректный номер';
      }
      break;
    case 2:
      if (!values.address) {
        errors.address = 'Введите адрес';
      }
      break;
    default:
      break;
  }

  return errors;
};
