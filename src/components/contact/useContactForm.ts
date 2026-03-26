import { useMemo, useState, type ChangeEvent, type SyntheticEvent } from 'react';
import type { ContactDictionary } from '../../i18n/contact';
import { submitContactForm } from './contactForm.service';
import {
  createInitialContactFormValues,
  type ContactFormFieldErrors,
  type ContactFormValues,
  type ContactSubmitState,
} from './contactForm.types';
import { validateContactFormValues } from './contactForm.validation';

type UseContactFormParams = {
  copy: ContactDictionary['form'];
};

export function useContactForm({ copy }: Readonly<UseContactFormParams>) {
  const [values, setValues] = useState<ContactFormValues>(createInitialContactFormValues);
  const [fieldErrors, setFieldErrors] = useState<ContactFormFieldErrors>({});
  const [submitState, setSubmitState] = useState<ContactSubmitState>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasErrors = useMemo(() => Object.keys(fieldErrors).length > 0, [fieldErrors]);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;
      setValues((prev) => ({ ...prev, [field]: nextValue }));

      if (fieldErrors[field]) {
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }

      if (submitState !== 'idle') {
        setSubmitState('idle');
      }
    };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateContactFormValues(values, copy.validation);
    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitState('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      await submitContactForm({
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        challengeType: values.challengeType,
        message: values.message.trim(),
      });

      setValues(createInitialContactFormValues());
      setFieldErrors({});
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    fieldErrors,
    submitState,
    isSubmitting,
    hasErrors,
    handleChange,
    handleSubmit,
  };
}
