import type { ContactFormValues } from './contactForm.types';

const DEFAULT_FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojpvvpk';

export type ContactSubmitPayload = {
  fullName: string;
  email: string;
  challengeType: ContactFormValues['challengeType'];
  message: string;
};

export async function submitContactForm(
  payload: ContactSubmitPayload,
  endpoint: string = DEFAULT_FORMSPREE_ENDPOINT
): Promise<void> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('contact-submit-failed');
  }
}
