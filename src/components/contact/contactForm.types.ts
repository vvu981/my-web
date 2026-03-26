import type { ContactDictionary } from '../../i18n/contact';

export type ChallengeType = ContactDictionary['form']['challengeTypes'][number]['value'];

export type ContactFormValues = {
  fullName: string;
  email: string;
  challengeType: '' | ChallengeType;
  message: string;
};

export type ContactFormFieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactSubmitState = 'idle' | 'success' | 'error';

export function createInitialContactFormValues(): ContactFormValues {
  return {
    fullName: '',
    email: '',
    challengeType: '',
    message: '',
  };
}
