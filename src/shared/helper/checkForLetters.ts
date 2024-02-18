export const checkForLetters = (str: string) => {
  return /^[а-яА-Я]+$/.test(str);
};
