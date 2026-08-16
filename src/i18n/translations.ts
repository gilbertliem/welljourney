import { Language } from '../context/LanguageContext';
import { PackageDetail, CultureElement, DailyRhythmItem, EscortStage, LiveSyncNode, FaqItem } from '../types';
import quanzhouPagodasImg from '../assets/images/quanzhou_pagodas_1786862560508.jpg';
import hotelBedroomImg from '../assets/images/hotel_bedroom_suite_1786863906222.jpg';
import teaPouringImg from '../assets/images/tea_pouring_gongfu_1786863146357.jpg';

export const TRANSLATIONS = {
  en: {
    nav: {
      brandSub: 'Quanzhou Wellness Retreats',
      philosophy: 'Philosophy',
      packages: 'Retreats & Packages',
      medical: 'Medical & Safety',
      culture: 'Culture & Living',
      about: 'About Us',
      bookConsultation: 'Book Consultation',
      consultShort: 'Consult',
      bookFreeConsultation: 'Book Free Family Consultation',
      languageButton: '中文',
      languageTitle: 'Switch to Chinese'
    },
    footer: {
      tagline: 'Slow down. Be supported. Find peace.',
      desc: 'Restorative wellness retreats and dedicated medical escort facilitation in the cultural heart of Quanzhou, China.',
      poweredBy: 'Powered by YiMediTour',
      exploreTitle: 'Explore Journeys',
      complianceTitle: 'Compliance & Safety',
      contactTitle: 'Family Concierge',
      privacyLink: 'Privacy Policy',
      termsLink: 'Terms of Service',
      disclaimerLink: 'Medical Disclaimer',
      allRights: 'All rights reserved.',
      disclaimerNote: 'WellJourney provides medical escort facilitation, bilingual communication, and restorative travel. Clinical diagnosis and treatment are performed exclusively by accredited tertiary hospital partners.'
    },
    home: {
      badge: 'WellJourney · Powered by YiMediTour',
      heroTitleLine1: 'In authentic daily life,',
      heroTitleLine2: 'reclaim your mind-body balance.',
      heroSubtitle: 'Slow Down · Be Supported · Find Peace',
      heroDesc: 'Comprehensive health checkups, multi-language escorting, and slow-living cultural retreats in Quanzhou. Tailored specifically for overseas Chinese and international guests seeking restorative care.',
      exploreBtn: 'Explore Wellness Packages',
      consultBtn: 'Book a Family Consultation',
      pillar1: 'Slow Down',
      pillar2: 'Be Supported',
      pillar3: 'Find Peace',

      // Anti-tourism philosophy
      diffStayBadge: 'A Different Kind of Stay',
      diffStayTitle1: 'Not a rushed tour.',
      diffStayTitle2: 'Not just a medical trip.',
      diffStayP1: "We don't drag you between crowded tourist spots or leave you anxious in hospital hallways. We create a few gentle days where you can rest, sip local tea, eat nourishing meals, and get professional health checks at your own pace.",
      diffStayP2: 'Embracing the rich heritage of Quanzhou, our approach seamlessly blends world-class medical facilitation with the restorative power of slow, intentional living.',
      read5Elements: 'Read about our 5 Elements of Quanzhou Healing',
      teaQuote: '"Rest comes when you are truly looked after."',
      teaAuthor: '— Quanzhou Courtyard Tea Companion',

      // 3 Pillars
      card1Title: 'Warm Escort',
      card1Desc: 'VIP hospital appointments, step-free access, and a dedicated bilingual companion (English, Mandarin, Hokkien) right by your side.',
      card1Link: 'View Safety Protocol',
      card2Title: 'Authentic Slow Living',
      card2Desc: 'Rest in tranquil Minnan red-brick courtyard lodges, taste TCM seasonal restorative soups, and enjoy quiet tea ceremonies.',
      card2Link: 'Explore Daily Rhythm',
      card3Title: 'Family Live Sync',
      card3Desc: 'Real-time timeline nodes sent to overseas family via WhatsApp and WeChat. Continuous transparency from arrival to departure.',
      card3Link: 'Try Sync Simulator',

      // Curated stays
      curatedTitle: 'Curated Restorative Stays',
      curatedDesc: 'Choose a program that fits your health goals and travel schedule. Every detail is handled with deep emotional care.',
      viewDetails: 'View Details',
      mostPopularBadge: 'Most Popular for Seniors',

      // Reassurance section
      reassuranceBadge: 'For Overseas Family',
      reassuranceTitle: 'Total Reassurance for Families Living Abroad',
      reassuranceDesc: 'When you are thousands of miles away, worrying about an elderly parent’s hospital visit or well-being is overwhelming. We serve as your trusted on-the-ground family proxy.',
      reassuranceBullet1Title: 'Real-Time WhatsApp / WeChat Milestone Updates',
      reassuranceBullet1Desc: 'Receive verified status photos, check-in timestamps, and post-fasting meal confirmations as they happen.',
      reassuranceBullet2Title: 'Direct Physician Audio Summaries & Translation',
      reassuranceBullet2Desc: 'No confusing medical jargon. Your companion translates clinical remarks into structured, clear notes.',
      reassuranceBullet3Title: 'Permanent Digital Health Cloud Archive',
      reassuranceBullet3Desc: 'All test metrics and doctor prescriptions are compiled into a private bilingual PDF summary.',
      openLiveSyncBtn: 'Preview Interactive Live Family Sync',

      // Hospitals section
      hospitalBadge: 'Clinical Excellence',
      hospitalTitle: 'Accredited Tertiary Medical Network',
      hospitalDesc: 'We partner directly with leading Grade 3A tertiary general hospitals and certified medical examination centers in Quanzhou.',
      hosp1Title: 'Partner Grade 3A General Hospital',
      hosp1Desc: 'Full multi-organ CT, high-resolution ultrasound, and comprehensive biochemical labs.',
      hosp2Title: 'Affiliated TCM Hospital Center',
      hosp2Desc: 'Senior TCM masters providing nine-constitution pulse analysis and seasonal dietary guidance.',
      hosp3Title: 'VIP Specialty Checkup Pavilion',
      hosp3Desc: 'Dedicated priority suites with zero waiting queues and personalized physician debriefs.',

      // Testimonials
      storiesBadge: 'Guest Stories',
      storiesTitle: 'What Families Say About WellJourney',
      storiesDesc: 'Real stories from overseas Chinese children and international travelers who trusted us with their loved ones.',
      testimonial1Quote: '"Living in Sydney, I was always stressed about my mother’s annual health checkup in China. WellJourney’s companion sent me WhatsApp photos and doctor audio notes throughout the entire morning. My mother told me she felt pampered rather than exhausted."',
      testimonial1Author: 'David Chen',
      testimonial1Role: 'Son living in Sydney, Australia (Mother booked 3-Day Retreat)',
      testimonial2Quote: '"The contrast with conventional tours is night and day. The red-brick courtyard hotel was quiet, the tea was exquisite, and the doctor explained every detail without rushing. It truly felt like a restorative sanctuary."',
      testimonial2Author: 'Grace & Michael Lee',
      testimonial2Role: 'Travelers from Singapore (5-Day Deep Healing Retreat)',

      // FAQ
      faqTitle: 'Frequently Asked Questions',
      faqDesc: 'Everything you need to know about our health facilitation and retreat stays.',

      // Bottom banner
      bottomBannerTitle: 'Ready to plan a restorative journey for yourself or your family?',
      bottomBannerDesc: 'Speak with our family wellness concierge for a custom medical and cultural itinerary tailored to your dates and preferences.',
      bottomBannerBtn: 'Schedule Free Consultation',
      bottomBannerWeChat: 'Connect via WeChat / WhatsApp'
    },
    packages: {
      title: 'Curated Wellness Retreats',
      subtitle: 'Tailored combinations of accredited health assessments, dedicated hospital escorts, and unhurried Quanzhou cultural living.',
      tab1Day: '1-Day Express Escort',
      tab3Day: '3-Day Mind-Body Balance',
      tab5Day: '5-Day Deep Healing',
      quickFacts: 'Program Overview',
      durationLabel: 'Duration',
      idealForLabel: 'Best Suited For',
      pricingLabel: 'All-Inclusive Investment',
      highlightsTitle: 'Program Highlights',
      itineraryTitle: 'Detailed Day-by-Day Journey',
      inclusionsTitle: 'Inclusions & Exclusions',
      includedLabel: 'What Is Included',
      excludedLabel: 'What Is Excluded',
      bookThisPackage: 'Inquire & Book This Retreat',
      downloadPdf: 'Download Printable PDF Itinerary',
      tryLiveSync: 'Preview Real-Time Family Sync',
      customRequest: 'Need a customized duration or specific medical department focus? We curate private itineraries tailored to your family.',
      contactConcierge: 'Contact Custom Concierge'
    },
    medical: {
      badge: 'Medical Safety & Protocol',
      title: 'Professional Hospital Escort with Human Warmth',
      subtitle: 'We eliminate hospital stress through structured VIP booking, bedside bilingual accompaniment, and transparent family milestone reporting.',
      stageTitle: 'Our 4-Stage Escort Protocol',
      stageDesc: 'Every step is designed for emotional reassurance, safety, and clear communication.',
      transparentTitle: 'Transparent Medical Boundaries',
      transparentDesc: 'We maintain strict professional clarity between concierge facilitation and clinical decision-making.',
      boundaryLeftTitle: 'What WellJourney Provides',
      boundaryLeftItems: [
        'VIP slot booking & priority hospital coordination',
        'One-on-one bedside multi-lingual companion',
        'Real-time WhatsApp / WeChat milestone updates',
        'Bilingual medical report translation & archiving',
        'Restorative dining, tranquil lodging, and private transport'
      ],
      boundaryRightTitle: 'What Hospitals Provide',
      boundaryRightItems: [
        'All official clinical diagnoses and medical tests',
        'Prescription of medications and treatments',
        'Specialist physician consultations and clinical opinions',
        'Official hospital electronic diagnostic files and stamps'
      ],
      liveSyncDemoTitle: 'Experience Our Real-Time Live Node Sync',
      liveSyncDemoDesc: 'See how our companion keeps overseas family members informed throughout each medical appointment.',
      openLiveSyncDemoBtn: 'Launch Live Sync Demo Simulator',
      doctorsTitle: 'Partner Physician Accreditations',
      doctorsDesc: 'Our guests consult directly with senior department directors and chief physicians at accredited tertiary medical institutions in Quanzhou.'
    },
    culture: {
      badge: 'Quanzhou Slow Living',
      title: '5 Elements of Quanzhou Daily Healing',
      subtitle: 'Where authentic UNESCO heritage meets restorative mind-body wellness. No rushing, no staged spectacles.',
      rhythmTitle: 'The 24-Hour Healing Rhythm',
      rhythmDesc: 'An unhurried cadence aligned with nature and the ancient rhythm of Quanzhou.',
      rhythmMorning: 'Morning · Gentle Awakening',
      rhythmMidday: 'Midday · Nourishing Restoration',
      rhythmAfternoon: 'Afternoon · Tea & Tranquility',
      rhythmEvening: 'Evening · Twilight Calm',
      whyQuanzhouTitle: 'Why Quanzhou for Wellness?',
      whyQuanzhouDesc: 'Known as the starting point of the Maritime Silk Road, Quanzhou is a UNESCO World Heritage sanctuary blessed with ancient banyan trees, red-brick courtyards, and a deeply peaceful atmosphere.',
      point1Title: 'Mild Coastal Subtropical Climate',
      point1Desc: 'Warm winters and fresh ocean breezes ideal for senior recovery and relaxed strolling.',
      point2Title: 'Cradle of Minnan Culture & Tea Heritage',
      point2Desc: 'Authentic Tieguanyin & Wuyi Oolong origins with genuine tea warmth.',
      point3Title: 'High-Trust, Welcoming Community',
      point3Desc: 'A spiritual sanctuary with 1,000-year temples and slow residential lanes.',
      integrationTitle: 'How Culture Integrates with Medical Care',
      integrationDesc: 'Medical checkups can be cold and clinical; our cultural framework provides emotional warmth, gentle distraction, and deep relaxation to soothe high blood pressure and anxiety.'
    },
    about: {
      badge: 'About WellJourney',
      title: 'Restorative Care Grounded in Design & Empathy',
      subtitle: 'Born from personal experience of caring for elderly parents from overseas, incubated at the intersection of service design and clinical facilitation.',
      missionTitle: 'Our Origin & Purpose',
      missionP1: 'When our founder lived abroad, organizing medical appointments for aging parents in China was a source of constant anxiety—long hospital queues, opaque test results, and the worry of parents feeling lonely in cold clinic hallways.',
      missionP2: 'WellJourney was created to solve this. We combined human-centered service design with certified hospital partnerships in Quanzhou, creating a warm, dignified experience that puts family peace of mind at the center.',
      partnersTitle: 'Institutional Incubation & Healthcare Network',
      partnersDesc: 'Supported by premier academic and innovation ecosystems in Fujian, China.',
      commitmentsTitle: 'Our Four Core Commitments',
      commitmentsDesc: 'The principles that guide every interaction, companion booking, and retreat itinerary.',
      conciergeCardTitle: 'Speak with Our Dedicated Family Concierge',
      conciergeCardDesc: 'We provide multilingual consultations in English, Mandarin, and Hokkien.',
      wechatTitle: 'WeChat Concierge',
      wechatDesc: 'Scan or search ID: WellJourney_Care',
      whatsappTitle: 'WhatsApp & Phone',
      whatsappDesc: '+86 188 5970 8899 / +65 8123 4567',
      emailTitle: 'Email Inquiries',
      emailDesc: 'concierge@welljourney.care'
    },
    modals: {
      consultation: {
        headerBadge: 'WellJourney Concierge',
        headerTitle: 'Family Consultation & Custom Proposal',
        nameLabel: 'Your Name / Guest Name',
        namePlaceholder: 'e.g., David Chen / Mr. Zhang',
        contactLabel: 'Contact Method (WhatsApp / WeChat / Phone / Email)',
        contactPlaceholder: 'e.g., WhatsApp +61 412 345 678 or WeChat ID',
        packageLabel: 'Preferred Program',
        languageLabel: 'Preferred Consultation & Companion Language',
        datesLabel: 'Estimated Travel Dates or Season',
        datesPlaceholder: 'e.g., Autumn 2026 / Nov 15 - 20',
        guestsLabel: 'Number of Guests',
        notesLabel: 'Health Priorities, Special Requests or Mobility Needs',
        notesPlaceholder: 'e.g., Mom needs knee-friendly pacing; Dad needs comprehensive cardiac and ultrasound checks...',
        submitBtn: 'Submit Consultation Request',
        submittingBtn: 'Submitting Details...',
        successTitle: 'Inquiry Received',
        successMsg: 'Thank you. Our family wellness concierge has received your details and will prepare a tailored health & cultural proposal within 24 hours.',
        nextStepsTitle: 'Next Steps:',
        step1: '1. Our concierge will contact you via your preferred channel to confirm health priorities.',
        step2: '2. We coordinate tailored VIP checkup items with Quanzhou tertiary partner hospitals.',
        step3: '3. You receive a complete digital PDF itinerary and quote with zero obligation.',
        closeBtn: 'Close Window',
        chatWeChatBtn: 'Open WeChat QR'
      },
      liveSync: {
        badge: 'Live Node Simulator',
        title: 'Real-Time Family Milestone Sync',
        subtitle: 'Experience how overseas family members receive verified updates and doctor voice summaries.',
        statusLive: 'Live Demo Channel',
        filterAll: 'All Milestone Updates',
        testNotificationBtn: 'Trigger Test Milestone Notification',
        whatsappNote: 'Simulating instant push delivery to family WhatsApp & WeChat groups.',
        bookConsultationBtn: 'Book This Care Experience'
      },
      pdfModal: {
        badge: 'Official Travel Document',
        title: 'Printable Itinerary & Health Binder',
        printBtn: 'Print / Save as PDF',
        closeBtn: 'Close',
        inquireBtn: 'Inquire About This Program'
      },
      wechat: {
        title: 'Connect on WeChat',
        subtitle: 'Scan the QR code to chat directly with our bilingual wellness concierge.',
        wechatId: 'WeChat Official ID: WellJourney_Care',
        hours: 'Concierge hours: 08:00 - 22:00 (GMT+8) · 7 days a week',
        altContact: 'Or reach us via WhatsApp / Phone: +86 188 5970 8899'
      },
      legal: {
        privacyTitle: 'Privacy Policy & Health Data Protection',
        termsTitle: 'Terms of Service & Escort Agreement',
        disclaimerTitle: 'Medical Disclaimer & Legal Boundaries',
        closeBtn: 'Close'
      }
    }
  },
  zh: {
    nav: {
      brandSub: '泉州康养调理之旅',
      philosophy: '核心理念',
      packages: '疗愈套餐',
      medical: '医疗与安全',
      culture: '在地慢生活',
      about: '关于我们',
      bookConsultation: '预约咨询',
      consultShort: '预约',
      bookFreeConsultation: '免费预约家庭定制咨询',
      languageButton: 'English',
      languageTitle: '切换为英文'
    },
    footer: {
      tagline: '慢下来 · 被接住 · 得心安',
      desc: '在世遗泉州，为您与家人提供温暖专业的三甲医院陪诊就医与身心平衡慢活疗愈。',
      poweredBy: '医途通 (YiMediTour) 联合孵化',
      exploreTitle: '探索行程',
      complianceTitle: '合规与安全',
      contactTitle: '家庭健康管家',
      privacyLink: '隐私政策与健康数据保护',
      termsLink: '服务条款与陪诊协议',
      disclaimerLink: '医疗责任边界与免责声明',
      allRights: '版权所有 · 侵权必究',
      disclaimerNote: '康旅途提供专业的陪诊就医协助、多语种翻译与在地康养旅行生活服务。所有医学诊断、检查检验与诊疗处方均由合规合作三甲医院专业医师独立开展。'
    },
    home: {
      badge: '康旅途 · 医途通联合孵化',
      heroTitleLine1: '在真实的日常里，',
      heroTitleLine2: '找回身心平衡。',
      heroSubtitle: '慢下来 · 被接住 · 得心安',
      heroDesc: '专注为海外华人与家庭提供泉州三甲医院绿色通道体检陪诊、多语种专业陪伴与非遗古厝慢调养生。舒心无忧，全程透明。',
      exploreBtn: '探索康养疗愈套餐',
      consultBtn: '预约家庭健康咨询',
      pillar1: '慢下来',
      pillar2: '被接住',
      pillar3: '得心安',

      // Anti-tourism philosophy
      diffStayBadge: '不一样的疗愈时光',
      diffStayTitle1: '不是走马观花的旅游，',
      diffStayTitle2: '更不是冷冰冰的体检。',
      diffStayP1: '我们不会催着您赶景点，更不会让长辈在医院冷清陌生的走廊里迷茫焦虑。我们为您留出几天温润宁静的时光，在古厝里喝茶、吃应季滋补药膳，在专属管家陪伴下从容完成健康筛查。',
      diffStayP2: '依托世界遗产之城泉州深厚的闽南生活底蕴，我们将优质医疗资源与舒缓疗愈的慢生活完美交融。',
      read5Elements: '了解泉州身心疗愈的 5 大核心元素',
      teaQuote: '“真正的休息，是被稳稳接住的安心。”',
      teaAuthor: '— 泉州古厝茶室管家',

      // 3 Pillars
      card1Title: '暖心陪诊',
      card1Desc: '三甲医院绿色通道免排队，专属多语种陪诊管家（普通话/英语/闽南语）全程一对一陪同指引。',
      card1Link: '查看就医安全机制',
      card2Title: '古城慢活',
      card2Desc: '入住静谧红砖古厝精品庭院，品饮正宗铁观音，享用中医师推荐的四季温润调理膳食。',
      card2Link: '探索每日养生节奏',
      card3Title: '家人同步',
      card3Desc: '关键就诊与生活节点实时向海外子女 WhatsApp/微信 报备图文与医生语音解读，远隔重洋也能全然安心。',
      card3Link: '体验节点同步模拟',

      // Curated stays
      curatedTitle: '精选身心康养套餐',
      curatedDesc: '根据您的健康需求与时间节奏量身定制，每一处细节都充满温度与妥帖照顾。',
      viewDetails: '查看详情',
      mostPopularBadge: '长辈最受欢迎',

      // Reassurance section
      reassuranceBadge: '致海外子女',
      reassuranceTitle: '给远在海外的家人一份踏实的安心',
      reassuranceDesc: '远隔重洋，担心父母在国内就医的奔波与无助？康旅途是您在本地值得托付的家人代理人。',
      reassuranceBullet1Title: 'WhatsApp / 微信 关键节点实时图文同步',
      reassuranceBullet1Desc: '从晨间接送、检查就绪、空腹后用餐到休息，每个关键节点均拍照报备。',
      reassuranceBullet2Title: '主任医师权威解读与通俗语音转述',
      reassuranceBullet2Desc: '告别晦涩生硬的医学术语，管家整理医生核心医嘱并录制通俗语音转述给海外亲属。',
      reassuranceBullet3Title: '双语数字健康档案永久安全归档',
      reassuranceBullet3Desc: '全部检验检查报告与医生建议汇总归档为高清双语 PDF，便于海外家庭医生后续查阅。',
      openLiveSyncBtn: '预览实时节点同步演示',

      // Hospitals section
      hospitalBadge: '严谨医疗',
      hospitalTitle: '三甲综合医院协作网络',
      hospitalDesc: '我们深度协作泉州权威三甲综合医院与国家认证健康管理体检中心，提供高品质医疗保障。',
      hosp1Title: '三甲综合医院重点科室',
      hosp1Desc: '全器官低剂量螺旋CT、超高清彩超与高精生化免疫全套筛查。',
      hosp2Title: '三甲中医院国医堂',
      hosp2Desc: '资深名老中医九型体质把脉辨识与个性化膏方药膳调养指导。',
      hosp3Title: 'VIP特需体检专区',
      hosp3Desc: '独立私密诊室、绿色通道免排队与多学科专家深度一对一答疑。',

      // Testimonials
      storiesBadge: '客人真实心声',
      storiesTitle: '听听海外子女与客人的真实评价',
      storiesDesc: '来自悉尼、新加坡与北美华人的真切托付与体验反馈。',
      testimonial1Quote: '“定居悉尼，每年父母在国内体检总让我悬着心。这次选了康旅途，管家一上午在微信里发来现场照片和医生的语音，母亲说完全没有以往去医院的疲惫和心慌，像被亲人照顾一样舒服。”',
      testimonial1Author: '陈先生 (David)',
      testimonial1Role: '居住在澳大利亚悉尼（为父母预订三日慢活之旅）',
      testimonial2Quote: '“和以往喧闹的旅行团完全不同。古厝安静典雅，铁观音茶香沁人心脾，医生检查非常细致。这是一次真正让身心都彻底放松下来的健康假期。”',
      testimonial2Author: '李女士夫妇 (Grace & Michael)',
      testimonial2Role: '新加坡华人（预订五日深层调养之旅）',

      // FAQ
      faqTitle: '常见问题解答',
      faqDesc: '关于体检陪诊、行程安排与家庭服务的常见疑问与解答。',

      // Bottom banner
      bottomBannerTitle: '准备为您或家人开启一段舒心的身心康养之旅了吗？',
      bottomBannerDesc: '联系我们的专业健康管家，为您量身定制符合出行时间与健康诉求的专属行程方案。',
      bottomBannerBtn: '免费预约家庭定制咨询',
      bottomBannerWeChat: '微信 / WhatsApp 一对一沟通'
    },
    packages: {
      title: '精选康养疗愈套餐',
      subtitle: '深度结合三甲医院专业体检筛查、专属双语陪诊与泉州世遗古厝慢调养生。',
      tab1Day: '一日舒心陪诊',
      tab3Day: '三日身心平衡',
      tab5Day: '五日深层调养',
      quickFacts: '套餐概览',
      durationLabel: '行程时长',
      idealForLabel: '适合人群',
      pricingLabel: '尊享全包价格',
      highlightsTitle: '套餐核心亮点',
      itineraryTitle: '详细日程安排',
      inclusionsTitle: '费用包含与不含',
      includedLabel: '费用包含',
      excludedLabel: '费用不含',
      bookThisPackage: '咨询预订此套餐',
      downloadPdf: '下载行程单与健康手册 (PDF)',
      tryLiveSync: '体验实时节点同步',
      customRequest: '需要个性化调整时长或增加特定专科检查？我们支持量身定制专属家庭行程。',
      contactConcierge: '联系专属定制管家'
    },
    medical: {
      badge: '医疗与安全规范',
      title: '专业三甲陪诊，带着温度的守护',
      subtitle: '通过规范的绿色通道预约、一对一床旁多语种陪伴与全流程节点同步，彻底告别看病焦虑。',
      stageTitle: '标准化 4 阶陪诊全流程',
      stageDesc: '每一个环节都以长辈的舒适感、安全感与家人的知情权为核心设计。',
      transparentTitle: '严谨清晰的责任边界',
      transparentDesc: '我们严格恪守生活管家与临床医疗的专业边界，保障医疗严谨性。',
      boundaryLeftTitle: '康旅途为您提供：',
      boundaryLeftItems: [
        '三甲医院绿色通道与VIP预约协调',
        '全程一对一多语种陪诊管家贴身照护',
        '关键就诊节点向海外亲属实时图文与语音同步',
        '初检报告专业整理、通俗双语解读与数字归档',
        '泉州特色温润食养药膳、古厝品质美宿与专车接送'
      ],
      boundaryRightTitle: '医疗机构独立负责：',
      boundaryRightItems: [
        '所有官方医学检查、影像检验与生化分析',
        '医师处方开具与药物治疗方案',
        '专科主任医师的临床诊断与专业医疗建议',
        '医院官方电子病历与具有法律效力的检验报告盖章'
      ],
      liveSyncDemoTitle: '体验我们的实时节点同步系统',
      liveSyncDemoDesc: '直观了解海外子女如何通过微信或 WhatsApp 实时掌握就诊全流程。',
      openLiveSyncDemoBtn: '启动节点同步模拟器',
      doctorsTitle: '协作名医与专家资质',
      doctorsDesc: '所有主检与解读医师均为泉州三甲综合医院各临床专科主任或副主任医师，经验丰富，医德严谨。'
    },
    culture: {
      badge: '泉州在地慢活',
      title: '泉州身心调理的 5 大在地元素',
      subtitle: '世遗宋元海丝胜地与传统养生智慧的交汇。不赶路、不作秀、自然沉浸。',
      rhythmTitle: '24 小时自然养生节律',
      rhythmDesc: '顺应天时，重拾久违的松弛感与内心的秩序。',
      rhythmMorning: '清晨 · 顺时而醒',
      rhythmMidday: '正午 · 舒心调理',
      rhythmAfternoon: '午后 · 煮茶静心',
      rhythmEvening: '黄昏 · 巷陌漫步',
      whyQuanzhouTitle: '为什么选择泉州康养？',
      whyQuanzhouDesc: '作为海上丝绸之路起点、联合国教科文组织世遗之城，泉州拥有千年古榕、红砖大厝与安详质朴的人文烟火。',
      point1Title: '亚热带温和海洋性气候',
      point1Desc: '四季温润宜人，冬无严寒，极利于长辈体质调养与户外漫步。',
      point2Title: '闽南茶文化与铁观音发源地',
      point2Desc: '正宗安溪铁观音与武夷岩茶源头，在茶香回甘中降压舒心。',
      point3Title: '半城烟火半城仙的祥和邻里',
      point3Desc: '千年开元寺与古寺林立，民风淳朴温厚，安全感与幸福感极高。',
      integrationTitle: '文化慢生活如何赋能身心健康？',
      integrationDesc: '常规体检往往令人紧张焦虑；我们在就医前后融入茶席静心、古厝安歇与药膳食养，能有效平复心率与血压，让身体在最松弛的状态下得到调养。'
    },
    about: {
      badge: '关于康旅途',
      title: '源于为人子女的初心，扎根于服务设计与专业医疗协作',
      subtitle: '由同济大学设计创新团队与泉州医疗协作网络联合孵化，用温度与敬畏心守护每一位长辈。',
      missionTitle: '我们的创立初心',
      missionP1: '创办康旅途，源于我们身处异国他乡时对父母就医难处的深刻感同身受——冗长的排队、看不懂的报告，以及长辈独自面对陌生仪器的孤独不安。',
      missionP2: '我们以“以人为本”的服务设计理念为核心，深度整合泉州优质三甲医疗资源与闽南在地慢生活，打造出这一套全程透明、温暖体贴的陪伴式康养模式。',
      partnersTitle: '学术孵化与医疗合作机构',
      partnersDesc: '获得顶尖设计创新中心与本地高新园区的支持与赋能。',
      commitmentsTitle: '我们的四大核心承诺',
      commitmentsDesc: '指引我们每一次陪诊、每一次茶叙与每一份行程的行动准则。',
      conciergeCardTitle: '联系您的专属家庭健康管家',
      conciergeCardDesc: '支持普通话、英语、闽南语多语种咨询与定制沟通。',
      wechatTitle: '微信官方健康管家',
      wechatDesc: '扫描二维码或搜索微信号: WellJourney_Care',
      whatsappTitle: 'WhatsApp 与电话直拨',
      whatsappDesc: '+86 188 5970 8899 / +65 8123 4567',
      emailTitle: '官方咨询邮箱',
      emailDesc: 'concierge@welljourney.care'
    },
    modals: {
      consultation: {
        headerBadge: '康旅途专属管家',
        headerTitle: '家庭定制咨询与方案索取',
        nameLabel: '您的称呼 / 出行人姓名',
        namePlaceholder: '例如：陈先生 / 张女士',
        contactLabel: '联系方式 (微信 / WhatsApp / 电话 / 邮箱)',
        contactPlaceholder: '例如：微信 ID 或 WhatsApp 手机号',
        packageLabel: '意向套餐方案',
        languageLabel: '偏好的沟通与管家语言',
        datesLabel: '预计出行时间或季节',
        datesPlaceholder: '例如：2026年秋季 / 11月中旬',
        guestsLabel: '出行人数',
        notesLabel: '长辈健康诉求、重点检查项目或特殊生活习惯',
        notesPlaceholder: '例如：母亲腿脚不便需要平缓行程；父亲需要重点做心血管与深度超声筛查...',
        submitBtn: '提交定制咨询需求',
        submittingBtn: '正在提交中...',
        successTitle: '咨询需求已收到',
        successMsg: '感谢您的信任。专属健康管家已收到您的信息，将在 24 小时内为您量身出具详细的医疗与文化行程建议书。',
        nextStepsTitle: '后续服务流程：',
        step1: '1. 专属管家将通过您预留的联系方式与您沟通，细化长辈健康重点与喜好。',
        step2: '2. 与泉州合作三甲医院专家预协调适合的体检项目与名医号源。',
        step3: '3. 为您发送完整双语数字 PDF 行程单与透明报价，无任何强制消费。',
        closeBtn: '关闭窗口',
        chatWeChatBtn: '打开微信二维码'
      },
      liveSync: {
        badge: '节点同步模拟器',
        title: '实时就诊与生活节点同步',
        subtitle: '亲身体验海外子女如何通过手机实时接收长辈就医的每一步进展与医生语音。',
        statusLive: '实时演示频道',
        filterAll: '查看全部节点动态',
        testNotificationBtn: '发送一条模拟实时节点通知',
        whatsappNote: '支持向家庭 WhatsApp 讨论组与微信服务群实时极速推送。',
        bookConsultationBtn: '预约此项陪伴服务'
      },
      pdfModal: {
        badge: '官方行程文件',
        title: '行程单与健康手册 (可打印 PDF)',
        printBtn: '打印 / 保存为 PDF',
        closeBtn: '关闭',
        inquireBtn: '咨询预订此行程'
      },
      wechat: {
        title: '微信添加健康管家',
        subtitle: '扫描二维码，与双语健康管家一对一沟通长辈行程与体检方案。',
        wechatId: '官方微信号：WellJourney_Care',
        hours: '管家在线时间：08:00 - 22:00 (北京时间) · 全年无休',
        altContact: '亦可通过 WhatsApp / 电话联系：+86 188 5970 8899'
      },
      legal: {
        privacyTitle: '隐私政策与健康数据安全规范',
        termsTitle: '服务协议与陪诊服务条款',
        disclaimerTitle: '医疗责任边界与免责声明',
        closeBtn: '关闭'
      }
    }
  }
};

export const getLocalizedPackages = (lang: Language): PackageDetail[] => {
  const isZh = lang === 'zh';
  return [
    {
      id: '1-day-express',
      tabKey: '1day',
      title: isZh ? '一日舒心体检陪诊' : '1-Day Express Checkup Escort',
      titleZh: '一日舒心体检陪诊',
      subtitle: isZh
        ? '三甲医院绿色通道优先预约，专属双语陪诊管家全程一对一陪同。'
        : 'Efficient, supported medical screening with VIP priority & bilingual escort.',
      tag: isZh ? '轻享体验' : 'Light Experience',
      tagColor: 'slate',
      duration: isZh ? '1 天' : '1 Day',
      price: '¥2,800',
      priceNote: isZh ? '/ 每位' : '/ person',
      idealFor: isZh
        ? '适合已有住宿安排、行程紧凑但需要专业三甲医院全程就医协助与陪诊翻译的海外华人与返乡人士。'
        : 'Perfect for overseas visitors or travelers with tight schedules needing swift, fully escorted hospital navigation.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
      description: isZh
        ? '一站式高效舒心的单日就医陪诊服务，消除异地或返乡就医的繁琐困扰。专属双语陪诊管家全程贴心陪同，协助三甲医院绿色通道挂号、一对一指引检查、现场医生沟通翻译与后续报告数字归档。'
        : 'A seamless, one-day health checkup journey that removes all hospital complexity. Designed for returning overseas Chinese or business travelers who already have accommodations but need dedicated, bilingual companionship and priority medical appointment facilitation in Quanzhou.',
      highlights: isZh
        ? [
            '三甲综合医院绿色通道与VIP体检专号预约',
            '专属双语陪诊管家全程一对一陪同（普通话/英语/闽南语）',
            '关键就诊节点实时 WhatsApp/微信 同步海外家人',
            '初检报告权威解读与通俗双语翻译整理',
            '泉州市区内专车往返接送与检查后温润养胃餐',
            '专属家庭云端数字报告安全归档'
          ]
        : [
            'VIP appointment booking at partner tertiary medical centers',
            'Dedicated bilingual hospital companion (Mandarin, English, Hokkien)',
            'Real-time WhatsApp/WeChat node updates sent to overseas family',
            'Preliminary report translation & doctor consultation explanation',
            'Private roundtrip hotel/hospital transport & nourishing local lunch',
            'Post-visit digital PDF report archive'
          ],
      itinerary: [
        {
          day: isZh ? '单日完整日程' : 'Single Day Itinerary',
          title: isZh ? '全天候专业陪诊与暖心照料' : 'Full-Day Comprehensive Care & Escort',
          events: isZh
            ? [
                {
                  time: '08:00 - 08:30',
                  title: '晨间专车接驾与健康问候',
                  description: '专属双语管家与专车司机在酒店或指定地点迎接，提供温水、行程简报并核对晨间空腹状态。',
                  type: 'transport'
                },
                {
                  time: '08:30 - 11:45',
                  title: 'VIP绿色通道体检与全程一对一陪伴',
                  description: '免排队快速登记。管家全程陪同完成采血、超高清彩超、放射影像、心电图等各项检查，协助衣物存放与医生实时沟通。',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '12:00 - 13:30',
                  title: '空腹后温润养胃午餐',
                  description: '移步至安静餐厅享用专门定制的清淡易消化温润热食（如闽南时令养生面线或时蔬粥品），舒缓肠胃。',
                  type: 'dining'
                },
                {
                  time: '14:00 - 15:30',
                  title: '主检医师初步答疑与双语报告梳理',
                  description: '与资深主任医师当面交流初检发现。管家将医学术语整理成通俗易懂的双语备忘录，并录制关键语音。',
                  type: 'medical'
                },
                {
                  time: '16:00',
                  title: '专车送归与数字报告安全归档',
                  description: '专车安全送达下榻居所。初步健康摘要与现场节点照片同步至家庭云端。',
                  type: 'transport'
                }
              ]
            : [
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
      inclusions: isZh
        ? [
            {
              category: '医疗就诊服务',
              included: [
                '三甲综合医院绿色通道与VIP预约协调',
                '专属多语种陪诊管家全程一对一贴身陪同',
                '医院内部所有单据整理、排队指引与科室接驳',
                '初检报告通俗化整理与医生核心医嘱双语转述'
              ],
              excluded: [
                '体检套餐外自行加项的医药费或突发专科手术费用',
                '需另行开具的处方药品费用'
              ]
            },
            {
              category: '交通与餐饮保障',
              included: [
                '泉州市区内专车往返接送（含酒店/车站/医院）',
                '检查后精选温润养胃餐与途中能量补充品'
              ],
              excluded: [
                '酒店过夜住宿（可根据需要协助代订合作美宿）',
                '个人购物与额外私人物品消费'
              ]
            },
            {
              category: '家庭透明度保障',
              included: [
                '通过 WhatsApp / 微信 实时同步就诊节点与现场照片',
                '主检医生核心指导建议语音备忘录',
                '专属安全 PDF 格式双语数字健康档案'
              ],
              excluded: ['无任何隐藏附加收费']
            }
          ]
        : [
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
      title: isZh ? '三日两晚·身心平衡慢活之旅' : '3-Day 2-Night Mind-Body Balance Stay',
      titleZh: '三日两晚·身心平衡慢活之旅',
      subtitle: isZh
        ? '康旅途经典疗愈项目，融合系统健康筛查与世遗古城红砖古厝安歇。'
        : 'Our signature retreat blending thorough health assessment with slow-living courtyard serenity.',
      tag: isZh ? '经典疗愈' : 'Signature Retreat',
      badge: isZh ? '长辈最受欢迎' : 'Most Popular',
      tagColor: 'amber',
      duration: isZh ? '3 天 2 晚' : '3 Days / 2 Nights',
      price: '¥8,500',
      priceNote: isZh ? '/ 每位' : '/ person',
      idealFor: isZh
        ? '专为海外长辈探亲、家庭陪伴出行打造。兼顾深度健康检查与非遗古厝慢调养生，全程舒心无压力。'
        : 'Designed specifically for aging parents, visiting overseas families, or anyone seeking a soothing health checkup without stress.',
      image: hotelBedroomImg,
      description: isZh
        ? '康旅途旗舰疗愈项目，将专业系统的健康体检与泉州闽南非遗慢生活深度融合。入住古城静谧红砖古厝精品庭院，在铁观音茶香与温润药膳中调养身心，海外子女全程实时同步放心。'
        : 'Our flagship experience thoughtfully integrates a gentle health screening with restorative cultural immersion in Quanzhou. Experience peaceful nights in a traditional red-brick courtyard lodge, authentic Tieguanyin tea conversations, nourishing seasonal cuisine, and total peace of mind for family living overseas.',
      highlights: isZh
        ? [
            '三甲医院多学科专家综合体检与中医九型体质辨识',
            '2晚连住泉州古城静谧红砖庭院精品美宿（含双人营养早餐）',
            '全程专属商务专车接送机/高铁站与行程接驳',
            '一对一双语陪诊管家与生活疗愈管家双重贴心照护',
            '正宗铁观音茶师慢品私享会与温润节气滋补药膳',
            '关键就诊与生活节点实时向海外亲属 WhatsApp/微信 报备'
          ]
        : [
            'Comprehensive medical health screening at certified partner hospitals',
            'Traditional Chinese Medicine (TCM) body constitution evaluation',
            '2 nights in a tranquil ancient city red-brick courtyard boutique hotel',
            'Private arrival and departure transfers (Airport / High-Speed Rail)',
            'Curated unhurried tea sessions & intangible cultural heritage handcraft',
            'Real-time WhatsApp/WeChat family sync nodes at each milestone'
          ],
      itinerary: [
        {
          day: isZh ? '第 1 天' : 'Day 1',
          title: isZh ? '接机抵达 · 入住古厝与慢调欢迎茶' : 'Arrival, Courtyard Settle-In & Gentle Welcome',
          events: isZh
            ? [
                {
                  time: '上午 / 下午',
                  title: '机场 / 高铁站专属商务专车接站',
                  description: '专属管家与专车司机在泉州晋江机场或高铁站守候接驾，协助行李搬运并递上温润欢迎茶水。',
                  type: 'transport'
                },
                {
                  time: '15:00',
                  title: '入住古城静谧红砖精品美宿',
                  description: '下榻泉州历史文化街区古厝精品庭院套房，享受静谧无打扰的环境与舒适安睡设施。',
                  type: 'living'
                },
                {
                  time: '16:30 - 18:00',
                  title: '庭院安歇与行前体检问诊梳理',
                  description: '在庭院檐下与健康管家品饮淡雅乌龙茶，核对次日体检项目、禁食禁水注意事项与长辈日常用药情况。',
                  isHighlight: true,
                  type: 'culture'
                },
                {
                  time: '18:30',
                  title: '时令清淡欢迎药膳晚宴',
                  description: '品尝少油少盐、健脾养胃的闽南家常养生暖餐。',
                  type: 'dining'
                }
              ]
            : [
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
                  time: '16:30 - 18:00',
                  title: 'Courtyard Tea & Pre-Checkup Briefing',
                  description: 'Relaxed tea conversation with your wellness concierge to review tomorrow’s medical schedule, dietary restrictions, and personal preferences.',
                  isHighlight: true,
                  type: 'culture'
                },
                {
                  time: '18:30',
                  title: 'Seasonal Welcome Restorative Dinner',
                  description: 'A light, digestion-friendly dinner prepared with seasonal local produce and gentle Fujian herbal broths.',
                  type: 'dining'
                }
              ]
        },
        {
          day: isZh ? '第 2 天' : 'Day 2',
          title: isZh ? '三甲医院绿色通道深度体检 · 午后茶叙与古城漫步' : 'VIP Hospital Health Assessment & Serene Tea Rest',
          events: isZh
            ? [
                {
                  time: '08:00 - 11:30',
                  title: '三甲医院VIP绿色通道综合体检',
                  description: '管家全程陪同完成生化全套、器官超声、胸部低剂量CT、心电图与中医体质辨识，全流程免排队。',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '12:00',
                  title: '庭院养胃养生午餐',
                  description: '享用精心熬制的山药莲子鸽子汤与养生主食，滋养脾胃。',
                  type: 'dining'
                },
                {
                  time: '13:30 - 15:30',
                  title: '午间深层静谧午休',
                  description: '在古厝静谧卧房充分休息，舒缓晨间就诊精力。',
                  type: 'living'
                },
                {
                  time: '16:00 - 18:00',
                  title: '老茶师正宗铁观音品鉴与古巷漫步',
                  description: '在静谧茶舍与本地老茶师品饮炭焙铁观音，傍晚漫步古城幽静小巷，聆听千年开元寺晚钟。',
                  isHighlight: true,
                  type: 'culture'
                }
              ]
            : [
                {
                  time: '08:00 - 11:30',
                  title: 'VIP Fast-Track Hospital Examination',
                  description: 'Full-body health screening (blood biochemistry, advanced ultrasound, low-dose chest imaging, cardiac evaluation, TCM constitution diagnosis) with 1-on-1 escort.',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '12:00',
                  title: 'Post-Checkup Nourishing Garden Lunch',
                  description: 'Warm mountain yam and herbal broth lunch designed to restore gentle vitality.',
                  type: 'dining'
                },
                {
                  time: '13:30 - 15:30',
                  title: 'Peaceful Courtyard Afternoon Rest',
                  description: 'Uninterrupted quiet relaxation in your boutique courtyard suite.',
                  type: 'living'
                },
                {
                  time: '16:00 - 18:00',
                  title: 'Tea Master Conversation & Historic Lane Stroll',
                  description: 'Unrushed gongfu tea session with a veteran tea master, followed by an evening walk through the quiet residential streets near Kaiyuan Temple.',
                  isHighlight: true,
                  type: 'culture'
                }
              ]
        },
        {
          day: isZh ? '第 3 天' : 'Day 3',
          title: isZh ? '主检报告权威解读 · 非遗手作与专车送行' : 'Report Review, Mindful Handcraft & Departure',
          events: isZh
            ? [
                {
                  time: '09:00 - 10:30',
                  title: '主检医师双语综合解读与日常调养方案',
                  description: '主任医师逐项解读指标，提供通俗易懂的饮食、运动与用药指导。管家现场录音并整理数字纪要。',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '10:45 - 12:00',
                  title: '非遗天然草本香道/白瓷触觉体验',
                  description: '在非遗老师指导下体验天然沉香制作或德化白瓷拉坯，通过触觉感知平复思绪。',
                  type: 'culture'
                },
                {
                  time: '12:30',
                  title: '欢送养生素食午宴',
                  description: '品尝精致营养的世遗素斋与时令鲜蔬。',
                  type: 'dining'
                },
                {
                  time: '下午',
                  title: '专车送站与专属双语数字档案交接',
                  description: '商务专车送至机场或高铁站，完整数字报告与生活调理指南同步发送至全家。',
                  type: 'transport'
                }
              ]
            : [
                {
                  time: '09:00 - 10:30',
                  title: 'Chief Physician Debrief & Translated Report',
                  description: 'Detailed consultation reviewing preliminary findings. Your companion provides clear English translation and records an audio summary for overseas family.',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '10:45 - 12:00',
                  title: 'Mindful Herbal Incense or Ceramic Crafting',
                  description: 'Tactile craft experience using natural local botanicals or Dehua porcelain clay to anchor inner calmness.',
                  type: 'culture'
                },
                {
                  time: '12:30',
                  title: 'Farewell Seasonal Lunch',
                  description: 'Enjoy a nourishing meal before check-out.',
                  type: 'dining'
                },
                {
                  time: 'Afternoon',
                  title: 'Private Station / Airport Transfer',
                  description: 'Private transfer with luggage assistance. Digital report pack delivered to your family cloud.',
                  type: 'transport'
                }
              ]
        }
      ],
      inclusions: isZh
        ? [
            {
              category: '医疗健康保障',
              included: [
                '三甲医院综合健康体检套餐（含生化全套、超声、胸部CT、心电图）',
                '名老中医九型体质把脉辨识与节气调养建议',
                '专属双语陪诊管家一对一全程陪同指引',
                '主任医师报告双语解读与数字健康档案永久归档'
              ],
              excluded: [
                '套餐范围外个人额外增加的专科检查项目费用',
                '门诊处方药物费用'
              ]
            },
            {
              category: '精品住宿与餐饮',
              included: [
                '2晚泉州古城核心区高端红砖庭院精品美宿',
                '每日庭院双人营养早餐',
                '行程中包含的全部定制养生药膳午餐与晚餐',
                '老茶师私享茶席体验与茶点'
              ],
              excluded: ['个人额外酒水与自购土特产消费']
            },
            {
              category: '交通与专属管家',
              included: [
                '全程专车接送机/高铁站及行程内所有专车接驳',
                '生活疗愈管家与就医陪诊管家双重服务',
                '非遗手作体验物料与导师指导费',
                '向海外家属全天候 WhatsApp / 微信 节点报备'
              ],
              excluded: ['抵达泉州的大交通机票或高铁客票']
            }
          ]
        : [
            {
              category: 'Medical Services',
              included: [
                'Comprehensive health screening panel at Grade 3A tertiary center',
                'TCM pulse constitution assessment and personalized dietary guide',
                'Dedicated 1-on-1 bilingual escort companion throughout',
                'Doctor debrief translation and secure digital cloud archive'
              ],
              excluded: ['Prescription medication pharmacy charges']
            },
            {
              category: 'Accommodation & Dining',
              included: [
                '2 nights in a heritage red-brick courtyard boutique hotel',
                'Daily artisanal Fujian breakfasts for 2 guests',
                'All scheduled seasonal restorative lunches and dinners',
                'Private tea master tasting sessions and premium teas'
              ],
              excluded: ['Personal souvenir and incidental shopping']
            },
            {
              category: 'Transport & Concierge',
              included: [
                'Private round-trip airport/rail transfers and all daily transit',
                'Dedicated 24/7 family concierge support',
                'All cultural workshop craft materials and instructor fees',
                'Real-time WhatsApp / WeChat milestone sync to overseas family'
              ],
              excluded: ['Long-distance flights or high-speed rail to Quanzhou']
            }
          ]
    },
    {
      id: '5-day-deep-healing',
      tabKey: '5day',
      title: isZh ? '五日四晚·深层调养寻静之旅' : '5-Day 4-Night Deep Healing Retreat',
      titleZh: '五日四晚·深层调养寻静之旅',
      subtitle: isZh
        ? '多学科深度健康筛查、名中医体质膏方调养与世遗泉州千年禅修浸润。'
        : 'A comprehensive mind-body reset combining advanced multi-organ screening, TCM dietetics, and ancient Buddhist heritage immersion.',
      tag: isZh ? '全维焕新' : 'Full Restoration',
      tagColor: 'terracotta',
      duration: isZh ? '5 天 4 晚' : '5 Days / 4 Nights',
      price: '¥15,500',
      priceNote: isZh ? '/ 每位' : '/ person',
      idealFor: isZh
        ? '适合渴望全方位健康重塑、深度减压排劳、以及深度沉浸泉州宋元海丝世遗文化的海外友人与家庭。'
        : 'Ideal for travelers needing a comprehensive health reboot, stress relief, and deep connection with Quanzhou’s UNESCO heritage.',
      image: quanzhouPagodasImg,
      description: isZh
        ? '深度全维度的身心康养之旅。包含多专科深度体检与权威报告解读、中医名家定制调理膳食、开元寺双塔及世遗古迹禅修慢游、非遗手作香道疗愈，彻底恢复身心元气。'
        : 'A deeply restorative journey curated for complete physical and mental rejuvenation. Blends in-depth multi-specialty health examinations, individualized TCM dietary regimens, mindful visits to ancient temples (Kaiyuan Temple, Qingjing Mosque), and meditative slow-living rituals in Quanzhou.',
      highlights: isZh
        ? [
            '多专科深度器官健康筛查与知名三甲专家面对面长咨询',
            '名中医定制全程节气药膳食疗与个性化体质调养方案',
            '4晚古城核心区高端非遗设计美宿/庭院套房尊享',
            '开元寺千年双塔禅意清修与清净古寺静心漫步',
            '非遗德化白瓷拉坯/天然草本古法合香触觉触觉疗愈',
            '行程结束后30天专属健康档案跟踪与远程咨询支持'
          ]
        : [
            'Extensive multi-organ screening & specialist medical consultation',
            'Tailored TCM seasonal dietary regimen and constitution tonics',
            '4 nights in an exclusive ancient courtyard heritage suite',
            'Guided meditative mornings at Kaiyuan Temple & Qingjing Mosque',
            'Mindful ceramics and natural incense crafting workshops',
            '30-day post-retreat remote health tracking and doctor follow-up'
          ],
      itinerary: [
        {
          day: isZh ? '第 1 天' : 'Day 1',
          title: isZh ? '尊享接站 · 入住非遗美宿与安神欢迎礼' : 'Welcome to Quanzhou, Courtyard Check-in & Calming Tea',
          events: isZh
            ? [
                {
                  time: '全天',
                  title: '专车尊享接站与行李入户',
                  description: '专车接驳直达古城核心区非遗庭院酒店，管家递上特调安神降噪草本茶。',
                  type: 'transport'
                },
                {
                  time: '16:00',
                  title: '健康画像与生活习惯深度梳理',
                  description: '管家与长辈深度交流既往病史、过敏源及作息习惯，确认未来几日就诊与调理节奏。',
                  type: 'living'
                },
                {
                  time: '18:00',
                  title: '闽南温润节气欢迎晚宴',
                  description: '清淡少盐、暖胃润燥的精美药膳晚宴。',
                  type: 'dining'
                }
              ]
            : [
                {
                  time: 'All Day',
                  title: 'Private Airport / Station Pick-up & Check-in',
                  description: 'Private transfer to our serene heritage boutique retreat in Quanzhou’s historic district. Settle in with soothing welcome herbal infusion.',
                  type: 'transport'
                },
                {
                  time: '16:00',
                  title: 'Pre-Screening Intake & Wellness Orientation',
                  description: 'Detailed review of medical history, current medications, dietary needs, and mobility considerations with your concierge.',
                  type: 'living'
                },
                {
                  time: '18:00',
                  title: 'Nourishing Seasonal Welcome Dinner',
                  description: 'A delicate, restorative banquet featuring local herbal broths and organic produce.',
                  type: 'dining'
                }
              ]
        },
        {
          day: isZh ? '第 2 天' : 'Day 2',
          title: isZh ? '三甲医院系统深度体检 · 空腹后食养与深层午休' : 'Comprehensive Medical Screening & Afternoon Recovery',
          events: isZh
            ? [
                {
                  time: '08:00 - 12:00',
                  title: '三甲综合医院VIP多学科深度筛查',
                  description: '心脑血管超声、肿瘤标志物筛查、低剂量CT、消化系统超声及名老中医体质把脉。',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '12:30',
                  title: '空腹后健脾和胃养生餐',
                  description: '特制滋补粥汤与精美蒸点。',
                  type: 'dining'
                },
                {
                  time: '14:00 - 16:30',
                  title: '庭院深层静心午睡',
                  description: '彻底放松休息，恢复精神。',
                  type: 'living'
                },
                {
                  time: '17:00 - 18:30',
                  title: '黄昏世遗文庙静心漫步',
                  description: '漫步千年古榕掩映下的文庙古迹，感受泉州祥和文脉。',
                  type: 'culture'
                }
              ]
            : [
                {
                  time: '08:00 - 12:00',
                  title: 'Advanced Tertiary Medical Center Screening',
                  description: 'Full-body multi-organ diagnostics including cardiovascular ultrasound, tumor markers, low-dose imaging, biochemical panels, and TCM pulse analysis.',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '12:30',
                  title: 'Gentle Post-Fasting Restorative Meal',
                  description: 'Nourishing warm congee and local herbal delicacies.',
                  type: 'dining'
                },
                {
                  time: '14:00 - 16:30',
                  title: 'Deep Courtyard Rest & Recuperation',
                  description: 'Peaceful quiet time in your heritage room to recharge.',
                  type: 'living'
                },
                {
                  time: '17:00 - 18:30',
                  title: 'Twilight Stroll at Ancient Confucian Temple',
                  description: 'Gentle stroll among ancient banyans and historic stone monuments.',
                  type: 'culture'
                }
              ]
        },
        {
          day: isZh ? '第 3 天' : 'Day 3',
          title: isZh ? '世遗开元寺双塔禅修 · 非遗古法合香触觉疗愈' : 'Kaiyuan Temple Pagodas & Intangible Heritage Incense Crafting',
          events: isZh
            ? [
                {
                  time: '09:00 - 11:30',
                  title: '开元寺千年双塔禅意慢步',
                  description: '在晨光微曦中聆听双塔铜铃，观赏宋代石雕，感受千年禅宗内心的宁静。',
                  isHighlight: true,
                  type: 'culture'
                },
                {
                  time: '12:00',
                  title: '世遗净素斋席养生宴',
                  description: '品尝天然时蔬与菌菇熬制的素食珍味。',
                  type: 'dining'
                },
                {
                  time: '14:30 - 16:30',
                  title: '非遗天然草本香道合香手作',
                  description: '亲手调制沉香、檀香与安神草本香牌，以嗅觉与触觉平抚神经张力。',
                  isHighlight: true,
                  type: 'culture'
                },
                {
                  time: '19:30',
                  title: '南音古乐听觉冥想体验',
                  description: '在古厝私塾聆听联合国非遗南音幽雅琵琶与洞箫古韵。',
                  type: 'culture'
                }
              ]
            : [
                {
                  time: '09:00 - 11:30',
                  title: 'Mindful Morning at Kaiyuan Temple Twin Pagodas',
                  description: 'Explore the 1,300-year-old Buddhist sanctuary, listen to wind chimes on the twin stone pagodas, and absorb the serene atmosphere.',
                  isHighlight: true,
                  type: 'culture'
                },
                {
                  time: '12:00',
                  title: 'Temple-Inspired Vegetarian Feast',
                  description: 'Healthy, nourishing vegetarian dishes prepared with seasonal mushrooms and mountain greens.',
                  type: 'dining'
                },
                {
                  time: '14:30 - 16:30',
                  title: 'Natural Botanical Incense Crafting Workshop',
                  description: 'Blend natural agarwood, sandalwood, and calming herbs into personal wellness incense under an intangible heritage master.',
                  isHighlight: true,
                  type: 'culture'
                },
                {
                  time: '19:30',
                  title: 'UNESCO Nanyin Acoustic Meditation',
                  description: 'An intimate evening of classical Minnan Nanyin melodies (pipa & bamboo flute) to settle the mind before sleep.',
                  type: 'culture'
                }
              ]
        },
        {
          day: isZh ? '第 4 天' : 'Day 4',
          title: isZh ? '主检报告权威深度解读 · 个性化调理方案制定' : 'Specialist Medical Report Debrief & Personalized Wellness Plan',
          events: isZh
            ? [
                {
                  time: '09:30 - 11:30',
                  title: '三甲大主任医师一对一面询与深度报告解读',
                  description: '针对全部化验、CT及超声指标进行细致讲解，解答所有健康疑问。',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '14:30 - 16:30',
                  title: '名中医体质调理方案与四季膏方定制',
                  description: '根据检查结果与中医辨证，出具长期的起居、运动与膳食调养指南。',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '18:00',
                  title: '欢聚家宴 · 闽南滋补功夫汤宴',
                  description: '享用精火慢炖的滋补老火汤。',
                  type: 'dining'
                }
              ]
            : [
                {
                  time: '09:30 - 11:30',
                  title: 'In-Depth Chief Physician Report Review',
                  description: 'Unrushed 1-on-1 consultation going over all blood, imaging, and biochemical findings with companion translation.',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '14:30 - 16:30',
                  title: 'Personalized TCM Longevity & Dietary Strategy',
                  description: 'Customized herbal, lifestyle, and exercise recommendations for your long-term health back home.',
                  isHighlight: true,
                  type: 'medical'
                },
                {
                  time: '18:00',
                  title: 'Celebratory Slow-Simmered Banquet',
                  description: 'Enjoy a rich, nourishing Fujian tonic soup dinner.',
                  type: 'dining'
                }
              ]
        },
        {
          day: isZh ? '第 5 天' : 'Day 5',
          title: isZh ? '晨间茶叙 · 档案交接与温暖送行' : 'Morning Tea Reflection, Digital Archive Handoff & Farewell',
          events: isZh
            ? [
                {
                  time: '09:00 - 10:30',
                  title: '庭院惜别茶席与健康档案归档交付',
                  description: '交付装订成册的双语健康报告及云端加密访问链接。',
                  type: 'culture'
                },
                {
                  time: '下午',
                  title: '专车尊享送机/高铁站',
                  description: '专车安全护送返程，开启为期 30 天的远程健康跟踪服务。',
                  type: 'transport'
                }
              ]
            : [
                {
                  time: '09:00 - 10:30',
                  title: 'Farewell Tea & Comprehensive Digital Dossier Handover',
                  description: 'Receive your complete bilingual medical dossier, doctor voice summaries, and dietary guide.',
                  type: 'culture'
                },
                {
                  time: 'Afternoon',
                  title: 'Private Airport / High-Speed Rail Departure Transfer',
                  description: 'Smooth departure transfer with luggage assistance. Followed by 30-day remote concierge check-ins.',
                  type: 'transport'
                }
              ]
        }
      ],
      inclusions: isZh
        ? [
            {
              category: '全维医疗与名医服务',
              included: [
                '三甲医院多学科深度综合体检套餐（含全套生化、彩超、CT等）',
                '知名临床大主任与名老中医面对面深度咨询',
                '专属双语陪诊管家5天全程贴身照料',
                '定制长效中医体质调理方案与30天远程健康随访'
              ],
              excluded: ['突发非体检范围的重大手术或高精自费处方药']
            },
            {
              category: '奢享古厝住宿与餐饮',
              included: [
                '4晚古城核心区非遗高端红砖庭院套房尊享',
                '全程定制节气养生早、午、晚餐与滋补药膳',
                '老茶师私房茶席体验及精美茶点'
              ],
              excluded: ['个人自愿选购的特产或艺术品']
            },
            {
              category: '文化禅修与专车服务',
              included: [
                '全程专车接送机/高铁站与每日行程专属商务车接送',
                '开元寺、清净古寺世遗慢游导引及门票',
                '天然草本合香/白瓷非遗手作材料与大师指导',
                '向海外家属全天候 WhatsApp / 微信 实时图文同步'
              ],
              excluded: ['往返泉州的长途大交通']
            }
          ]
        : [
            {
              category: 'Comprehensive Medical',
              included: [
                'Complete multi-organ screening panel at Grade 3A tertiary medical center',
                'Chief physician consultation and dedicated TCM master pulse evaluation',
                'Dedicated 1-on-1 bilingual medical escort companion throughout 5 days',
                'Bilingual medical report translation & 30-day post-retreat remote follow-up'
              ],
              excluded: ['Prescription medication pharmacy costs']
            },
            {
              category: 'Heritage Stays & Nourishment',
              included: [
                '4 nights in an exclusive ancient courtyard heritage suite',
                'All gourmet seasonal breakfasts, lunches, and nourishing restorative dinners',
                'Private tea master tastings and premium oolong selections'
              ],
              excluded: ['Personal art and souvenir shopping']
            },
            {
              category: 'Culture & Transportation',
              included: [
                'Private round-trip transfers and private executive chauffeur throughout',
                'All temple cultural admissions and intangible heritage master workshop fees',
                'Complete materials for ceramics and botanical incense crafting',
                'Full-journey WhatsApp / WeChat family milestone updates'
              ],
              excluded: ['Intercity flights or high-speed rail tickets to Quanzhou']
            }
          ]
    }
  ];
};

export const getLocalizedEscortStages = (lang: Language): EscortStage[] => {
  const isZh = lang === 'zh';
  return [
    {
      step: 1,
      title: isZh ? '行前健康画像与需求梳理' : 'Pre-Trip Health Profiling',
      titleZh: '行前健康画像与需求梳理',
      description: isZh
        ? '在出行前收集既往病史、慢性病情况、饮食禁忌与语言习惯，与合作三甲名医共同制定专属个性化筛查方案。'
        : 'We gather medical history, chronic conditions, dietary restrictions, mobility preferences, and preferred language to construct a customized screening blueprint.',
      details: isZh
        ? [
            '详细健康问卷梳理与既往病历核对',
            '与合作三甲主任医师预协调定制体检加项',
            '匹配合适语言的陪诊管家（普通话/英语/闽南语）'
          ]
        : [
            'Detailed medical intake questionnaire review',
            'Targeted screening item customization with partner chief doctors',
            'Companion matching (English, Mandarin, Hokkien dialect)'
          ],
      color: 'tea'
    },
    {
      step: 2,
      title: isZh ? '三甲医院绿色通道优先预约' : 'Priority Hospital Registration',
      titleZh: '三甲医院绿色通道优先预约',
      description: isZh
        ? '提前完成医院专家号源锁定与VIP体检专号预约，免去繁琐耗时的排队等待，到达医院即刻开启检查。'
        : 'Advance hospital slot booking and VIP registration eliminate the exhausting chaos of hospital lines, providing immediate access upon arrival.',
      details: isZh
        ? [
            '三甲特需/VIP体检专号提前预约',
            '预先规划各检查科室最优流线',
            '无障碍通道直达与独立私密候诊专区'
          ]
        : [
            'Designated VIP appointment booking',
            'Pre-printed examination guides and test sequencing',
            'Step-free entrance and private waiting lounge access'
          ],
      color: 'amber'
    },
    {
      step: 3,
      title: isZh ? '全程一对一暖心陪诊与翻译' : 'Bedside & Clinic 1-on-1 Escort',
      titleZh: '全程一对一暖心陪诊与翻译',
      description: isZh
        ? '管家全程寸步不离，负责科室指引、单据拿取、心理安抚，并在医生问诊时提供实时、精准的双语医学翻译。'
        : 'Your companion manages logistics, guides physical navigation, comforts the guest, and interprets medical terminology in real-time.',
      details: isZh
        ? [
            '诊室间全程贴身陪同与物理引导',
            '医生问诊实时双语精准传译',
            '空腹检查完毕后即时提供温水与能量餐食'
          ]
        : [
            'Room-to-room physical accompaniment and guidance',
            'Real-time bilingual physician dialogue interpretation',
            'Immediate post-fasting snacks and hydration'
          ],
      color: 'tea'
    },
    {
      step: 4,
      title: isZh ? '报告权威解读与双语数字归档' : 'Post-Checkup Translation & Archiving',
      titleZh: '报告权威解读与双语数字归档',
      description: isZh
        ? '主检医师将所有指标转化成通俗易懂的指导建议，管家整理双语 PDF 报告，安全推送给海外家属云端归档。'
        : 'Doctor recommendations are translated into plain, reassuring language and securely delivered to family members as a permanent digital PDF archive.',
      details: isZh
        ? [
            '主检主任医师面对面逐项报告解读与语音录制',
            '双语电子版健康档案汇总编制',
            '行程结束后30天专属健康咨询跟踪支持'
          ]
        : [
            'Chief physician report debrief with companion translation',
            'Bilingual PDF health report compilation',
            '30-day post-retreat remote health inquiry support'
          ],
      color: 'terracotta'
    }
  ];
};

export const getLocalizedLiveSyncNodes = (lang: Language): LiveSyncNode[] => {
  const isZh = lang === 'zh';
  return [
    {
      time: '08:05',
      title: isZh ? '晨间专车接驾与抵达医疗中心' : 'Morning Pick-up & Check-in at Medical Center',
      sender: isZh ? '专属陪诊管家 · 林管家' : 'Companion Lin (Medical Escort)',
      content: isZh
        ? '张先生/张女士早上好！我们已按时在古厝庭院接到叔叔阿姨。两位长辈精神状态非常好。我们已进入三甲医院VIP健康筛查中心，现正进行晨间采血项目。'
        : 'Good morning Mr. & Mrs. Zhang! We picked up your parents at the courtyard on time. Both are in great spirits. We have entered the VIP health screening center and are starting the preliminary blood draw now.',
      type: 'status',
      status: 'completed'
    },
    {
      time: '09:20',
      title: isZh ? '腹部超声与心电图检查顺利完成' : 'Ultrasound & Cardiac Screening Completed',
      sender: isZh ? '专属陪诊管家 · 林管家' : 'Companion Lin (Medical Escort)',
      content: isZh
        ? '腹部彩超和心电图刚顺利完成，主任医师反馈心脏节律平稳。空腹检查项目已全部结束，我们正前往私密休息室享用温热的小米粥与养生点心。'
        : 'Abdominal ultrasound and ECG have just concluded smoothly. The technician noted good cardiac rhythm. Fasting phase is now over—we are heading to the private lounge for warm millet congee and steamed buns.',
      type: 'status',
      status: 'completed'
    },
    {
      time: '11:15',
      title: isZh ? '主检医生初步面询与语音总结' : 'Physician Consultation & Preliminary Notes',
      sender: isZh ? '专属陪诊管家 · 林管家' : 'Companion Lin (Medical Escort)',
      content: isZh
        ? '内科陈主任已结合血常规和彩超做初步面询，总体生命体征十分稳定！附上陈主任录制的2分钟语音医嘱摘要，供海外全家查阅。'
        : 'Doctor Chen from Internal Medicine has reviewed the initial blood panels and ultrasound. Overall vitals are stable! A 2-minute voice summary from the doctor is attached for your review.',
      type: 'voice',
      status: 'completed'
    },
    {
      time: '12:30',
      title: isZh ? '检查后抵达庭院餐厅享用温润午餐' : 'Post-Checkup Restorative Lunch at Garden Courtyard',
      sender: isZh ? '专属陪诊管家 · 林管家' : 'Companion Lin (Medical Escort)',
      content: isZh
        ? '我们已到达安静的庭院餐厅。叔叔阿姨正在享用当季闽南莲藕排骨汤与时蔬手工面。14:00我们将返回酒店套房午休品茶。'
        : 'We have arrived at the peaceful courtyard restaurant. Mother and father are enjoying seasonal Minnan lotus root soup and light vegetable noodles. We will return to the hotel for afternoon tea and rest at 14:00.',
      type: 'photo',
      status: 'completed'
    },
    {
      time: '16:00',
      title: isZh ? '双语健康初检摘要数字归档完成' : 'Digital Report Summary Compiled',
      sender: isZh ? '康旅途客服中心' : 'WellJourney Concierge Team',
      content: isZh
        ? '初步翻译整理的双语健康备忘录已同步存入您的家庭专属云端文件夹。全部化验生化指标将在48小时内更新完毕。'
        : 'Preliminary translated health notes (English & Chinese) have been compiled into your family cloud folder. Complete laboratory metrics will be updated within 48 hours.',
      type: 'report',
      status: 'completed'
    }
  ];
};

export const getLocalizedFaqs = (lang: Language): FaqItem[] => {
  const isZh = lang === 'zh';
  return [
    {
      id: 'faq-1',
      question: isZh
        ? '如果检查过程中发现异常或需要进一步专科治疗，如何处理？'
        : 'What happens if an unexpected condition or urgent finding is discovered during the checkup?',
      answer: isZh
        ? '如果主检医生发现需要进一步专科排查的异常指标，陪诊管家会即刻在三甲医院内部启动名医绿色通道，协助挂号对应专科主任号源。同时第一时间与海外家属电话沟通，提供严谨的医学转述与协助，绝不耽误任何治疗时机。'
        : 'If an attending physician flags a priority finding, our companion immediately coordinates fast-track secondary specialist referrals at the tertiary hospital. We notify overseas family promptly via phone or video call, providing objective physician notes and helping schedule necessary interventions without panic.'
    },
    {
      id: 'faq-2',
      question: isZh
        ? '合作的三甲医院资质如何？检查报告在海外具有参考价值吗？'
        : 'What credentials do your partner hospitals have, and are reports recognized abroad?',
      answer: isZh
        ? '我们全部合作医院均为国家认证的三级甲等（Grade 3A）公立综合医院及国家标准化体检中心。检查设备均为西门子、GE、飞利浦等国际顶尖医疗设备。出具的报告包含详细指标参考范围与中英文对照，可作为海外家庭医生或专科医生的可靠参考。'
        : 'We partner exclusively with accredited Grade 3A tertiary general hospitals and national clinical centers in Quanzhou. All laboratory analyzers and imaging equipment meet international diagnostic standards (Siemens, GE, Philips). Translated digital PDF reports with standard metric values can readily be reviewed by family physicians in Australia, Singapore, or North America.'
    },
    {
      id: 'faq-3',
      question: isZh
        ? '陪诊管家支持哪些语言交流？'
        : 'What languages do your medical companions speak?',
      answer: isZh
        ? '我们的陪诊管家经过专业医疗服务礼仪与跨文化沟通培训，流利使用普通话、英语以及泉州本地闽南语（Hokkien），能够与长辈建立无障碍的温暖交流。'
        : 'Our dedicated companions are fluent in Mandarin, English, and local Hokkien (Southern Min dialect). They are trained in patient empathy, cross-cultural etiquette, and medical terminology interpretation.'
    },
    {
      id: 'faq-4',
      question: isZh
        ? '海外亲属如何实时了解父母在泉州的就诊和生活状态？'
        : 'How do family members abroad track daily health and travel progress?',
      answer: isZh
        ? '我们在行前为您建立专属家庭 WhatsApp 讨论组或微信服务群。管家会在晨间接驾、进入诊室、检查完毕、医生问诊、用膳及回房休息等每一个关键节点发送图文和医生语音摘要。'
        : 'Prior to arrival, we establish a private WhatsApp group or WeChat service thread for your family. Your companion posts real-time status timestamps, photos, and physician voice memos at each milestone from morning pick-up to evening rest.'
    },
    {
      id: 'faq-5',
      question: isZh
        ? '如果因为天气或签证等原因需要调整或取消行程，退改政策是怎样的？'
        : 'What is the cancellation and rescheduling policy for unexpected travel changes?',
      answer: isZh
        ? '行前 7 天以上通知可免费改期或全额扣除医院挂号锁号工本费后退款；若因突发身体健康原因出具医生证明，我们将全力协助协调顺延，最大程度保障客人的权益。'
        : 'Notice given more than 7 days prior to check-in qualifies for free date adjustments or a full refund minus nominal hospital administrative registration holds. In the event of medical emergencies with a physician note, we provide compassionate rescheduling with zero penalty.'
    }
  ];
};

export const getLocalizedCultureElements = (lang: Language): CultureElement[] => {
  const isZh = lang === 'zh';
  return [
    {
      id: 'tea',
      title: isZh ? '自然喝茶 · 慢品铁观音' : 'Tea & Warm Conversation',
      titleZh: '自然喝茶 · 慢品铁观音',
      subtitle: isZh
        ? '没有表演式的繁琐仪式，只有温暖身心、打开心扉的真诚茶叙。'
        : 'No rigid tourist performances. Just genuine tea chats that soothe the mind.',
      description: isZh
        ? '在静谧庭院中与本地老茶师促膝长谈，品饮新鲜冲泡的安溪正宗铁观音。温热的茶汤缓缓润泽肠胃，消解长途旅途疲惫，让紧绷的神经自然放松。'
        : 'We sit down with passionate local tea masters for relaxed, unhurried chats over fresh Tieguanyin oolong tea. It is an organic, time-honored Minnan ritual that gently warms the body, lowers tension, and opens the heart.',
      image: teaPouringImg,
      iconName: 'Coffee',
      accent: 'tea'
    },
    {
      id: 'handcrafts',
      title: isZh ? '手作舒压 · 触觉疗愈' : 'Mindful Handcrafts',
      titleZh: '手作舒压 · 触觉疗愈',
      subtitle: isZh
        ? '调动双手与感官，安抚杂乱思绪，重拾专注与当下。'
        : 'Engaging the hands to calm the busy mind and restore tactile awareness.',
      description: isZh
        ? '沉浸于低压力的非遗传统手作——无论是轻柔拉坯体验德化白瓷，还是亲手研磨天然草本香料合香，手指的触觉感知让分散的注意力回到呼吸与当下。'
        : 'Immerse in low-stress, meditative traditional crafts—whether gently shaping local Dehua porcelain clay, crafting soothing natural herbal incense, or trying delicate lacquerware. Tactile creation gently brings scattered attention back to the present moment.',
      image: 'https://images.unsplash.com/photo-1610056494052-6a4f814d49d7?auto=format&fit=crop&q=80&w=1000',
      iconName: 'Sparkles',
      accent: 'amber'
    },
    {
      id: 'table',
      title: isZh ? '家常食养 · 四季调理' : 'Nourishing Local Table',
      titleZh: '家常食养 · 四季调理',
      subtitle: isZh
        ? '遵循中医节气食养原则，少油少盐、温润养胃的在地家常餐食。'
        : 'Home-style, low-stimulation meals aligned with TCM seasonal principles.',
      description: isZh
        ? '每一餐都以恢复元气为出发点。精选泉州本地时令食材与养生药膳（如清炖老鸭汤、山药莲子排骨汤），口感温润清鲜，极利于中老年长辈肠胃吸收。'
        : 'Nourishing meals designed to restore vitality. Stroll through morning markets with your host to select seasonal produce, followed by gentle, stomach-soothing soups (such as ginger duck or mountain yam broth) crafted according to traditional Fujian food therapy.',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1000',
      iconName: 'Utensils',
      accent: 'terracotta'
    },
    {
      id: 'spaces',
      title: isZh ? '静谧空间 · 红砖古厝' : 'Tranquil Red-Brick Spaces',
      titleZh: '静谧空间 · 红砖古厝',
      subtitle: isZh
        ? '听雨品茗、自然苏醒的世遗古宅精品居所。'
        : 'Historic courtyard lodgings where you can hear the rain and sleep in peacefully.',
      description: isZh
        ? '居所本身就是疗愈的重要一环。入住精心修缮的闽南传统红砖燕尾脊古厝套房，在天井里聆听清晨鸟鸣，在百年古榕树荫下静心阅读，摆脱闹钟的催促。'
        : 'Your stay is an integral part of your wellness. Rest in carefully restored ancient Minnan red-brick mansions, where you can listen to birdsong in the inner courtyard, read in the shade of ancient banyan trees, and wake up naturally without an alarm clock.',
      image: 'https://images.unsplash.com/photo-1590073844006-332e07860113?auto=format&fit=crop&q=80&w=1000',
      iconName: 'Home',
      accent: 'tea'
    },
    {
      id: 'soundscapes',
      title: isZh ? '南音古韵 · 听觉冥想' : 'Ancient Nanyin Melodies',
      titleZh: '南音古韵 · 听觉冥想',
      subtitle: isZh
        ? '“中国音乐活化石”，在黄昏与夜色中抚平内心波澜。'
        : 'The delicate melodies of China’s living musical fossil drifting through twilight.',
      description: isZh
        ? '聆听联合国非遗南音。琵琶的缓慢拨弦与洞箫的悠长气息交织成空灵的声景，帮助身心自然进入深度放松与冥想状态，改善睡眠质量。'
        : 'Experience Nanyin (南音), an ancient classical chamber music recognized by UNESCO. The slow, meditative plucking of the pipa and the breath of the bamboo flute create an acoustic atmosphere that naturally settles the nervous system.',
      image: 'https://images.unsplash.com/photo-1549646698-c116d946d0a7?auto=format&fit=crop&q=80&w=1000',
      iconName: 'Music',
      accent: 'terracotta'
    }
  ];
};

export const getLocalizedDailyRhythm = (lang: Language): DailyRhythmItem[] => {
  const isZh = lang === 'zh';
  return [
    {
      time: isZh ? '上午 08:30' : '08:30 AM',
      title: isZh ? '顺时而醒 · 庭院晨光' : 'Awaken Naturally',
      titleZh: '清晨 · 顺时而醒',
      description: isZh
        ? '在古厝鸟鸣与和煦晨光中自然苏醒，享用温润易消化的闽南养生早餐，告别匆忙赶行程的疲累。'
        : 'Wake up to morning birdsong in the tranquil courtyard. Enjoy a warm, easily digestible Fujian breakfast without the rush to board a crowded tour bus.',
      category: 'morning',
      accentColor: '#D4A359'
    },
    {
      time: isZh ? '上午 11:00' : '11:00 AM',
      title: isZh ? '舒心调理 · 专家把脉' : 'Gentle Health Consultation',
      titleZh: '正午 · 舒心调理',
      description: isZh
        ? '在专属管家陪伴下从容进行健康体检或名医把脉，随后享用温润时令药膳午餐。'
        : 'Engage in a supported health checkup or TCM pulse evaluation with your personal escort, followed by a light, seasonal herbal soup lunch.',
      category: 'midday',
      accentColor: '#2C5E43'
    },
    {
      time: isZh ? '下午 03:00' : '03:00 PM',
      title: isZh ? '煮茶静心 · 檐下小憩' : 'Afternoon Tea & Courtyard Rest',
      titleZh: '午后 · 煮茶静心',
      description: isZh
        ? '在庭院檐下与老茶师品茶慢聊，无拥挤人群，无强制消费，只有惬意的呼吸与安静的时光。'
        : 'Sit under the courtyard eaves with a local tea master. No crowded schedules, no forced shopping—just genuine conversation and serene breathing space.',
      category: 'afternoon',
      accentColor: '#C87D55'
    },
    {
      time: isZh ? '傍晚 06:30' : '06:30 PM',
      title: isZh ? '巷陌漫步 · 晚钟安歇' : 'Home-Style Dinner & Twilight Stroll',
      titleZh: '黄昏 · 巷陌漫步',
      description: isZh
        ? '享用热气腾腾的家常晚宴，傍晚伴着古寺晚钟在安详古巷漫步，享受安宁好眠。'
        : 'Savor a warm, home-cooked Minnan dinner, followed by a quiet, lantern-lit stroll through residential historic lanes as temple bells ring in the distance.',
      category: 'evening',
      accentColor: '#1F422F'
    }
  ];
};

export const getLocalizedPartners = (lang: Language) => {
  const isZh = lang === 'zh';
  return [
    {
      title: isZh ? '同济大学晋江设计创新中心' : 'Tongji University Jinjiang Innovation Center',
      badge: isZh ? '学术研发与服务设计孵化' : 'Research & Service Incubation',
      description: isZh
        ? '依托同济大学设计创意学院的顶尖学术力量，我们的陪诊服务全流程与客人体检动线均基于“以人为本”的医疗服务设计理念打造。'
        : 'Proudly incubated with the support of the Tongji University Jinjiang International Design Innovation Center. Our accompaniment protocols and guest journeys are grounded in human-centered healthcare service design.',
      icon: 'GraduationCap'
    },
    {
      title: isZh ? '晋江三创园' : 'Jinjiang Three-Innovation Park (三创园)',
      badge: isZh ? '创新生态与产业赋能' : 'Innovation Ecosystem',
      description: isZh
        ? '扎根于晋江三创园高新创新生态体系，享有完善的合规保障、产业信誉与稳健的运营支撑。'
        : 'Operating within the robust innovation ecosystem of Jinjiang Three-Innovation Park, providing regulatory compliance, institutional credibility, and operational stability.',
      icon: 'Building2'
    },
    {
      title: isZh ? '三甲医院与健康管理协作网络' : 'Certified Healthcare Partner Network',
      badge: isZh ? '医疗资源协作网络' : 'Medical Collaboration',
      description: isZh
        ? '深度协作泉州权威三级甲等综合公立医院与国家标准化体检中心，为客人提供绿色通道专号预约与专家深度咨询。'
        : 'Collaborating with accredited tertiary hospitals and premium medical examination centers in Quanzhou to provide our guests with fast-track scheduling and VIP consultation.',
      icon: 'HeartHandshake'
    }
  ];
};

export const getLocalizedCommitments = (lang: Language) => {
  const isZh = lang === 'zh';
  return [
    {
      step: '01',
      title: isZh ? '被接住的感受 (Deep Empathy)' : 'Empathy First',
      description: isZh
        ? '我们培训每一位管家耐心倾听长辈的身体顾虑，从不催促，给予发自内心的尊重与温情照拂。'
        : 'We train every companion to listen deeply, adapt to physical limits without rushing, and offer authentic warmth. Your family members will feel truly cared for, not merely managed.'
    },
    {
      step: '02',
      title: isZh ? '过程全透明与节点同步 (Traceable Care)' : 'Total Transparency',
      description: isZh
        ? '海外子女在每个检查与出行节点都能接收到图文与语音报备，彻底打破信息黑盒，全程踏实安心。'
        : 'Overseas children receive structured, real-time updates at every clinical and travel milestone. You will always know how your parents are feeling and what steps have been completed.'
    },
    {
      step: '03',
      title: isZh ? '严谨的责任边界 (Clinical Respect)' : 'Medical Boundary Integrity',
      description: isZh
        ? '我们清晰恪守生活管家与临床医疗的界限。所有诊断、检查与用药均由三甲医院执业医师开展，确保医疗严谨。'
        : 'We know our clear boundary: we provide attentive logistics, language translation, and lifestyle comfort. All medical diagnoses, procedures, and prescriptions are strictly performed by licensed medical institutions.'
    },
    {
      step: '04',
      title: isZh ? '真实的在地日常 (Authentic Slow Living)' : 'Cultural Authenticity',
      description: isZh
        ? '拒绝浮躁的商业套路。我们带客人沉浸于真实的闽南茶香、温润家常药膳与古厝幽静生活。'
        : 'No manufactured tourist traps. We immerse guests in authentic Minnan slow living—gentle tea rituals, home-cooked nourishing broths, and peaceful ancient lanes.'
    }
  ];
};
