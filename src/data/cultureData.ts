import { CultureElement, DailyRhythmItem } from '../types';
import teaPouringImg from '../assets/images/tea_pouring_gongfu_1786863146357.jpg';

export const CULTURE_ELEMENTS: CultureElement[] = [
  {
    id: 'tea',
    title: 'Tea & Warm Conversation',
    titleZh: '自然喝茶 · 慢品铁观音',
    subtitle: 'No rigid tourist performances. Just genuine tea chats that soothe the mind.',
    description: 'We sit down with passionate local tea masters for relaxed, unhurried chats over fresh Tieguanyin oolong tea. It is an organic, time-honored Minnan ritual that gently warms the body, lowers tension, and opens the heart.',
    image: teaPouringImg,
    iconName: 'Coffee',
    accent: 'tea'
  },
  {
    id: 'handcrafts',
    title: 'Mindful Handcrafts',
    titleZh: '手作舒压 · 触觉疗愈',
    subtitle: 'Engaging the hands to calm the busy mind and restore tactile awareness.',
    description: 'Immerse in low-stress, meditative traditional crafts—whether gently shaping local Dehua porcelain clay, crafting soothing natural herbal incense, or trying delicate lacquerware. Tactile creation gently brings scattered attention back to the present moment.',
    image: 'https://images.unsplash.com/photo-1610056494052-6a4f814d49d7?auto=format&fit=crop&q=80&w=1000',
    iconName: 'Sparkles',
    accent: 'amber'
  },
  {
    id: 'table',
    title: 'Nourishing Local Table',
    titleZh: '家常食养 · 四季调理',
    subtitle: 'Home-style, low-stimulation meals aligned with TCM seasonal principles.',
    description: 'Nourishing meals designed to restore vitality. Stroll through morning markets with your host to select seasonal produce, followed by gentle, stomach-soothing soups (such as ginger duck or mountain yam broth) crafted according to traditional Fujian food therapy.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1000',
    iconName: 'Utensils',
    accent: 'terracotta'
  },
  {
    id: 'spaces',
    title: 'Tranquil Red-Brick Spaces',
    titleZh: '静谧空间 · 红砖古厝',
    subtitle: 'Historic courtyard lodgings where you can hear the rain and sleep in peacefully.',
    description: 'Your stay is an integral part of your wellness. Rest in carefully restored ancient Minnan red-brick mansions, where you can listen to birdsong in the inner courtyard, read in the shade of ancient banyan trees, and wake up naturally without an alarm clock.',
    image: 'https://images.unsplash.com/photo-1590073844006-332e07860113?auto=format&fit=crop&q=80&w=1000',
    iconName: 'Home',
    accent: 'tea'
  },
  {
    id: 'soundscapes',
    title: 'Ancient Nanyin Melodies',
    titleZh: '南音古韵 · 听觉冥想',
    subtitle: 'The delicate melodies of China’s living musical fossil drifting through twilight.',
    description: 'Experience Nanyin (南音), an ancient classical chamber music recognized by UNESCO. The slow, meditative plucking of the pipa and the breath of the bamboo flute create an acoustic atmosphere that naturally settles the nervous system.',
    image: 'https://images.unsplash.com/photo-1549646698-c116d946d0a7?auto=format&fit=crop&q=80&w=1000',
    iconName: 'Music',
    accent: 'terracotta'
  }
];

export const DAILY_RHYTHM: DailyRhythmItem[] = [
  {
    time: '08:30 AM',
    title: 'Awaken Naturally',
    titleZh: '清晨 · 顺时而醒',
    description: 'Wake up to morning birdsong in the tranquil courtyard. Enjoy a warm, easily digestible Fujian breakfast without the rush to board a crowded tour bus.',
    category: 'morning',
    accentColor: '#D4A359'
  },
  {
    time: '11:00 AM',
    title: 'Gentle Health Consultation',
    titleZh: '正午 · 舒心调理',
    description: 'Engage in a supported health checkup or TCM pulse evaluation with your personal escort, followed by a light, seasonal herbal soup lunch.',
    category: 'midday',
    accentColor: '#2C5E43'
  },
  {
    time: '03:00 PM',
    title: 'Afternoon Tea & Courtyard Rest',
    titleZh: '午后 · 煮茶静心',
    description: 'Sit under the courtyard eaves with a local tea master. No crowded schedules, no forced shopping—just genuine conversation and serene breathing space.',
    category: 'afternoon',
    accentColor: '#C87D55'
  },
  {
    time: '06:30 PM',
    title: 'Home-Style Dinner & Twilight Stroll',
    titleZh: '黄昏 · 巷陌漫步',
    description: 'Savor a warm, home-cooked Minnan dinner, followed by a quiet, lantern-lit stroll through residential historic lanes as temple bells ring in the distance.',
    category: 'evening',
    accentColor: '#1F422F'
  }
];
