import React from 'react';
import { X, ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { isZh } = useLanguage();

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFBF7] text-[#555555] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#F5F0EB] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#F5F0EB] border-b border-[#E8DFD8]">
          <div className="flex items-center space-x-3">
            {type === 'privacy' && <ShieldCheck className="w-6 h-6 text-[#2C5E43]" />}
            {type === 'terms' && <FileText className="w-6 h-6 text-[#2C5E43]" />}
            {type === 'disclaimer' && <AlertCircle className="w-6 h-6 text-[#C87D55]" />}
            <h3 className="font-serif text-xl font-bold text-[#222222]">
              {type === 'privacy' && (isZh ? '隐私安全与信息保护政策' : 'Privacy Policy')}
              {type === 'terms' && (isZh ? '服务条款与预订协议' : 'Terms of Service')}
              {type === 'disclaimer' && (isZh ? '医疗与法律权责明确声明' : 'Medical & Legal Disclaimer')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#555555] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm leading-relaxed">
          {type === 'privacy' && (
            isZh ? (
              <>
                <p>
                  <strong>康旅途（WellJourney，隶属于医旅同行 YiMediTour 团队）</strong> 严格遵守法律法规，以最高行业准则保护长辈及海外家人的个人信息与健康档案隐私。
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">1. 信息收集与合法用途</h4>
                <p>
                  我们仅收集提供体检协调、三甲陪诊、交通接送及慢居安排所必需的信息，包含联系方式、语言偏好、长辈行动特征及自愿填写的健康备忘。
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">2. 医疗健康档案绝密保护</h4>
                <p>
                  所有医院检验报告、影像学资料及翻译总结均采用企业级加密存储，仅限授权长辈及指定海外紧急联络人查阅。我们绝不出售、出租或向任何第三方商业广告机构披露您的任何信息。
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">3. 档案留存与删除权益</h4>
                <p>
                  服务行程结束后，家属可随时申请彻底注销并本地导出双语数字健康档案。
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>WellJourney (powered by YiMediTour)</strong> is deeply committed to protecting the personal privacy and medical information of our guests and their families.
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">1. Data Collection & Purpose</h4>
                <p>
                  We only collect information essential for coordinating health checkups, transport, and personalized retreat accommodations. This includes guest contact information, language preferences, mobility requirements, and voluntary health background notes.
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">2. Medical Record Confidentiality</h4>
                <p>
                  All hospital examination documents and translation summaries are stored in encrypted format and shared strictly with the authorized guest and their designated overseas family contact. We never sell, lease, or monetize user data with third-party advertising entities.
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">3. Data Retention & Deletion</h4>
                <p>
                  Guests may request complete deletion or localized export of their digitized retreat health binder at any time following the conclusion of their journey.
                </p>
              </>
            )
          )}

          {type === 'terms' && (
            isZh ? (
              <>
                <p>
                  本服务条款适用于康旅途所提供的泉州康养疗愈、三甲医院就医陪诊协调、双语生活照护及在地文化慢活体验。
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">1. 预订与专属定制</h4>
                <p>
                  行程方案在双方确认并支付预定金后正式生效。体检项目专项增减或个性化餐饮需求，可在抵达前 7 个工作日内无偿调整。
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">2. 改期与退改保障</h4>
                <p>
                  如遇长辈身体临时不适或海外航班变动，出行前 7 天及以上可免费改期。出行前 14 天取消预订可享 100% 全额退款（扣除已向合作医院缴纳的非退还挂号及专家预约规费）。
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">3. 真实告知义务</h4>
                <p>
                  为保障长辈健康安全，请家属如实告知长辈既往重大病史及行动受限情况，以便管家团队与主检医师制定最安全的陪护方案。
                </p>
              </>
            ) : (
              <>
                <p>
                  These Terms of Service govern the wellness retreats, health checkup facilitation, bilingual escorting, and cultural accommodation services provided by WellJourney.
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">1. Booking & Customization</h4>
                <p>
                  A booking is confirmed once the tailored itinerary proposal is accepted and initial deposit processed. Custom adjustments to checkup modules or dietary schedules are accommodated up to 7 business days prior to arrival.
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">2. Cancellation & Rescheduling</h4>
                <p>
                  Rescheduling is flexible and free of charge when requested 7 or more days before arrival. Cancellations made 14 days in advance receive a 100% refund (less any non-refundable advance hospital registration fee imposed by third-party partner medical centers).
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">3. Guest Responsibilities</h4>
                <p>
                  Guests are encouraged to provide accurate pre-existing condition details to allow our concierge team and partner physicians to prepare appropriate care plans.
                </p>
              </>
            )
          )}

          {type === 'disclaimer' && (
            isZh ? (
              <>
                <div className="bg-[#C87D55]/10 border-l-4 border-[#C87D55] p-4 rounded-r-lg mb-4 text-[#222222]">
                  <strong>权责明确声明：</strong> 康旅途提供专业的体检行程统筹、三甲陪诊引导、双语翻译服务、慢活生活照顾及报告整理归档。
                </div>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">1. 独立执业医疗主体</h4>
                <p>
                  所有临床医学检验、放射影像检查、体格检查、疾病诊断及处方开具均由泉州受国家卫健委认证的合作公立三甲医院执业医师独立完成。
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">2. 非医疗诊断机构</h4>
                <p>
                  康旅途管家及陪诊人员不从事任何直接的非法行医、处方开具或替代医患沟通的行为。所有双语转述与总结均忠实反映主检医师的权威结论。
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">3. 紧急医疗响应预案</h4>
                <p>
                  若体检期间发现任何紧急急症隐患，管家团队将立即协助对接院方急诊绿色通道，并在第一时间通报海外紧急联系人。
                </p>
              </>
            ) : (
              <>
                <div className="bg-[#C87D55]/10 border-l-4 border-[#C87D55] p-4 rounded-r-lg mb-4 text-[#222222]">
                  <strong>Important Notice:</strong> WellJourney provides travel coordination, language accompaniment, lifestyle wellness management, and post-checkup archiving.
                </div>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">1. Independent Medical Authority</h4>
                <p>
                  All medical examinations, screenings, radiological imaging, laboratory tests, diagnoses, and medical prescriptions are independently executed by licensed medical personnel at our certified partner hospitals in Quanzhou.
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">2. No Direct Medical Advice</h4>
                <p>
                  WellJourney companions and coordinators do not practice medicine, prescribe medications, or replace formal doctor-patient relationships. Our translations and summaries reflect the spoken and written conclusions of licensed attending physicians.
                </p>
                <h4 className="font-serif font-bold text-[#222222] text-base mt-4">3. Emergency Protocols</h4>
                <p>
                  In the event of an urgent medical finding during any retreat, our team immediately facilitates on-site emergency hospital care and notifies the designated overseas emergency contact.
                </p>
              </>
            )
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F5F0EB] border-t border-[#E8DFD8] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#2C5E43] text-[#FDFBF7] font-medium rounded-full hover:bg-[#3A7856] transition-colors cursor-pointer"
          >
            {isZh ? '我已了解' : 'I Understand'}
          </button>
        </div>
      </div>
    </div>
  );
};
