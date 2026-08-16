import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Heart, Languages, FileText, ChevronDown, Sparkles, MessageSquare, AlertCircle, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, getLocalizedEscortStages, getLocalizedFaqs } from '../i18n/translations';

interface MedicalPageProps {
  onOpenConsultation: () => void;
  onOpenLiveSync: () => void;
}

export const MedicalPage: React.FC<MedicalPageProps> = ({
  onOpenConsultation,
  onOpenLiveSync
}) => {
  const { language, isZh } = useLanguage();
  const t = TRANSLATIONS[language].medical;
  const stages = getLocalizedEscortStages(language);
  const faqs = getLocalizedFaqs(language);

  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="bg-[#FDFBF7]">
      {/* SECTION 1: HERO */}
      <section className="relative pt-28 lg:pt-0 lg:min-h-[80vh] flex items-center overflow-hidden bg-[#F5F0EB]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000"
            alt="Professional caring for elderly"
            className="w-full h-full object-cover object-center hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/85 to-[#FDFBF7]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:w-2/3">
          <div className="inline-flex items-center space-x-2 bg-white/75 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 w-max border border-[#2C5E43]/20 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#2C5E43]" />
            <span className="text-xs font-semibold text-[#2C5E43] tracking-wider uppercase">
              {t.badge}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-bold leading-tight mb-6">
            {t.title}
          </h1>

          <p className="text-base sm:text-lg text-[#555555] mb-10 max-w-2xl leading-relaxed font-light">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-[#2C5E43] hover:bg-[#3A7856] transition-all duration-300 cursor-pointer"
            >
              {isZh ? '预约三甲就医陪诊' : 'Inquire About Escort Services'}
            </button>
            <button
              onClick={onOpenLiveSync}
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-[#2C5E43] text-base font-medium rounded-xl text-[#2C5E43] bg-transparent hover:bg-[#2C5E43] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span>{isZh ? '查看实时节点同步演示' : 'View Live Sync Demo'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 4-STAGE ESCORT WORKFLOW */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
              {isZh ? '严谨闭环 · 专业就医流程' : 'Standardized Clinical Protocol'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-bold mb-4">
              {t.stageTitle}
            </h2>
            <p className="text-base sm:text-lg text-[#555555]">
              {isZh
                ? '每一个细节都经过标准化梳理，让长辈无需承受繁琐流程，让海外家人时刻清晰安心。'
                : 'A seamless, anxiety-free journey designed to handle all logistics so you and your loved ones can focus purely on health.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {stages.map((stage) => (
              <div
                key={stage.step}
                className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#E8DFD8]">
                    <span className="font-serif text-2xl font-bold text-[#2C5E43]">{stage.step}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#222222] mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-[#E8DFD8] text-xs text-[#555555]">
                  {stage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2C5E43] mr-1.5 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: REMOTE FAMILY LIVE-SYNC SYSTEM */}
      <section className="py-24 bg-[#F5F0EB] border-y border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FDFBF7] rounded-3xl shadow-soft overflow-hidden border border-white">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-[#D4A359]/20 text-[#2C5E43] text-xs font-bold rounded-full mb-6 uppercase tracking-wider w-max">
                  {isZh ? '海外实时连接' : 'Live Overseas Connectivity'}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-bold mb-6 leading-tight">
                  {isZh ? '距离不再是孝心与陪伴的阻碍' : 'Distance is no longer a barrier to caring for your parents.'}
                </h2>
                <p className="text-base sm:text-lg text-[#555555] mb-8 leading-relaxed">
                  {isZh
                    ? '我们的实时节点同步系统让远在海外的家人与父母如同身处一室，消除跨时区等待的焦虑。'
                    : 'Our Live-Sync System keeps overseas family members informed in real-time, removing the anxiety of waiting for news across different time zones.'}
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#2C5E43]/10 text-[#2C5E43]">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-[#222222]">
                        {isZh ? '关键节点实时消息推送' : 'Milestone Node Notifications'}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#555555]">
                        {isZh
                          ? '体检开始、完成重大单项、用餐与回房，均通过微信/WhatsApp群组实时告知。'
                          : 'Automated WhatsApp/WeChat alerts sent the moment a checkup begins, finishes, and during meal breaks.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#D4A359]/20 text-[#D4A359]">
                        <Heart className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-[#222222]">
                        {isZh ? '医生语音与要点转述' : 'Voice & Video Summaries'}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#555555]">
                        {isZh
                          ? '由专业管家将主检医师的复杂医学术语转化为通俗语音与要点总结发送给家人。'
                          : 'Companions send quick, reassuring audio or video updates after major consultation milestones.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#C87D55]/15 text-[#C87D55]">
                        <FileText className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-[#222222]">
                        {isZh ? '双语数字健康报告归档' : 'Digital Report Portal'}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#555555]">
                        {isZh
                          ? '所有检验报告、影像学指标均整理翻译为双语 PDF 格式，方便随时查看或供私人医生参考。'
                          : 'Instant secure sharing of translated PDF report summaries for you to keep on record or share with your family physician.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={onOpenLiveSync}
                    className="px-6 py-3.5 bg-[#2C5E43] text-white rounded-xl text-sm font-medium hover:bg-[#3A7856] transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#D4A359]" />
                    <span>{isZh ? '启动互动式节点同步演示' : 'Launch Interactive Family Timeline Demo'}</span>
                  </button>
                </div>
              </div>

              <div className="relative h-64 sm:h-80 lg:h-full min-h-[350px]">
                <img
                  src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=1000"
                  alt="Hands holding phone showing connection"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2C5E43]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPANION QUALIFICATIONS & STANDARDS */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
              {isZh ? '严选标准 · 值得重托' : 'Rigorous Standards'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-bold mb-4">
              {isZh ? '不仅仅是向导，更是家人的信任代表' : 'More Than Just a Guide'}
            </h2>
            <p className="text-base sm:text-lg text-[#555555]">
              {isZh
                ? '每一位康旅途健康管家均经过严格背景筛查与专业培训，具备医学素养与深厚人文同理心。'
                : "What makes a WellJourney companion distinctly qualified to care for your family's health and well-being."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#F5F0EB] shadow-sm hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-[#F5F0EB] rounded-2xl flex items-center justify-center mb-6 text-[#2C5E43]">
                <Languages className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222222] mb-3">
                {isZh ? '多语种与乡音无缝沟通' : 'Multi-Lingual Competency'}
              </h3>
              <p className="text-[#555555] leading-relaxed text-sm">
                {isZh
                  ? '精通英语、普通话及本地闽南语方言。精准转述医疗术语，消除长辈在陌生的就医环境中的孤单感。'
                  : 'Our companions are rigorously vetted and fluent in English, Mandarin, and local Fujianese dialects (Hokkien). They ensure nuanced medical terminology is accurately translated.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#F5F0EB] shadow-sm hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-[#F5F0EB] rounded-2xl flex items-center justify-center mb-6 text-[#C87D55]">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222222] mb-3">
                {isZh ? '医疗急救与长辈照护规范' : 'Medical Empathy & Training'}
              </h3>
              <p className="text-[#555555] leading-relaxed text-sm">
                {isZh
                  ? '系统接受长辈日常看护、就医隐私保护及基础应急救援培训，以家人的温情与专业严谨执行每项任务。'
                  : 'Trained extensively in senior accompaniment, patient privacy protocols, and basic emergency procedures. They act with the care of a family member and the rigor of a professional.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#F5F0EB] shadow-sm hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-[#F5F0EB] rounded-2xl flex items-center justify-center mb-6 text-[#D4A359]">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222222] mb-3">
                {isZh ? '在地文化与生活情趣认知' : 'Cultural Sensitivity'}
              </h3>
              <p className="text-[#555555] leading-relaxed text-sm">
                {isZh
                  ? '深谙泉州当地历史文脉与慢生活节奏，熟知闽南饮食养生与养生茶道，让长辈倍感亲切自如。'
                  : 'As local Quanzhou natives, our companions deeply understand the gentle rhythm of local life, traditional customs, and dietary habits, ensuring your parents feel at home.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEDICAL NETWORK & LEGAL BOUNDARY */}
      <section className="py-20 bg-[#F5F0EB] border-t border-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-center text-[#222222] font-bold mb-12">
            {isZh ? '权威医疗协作网络与合规保障' : 'Our Trusted Medical Collaboration Network'}
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center mb-16">
            <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-[#F5F0EB] flex items-center space-x-3 w-full sm:w-auto">
              <ShieldCheck className="w-7 h-7 text-[#2C5E43]" />
              <div>
                <p className="font-serif font-bold text-[#222222]">
                  {isZh ? '泉州合作三甲综合医院' : 'Partner Tertiary Hospitals'}
                </p>
                <p className="text-xs text-[#555555]">
                  {isZh ? '公立三甲名医挂号与体检专窗' : 'Specialist appointments & VIP booking'}
                </p>
              </div>
            </div>

            <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-[#F5F0EB] flex items-center space-x-3 w-full sm:w-auto">
              <Sparkles className="w-7 h-7 text-[#C87D55]" />
              <div>
                <p className="font-serif font-bold text-[#222222]">
                  {isZh ? '高端独立体检中心' : 'Premium Screening Centers'}
                </p>
                <p className="text-xs text-[#555555]">
                  {isZh ? '私密舒适环境与全程绿色通道' : 'VIP private screening & fast-track queues'}
                </p>
              </div>
            </div>

            <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-[#F5F0EB] flex items-center space-x-3 w-full sm:w-auto">
              <Heart className="w-7 h-7 text-[#D4A359]" />
              <div>
                <p className="font-serif font-bold text-[#222222]">
                  {isZh ? '中医名医调理机构' : 'TCM Wellness Institutions'}
                </p>
                <p className="text-xs text-[#555555]">
                  {isZh ? '名老中医脉诊与体质调理方案' : 'Senior TCM pulse assessment & herbal diet'}
                </p>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="max-w-4xl mx-auto bg-[#FDFBF7] border-l-4 border-[#C87D55] p-6 sm:p-8 rounded-r-2xl shadow-sm border border-[#F5F0EB]">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-[#C87D55] mr-3 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#222222] uppercase tracking-wider mb-2 font-serif">
                  {isZh ? '医疗与法律权责明确声明' : 'Important Medical & Legal Disclaimer'}
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {isZh
                    ? '康旅途提供专业的体检行程规划、三甲医院陪诊、多语种翻译及在地健康生活照护。<strong class="text-[#222222] font-semibold">所有医学检查、实验室诊断、处方开具与临床治疗均由经国家卫健委认证的合作三甲医院执业医师独立实施。</strong>康旅途及陪诊管家不提供任何直接的医学诊断或处方治疗行为。'
                    : 'WellJourney provides logistics coordination, language translation, escorting, and daily living care. All diagnostic procedures, medical examinations, prescriptions, and treatments are independently executed by licensed medical personnel at our certified partner hospitals. WellJourney and its companions do not provide direct medical advice, diagnoses, or pharmaceutical treatments.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQS */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-[#222222] font-bold mb-12">
            {isZh ? '陪诊与安全常见疑问' : 'Medical Escort FAQs'}
          </h2>

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
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-[#F5F0EB]/40 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="font-medium text-[#222222] text-sm sm:text-base block pr-4">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2C5E43] transform transition-transform duration-300 shrink-0 ${
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
      </section>

      {/* SECTION 7: CONSULTATION & DIRECT INQUIRY BANNER */}
      <section className="py-20 bg-[#2C5E43] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            {isZh ? '对父母的健康与就医有具体的疑问？' : 'Have specific health questions for your parents?'}
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {isZh
              ? '欢迎随时与我们的健康管家顾问沟通。我们将为您详细梳理父母的过往病史、定制针对性体检项目，并提供最清晰透明的陪诊安排。'
              : 'Reach out to our care concierges directly. We are ready to discuss medical histories, customize checkup items, and walk you through every detail of the escort process.'}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-[#FDFBF7] text-[#2C5E43] hover:bg-[#F5F0EB] text-base font-semibold rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              {isZh ? '与健康管家连线沟通' : 'Speak to a Care Concierge'}
            </button>
            <button
              onClick={onOpenLiveSync}
              className="w-full sm:w-auto px-8 py-4 border border-white/50 text-white hover:bg-white/10 text-base font-semibold rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-[#D4A359]" />
              <span>{isZh ? '模拟海外家人接收通知' : 'Simulate Family Notifications'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
