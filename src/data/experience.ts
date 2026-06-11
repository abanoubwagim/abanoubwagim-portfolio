export interface ExperienceItem {
id: string;
period: string;
title: string;
company: string;
description: string;
isCurrent: boolean;
}

export const experience: ExperienceItem[] = [
{
id: 'ministry-backend',
period: 'Dec 2025 — Feb 2026',
title: 'Backend Developer',
company: 'Ministry of Youth & Sports of Egypt',
description:
'Worked on real-time backend features for BookFairGo, including implementing a WebSocket/STOMP-based notification system for live event updates. Designed an offline-first data flow using SQLite with periodic synchronization to support users in low-connectivity environments. Improved database performance by identifying and resolving N+1 query issues and reducing inefficient joins. Contributed to authentication flows and resolved production issues related to session handling and validation. Collaborated with frontend and QA teams to define and align API contracts, ensuring consistent integration across services. Also supported live deployment activities and addressed critical backend issues during peak traffic to maintain system stability.',
isCurrent: false,
},
{
id: 'gdsc-mentor',
period: 'Aug 2023 — Aug 2024',
title: 'Java Track Mentor & Speaker',
company: 'Google Developer Student Clubs',
description:
'Java Track Mentor focused on teaching core Java, OOP, and backend fundamentals through workshops and hands-on sessions.',
isCurrent: false,
},
];
