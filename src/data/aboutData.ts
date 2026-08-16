export interface InstitutionalPartner {
  title: string;
  titleZh: string;
  badge: string;
  description: string;
  icon: string;
}

export const INSTITUTIONAL_PARTNERS: InstitutionalPartner[] = [
  {
    title: 'Tongji University Jinjiang Innovation Center',
    titleZh: '同济大学晋江设计创新中心',
    badge: 'Research & Service Incubation',
    description: 'Proudly incubated with the support of the Tongji University Jinjiang International Design Innovation Center. Our accompaniment protocols and guest journeys are grounded in human-centered healthcare service design.',
    icon: 'GraduationCap'
  },
  {
    title: 'Jinjiang Three-Innovation Park (三创园)',
    titleZh: '晋江三创园',
    badge: 'Innovation Ecosystem',
    description: 'Operating within the robust innovation ecosystem of Jinjiang Three-Innovation Park, providing regulatory compliance, institutional credibility, and operational stability.',
    icon: 'Building2'
  },
  {
    title: 'Certified Healthcare Partner Network',
    titleZh: '三甲医院与健康管理协作网络',
    badge: 'Medical Collaboration',
    description: 'Collaborating with accredited tertiary hospitals and premium medical examination centers in Quanzhou to provide our guests with fast-track scheduling and VIP consultation.',
    icon: 'HeartHandshake'
  }
];

export const FOUR_COMMITMENTS = [
  {
    step: '01',
    title: 'Empathy First',
    titleZh: '被接住的感受 (Deep Empathy)',
    description: 'We train every companion to listen deeply, adapt to physical limits without rushing, and offer authentic warmth. Your family members will feel truly cared for, not merely managed.'
  },
  {
    step: '02',
    title: 'Total Transparency',
    titleZh: '过程全透明与节点同步 (Traceable Care)',
    description: 'Overseas children receive structured, real-time updates at every clinical and travel milestone. You will always know how your parents are feeling and what steps have been completed.'
  },
  {
    step: '03',
    title: 'Medical Boundary Integrity',
    titleZh: '严谨的责任边界 (Clinical Respect)',
    description: 'We know our clear boundary: we provide attentive logistics, language translation, and lifestyle comfort. All medical diagnoses, procedures, and prescriptions are strictly performed by licensed medical institutions.'
  },
  {
    step: '04',
    title: 'Cultural Authenticity',
    titleZh: '真实的在地日常 (Authentic Slow Living)',
    description: 'No manufactured tourist traps. We immerse guests in authentic Minnan slow living—gentle tea rituals, home-cooked nourishing broths, and peaceful ancient lanes.'
  }
];
