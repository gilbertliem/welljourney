import React from 'react';
import { GraduationCap, Building2, HeartHandshake, MessageCircle, Quote } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, getLocalizedPartners, getLocalizedCommitments } from '../i18n/translations';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onOpenWeChat: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenWeChat
}) => {
  const { language, isZh } = useLanguage();
  const t = TRANSLATIONS[language].about;
  const partners = getLocalizedPartners(language);
  const commitments = getLocalizedCommitments(language);

  return (
    <div className="bg-[#FDFBF7]">
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 lg:pt-0 lg:min-h-[80vh] flex items-center overflow-hidden bg-[#1F422F]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=2000"
            alt="Tea courtyard setting"
            className="w-full h-full object-cover object-center hero-zoom opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/90 via-[#222222]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/80 to-transparent lg:hidden"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:w-2/3">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 w-max border border-[#D4A359]/40">
            <span className="w-2 h-2 rounded-full bg-[#D4A359]"></span>
            <span className="text-xs font-semibold text-[#FDFBF7] tracking-wider uppercase">
              {t.badge}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-white leading-tight mb-6 font-bold">
            {t.title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#story"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-[#222222] bg-[#D4A359] hover:bg-[#D4A359]/90 transition-all duration-300 shadow-sm cursor-pointer"
            >
              {isZh ? '阅读初心故事' : 'Read Our Story'}
            </a>
            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex justify-center items-center px-8 py-4 border border-white/50 text-base font-medium rounded-xl text-white bg-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              {isZh ? '浏览疗愈套餐' : 'Explore Our Retreats'}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE FOUNDER'S STORY */}
      <section id="story" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
                {isZh ? '创立康旅途的初衷' : 'Why We Built WellJourney'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-bold mb-8">
                {t.missionTitle}
              </h2>

              <div className="space-y-8 text-base sm:text-lg text-[#555555] leading-relaxed">
                <div>
                  <h3 className="font-serif text-xl text-[#2C5E43] mb-2 font-bold">
                    {isZh ? '起源 · 隔着重洋的深深牵挂' : 'The Origin'}
                  </h3>
                  <p>
                    {t.missionP1}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#2C5E43] mb-2 font-bold">
                    {isZh ? '答案 · 康旅途的温情诞生' : 'The Solution'}
                  </h3>
                  <p>
                    {t.missionP2}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Collage & Quote */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#C87D55] rounded-2xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
                alt="Generations holding hands"
                className="relative rounded-2xl shadow-xl w-full object-cover h-[480px]"
              />

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-soft border border-[#F5F0EB] max-w-xs hidden sm:block">
                <Quote className="w-6 h-6 text-[#D4A359] mb-2" />
                <p className="font-serif text-sm text-[#222222] italic leading-relaxed">
                  {isZh
                    ? '“距离不应冲淡亲情的陪伴，长辈的健康值得最温柔的以待。”'
                    : '"Distance should not diminish the quality of care our loved ones receive."'}
                </p>
                <span className="text-xs text-[#C87D55] font-serif block mt-2 font-medium">
                  {isZh ? '— 康旅途团队寄语' : '— WellJourney Team'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INSTITUTIONAL BACKING & INCUBATION */}
      <section className="py-24 bg-[#F5F0EB] border-y border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
              {isZh ? '专业背书与孵化支持' : 'Institutional Backing'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-bold mb-4">
              {t.partnersTitle}
            </h2>
            <p className="text-base sm:text-lg text-[#555555]">
              {isZh
                ? '我们融合了温情的人文服务、严谨的学术服务设计与成熟的医疗就医协同体系。'
                : 'We combine empathetic service with rigorous academic service design and regional healthcare collaboration.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-white hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-[#F5F0EB] rounded-2xl flex items-center justify-center mb-6 text-[#2C5E43]">
                    {idx === 0 && <GraduationCap className="w-7 h-7" />}
                    {idx === 1 && <Building2 className="w-7 h-7 text-[#C87D55]" />}
                    {idx === 2 && <HeartHandshake className="w-7 h-7 text-[#D4A359]" />}
                  </div>

                  <span className="inline-block px-2.5 py-1 bg-[#F5F0EB] text-[#2C5E43] text-[11px] font-semibold rounded-full uppercase mb-3">
                    {partner.badge}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#222222] mb-3">
                    {partner.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR CORE VALUES (4 Guiding Commitments) */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C87D55] tracking-wider uppercase block mb-2 font-serif">
              {isZh ? '服务准则' : 'Our Core Philosophy'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-bold mb-4">
              {t.commitmentsTitle}
            </h2>
            <div className="w-16 h-1 bg-[#D4A359] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {commitments.map((com, idx) => (
              <div
                key={idx}
                className="flex items-start bg-white p-8 rounded-2xl border border-[#F5F0EB] shadow-sm hover:shadow-soft transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-[#2C5E43]/10 rounded-2xl flex items-center justify-center text-[#2C5E43] font-serif font-bold text-lg">
                    {com.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#222222] mb-2">
                    {com.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {com.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT & CONSULTATION BANNER */}
      <section id="contact" className="py-24 bg-[#2C5E43] text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            {isZh ? '让我们开启一次温暖的沟通' : "Let's Start a Conversation"}
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {isZh
              ? '无论您是为自己规划一次慢调疗愈，还是为远方的父母安排一次安心舒心的体检与旅程，我们都愿意倾听您的每一份诉求。'
              : 'Whether you are planning a restorative stay for yourself or organizing health screening for aging parents living far away, our team is here to listen to your unique needs.'}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-[#FDFBF7] text-[#2C5E43] hover:bg-[#F5F0EB] text-base font-semibold rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              {isZh ? '预约专属健康管家咨询' : 'Schedule a Call with Our Concierge'}
            </button>
            <button
              onClick={onOpenWeChat}
              className="w-full sm:w-auto px-8 py-4 border border-white/50 text-white hover:bg-white/10 text-base font-semibold rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{isZh ? '扫码微信 / WhatsApp 咨询' : 'Connect via WeChat / WhatsApp'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
