export interface TrainingItem {
id: string;
period: string;
title: string;
organization: string;
description: string;
}

export const training = [
{
id: 'iti-java',
period: 'Jul 2024 — Aug 2024',
title: 'Java Developer Trainee',
organization: 'Information Technology Institute (ITI)',
description:
'Completed intensive Java training focused on OOP, data structures, multithreading, and software development fundamentals.',
},
{
id: 'nti-frontend',
period: 'May 2025 — Jul 2025',
title: 'Frontend Developer Intern',
organization: 'National Telecommunication Institute (NTI)',
description:
'Built responsive interfaces using HTML, CSS, JavaScript, and Bootstrap with focus on frontend fundamentals and UI structure.',
},
{
id: 'depi-mobile',
period: 'Apr 2024 — Oct 2024',
title: 'Mobile Development Intern',
organization: 'Digital Egypt Pioneers Initiative (DEPI)',
description:
'Worked with Flutter and Dart on mobile applications involving API integration, Firebase, and local storage.',
},
];
