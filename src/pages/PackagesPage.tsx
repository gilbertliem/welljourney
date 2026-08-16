import React, { useState } from 'react';
import { Check, ChevronDown, Download, FileText, MessageSquare, PhoneCall, Volume2 } from 'lucide-react';
import { PackageDetail } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, getLocalizedPackages, getLocalizedFaqs } from '../i18n/translations';

interface PackagesPageProps {
  onOpenConsultation: (pkgId?: string) => void;
  onOpenPdf: (pkgId: string) => void;
  onOpenLiveSync: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onOpenConsultation,
  onOpenPdf,
  onOpenLiveSync
}) => {
  const { language, isZh } = useLanguage();
  const t = TRANSLATIONS[language].packages;
  const packages = getLocalizedPackages(language);
  const faqs = getLocalizedFaqs(language);

  const [activeTab, setActiveTab] = useState<'1day' | '3day' | '5day'>('3day');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const currentPkg: PackageDetail =
    packages.find((p) => p.tabKey === activeTab) || packages[1];

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="bg-[#FDFBF7] pb-28 md:pb-24">
      {/* Page Header & Tab System */}
      <section className="pt-28 sm:pt-32 pb-8 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
              {isZh ? '透明严谨 · 深度疗愈' : 'Transparent, Meticulously Planned Stays'}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-[#555555]">
              {t.subtitle}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center overflow-x-auto no-scrollbar">
            <div className="flex space-x-4 sm:space-x-8 border-b border-[#D4A359]/30 min-w-max px-4">
              <button
                onClick={() => setActiveTab('1day')}
                className={`pb-4 text-base sm:text-lg font-serif border-b-2 transition-all duration-300 cursor-pointer ${
                  activeTab === '1day'
                    ? 'text-[#2C5E43] border-[#2C5E43] font-bold'
                    : 'text-[#555555] border-transparent hover:text-[#2C5E43]'
                }`}
              >
                {t.tab1Day}
              </button>
              <button
                onClick={() => setActiveTab('3day')}
                className={`pb-4 text-base sm:text-lg font-serif border-b-2 transition-all duration-300 relative cursor-pointer ${
                  activeTab === '3day'
                    ? 'text-[#2C5E43] border-[#2C5E43] font-bold'
                    : 'text-[#555555] border-transparent hover:text-[#2C5E43]'
                }`}
              >
                <span>{t.tab3Day}</span>
                <span className="ml-2 px-2 py-0.5 text-[10px] uppercase font-sans tracking-wide bg-[#D4A359] text-white rounded-full font-bold">
                  {isZh ? '旗舰推荐' : 'Signature'}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('5day')}
                className={`pb-4 text-base sm:text-lg font-serif border-b-2 transition-all duration-300 cursor-pointer ${
                  activeTab === '5day'
                    ? 'text-[#2C5E43] border-[#2C5E43] font-bold'
                    : 'text-[#555555] border-transparent hover:text-[#2C5E43]'
                }`}
              >
                {t.tab5Day}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT OF ACTIVE RETREAT */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* A. Header & Key Summary */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-soft group">
            <img
              src={currentPkg.image}
              alt={currentPkg.title}
              className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#FDFBF7]/90 backdrop-blur text-[#2C5E43] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
              {currentPkg.tag}
            </div>
            {currentPkg.badge && (
              <div className="absolute top-4 right-4 bg-[#D4A359] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                {currentPkg.badge}
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 bg-[#D4A359]/15 text-[#C87D55] text-xs font-semibold rounded-full mb-3">
              {currentPkg.idealFor}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#222222] font-bold mb-3">
              {currentPkg.title}
            </h2>
            <p className="text-[#555555] leading-relaxed mb-6 text-sm sm:text-base">
              {currentPkg.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E8DFD8]">
              <div>
                <p className="text-xs text-[#555555] uppercase tracking-wider mb-0.5">
                  {isZh ? '尊享全包价格' : 'Starting From'}
                </p>
                <p className="text-2xl sm:text-3xl font-serif text-[#222222] font-bold">
                  {currentPkg.price} <span className="text-sm font-sans font-normal text-[#555555]">{currentPkg.priceNote}</span>
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => onOpenPdf(currentPkg.id)}
                  className="px-4 py-3 border border-[#2C5E43] text-[#2C5E43] text-xs sm:text-sm font-medium rounded-xl hover:bg-[#2C5E43] hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isZh ? 'PDF 行程单' : 'PDF Itinerary'}</span>
                </button>
                <button
                  onClick={() => onOpenConsultation(currentPkg.id)}
                  className="px-6 py-3 bg-[#2C5E43] text-white text-xs sm:text-sm font-medium rounded-xl hover:bg-[#3A7856] transition-colors shadow-sm cursor-pointer"
                >
                  {isZh ? '咨询并预订' : 'Customize & Book'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* B. Day-by-Day / Milestone Itinerary */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-[#F5F0EB] mb-8">
            <div>
              <h3 className="font-serif text-2xl text-[#222222] font-bold">
                {t.itineraryTitle}
              </h3>
              <p className="text-xs text-[#555555] mt-1">
                {isZh ? '顺应节律，张弛有度，给予身体与心灵充分的安歇空间。' : 'Designed for minimum physical exertion and maximum emotional ease.'}
              </p>
            </div>
            <button
              onClick={onOpenLiveSync}
              className="hidden sm:inline-flex items-center text-xs font-semibold text-[#2C5E43] hover:underline cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 mr-1 text-[#D4A359]" />
              {t.tryLiveSync}
            </button>
          </div>

          <div className="relative border-l-2 border-[#F5F0EB] ml-3 sm:ml-4 space-y-12 pb-4">
            {currentPkg.itinerary.map((dayItem, dIdx) => (
              <div key={dIdx} className="relative pl-6 sm:pl-8">
                {/* Milestone dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#2C5E43] rounded-full shadow-[0_0_0_4px_#F5F0EB]"></div>
                
                <h4 className="font-serif text-xl text-[#222222] font-semibold mb-4">
                  {dayItem.day}: {dayItem.title}
                </h4>

                <div className="space-y-4 text-sm text-[#555555]">
                  {dayItem.events.map((evt, eIdx) => (
                    <div
                      key={eIdx}
                      className={`p-4 rounded-xl border transition-all ${
                        evt.isHighlight
                          ? 'bg-[#2C5E43]/5 border-[#2C5E43]/30 shadow-sm'
                          : 'bg-white border-[#F5F0EB] shadow-sm'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <strong className="text-[#2C5E43] font-serif text-base">
                          {evt.time && `${evt.time} · `}{evt.title}
                        </strong>
                        {evt.type && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#F5F0EB] text-[#555555]">
                            {evt.type}
                          </span>
                        )}
                      </div>
                      <p className="leading-relaxed">{evt.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C. What's Included vs. Excluded Table */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl text-[#222222] font-bold mb-6 pb-3 border-b border-[#F5F0EB]">
            {t.inclusionsTitle}
          </h3>

          <div className="overflow-x-auto rounded-2xl shadow-soft border border-[#F5F0EB]">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-[#F5F0EB] text-[#222222] font-serif">
                  <th className="py-4 px-6 font-semibold w-1/4">
                    {isZh ? '服务类别' : 'Service Category'}
                  </th>
                  <th className="py-4 px-6 font-semibold w-2/5 text-[#2C5E43]">
                    {t.includedLabel}
                  </th>
                  <th className="py-4 px-6 font-semibold w-1/3 text-[#C87D55]">
                    {t.excludedLabel}
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-[#555555] align-top divide-y divide-[#F5F0EB]">
                {currentPkg.inclusions.map((inc, iIdx) => (
                  <tr key={iIdx} className={iIdx % 2 === 0 ? 'bg-white' : 'bg-[#FDFBF7]'}>
                    <td className="py-5 px-6 font-medium text-[#222222] font-serif">
                      {inc.category}
                    </td>
                    <td className="py-5 px-6">
                      <ul className="space-y-1.5">
                        {inc.included.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-4 h-4 text-[#2C5E43] mr-2 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-[#555555]/80">
                      <ul className="space-y-1.5">
                        {inc.excluded.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            {item !== 'N/A' && item !== '无任何隐藏附加收费' && (
                              <span className="text-[#C87D55] mr-2 shrink-0 font-bold">✗</span>
                            )}
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* D. "Remote Family Transparency" Feature Box */}
        <div className="bg-[#F5F0EB] rounded-2xl p-8 sm:p-10 mb-20 border border-white shadow-soft relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-[#D4A359]/20 text-[#2C5E43] text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
              {isZh ? '全程透明安心' : 'Full Peace of Mind'}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#222222] font-bold mb-4">
              {isZh ? '给远在海外的家人一份踏实的安心' : 'Total Transparency for Families Abroad'}
            </h3>
            <p className="text-[#555555] mb-8 max-w-2xl leading-relaxed text-sm sm:text-base">
              {isZh
                ? '我们深知远隔重洋为父母安排就医与出行的牵挂。作为您在泉州本土的家人代理人，我们提供全流程的连接与关怀：'
                : 'We know how stressful it is to organize healthcare for aging parents from overseas. We act as your trusted proxy, keeping you connected every step of the journey:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white">
                <div className="bg-[#FDFBF7] p-2.5 rounded-full mr-4 shadow-sm text-[#C87D55]">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222] text-sm mb-1">
                    {isZh ? '行前多方视频沟通' : 'Pre-trip Video Orientation'}
                  </h4>
                  <p className="text-xs text-[#555555]">
                    {isZh ? '行前与管家视频连线，建立信任，核对长辈健康诉求与生活习惯。' : 'Meet the designated companion beforehand to build rapport and confirm specific health preferences.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white">
                <div className="bg-[#FDFBF7] p-2.5 rounded-full mr-4 shadow-sm text-[#2C5E43]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222] text-sm mb-1">
                    {isZh ? '实时关键节点报备' : 'Live Milestone Check-ins'}
                  </h4>
                  <p className="text-xs text-[#555555]">
                    {isZh ? '晨间接驾、进入医院、完成检查、用餐与回房，每个节点均有 WhatsApp/微信 报备。' : 'Instant WhatsApp / WeChat updates when parents arrive at the medical center, start tests, and finish meals.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white">
                <div className="bg-[#FDFBF7] p-2.5 rounded-full mr-4 shadow-sm text-[#D4A359]">
                  <Volume2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222] text-sm mb-1">
                    {isZh ? '主检医生权威语音总结' : 'Doctor Voice Summary'}
                  </h4>
                  <p className="text-xs text-[#555555]">
                    {isZh ? '主检医师录制核心建议语音，管家转化为通俗易懂的医嘱转述给海外全家。' : 'A quick translated voice summary from the attending doctor explaining preliminary results.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white">
                <div className="bg-[#FDFBF7] p-2.5 rounded-full mr-4 shadow-sm text-[#C87D55]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222] text-sm mb-1">
                    {isZh ? '高清双语数字健康档案' : 'Final Bilingual PDF Archive'}
                  </h4>
                  <p className="text-xs text-[#555555]">
                    {isZh ? '全部检查指标与医生建议汇总归档为双语 PDF，便于长期健康跟踪。' : 'Organized, translated laboratory and physician reports securely archived for your family records.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8DFD8] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#555555]">
                {isZh ? '想亲身体验海外家人的接收效果？' : 'Want to see the actual live update simulation?'}
              </span>
              <button
                onClick={onOpenLiveSync}
                className="px-4 py-2 bg-[#2C5E43] text-white text-xs font-semibold rounded-lg hover:bg-[#3A7856] transition-colors cursor-pointer"
              >
                {isZh ? '打开实时节点同步演示' : 'Open Live Notification Demo'}
              </button>
            </div>
          </div>
        </div>

        {/* E. FAQ Section */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-[#222222] font-bold mb-6 pb-3 border-b border-[#F5F0EB]">
            {isZh ? '常见问题解答' : 'Frequently Asked Questions'}
          </h3>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#F5F0EB] rounded-xl bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-[#F5F0EB]/40 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="font-medium text-[#222222] text-sm sm:text-base block">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2C5E43] transform transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-[#555555] text-xs sm:text-sm leading-relaxed border-t border-[#F5F0EB] pt-4 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* F. Floating Action Bar / Inquiry Footer (Sticky) */}
      <div className="fixed bottom-0 w-full z-30 bg-white/95 backdrop-blur-md border-t border-[#F5F0EB] shadow-up transition-transform duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-center sm:text-left">
            <p className="text-[11px] text-[#555555] uppercase tracking-wider mb-0.5">
              {isZh ? '当前所选套餐' : 'Current Retreat Selection'}
            </p>
            <p className="font-serif text-base sm:text-lg text-[#222222] font-bold">
              {currentPkg.title}{' '}
              <span className="text-[#2C5E43] ml-2 text-sm sm:text-base font-semibold">
                {currentPkg.price}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenPdf(currentPkg.id)}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-[#2C5E43] text-[#2C5E43] text-xs sm:text-sm font-medium rounded-lg hover:bg-[#2C5E43] hover:text-white transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isZh ? 'PDF 行程单' : 'PDF Itinerary'}</span>
            </button>
            <button
              onClick={() => onOpenConsultation(currentPkg.id)}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#2C5E43] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-[#3A7856] transition-colors shadow-sm text-center cursor-pointer"
            >
              {isZh ? '立即咨询预订' : 'Inquire Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
