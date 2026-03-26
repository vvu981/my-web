import { z } from 'zod';

export const aboutMeSectionSchema = z.object({
  Title: z.string().min(1),
  Content: z.string(),
});

export const aboutMeSectionsSchema = z.array(aboutMeSectionSchema);

export const experienceItemSchema = z.object({
  id: z.string().min(1),
  company: z.string().min(1),
  role: z.string().min(1),
  period: z.string().min(1),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  location: z.string().optional(),
  summary: z.string().min(1),
  highlights: z.array(z.string()),
  stack: z.array(z.string()),
});

export const experienceItemsSchema = z.array(experienceItemSchema);

export const contactChallengeTypeSchema = z.enum(['architecture', 'fullstack', 'audit']);

export const contactChallengeTypeOptionSchema = z.object({
  value: contactChallengeTypeSchema,
  label: z.string().min(1),
});

export const contactValidationSchema = z.object({
  requiredName: z.string().min(1),
  requiredEmail: z.string().min(1),
  invalidEmail: z.string().min(1),
  requiredChallengeType: z.string().min(1),
  requiredMessage: z.string().min(1),
});

export const contactFormSchema = z.object({
  tag: z.string().min(1),
  fullNameLabel: z.string().min(1),
  fullNamePlaceholder: z.string().min(1),
  emailLabel: z.string().min(1),
  emailPlaceholder: z.string().min(1),
  challengeTypeLabel: z.string().min(1),
  challengeTypePlaceholder: z.string().min(1),
  challengeTypes: z.array(contactChallengeTypeOptionSchema).min(1),
  messageLabel: z.string().min(1),
  messagePlaceholder: z.string().min(1),
  submitLabel: z.string().min(1),
  loadingLabel: z.string().min(1),
  successMessage: z.string().min(1),
  errorMessage: z.string().min(1),
  validation: contactValidationSchema,
});

export const contactDictionarySchema = z.object({
  page: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
  }),
  form: contactFormSchema,
});

export type AboutMeSection = z.infer<typeof aboutMeSectionSchema>;
export type ExperienceItemFromSchema = z.infer<typeof experienceItemSchema>;
export type ContactDictionaryFromSchema = z.infer<typeof contactDictionarySchema>;
