import type { Language } from './portfolio';
import contactEs from '../content/contact/contact-es.json';
import contactEn from '../content/contact/contact-en.json';
import { contactDictionarySchema, type ContactDictionaryFromSchema } from '../content/schemas';

export type ContactDictionary = ContactDictionaryFromSchema;

const contactEsValidated = contactDictionarySchema.parse(contactEs) as ContactDictionary;
const contactEnValidated = contactDictionarySchema.parse(contactEn) as ContactDictionary;

export const contactDictionaries: Record<Language, ContactDictionary> = {
  es: contactEsValidated,
  en: contactEnValidated,
};
