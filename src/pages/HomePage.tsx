import React, { useState } from 'react';
import { ArrowRight, Clock, Heart, Sparkles, Shield, Check, MessageSquare, MapPin, PhoneCall, ChevronDown } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, getLocalizedPackages, getLocalizedFaqs } from '../i18n/translations';
import teaPouringImg from '../assets/images/tea_pouring_gongfu_1786863146357.jpg';
import whatsappReassuranceImg from '../assets/images/whatsapp_sync_reassurance_1786864062004.jpg';

interface HomePageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenConsultation: (pkgId?: string) => void;
  onOpenLiveSync: () => void;
  onOpenPdf: (pkgId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenLiveSync
}) => {
  const { language, isZh } = useLanguage();
  const t = TRANSLATIONS[language].home;
  const packages = getLocalizedPackages(language);
  const faqs = getLocalizedFaqs(language);

  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [inlineFormSubmitted, setInlineFormSubmitted] = useState(false);
  const [inlineForm, setInlineForm] = useState({
    name: '',
    contact: '',
    pkg: '3-day',
    notes: ''
  });

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInlineFormSubmitted(true);
  };

  return (
    <div className="bg-[#FDFBF7]">
      {/* SECTION 1: HERO */}
      <section className="relative pt-20 lg:pt-0 lg:min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1549646698-c116d946d0a7?auto=format&fit=crop&q=80&w=2000"
            alt="Quanzhou traditional courtyard"
            className="w-full h-full object-cover object-center hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/85 to-[#FDFBF7]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent lg:hidden"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:w-3/5">
          <div className="inline-flex items-center space-x-2 bg-[#F5F0EB]/90 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 w-max border border-[#D4A359]/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C87D55]"></span>
            <span className="text-xs font-semibold text-[#2C5E43] tracking-wider uppercase">
              {t.badge}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222222] leading-tight mb-4 font-bold">
            {t.heroTitleLine1} <br />
            <span className="text-[#2C5E43]">{t.heroTitleLine2}</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#C87D55] mb-8 font-medium">
            {t.heroSubtitle}
          </p>

          <p className="text-base sm:text-lg text-[#555555] mb-10 max-w-xl leading-relaxed font-light">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-[#2C5E43] hover:bg-[#3A7856] transition-all duration-300 group cursor-pointer"
            >
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex justify-center items-center px-8 py-4 border border-[#C87D55] text-base font-medium rounded-xl text-[#C87D55] bg-transparent hover:bg-[#C87D55]/10 transition-all duration-300 cursor-pointer"
            >
              {t.consultBtn}
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-[#555555]/20 flex flex-wrap gap-8">
            <div className="flex items-center text-sm font-medium text-[#555555]">
              <Clock className="w-5 h-5 text-[#D4A359] mr-2" />
              <span>{t.pillar1}</span>
            </div>
            <div className="flex items-center text-sm font-medium text-[#555555]">
              <Heart className="w-5 h-5 text-[#D4A359] mr-2" />
              <span>{t.pillar2}</span>
            </div>
            <div className="flex items-center text-sm font-medium text-[#555555]">
              <Sparkles className="w-5 h-5 text-[#D4A359] mr-2" />
              <span>{t.pillar3}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE "ANTI-TOURISM" PHILOSOPHY */}
      <section id="philosophy" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="mb-12 lg:mb-0">
              <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
                {t.diffStayBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-medium mb-6">
                {t.diffStayTitle1}<br />
                {t.diffStayTitle2}
              </h2>
              <div className="w-16 h-1 bg-[#C87D55] mb-8"></div>
              <p className="text-lg text-[#555555] mb-6 leading-relaxed">
                {t.diffStayP1}
              </p>
              <p className="text-lg text-[#555555] leading-relaxed mb-8">
                {t.diffStayP2}
              </p>

              <button
                onClick={() => onNavigate('culture')}
                className="inline-flex items-center text-sm font-medium text-[#2C5E43] hover:text-[#3A7856] group cursor-pointer"
              >
                <span>{t.read5Elements}</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#2C5E43] rounded-2xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <img
                src={teaPouringImg}
                alt="Pouring traditional tea"
                className="relative rounded-2xl shadow-xl w-full object-cover h-96"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FDFBF7]/95 backdrop-blur-md p-4 rounded-xl border border-white/60 text-xs text-[#222222]">
                <p className="font-serif italic font-medium">{t.teaQuote}</p>
                <p className="text-[#C87D55] mt-0.5">{t.teaAuthor}</p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Shield className="w-6 h-6 text-[#2C5E43]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#222222] mb-3">{t.card1Title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  {t.card1Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8DFD8]">
                <button
                  onClick={() => onNavigate('medical')}
                  className="text-xs text-[#2C5E43] font-semibold hover:underline flex items-center"
                >
                  <span>{t.card1Link}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Clock className="w-6 h-6 text-[#2C5E43]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#222222] mb-3">{t.card2Title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  {t.card2Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8DFD8]">
                <button
                  onClick={() => onNavigate('culture')}
                  className="text-xs text-[#2C5E43] font-semibold hover:underline flex items-center"
                >
                  <span>{t.card2Link}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Heart className="w-6 h-6 text-[#2C5E43]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#222222] mb-3">{t.card3Title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  {t.card3Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8DFD8]">
                <button
                  onClick={onOpenLiveSync}
                  className="text-xs text-[#2C5E43] font-semibold hover:underline flex items-center"
                >
                  <span>{t.card3Link}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PACKAGES OVERVIEW */}
      <section id="packages" className="py-24 bg-[#F5F0EB] border-t border-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-medium mb-4">
              {t.curatedTitle}
            </h2>
            <p className="text-lg text-[#555555]">
              {t.curatedDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const isPopular = index === 1;
              return (
                <div
                  key={pkg.id}
                  className={`bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-soft flex flex-col transition duration-300 hover:shadow-xl border ${
                    isPopular ? 'border-2 border-[#D4A359]/60 transform md:-translate-y-3' : 'border-white'
                  }`}
                >
                  {isPopular && (
                    <div className="bg-[#D4A359] text-center py-2 text-white text-xs font-bold tracking-wider uppercase">
                      {pkg.badge || t.mostPopularBadge}
                    </div>
                  )}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#FDFBF7]/90 backdrop-blur text-[#2C5E43] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {pkg.tag}
                    </div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider mb-1">
                      {pkg.duration}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#222222] mb-3">
                      {pkg.title}
                    </h3>
                    <p className="text-[#555555] mb-6 text-sm flex-1 leading-relaxed">
                      {pkg.subtitle}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {pkg.highlights.slice(0, 4).map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start">
                          <Check className="w-4 h-4 text-[#2C5E43] mt-0.5 mr-2 shrink-0" />
                          <span className="text-xs text-[#555555] leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-[#E8DFD8] flex items-center justify-between mt-auto">
                      <span className="font-serif text-lg font-bold text-[#222222]">
                        {pkg.price} <span className="text-xs font-sans font-normal text-[#555555]">{pkg.priceNote}</span>
                      </span>
                      <button
                        onClick={() => onNavigate('packages')}
                        className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                          isPopular
                            ? 'bg-[#2C5E43] text-white hover:bg-[#3A7856]'
                            : 'border border-[#2C5E43] text-[#2C5E43] hover:bg-[#2C5E43] hover:text-white'
                        }`}
                      >
                        {t.viewDetails}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: REMOTE FAMILY PEACE OF MIND */}
      <section id="reassurance" className="py-24 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Content */}
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <div className="inline-block px-3 py-1 bg-[#F5F0EB] text-[#C87D55] text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
                {t.reassuranceBadge}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-medium mb-6">
                {t.reassuranceTitle}
              </h2>
              <p className="text-lg text-[#555555] mb-8 leading-relaxed">
                {t.reassuranceDesc}
              </p>

              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#2C5E43] text-white shadow-sm">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-semibold text-[#222222]">{t.reassuranceBullet1Title}</h4>
                    <p className="mt-2 text-base text-[#555555]">
                      {t.reassuranceBullet1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#2C5E43] text-white shadow-sm">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-semibold text-[#222222]">{t.reassuranceBullet2Title}</h4>
                    <p className="mt-2 text-base text-[#555555]">
                      {t.reassuranceBullet2Desc}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#2C5E43] text-white shadow-sm">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-semibold text-[#222222]">{t.reassuranceBullet3Title}</h4>
                    <p className="mt-2 text-base text-[#555555]">
                      {t.reassuranceBullet3Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={onOpenLiveSync}
                  className="px-5 py-3 bg-[#2C5E43] text-white text-sm font-medium rounded-xl hover:bg-[#3A7856] shadow-sm flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D4A359]" />
                  <span>{t.openLiveSyncBtn}</span>
                </button>
                <button
                  onClick={() => onNavigate('medical')}
                  className="px-5 py-3 border border-[#2C5E43] text-[#2C5E43] text-sm font-medium rounded-xl hover:bg-[#2C5E43]/5 transition-colors cursor-pointer"
                >
                  {isZh ? '查看就医安全机制' : 'Explore Medical Safety Protocols'}
                </button>
              </div>
            </div>

            {/* Image & Interactive Floating Card */}
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#C87D55] rounded-2xl transform -translate-x-4 translate-y-4 opacity-10"></div>
              <img
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
                src={whatsappReassuranceImg}
                alt="Family receiving real-time WhatsApp updates from medical escort"
              />

              {/* Floating notification mockup */}
              <div
                onClick={onOpenLiveSync}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#F5F0EB] cursor-pointer hover:bg-white transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#2C5E43] flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                    {isZh ? 'WhatsApp / 微信 实时推送' : 'Live WhatsApp Notification'}
                  </span>
                  <span className="text-[10px] text-[#555555] font-mono">{isZh ? '刚刚' : 'Just now'}</span>
                </div>
                <p className="text-xs text-[#222222] font-medium line-clamp-2">
                  {isZh
                    ? '“专属管家：腹部彩超顺利完成，指标平稳。叔叔阿姨正移步休息室享用温热养胃小米粥。”'
                    : '"Companion Lin: Ultrasound concluded smoothly. Parents are resting at the lounge enjoying hot soup."'}
                </p>
                <span className="text-[11px] text-[#D4A359] font-medium mt-1 inline-block group-hover:underline">
                  {isZh ? '点击体验完整节点同步演示 →' : 'Click to open complete timeline simulation →'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CREDIBILITY & LEGAL BOUNDARY */}
      <section className="py-12 bg-white border-y border-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm font-semibold text-[#555555] uppercase tracking-wider mb-8">
            {isZh ? '权威合作机构与孵化支持' : 'Supported By & Partnered With'}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-75 hover:opacity-100 transition duration-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-[#2C5E43]" />
              <span className="font-serif font-bold text-base sm:text-lg text-[#222222]">
                {isZh ? '泉州合作三甲公立综合医院' : 'Licensed Partner Tertiary Hospitals'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-[#2C5E43]" />
              <span className="font-serif font-bold text-base sm:text-lg text-[#222222]">
                {isZh ? '同济大学晋江设计创新中心' : 'Tongji Univ. Jinjiang Innovation Center'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-[#2C5E43]" />
              <span className="font-serif font-bold text-base sm:text-lg text-[#222222]">
                {isZh ? '晋江三创园高新生态体系' : 'Jinjiang Three-Innovation Park'}
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-[#F5F0EB]/60 p-6 rounded-xl text-center border border-[#F5F0EB]">
            <p className="text-xs sm:text-sm text-[#555555] max-w-4xl mx-auto leading-relaxed">
              <strong className="font-semibold text-[#222222]">{isZh ? '特别说明：' : 'Notice:'}</strong>{' '}
              {isZh
                ? '康旅途提供专业的陪诊就医协助、多语种翻译、在地慢生活疗愈与行程协调。所有医学检查、诊断与诊疗均由合规合作三甲医院专业医师独立开展。'
                : 'WellJourney provides travel coordination, language accompaniment, and lifestyle wellness management. All medical examinations, diagnoses, and treatments are strictly performed by qualified, licensed partner medical institutions.'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
              {t.storiesBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-medium mb-4">
              {t.storiesTitle}
            </h2>
            <p className="text-lg text-[#555555]">
              {t.storiesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft flex flex-col justify-between">
              <p className="text-base text-[#333333] leading-relaxed italic mb-6">
                {t.testimonial1Quote}
              </p>
              <div className="pt-4 border-t border-[#E8DFD8]">
                <h4 className="font-serif font-bold text-base text-[#222222]">{t.testimonial1Author}</h4>
                <p className="text-xs text-[#C87D55]">{t.testimonial1Role}</p>
              </div>
            </div>

            <div className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft flex flex-col justify-between">
              <p className="text-base text-[#333333] leading-relaxed italic mb-6">
                {t.testimonial2Quote}
              </p>
              <div className="pt-4 border-t border-[#E8DFD8]">
                <h4 className="font-serif font-bold text-base text-[#222222]">{t.testimonial2Author}</h4>
                <p className="text-xs text-[#C87D55]">{t.testimonial2Role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <section className="py-20 bg-[#F5F0EB] border-t border-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-[#222222] font-medium mb-3">
              {t.faqTitle}
            </h2>
            <p className="text-[#555555] text-sm">
              {t.faqDesc}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#FDFBF7] rounded-xl border border-white shadow-xs overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif text-base font-semibold text-[#222222]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2C5E43] transform transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#555555] leading-relaxed border-t border-[#F5F0EB]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: CONSULTATION & LEAD CAPTURE FORM */}
      <section id="contact" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F0EB] rounded-2xl shadow-xl overflow-hidden border border-white">
            <div className="p-8 sm:p-12">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-1">
                  {isZh ? '免费定制 · 零负担沟通' : 'Zero Obligation'}
                </span>
                <h2 className="font-serif text-3xl text-[#222222] font-medium mb-3">
                  {isZh ? '开启您与家人的身心疗愈之旅' : 'Begin Your Healing Journey'}
                </h2>
                <p className="text-[#555555] text-sm sm:text-base">
                  {isZh
                    ? '请在下方填写基本信息，我们的专属健康管家将在 24 小时内为您出具专属定制建议书。'
                    : 'Leave your details below. Our wellness concierge will contact you within 24 hours to craft your tailored proposal.'}
                </p>
              </div>

              {inlineFormSubmitted ? (
                <div className="p-8 bg-[#FDFBF7] rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 bg-[#2C5E43]/10 text-[#2C5E43] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#222222]">
                    {isZh ? '感谢您的信任！咨询需求已收到。' : 'Thank you! Consultation Request Received.'}
                  </h4>
                  <p className="text-sm text-[#555555] max-w-md mx-auto">
                    {isZh
                      ? `我们的专属管家将通过 ${inlineForm.contact || '您填写的联系方式'} 与您联系，沟通定制体检与行程细节。`
                      : `Our care coordinator will reach out to you via ${inlineForm.contact || 'your contact method'} with customized checkup and retreat details.`}
                  </p>
                  <button
                    onClick={() => setInlineFormSubmitted(false)}
                    className="text-xs text-[#2C5E43] font-semibold underline cursor-pointer"
                  >
                    {isZh ? '提交新的咨询' : 'Submit another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#222222] mb-1">
                        {isZh ? '您的称呼 / 出行人姓名 *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={inlineForm.name}
                        onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#555555]/20 rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] transition-shadow text-sm"
                        placeholder={isZh ? '例如：陈先生 / 张女士' : 'Your full name'}
                      />
                    </div>
                    {/* Contact Method */}
                    <div>
                      <label htmlFor="contact-method" className="block text-sm font-medium text-[#222222] mb-1">
                        {isZh ? '联系方式 (微信 / WhatsApp / 电话 / 邮箱) *' : 'Contact Method (WhatsApp / WeChat / Phone / Email) *'}
                      </label>
                      <input
                        type="text"
                        name="contact-method"
                        id="contact-method"
                        required
                        value={inlineForm.contact}
                        onChange={(e) => setInlineForm({ ...inlineForm, contact: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#555555]/20 rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] transition-shadow text-sm"
                        placeholder={isZh ? '微信ID / WhatsApp手机号 / 邮箱' : 'Email / WhatsApp / WeChat / Phone'}
                      />
                    </div>
                  </div>

                  {/* Preferred Package */}
                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-[#222222] mb-1">
                      {isZh ? '意向套餐方案' : 'Preferred Package'}
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={inlineForm.pkg}
                      onChange={(e) => setInlineForm({ ...inlineForm, pkg: e.target.value })}
                      className="w-full bg-[#FDFBF7] border border-[#555555]/20 rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] transition-shadow text-sm"
                    >
                      <option value="1-day">{isZh ? '一日舒心体检陪诊 (1-Day Express)' : '1-Day Express Checkup Escort'}</option>
                      <option value="3-day">{isZh ? '三日两晚·身心平衡慢活之旅 (3-Day Mind-Body)' : '3-Day Mind-Body Balance Stay'}</option>
                      <option value="5-day">{isZh ? '五日四晚·深层调养寻静之旅 (5-Day Deep Healing)' : '5-Day Deep Healing Retreat'}</option>
                      <option value="custom">{isZh ? '根据家庭情况量身定制 (Custom Family Blueprint)' : 'Custom Needs / Not Sure Yet'}</option>
                    </select>
                  </div>

                  {/* Personal Needs */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-[#222222] mb-1">
                      {isZh ? '长辈健康重点、语言偏好或特殊生活习惯' : 'Personal Needs & Health Notes'}
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={inlineForm.notes}
                      onChange={(e) => setInlineForm({ ...inlineForm, notes: e.target.value })}
                      className="w-full bg-[#FDFBF7] border border-[#555555]/20 rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] transition-shadow resize-none text-sm"
                      placeholder={
                        isZh
                          ? '例如：母亲膝盖不适需要平缓节奏；父亲需要做深度心脏彩超；希望管家会讲闽南语...'
                          : 'e.g., specific language requirements (English, Hokkien), mobility considerations, dietary preferences, or specific medical concerns.'
                      }
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-[#2C5E43] hover:bg-[#3A7856] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5E43] transition-colors cursor-pointer"
                    >
                      {isZh ? '免费提交家庭定制咨询需求' : 'Request Free Family Consultation'}
                    </button>
                    <p className="text-center text-xs text-[#555555] mt-4">
                      {isZh
                        ? '您的隐私信息将受到严格保护，仅用于为您规划康养行程。'
                        : 'Your information is secure and will only be used to organize your wellness journey.'}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
