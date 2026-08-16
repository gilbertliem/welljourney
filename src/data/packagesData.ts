import { PackageDetail, FaqItem } from '../types';
import quanzhouPagodasImg from '../assets/images/quanzhou_pagodas_1786862560508.jpg';
import hotelBedroomImg from '../assets/images/hotel_bedroom_suite_1786863906222.jpg';

export const PACKAGES_DATA: PackageDetail[] = [
  {
    id: '1-day-express',
    tabKey: '1day',
    title: '1-Day Express Checkup Escort',
    titleZh: '一日舒心体检陪诊',
    subtitle: 'Efficient, supported medical screening with VIP priority & bilingual escort.',
    tag: 'Light Experience',
    tagColor: 'slate',
    duration: '1 Day',
    price: '¥2,800',
    priceNote: '/ person',
    idealFor: 'Perfect for overseas visitors or travelers with tight schedules needing swift, fully escorted hospital navigation.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    description: 'A seamless, one-day health checkup journey that removes all hospital complexity. Designed for returning overseas Chinese or business travelers who already have accommodations but need dedicated, bilingual companionship and priority medical appointment facilitation in Quanzhou.',
    highlights: [
      'VIP appointment booking at partner tertiary medical centers',
      'Dedicated bilingual hospital companion (Mandarin, English, Hokkien)',
      'Real-time WhatsApp/WeChat node updates sent to overseas family',
      'Preliminary report translation & doctor consultation explanation',
      'Private roundtrip hotel/hospital transport & nourishing local lunch',
      'Post-visit digital PDF report archive'
    ],
    itinerary: [
      {
        day: 'Single Day Itinerary',
        title: 'Full-Day Comprehensive Care & Escort',
        events: [
          {
            time: '08:00 - 08:30',
            title: 'Morning Pick-up & Warm Welcome',
            description: 'Your dedicated bilingual companion and private driver greet you at your lodging or station with water, itinerary briefs, and medical questionnaires.',
            type: 'transport'
          },
          {
            time: '08:30 - 11:45',
            title: 'VIP Health Checkup & Bedside Companionship',
            description: 'Fast-track VIP registration. Companion assists through all departments (blood tests, comprehensive ultrasound, imaging, ECG), handling queuing and real-time doctor communication.',
            isHighlight: true,
            type: 'medical'
          },
          {
            time: '12:00 - 13:30',
            title: 'Restorative Post-Fasting Lunch',
            description: 'Enjoy a warm, gentle meal (digestible local seasonal congee or noodle soup) specifically prepared to ease the stomach after morning fasting.',
            type: 'dining'
          },
          {
            time: '14:00 - 15:30',
            title: 'Preliminary Consultation & Report Translation',
            description: 'Review initial test findings with the senior attending physician. Your companion translates notes into clear, jargon-free English and Chinese.',
            type: 'medical'
          },
          {
            time: '16:00',
            title: 'Private Return Transfer & Archiving',
            description: 'Drop-off at your hotel or transit station. Digital health report summary dispatched to family channels.',
            type: 'transport'
          }
        ]
      }
    ],
    inclusions: [
      {
        category: 'Health Services',
        included: [
          'VIP hospital appointment coordination',
          'Dedicated multi-lingual medical companion (1-on-1)',
          'All internal hospital paperwork & queue guidance',
          'Preliminary medical report translation & doctor summary'
        ],
        excluded: [
          'Prescription pharmacy medications outside checkup items',
          'Unscheduled secondary specialist surgeries or emergency interventions'
        ]
      },
      {
        category: 'Transportation & Dining',
        included: [
          'Private round-trip local transfers within Quanzhou city',
          'Nourishing post-checkup restorative lunch & gentle refreshments'
        ],
        excluded: [
          'Hotel overnight stay (optional add-on available upon request)',
          'Personal shopping and incidental expenses'
        ]
      },
      {
        category: 'Family Transparency',
        included: [
          'Real-time status updates via WhatsApp / WeChat',
          'Doctor audio summary voice note',
          'Secure PDF digital report archive'
        ],
        excluded: ['N/A']
      }
    ]
  },
  {
    id: '3-day-mind-body',
    tabKey: '3day',
    title: '3-Day 2-Night Mind-Body Balance Stay',
    titleZh: '三日两晚·身心平衡慢活之旅',
    subtitle: 'Our signature retreat blending thorough health assessment with slow-living courtyard serenity.',
    tag: 'Signature Retreat',
    badge: 'Most Popular',
    tagColor: 'amber',
    duration: '3 Days / 2 Nights',
    price: '¥8,500',
    priceNote: '/ person',
    idealFor: 'Designed specifically for aging parents, visiting overseas families, or anyone seeking a soothing health checkup without stress.',
    image: hotelBedroomImg,
    description: 'Our flagship experience thoughtfully integrates a gentle health screening with restorative cultural immersion in Quanzhou. Experience peaceful nights in a traditional red-brick courtyard lodge, authentic Tieguanyin tea conversations, nourishing seasonal cuisine, and total peace of mind for family living overseas.',
    highlights: [
      'Comprehensive medical health screening at certified partner hospitals',
      'Traditional Chinese Medicine (TCM) body constitution evaluation',
      '2 nights in a tranquil ancient city red-brick courtyard boutique hotel',
      'Private arrival and departure transfers (Airport / High-Speed Rail)',
      'Curated unhurried tea sessions & intangible cultural heritage handcraft',
      'Real-time WhatsApp/WeChat family sync nodes at each milestone'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival, Courtyard Settle-In & Gentle Welcome',
        events: [
          {
            time: 'Morning / Afternoon',
            title: 'Private Airport / High-Speed Rail Pick-up',
            description: 'Dedicated driver and bilingual companion await at Quanzhou Jinjiang Airport or Railway Station with luggage assistance and warm welcome tea.',
            type: 'transport'
          },
          {
            time: '15:00',
            title: 'Check-in to Historic Courtyard Boutique Stay',
            description: 'Settle into a serene, traditional Minnan red-brick courtyard sanctuary located in the peaceful alleys of ancient Quanzhou.',
            type: 'living'
          },
          {
            time: '18:00',
            title: 'Warm Welcome Tea & Pre-Checkup Dietary Briefing',
            description: 'Enjoy a light seasonal dinner followed by a relaxing tea chat to review the next morning’s checkup flow and fasting guidelines.',
            type: 'dining'
          }
        ]
      },
      {
        day: 'Day 2',
        title: 'Accompanied Health Checkup & Restorative Cultural Afternoon',
        events: [
          {
            time: '08:00 - 11:30',
            title: 'Comprehensive Medical Screening & Companion Support',
            description: 'Private transfer to partner medical facility. Companion navigates registration, guides room-to-room exams, and provides continuous translation.',
            isHighlight: true,
            type: 'medical'
          },
          {
            time: '11:30',
            title: 'Live Family Milestone Sync Notification',
            description: 'Real-time update sent to family group with status summary: "All morning scans completed with ease; enjoying post-checkup soup now."',
            type: 'medical'
          },
          {
            time: '12:00 - 14:30',
            title: 'Restorative Seasonal Lunch & Courtyard Siesta',
            description: 'Digestible Fujian medicinal soup & fresh local dishes followed by quiet relaxation and afternoon rest in the courtyard room.',
            type: 'dining'
          },
          {
            time: '15:00 - 17:30',
            title: 'Low-Intensity Cultural Immersion & Tea Session',
            description: 'Private Tieguanyin oolong tea appreciation, heritage incense crafting, or a peaceful shaded stroll through historic non-commercial lanes.',
            type: 'culture'
          },
          {
            time: '18:30',
            title: 'Slow Living Minnan Dinner',
            description: 'Home-style nutritious Minnan cuisine in a quiet garden setting.',
            type: 'dining'
          }
        ]
      },
      {
        day: 'Day 3',
        title: 'TCM Constitution Evaluation, Report Review & Farewell',
        events: [
          {
            time: '09:00 - 10:30',
            title: 'TCM Wellness Assessment & Pulse Consultation',
            description: 'Gentle pulse and tongue diagnosis with seasoned TCM practitioner for personalized seasonal wellness and dietary advice.',
            type: 'medical'
          },
          {
            time: '10:45 - 12:00',
            title: 'Expert Medical Report Review & Interpretation',
            description: 'Chief physician reviews findings in detail with complete translation by your companion, answering all family questions.',
            isHighlight: true,
            type: 'medical'
          },
          {
            time: '12:30 - 14:00',
            title: 'Farewell Lunch & Curated Heritage Gift',
            description: 'Nourishing departure meal. Receive a curated local tea and craft souvenir set along with your complete health binder.',
            type: 'dining'
          },
          {
            time: 'Afternoon',
            title: 'Private Transfer to Departure Station / Airport',
            description: 'Chauffeured transfer to Jinjiang Airport or High-Speed Rail for a smooth, relaxed journey home.',
            type: 'transport'
          }
        ]
      }
    ],
    inclusions: [
      {
        category: 'Health & Medical Services',
        included: [
          'Hospital VIP checkup appointment and priority queue handling',
          'Full-time 1-on-1 bilingual medical escort companion',
          'TCM body constitution evaluation & pulse analysis',
          'Comprehensive medical report translation & digital PDF archive'
        ],
        excluded: [
          'Third-party prescription medications',
          'Specialized secondary surgeries, MRI contrast add-ons outside standard package'
        ]
      },
      {
        category: 'Accommodation & Living',
        included: [
          '2 nights in a selected traditional red-brick courtyard boutique hotel',
          'Daily organic breakfast for the duration of the stay'
        ],
        excluded: [
          'Personal room upgrades outside designated category',
          'Minibar consumption and personal laundry services'
        ]
      },
      {
        category: 'Culture & Transportation',
        included: [
          'Private roundtrip airport / high-speed rail chauffeured transfers',
          'Private local transit between hotel, hospital, and cultural venues',
          'Curated private Tieguanyin tea session and heritage handcraft experience',
          'All scheduled nutritious local meals outlined in itinerary'
        ],
        excluded: [
          'Unscheduled personal shopping and unlisted entrance fees',
          'Alcoholic beverages'
        ]
      },
      {
        category: 'Family Care & Connectivity',
        included: [
          'Real-time WhatsApp/WeChat milestone node updates to overseas family',
          'Pre-trip orientation call with companion',
          'Post-trip translated digital health record PDF'
        ],
        excluded: ['N/A']
      }
    ]
  },
  {
    id: '5-day-deep-healing',
    tabKey: '5day',
    title: '5-Day 4-Night Deep Healing & Cultural Retreat',
    titleZh: '五日四晚·深层调养与世界遗产寻静之旅',
    subtitle: 'A profound reset combining extensive medical interpretation, bespoke dietetics, and spiritual cultural immersion.',
    tag: 'Full Restoration',
    tagColor: 'terracotta',
    duration: '5 Days / 4 Nights',
    price: '¥15,500',
    priceNote: '/ person',
    idealFor: 'Ideal for travelers needing a comprehensive health reboot, stress relief, and deep connection with Quanzhou’s UNESCO heritage.',
    image: quanzhouPagodasImg,
    description: 'A deeply restorative journey curated for complete physical and mental rejuvenation. Blends in-depth multi-specialty health examinations, individualized TCM dietary regimens, mindful visits to ancient temples (Kaiyuan Temple, Qingjing Mosque), and meditative slow-living rituals in Quanzhou.',
    highlights: [
      'Extensive multi-organ screening & specialist medical consultation',
      'Personalized TCM dietetics & custom herbal tonic plan during stay',
      '4 nights in an exclusive tranquil ancient city courtyard residence',
      'Curated private visits to UNESCO World Heritage landmarks at a slow pace',
      'Nanyin classical music appreciation & traditional pottery/lacquer art',
      'Continuous 30-day post-trip health tracking and follow-up consultation'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival, Personalized Health Consultation & Sanctuary Check-In',
        events: [
          {
            time: 'Daytime',
            title: 'VIP Arrival Transfer & Courtyard Welcome',
            description: 'Private chauffeur pick-up from airport or rail station. Check-in to premier courtyard residence.',
            type: 'transport'
          },
          {
            time: '16:00',
            title: 'Initial Health Consultation & Schedule Customization',
            description: 'Meet your dedicated lead companion and wellness coordinator to customize dietary preferences and checkup focus.',
            type: 'medical'
          }
        ]
      },
      {
        day: 'Day 2',
        title: 'Comprehensive Hospital Screening & Afternoon Rest',
        events: [
          {
            time: '08:00 - 12:00',
            title: 'In-Depth Medical Screening & Organ Assessments',
            description: 'Accompanied examination through top tertiary center. Real-time family node broadcast.',
            isHighlight: true,
            type: 'medical'
          },
          {
            time: 'Afternoon',
            title: 'Post-Exam Nutritional Therapy & Relaxation',
            description: 'Restorative dining followed by therapeutic foot soak with local herbs.',
            type: 'living'
          }
        ]
      },
      {
        day: 'Day 3',
        title: 'Quanzhou UNESCO Heritage & Mindful Slow Culture',
        events: [
          {
            time: '09:30 - 12:00',
            title: 'Kaiyuan Temple & Ancient East-West Pagodas',
            description: 'Shaded, gentle walk through thousand-year-old Buddhist sanctuary with private cultural host.',
            type: 'culture'
          },
          {
            time: '15:00 - 17:30',
            title: 'Private Nanyin Classical Music & Tea Ritual',
            description: 'Listen to the oldest surviving musical genre in China while tasting supreme roasted Tieguanyin.',
            isHighlight: true,
            type: 'culture'
          }
        ]
      },
      {
        day: 'Day 4',
        title: 'TCM Diagnostic Review & Bespoke Dietetics Workshop',
        events: [
          {
            time: '10:00 - 12:00',
            title: 'Senior TCM Physician Consultation & Herbal Dietetics Plan',
            description: 'In-depth pulse analysis and tailored nutritional guidelines for returning home.',
            type: 'medical'
          },
          {
            time: '15:00 - 17:00',
            title: 'Traditional Craftsmanship & Incense Therapy',
            description: 'Hands-on soothing craft activity engaging sensory mindfulness.',
            type: 'culture'
          }
        ]
      },
      {
        day: 'Day 5',
        title: 'Comprehensive Report Handover & Relaxed Departure',
        events: [
          {
            time: '10:00 - 11:30',
            title: 'Final Doctor Debrief & Translated Medical Binder',
            description: 'Complete digital and printed health archive handover with physician recommendations.',
            isHighlight: true,
            type: 'medical'
          },
          {
            time: 'Afternoon',
            title: 'Private Chauffeur Transfer to Departure Terminal',
            description: 'Smooth and leisurely journey home with ongoing 30-day health tracking support.',
            type: 'transport'
          }
        ]
      }
    ],
    inclusions: [
      {
        category: 'Medical & Holistic Health',
        included: [
          'Multi-specialty hospital health screening package',
          'Two dedicated bilingual escorts and concierge',
          'Two TCM physician pulse and constitution consultations',
          'Bespoke dietary plan designed with TCM nutritionists',
          '30-day post-retreat remote health tracking'
        ],
        excluded: ['Invasive surgical procedures or specialized pharmaceuticals']
      },
      {
        category: 'Sanctuary Accommodation',
        included: [
          '4 nights in premier traditional courtyard master suite',
          'Daily organic gourmet wellness breakfast and herbal teas'
        ],
        excluded: ['Incidental room charges']
      },
      {
        category: 'Culture & Immersion',
        included: [
          'All private transfers, UNESCO site admissions, and private cultural hosts',
          'Private Nanyin musical chamber performance & master tea tasting',
          'Handcraft pottery/incense materials and workshop fees',
          'All curated restorative dinners and lunches'
        ],
        excluded: ['Personal luxury shopping']
      },
      {
        category: 'Family Transparency',
        included: [
          'Live milestone sync nodes & daily evening voice memo summaries',
          'Complete bilingual PDF archive & laboratory result compilation'
        ],
        excluded: ['N/A']
      }
    ]
  }
];

export const RETREAT_FAQS: FaqItem[] = [
  {
    id: 'faq-customize',
    question: 'Can we customize the health checkup items based on pre-existing conditions?',
    questionZh: '可以根据已有健康状况定制具体的体检项目吗？',
    answer: 'Yes, absolutely. Once you request a consultation, our medical concierge reviews your or your parent’s specific medical history, chronic conditions, and recent symptoms. We coordinate directly with our partner tertiary hospitals to adjust examination items (e.g. cardiac ultrasound, low-dose chest CT, tumor biomarkers, bone density) prior to arrival, ensuring the screening is tailored, efficient, and avoids redundant tests.'
  },
  {
    id: 'faq-language',
    question: 'What language options are available for the escort companion?',
    questionZh: '陪诊人员提供哪些语言服务？',
    answer: 'All WellJourney companions are fluent in Mandarin and English. For elderly guests who feel most comfortable communicating in their heritage dialect, we provide companions who natively speak Hokkien (Minnanhua/闽南话). This provides deep emotional comfort and ensures seamless communication with local senior physicians.'
  },
  {
    id: 'faq-mobility',
    question: 'How do you accommodate seniors with limited mobility or dietary needs?',
    questionZh: '如何照顾行动不便的长辈或有特殊饮食要求的客人？',
    answer: 'We prioritize low-stress, step-free access. We arrange door-to-door private transport, wheelchairs and hospital elevator routing whenever needed, and select courtyard accommodations with accessible ground-floor rooms. All meals are prepared according to dietary restrictions (low sodium, diabetic-friendly, vegetarian, or soft-textured foods) while remaining flavorful and nourishing.'
  },
  {
    id: 'faq-refund',
    question: 'What is the refund and rescheduling policy?',
    questionZh: '退改签与行程调整政策是怎样的？',
    answer: 'We offer flexible rescheduling up to 7 days before your scheduled arrival date at zero penalty. For cancellations made 14 days in advance, a 100% refund is issued (minus hospital non-refundable advance registration fees, if applicable). Detailed terms are outlined transparently in your personalized confirmation proposal.'
  }
];
