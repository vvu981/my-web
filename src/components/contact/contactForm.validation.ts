import type { ContactDictionary } from '../../i18n/contact';
import type { ContactFormFieldErrors, ContactFormValues } from './contactForm.types';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactFormValues(
  values: ContactFormValues,
  validationCopy: ContactDictionary['form']['validation']
): ContactFormFieldErrors {
  const errors: ContactFormFieldErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = validationCopy.requiredName;
  }

  const normalizedEmail = values.email.trim();
  if (!normalizedEmail) {
    errors.email = validationCopy.requiredEmail;
  } else if (!EMAIL_PATTERN.test(normalizedEmail)) {
    errors.email = validationCopy.invalidEmail;
  }

  if (!values.challengeType) {
    errors.challengeType = validationCopy.requiredChallengeType;
  }

  if (!values.message.trim()) {
    errors.message = validationCopy.requiredMessage;
  }

  return errors;
}
