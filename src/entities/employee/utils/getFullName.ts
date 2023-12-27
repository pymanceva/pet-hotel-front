export const getFullName = (
  firstName: string,
  lastName?: string,
  middleName?: string,
): string => {
  if (!lastName && !middleName) {
    return firstName;
  }
  if (!lastName && middleName) {
    return `${firstName} ${middleName}`;
  }
  if (!middleName && lastName) {
    return `${firstName} ${lastName}`;
  }
  return `${firstName} ${middleName} ${lastName}`;
};
