export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlight: string;
}

export const education: EducationItem[] = [
  {
    id: 'bsc-bis',
    degree: 'Bachelor of Science',
    field: 'Business Information Systems',
    institution: 'Higher Institute for Specific Studies',
    location: 'Giza, Egypt',
    period: '2022 - 2026',
    highlight:
      'Focused on backend engineering, software architecture, database systems.',
  },
];