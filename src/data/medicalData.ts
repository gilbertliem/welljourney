import { EscortStage, LiveSyncNode, FaqItem } from '../types';

export const ESCORT_STAGES: EscortStage[] = [
  {
    step: 1,
    title: 'Pre-Trip Health Profiling',
    titleZh: '行前健康画像与需求梳理',
    description: 'We gather medical history, chronic conditions, dietary restrictions, mobility preferences, and preferred language to construct a customized screening blueprint.',
    details: [
      'Detailed medical intake questionnaire review',
      'Targeted screening item customization with partner chief doctors',
      'Companion matching (English, Mandarin, Hokkien dialect)'
    ],
    color: 'tea'
  },
  {
    step: 2,
    title: 'Priority Hospital Registration',
    titleZh: '三甲医院绿色通道优先预约',
    description: 'Advance hospital slot booking and VIP registration eliminate the exhausting chaos of hospital lines, providing immediate access upon arrival.',
    details: [
      'Designated VIP appointment booking',
      'Pre-printed examination guides and test sequencing',
      'Step-free entrance and private waiting lounge access'
    ],
    color: 'amber'
  },
  {
    step: 3,
    title: 'Bedside & Clinic 1-on-1 Escort',
    titleZh: '全程一对一暖心陪诊与翻译',
    description: 'Your companion manages logistics, guides physical navigation, comforts the guest, and interprets medical terminology in real-time.',
    details: [
      'Room-to-room physical accompaniment and guidance',
      'Real-time bilingual physician dialogue interpretation',
      'Immediate post-fasting snacks and hydration'
    ],
    color: 'tea'
  },
  {
    step: 4,
    title: 'Post-Checkup Translation & Archiving',
    titleZh: '报告权威解读与双语数字归档',
    description: 'Doctor recommendations are translated into plain, reassuring language and securely delivered to family members as a permanent digital PDF archive.',
    details: [
      'Chief physician report debrief with companion translation',
      'Bilingual PDF health report compilation',
      '30-day post-retreat remote health inquiry support'
    ],
    color: 'terracotta'
  }
];

export const DEMO_LIVE_SYNC_NODES: LiveSyncNode[] = [
  {
    time: '08:05',
    title: 'Morning Pick-up & Check-in at Medical Center',
    sender: 'Companion Lin (林管家)',
    content: 'Good morning Mr. & Mrs. Zhang! We picked up your parents at the courtyard on time. Both are in great spirits. We have entered the VIP health screening center and are starting the preliminary blood draw now.',
    type: 'status',
    status: 'completed'
  },
  {
    time: '09:20',
    title: 'Ultrasound & Cardiac Screening Completed',
    sender: 'Companion Lin (林管家)',
    content: 'Abdominal ultrasound and ECG have just concluded smoothly. The technician noted good cardiac rhythm. Fasting phase is now over—we are heading to the private lounge for warm millet congee and steamed buns.',
    type: 'status',
    status: 'completed'
  },
  {
    time: '11:15',
    title: 'Physician Consultation & Preliminary Notes',
    sender: 'Companion Lin (林管家)',
    content: 'Doctor Chen from Internal Medicine has reviewed the initial blood panels and ultrasound. Overall vitals are stable! A 2-minute voice summary from the doctor is attached for your review.',
    type: 'voice',
    status: 'completed'
  },
  {
    time: '12:30',
    title: 'Post-Checkup Restorative Lunch at Garden Courtyard',
    sender: 'Companion Lin (林管家)',
    content: 'We have arrived at the peaceful courtyard restaurant. Mother and father are enjoying seasonal Minnan lotus root soup and light vegetable noodles. We will return to the hotel for afternoon tea and rest at 14:00.',
    type: 'photo',
    status: 'completed'
  },
  {
    time: '16:00',
    title: 'Digital Report Summary Compiled',
    sender: 'WellJourney Concierge Team',
    content: 'Preliminary translated health notes (English & Chinese) have been compiled into your family cloud folder. Complete laboratory metrics will be updated within 48 hours.',
    type: 'report',
    status: 'completed'
  }
];

export const MEDICAL_FAQS: FaqItem[] = [
  {
    id: 'med-faq-1',
    question: 'What happens if an unexpected condition or urgent finding is discovered during the checkup?',
    questionZh: '体检过程中如果发现突发异常指标或疑似病情，如何应对？',
    answer: 'Our companions are trained to remain calm and follow strict clinical protocol. The companion immediately coordinates an expedited on-site specialist consultation at our partner tertiary hospital. Simultaneously, our concierge calls the designated overseas family contact, conveying a clear, translated medical summary so decisions can be made collaboratively and promptly.'
  },
  {
    id: 'med-faq-2',
    question: 'Can we book ONLY the 1-Day Medical Escort without hotel accommodations?',
    questionZh: '可以只单独预订一日体检陪诊服务，不需要酒店住宿吗？',
    answer: 'Yes, absolutely. Our 1-Day Express Escort package is designed specifically for visitors or locals who already have lodging arranged in Quanzhou or Xiamen. We will pick up your family members from their designated address and provide full door-to-door accompaniment throughout the day.'
  },
  {
    id: 'med-faq-3',
    question: 'How do you handle dietary care for elders after fasting tests?',
    questionZh: '长辈空腹检查后，如何安排饮食与体力恢复？',
    answer: 'We pay close attention to senior blood sugar fluctuations and energy levels. As soon as fasting tests (blood draw, abdominal ultrasound) conclude, your companion provides pre-arranged gentle snacks and warm water. For lunch, we provide warm, digestible TCM-inspired congee or soft noodles that soothe the gastrointestinal tract.'
  },
  {
    id: 'med-faq-4',
    question: 'How is patient medical privacy safeguarded for overseas families?',
    questionZh: '客人的体检隐私和医疗档案如何安全保障？',
    answer: 'We treat all health data with the utmost confidentiality. All medical files and translations are transmitted via end-to-end encrypted family channels and secured PDF archives accessible only by authorized family members. We never share patient records with third parties.'
  }
];
