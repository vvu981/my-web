import type { PortfolioDictionary, ValueProp } from '../types';

export const shared: Partial<PortfolioDictionary> & { social: { github: string; linkedin: string }, valueProps: ValueProp[] } = {
  brandName: 'Victor Vallejo',
  contact: { email: 'contact@victor-vallejo.me' },
  techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'C#', 'REST APIs', 'Prisma', 'Java', 'Git', 'GitHub'],
  social: { github: 'GitHub', linkedin: 'LinkedIn' },
  valueProps: [
    { tag: '', title: '', desc: '', icon: 'lightning' },
    { tag: '', title: '', desc: '', icon: 'hex' },
    { tag: '', title: '', desc: '', icon: 'diamond' },
  ] as ValueProp[],
};
