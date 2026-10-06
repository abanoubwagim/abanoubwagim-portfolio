export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlight: string;
}

export const education: EducationItem[] = [
  {
    id: 'bsc-bis',
    degree: 'Bachelor’s in Business Information Systems',
    institution: 'Higher Institute for Specific Studies',
    location: 'Giza, Egypt',
    period: '2022 - 2026',
    grade: 'GPA: 3.03 / 4.00 (Very Good)',
    highlight:
      'Focused on software development, backend engineering, database systems, and software architecture.',
  },
];