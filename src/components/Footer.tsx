import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, ExternalLink, ShieldCheck, Globe } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onOpenWeChat: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenWeChat,
  onOpenConsultation
}) => {
  const { language, setLanguage, isZh } = useLanguage();
  const t = TRANSLATIONS[language].footer;
  const navT = TRANSLATIONS[language].nav;

  return (
    <footer className="bg-[#1F422F] text-[#FDFBF7] pt-16 pb-12 border-t-4 border-[#D4A359]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-serif text-2xl font-bold text-white tracking-wide">WellJourney</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A359]"></span>
            </div>
            <span className="font-serif text-sm text-[#D98E66] tracking-widest block mb-4 font-medium">
              {isZh ? '康旅途 · 泉州' : 'Quanzhou Wellness Retreats'}
            </span>
            <p className="text-sm text-[#FDFBF7]/85 leading-relaxed mb-6 font-light">
              <span className="font-medium text-white block mb-1">{t.tagline}</span>
              {t.desc}
            </p>
            <div className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-full text-xs text-[#FDFBF7]/90 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#D4A359] mr-2"></span>
              {t.poweredBy}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#D4A359] uppercase tracking-wider mb-4 font-serif">
              {t.exploreTitle}
            </h4>
            <ul className="space-y-3 text-sm text-[#FDFBF7]/75">
              <li>
                <button
                  onClick={() => onNavigate('home', 'philosophy')}
                  className="hover:text-[#D4A359] transition-colors text-left cursor-pointer"
                >
                  {isZh ? '不一样的慢调生活理念' : 'The Anti-Tourism Philosophy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-[#D4A359] transition-colors text-left cursor-pointer"
                >
                  {isZh ? '精选康养疗愈套餐' : 'Curated Wellness Retreats'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('medical')}
                  className="hover:text-[#D4A359] transition-colors text-left cursor-pointer"
                >
                  {isZh ? '三甲医院陪诊与安全规范' : 'Medical Escort & Safety Protocol'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('culture')}
                  className="hover:text-[#D4A359] transition-colors text-left cursor-pointer"
                >
                  {isZh ? '泉州世遗在地慢生活' : 'Quanzhou Cultural Slow Living'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4A359] transition-colors text-left cursor-pointer"
                >
                  {isZh ? '关于康旅途与孵化背景' : 'About WellJourney & Partners'}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-sm font-semibold text-[#D4A359] uppercase tracking-wider mb-4 font-serif">
              {t.complianceTitle}
            </h4>
            <ul className="space-y-3 text-sm text-[#FDFBF7]/75">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#D4A359] transition-colors text-left flex items-center cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#D4A359]" />
                  <span>{t.privacyLink}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#D4A359] transition-colors text-left cursor-pointer"
                >
                  {t.termsLink}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-[#D4A359] transition-colors text-left cursor-pointer"
                >
                  {t.disclaimerLink}
                </button>
              </li>
              <li className="pt-2">
                <div className="flex items-center space-x-2 text-xs text-[#FDFBF7]/60">
                  <Globe className="w-3.5 h-3.5 text-[#D4A359]" />
                  <span>{isZh ? '当前语言' : 'Current Language'}:</span>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`underline cursor-pointer ${!isZh ? 'text-white font-bold' : 'hover:text-white'}`}
                  >
                    English
                  </button>
                  <span>/</span>
                  <button
                    onClick={() => setLanguage('zh')}
                    className={`underline cursor-pointer ${isZh ? 'text-white font-bold' : 'hover:text-white'}`}
                  >
                    中文
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-[#D4A359] uppercase tracking-wider mb-4 font-serif">
              {t.contactTitle}
            </h4>
            <div className="space-y-3 text-sm text-[#FDFBF7]/80">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2.5 text-[#D4A359] flex-shrink-0 mt-0.5" />
                <span>
                  {isZh
                    ? '中国福建省泉州市 · 晋江设计创新中心 / 鲤城区古城历史文化街区'
                    : 'Quanzhou Historic District & Jinjiang Innovation Center, Fujian, China'}
                </span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2.5 text-[#D4A359] flex-shrink-0" />
                <span>+86 188 5970 8899 / +65 8123 4567</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2.5 text-[#D4A359] flex-shrink-0" />
                <span>concierge@welljourney.care</span>
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenWeChat}
                  className="inline-flex items-center px-3.5 py-1.5 bg-[#C87D55] text-white text-xs font-medium rounded-lg hover:bg-[#D98E66] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>{isZh ? '微信二维码' : 'WeChat QR'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-white/10 text-xs text-[#FDFBF7]/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} WellJourney (康旅途). {t.allRights}</p>
          <p className="max-w-xl text-center md:text-right font-light text-[11px] leading-relaxed">
            {t.disclaimerNote}
          </p>
        </div>
      </div>
    </footer>
  );
};
