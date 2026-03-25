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

export type AboutMeSection = z.infer<typeof aboutMeSectionSchema>;
export type ExperienceItemFromSchema = z.infer<typeof experienceItemSchema>;
