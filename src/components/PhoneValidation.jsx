import { isValidPhoneNumber } from 'libphonenumber-js';

const handlePhoneChange = (value, country) => {
  setPhoneCode(country.dialCode);
  setPhoneNumber(value.slice(country.dialCode.length));

  const phoneWithCode = `+${country.dialCode}${value.slice(country.dialCode.length)}`;
  const fieldErrors = { ...errors };

  // Validate the phone number based on the country code
  if (!value) {
    fieldErrors.phone = "Phone number is required";
  } else if (!isValidPhoneNumber(phoneWithCode)) {
    fieldErrors.phone = "Invalid phone number for this country";
  } else {
    delete fieldErrors.phone;
  }

  setErrors(fieldErrors);
};
