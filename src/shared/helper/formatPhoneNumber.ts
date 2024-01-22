/**
 * Formats a phone number by removing non-digit characters and adding a country code, area code
 *
 * @param {string} phoneNumber - The phone number to be formatted.
 * @return {string} The formatted phone number.
 */
export function formatPhoneNumber(phoneNumber: string): string {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  const areaCode = cleanedPhoneNumber.slice(1, 4);
  const restOfNumber = cleanedPhoneNumber.slice(4);

  const formattedPhoneNumber = `+7 (${areaCode}) ${restOfNumber.slice(
    0,
    3,
  )}-${restOfNumber.slice(3, 5)}-${restOfNumber.slice(5)}`;

  return formattedPhoneNumber;
}
