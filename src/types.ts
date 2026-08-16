export type PageId = 'home' | 'packages' | 'medical' | 'culture' | 'about';

export interface PackageDetail {
  id: string;
  tabKey: '1day' | '3day' | '5day';
  title: string;
  titleZh: string;
  subtitle: string;
  tag: string;
  badge?: string;
  tagColor: string;
  duration: string;
  price: string;
  priceNote: string;
  idealFor: string;
  image: string;
  description: string;
  highlights: string[];
  itinerary: {
    day: string;
    title: string;
    events: {
      time?: string;
      title?: string;
      description: string;
      isHighlight?: boolean;
      type?: 'medical' | 'culture' | 'dining' | 'living' | 'transport';
    }[];
  }[];
  inclusions: {
    category: string;
    included: string[];
    excluded: string[];
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  questionZh?: string;
  answer: string;
}

export interface CultureElement {
  id: string;
  title: string;
  titleZh: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
  accent: string;
}

export interface DailyRhythmItem {
  time: string;
  title: string;
  titleZh: string;
  description: string;
  category: 'morning' | 'midday' | 'afternoon' | 'evening';
  accentColor: string;
}

export interface EscortStage {
  step: number;
  title: string;
  titleZh: string;
  description: string;
  details: string[];
  color: string;
}

export interface LiveSyncNode {
  time: string;
  title: string;
  sender: string;
  content: string;
  type: 'status' | 'photo' | 'voice' | 'report';
  status: 'completed' | 'in-progress' | 'scheduled';
}

export interface ConsultationFormData {
  name: string;
  contactMethod: string;
  preferredPackage: string;
  preferredLanguage: string;
  travelDates: string;
  guestsCount: string;
  healthNotes: string;
}
