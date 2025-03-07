import { object, string } from "yup";

const FIRST_LAST_NAME_REGEXP = /[a-zA-ZÀ-ÿ.,'’ -]/;

enum ERROR_TYPE {
  INVALID = "invalid",
  LONG = "too long",
  REQUIRED = "required",
  SHORT = "too short",
}

const _getErrorMessage =
    (fieldName: string) => (error: keyof typeof ERROR_TYPE) =>
      `${fieldName} is ${ERROR_TYPE[error]}!`,
  _getEmailError = _getErrorMessage("Email"),
  _getFirstNameError = _getErrorMessage("First Name"),
  _getLastNameError = _getErrorMessage("Last Name"),
  _getPhoneNumberError = _getErrorMessage("Phone Number");

export const formSchema = object().shape({
  email: string()
    .required(_getEmailError("REQUIRED"))
    .email(_getEmailError("INVALID")),
  firstName: string()
    .required(_getFirstNameError("REQUIRED"))
    .matches(FIRST_LAST_NAME_REGEXP, _getFirstNameError("INVALID"))
    .min(2, _getFirstNameError("SHORT"))
    .max(50, _getFirstNameError("LONG")),
  lastName: string()
    .required(_getLastNameError("REQUIRED"))
    .matches(FIRST_LAST_NAME_REGEXP, _getLastNameError("INVALID"))
    .min(2, _getLastNameError("SHORT"))
    .max(50, _getLastNameError("LONG")),
  phoneNumber: string()
    .required(_getPhoneNumberError("REQUIRED"))
    .min(12, _getPhoneNumberError("SHORT")),
});

export const isFieldError = (
  isTouched: boolean | undefined,
  errorMessage: string | undefined,
) => !!isTouched && !!errorMessage;
