export interface Reference {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export const references: Reference[] = [
  {
    id: 'ref-ahmed-samir',
    name: 'Dr. Ahmed Samir',
    role: 'Professor of Computer Software',
    company: 'Higher Institute for Specific Studies',
    quote:
      'Abanoub showed strong technical skills, discipline, and genuine curiosity throughout his studies and supervised Java-based work.',
    initials: 'AS',
  },
  {
    id: 'ref-mohamed-nabil',
    name: 'Dr. Mohamed Nabil',
    role: 'Professor of Information Systems',
    company: 'Higher Institute for Specific Studies',
    quote:
      'He demonstrated strong analytical thinking, teamwork, and consistent performance in system analysis, databases, and software engineering.',
    initials: 'MN',
  },
  {
    id: 'ref-rania-abdel-monam',
    name: 'Dr. Rania Abd El-Monam',
    role: 'Professor of IT Infrastructure',
    company: 'Higher Institute for Specific Studies',
    quote:
      'Abanoub combined theoretical understanding with practical discipline and showed strong initiative in advanced systems work.',
    initials: 'RA',
  },
  {
    id: 'ref-heba-hosney',
    name: 'Heba Hosney Awaad',
    role: 'Scout Leader',
    company: 'St. Mina Church',
    quote:
      'He showed leadership, responsibility, teamwork, and reliability in community and scouting activities.',
    initials: 'HH',
  },
];
