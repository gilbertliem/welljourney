import React from 'react';
import { Coffee, Sparkles, Utensils, Home, Music, Award, Compass, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, getLocalizedCultureElements, getLocalizedDailyRhythm } from '../i18n/translations';
import quanzhouPagodasImg from '../assets/images/quanzhou_pagodas_1786862560508.jpg';

interface CulturePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const CulturePage: React.FC<CulturePageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const { language, isZh } = useLanguage();
  const t = TRANSLATIONS[language].culture;
  const elements = getLocalizedCultureElements(language);
  const rhythm = getLocalizedDailyRhythm(language);

  return (
    <div className="bg-[#FDFBF7]">
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 lg:pt-0 lg:min-h-screen flex items-center overflow-hidden bg-[#1F422F]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1628157748421-2e6bbf4e69b5?auto=format&fit=crop&q=80&w=2000"
            alt="Tea pouring in an ancient courtyard"
            className="w-full h-full object-cover object-center hero-zoom opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/90 via-[#222222]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/90 via-[#222222]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:w-3/4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 w-max border border-[#D4A359]/40 text-[#FDFBF7]">
            <Compass className="w-4 h-4 text-[#D4A359]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D4A359]">
              {t.badge}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 font-bold">
            {t.title}
          </h1>

          <p className="text-base sm:text-xl text-[#FDFBF7]/85 mb-10 max-w-2xl leading-relaxed font-light">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#elements"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-[#222222] bg-[#D4A359] hover:bg-[#D4A359]/90 transition-all duration-300 shadow-sm cursor-pointer"
            >
              {isZh ? '探索五大在地慢调元素' : 'Explore the Daily Rhythm'}
            </a>
            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex justify-center items-center px-8 py-4 border border-white/50 text-base font-medium rounded-xl text-white bg-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              {isZh ? '查看疗愈套餐' : 'Book a Cultural Retreat'}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 5 ELEMENTS OF QUANZHOU DAILY HEALING */}
      <section id="elements" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold text-[#C87D55] tracking-wider uppercase block mb-2 font-serif">
              {isZh ? '泉州生活慢美学' : 'Authentic Experiences'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-bold mb-4">
              {t.title}
            </h2>
            <div className="w-16 h-1 bg-[#D4A359] mx-auto"></div>
          </div>

          <div className="space-y-24">
            {elements.map((el, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={el.id}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12 group`}
                >
                  <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-soft">
                    <img
                      src={el.image}
                      alt={el.title}
                      className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none"></div>
                  </div>

                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F5F0EB] rounded-2xl text-[#2C5E43] mb-6 shadow-sm">
                      {el.id === 'tea' && <Coffee className="w-6 h-6" />}
                      {el.id === 'handcrafts' && <Sparkles className="w-6 h-6 text-[#D4A359]" />}
                      {el.id === 'table' && <Utensils className="w-6 h-6 text-[#C87D55]" />}
                      {el.id === 'spaces' && <Home className="w-6 h-6 text-[#2C5E43]" />}
                      {el.id === 'soundscapes' && <Music className="w-6 h-6 text-[#C87D55]" />}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#222222] font-bold mb-2">
                      {el.title}
                    </h3>

                    <p className="text-[#2C5E43] font-medium text-sm mb-3">
                      {el.subtitle}
                    </p>

                    <p className="text-[#555555] leading-relaxed text-sm sm:text-base mb-6">
                      {el.description}
                    </p>

                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center text-xs font-semibold text-[#2C5E43] hover:text-[#3A7856] group/btn cursor-pointer"
                    >
                      <span>{isZh ? '将此体验融入您的定制行程' : 'Incorporate this into your itinerary'}</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: "A DAY IN THE LIFE" */}
      <section className="py-24 bg-[#F5F0EB] border-y border-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
              {isZh ? '慢节奏 · 节律生活' : 'Unhurried Living'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-bold mb-4">
              {t.rhythmTitle}
            </h2>
            <p className="text-base sm:text-lg text-[#555555]">
              {isZh
                ? '告别传统旅游团的奔波打卡，体验松弛惬意的日常节律。'
                : 'A gentle preview showing how low-intensity a WellJourney day feels compared to standard tour groups.'}
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#D4A359]/30"></div>

            <div className="space-y-12">
              {rhythm.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                  >
                    <div className={`md:w-[45%] ${isLeft ? 'text-left md:text-right' : 'hidden md:block'}`}>
                      {isLeft && (
                        <div>
                          <h3 className="font-serif text-2xl text-[#2C5E43] font-bold mb-1">
                            {item.title}
                          </h3>
                          <span className="text-xs font-mono font-semibold text-[#C87D55] block mb-2">
                            {item.time}
                          </span>
                          <p className="text-sm text-[#555555] bg-[#FDFBF7] p-5 rounded-2xl shadow-sm border border-white leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-[0_0_0_4px_#F5F0EB] bg-[#2C5E43] group-hover:scale-125 transition-transform duration-300"></div>

                    <div className={`md:w-[45%] ${!isLeft ? 'text-left' : 'hidden md:block'}`}>
                      {!isLeft && (
                        <div>
                          <h3 className="font-serif text-2xl text-[#C87D55] font-bold mb-1">
                            {item.title}
                          </h3>
                          <span className="text-xs font-mono font-semibold text-[#2C5E43] block mb-2">
                            {item.time}
                          </span>
                          <p className="text-sm text-[#555555] bg-[#FDFBF7] p-5 rounded-2xl shadow-sm border border-white leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION HIGHLIGHT — WHY QUANZHOU? */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2C5E43] text-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 sm:p-16 flex flex-col justify-center">
              <span className="text-xs font-semibold text-[#D4A359] uppercase tracking-wider block mb-2">
                {isZh ? '世遗福地 · 恬淡慢城' : 'Spiritual Heritage & Tranquility'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                {t.whyQuanzhouTitle}
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
                {isZh
                  ? '泉州是一座天生适合慢生活的城市。作为宋元中国的世界海洋商贸中心（联合国教科文组织世界遗产），这里保留着浓厚的人情味、千年红砖古厝与不疾不徐的市井烟火。'
                  : 'Quanzhou is a city born for slow living. Recognized for its deep spiritual heritage, historic maritime culture, and unhurried pace, it offers a rare environment in modern China where wellness happens naturally through daily life.'}
              </p>
              <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
                {isZh
                  ? '2021年泉州列入联合国教科文组织世界遗产名录，中国传统制茶技艺及其相关习俗亦列入人类非遗。在这里，呼吸皆是茶香与宁静。'
                  : "It was inscribed as the 'Emporium of the World in Song-Yuan China' on the UNESCO World Heritage List in 2021, and its traditional tea processing techniques are part of UNESCO's Intangible Cultural Heritage."}
              </p>

              <div className="space-y-4">
                <div className="flex items-center bg-white/10 p-4 rounded-xl border border-white/15">
                  <Award className="w-6 h-6 text-[#D4A359] mr-4 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block text-sm">
                      {isZh ? 'UNESCO 联合国世界文化遗产名城' : 'UNESCO World Heritage City'}
                    </span>
                    <span className="text-xs text-white/70">
                      {isZh ? '宋元中国的世界海洋商贸中心' : 'Song-Yuan Maritime Emporium'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center bg-white/10 p-4 rounded-xl border border-white/15">
                  <Coffee className="w-6 h-6 text-[#D4A359] mr-4 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block text-sm">
                      {isZh ? '闽南文化与乌龙茶道发源地' : 'Cradle of Minnan Culture & Tea Heritage'}
                    </span>
                    <span className="text-xs text-white/70">
                      {isZh ? '正宗安溪铁观音与武夷岩茶原产腹地' : 'Authentic Tieguanyin & Wuyi Oolong origins'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center bg-white/10 p-4 rounded-xl border border-white/15">
                  <Sparkles className="w-6 h-6 text-[#D4A359] mr-4 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block text-sm">
                      {isZh ? '温润淳朴 · 和谐安宁的熟人社群' : 'High-Trust, Welcoming Community'}
                    </span>
                    <span className="text-xs text-white/70">
                      {isZh ? '千年开元古寺与香火相伴的心灵港湾' : 'A peaceful spiritual sanctuary with 1000-year temples'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative min-h-[400px]">
              <img
                src={quanzhouPagodasImg}
                alt="Quanzhou UNESCO Kaiyuan Pagodas"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#2C5E43] to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INTEGRATION WITH WELLNESS RETREATS */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-[#F5F0EB] p-8 sm:p-12 rounded-3xl shadow-soft">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#222222] font-bold mb-4">
              {isZh ? '文化慢生活如何融入您的康养旅程' : 'How these experiences are woven into your stay'}
            </h3>
            <p className="text-[#555555] text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              {isZh
                ? '我们坚信医疗检查解决生理隐患，而深度身心静养化解日常压力。所有三日及五日套餐均已融入上述日常触点，并根据长辈体力和活动习惯进行专属微调。'
                : 'We believe medical care addresses the symptoms, but deep rest addresses the cause. Every 3-Day and 5-Day package automatically integrates these daily cultural touchpoints, fully customized to your physical strength and mobility.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => onNavigate('packages')}
                className="px-6 py-3.5 bg-[#2C5E43] hover:bg-[#3A7856] text-white font-medium rounded-xl transition-all shadow-sm cursor-pointer"
              >
                {isZh ? '查看精选康养疗愈套餐' : 'View 3-Day & 5-Day Packages'}
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 border border-[#C87D55] text-[#C87D55] font-medium rounded-xl hover:bg-[#C87D55]/10 transition-all cursor-pointer"
              >
                {isZh ? '定制专属慢调节律' : 'Customize Your Cultural Rhythm'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
