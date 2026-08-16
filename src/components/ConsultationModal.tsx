import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldAlert, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialPackage = '3-day'
}) => {
  const { isZh } = useLanguage();

  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    contactMethod: '',
    preferredPackage: initialPackage,
    preferredLanguage: isZh ? '双语 (中文+闽南语/英文)' : 'Bilingual (English + Mandarin/Hokkien)',
    travelDates: '',
    guestsCount: isZh ? '2 位长辈 (父母同行)' : '2 Guests (e.g. Parents)',
    healthNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFBF7] text-[#555555] rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#F5F0EB] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#2C5E43] text-white">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4A359] font-bold">
              {isZh ? '康旅途 · 专属健康管家' : 'WellJourney Concierge'}
            </span>
            <h3 className="font-serif text-xl font-bold mt-0.5">
              {isZh ? '家庭健康定制与行程咨询' : 'Family Consultation & Custom Proposal'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-[#2C5E43]/10 text-[#2C5E43] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#2C5E43]" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-[#222222] mb-2">
                  {isZh ? '咨询已收到，管家正为您规划' : 'Inquiry Received'}
                </h4>
                <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  {isZh ? (
                    <>
                      感谢您的信任，<strong className="text-[#222222]">{formData.name || '贵宾'}</strong>。专属管家已收到需求，将在 <strong className="text-[#2C5E43]">24 小时内</strong> 为您出具针对性方案。
                    </>
                  ) : (
                    <>
                      Thank you, <strong className="text-[#222222]">{formData.name || 'valued guest'}</strong>. Our wellness concierge has received your details and will prepare a tailored proposal within <strong className="text-[#2C5E43]">24 hours</strong>.
                    </>
                  )}
                </p>
              </div>

              <div className="bg-[#F5F0EB] p-4 rounded-xl text-xs text-left max-w-md mx-auto space-y-2 border border-[#E8DFD8]">
                <p className="font-semibold text-[#222222] flex items-center">
                  <Sparkles className="w-4 h-4 text-[#D4A359] mr-1.5" />
                  {isZh ? '后续服务流程：' : 'Next Steps:'}
                </p>
                <p className="text-[#555555]">
                  {isZh
                    ? `1. 健康管家将通过 ${formData.contactMethod || '您填写的联系方式'} 与您联系，核对长辈健康重点。`
                    : `1. Our concierge will contact you via ${formData.contactMethod || 'your provided contact'} to review health priorities.`}
                </p>
                <p className="text-[#555555]">
                  {isZh
                    ? '2. 协同泉州合作三甲医院专家与VIP体检通道，确认针对性检查项目。'
                    : '2. We coordinate tailored VIP checkup items with Quanzhou partner hospitals.'}
                </p>
                <p className="text-[#555555]">
                  {isZh
                    ? '3. 发送完整双语 PDF 行程明细与报价，零负担沟通，满意后再行确认。'
                    : '3. You receive a complete digital PDF itinerary and quote with zero obligation.'}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#2C5E43] text-white text-sm font-medium rounded-full hover:bg-[#3A7856] transition-colors cursor-pointer"
                >
                  {isZh ? '完成' : 'Done'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <p className="text-xs sm:text-sm text-[#555555] mb-2">
                {isZh
                  ? '请填写基本信息。我们擅长为海外华人家庭及各地长辈提供温情、专业、透明的三甲医院陪诊与泉州世遗疗愈旅程。'
                  : 'Leave your details below. We specialize in coordinating gentle, escorted checkups and peaceful retreats for overseas families and returning guests.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    {isZh ? '您的称呼 / 出行人姓名 *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isZh ? '例如：陈先生 / 蔡女士' : 'e.g. David Zhang'}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    {isZh ? '联系方式 (微信 / WhatsApp / 邮箱) *' : 'WhatsApp / WeChat / Email *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    placeholder={isZh ? '例如：微信ID / WhatsApp手机号' : 'e.g. +1 (415) ... or WeChat ID'}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Package */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    {isZh ? '意向行程套餐' : 'Interested Package'}
                  </label>
                  <select
                    value={formData.preferredPackage}
                    onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  >
                    <option value="1-day">{isZh ? '一日舒心体检陪诊 (1-Day Express)' : '1-Day Express Escort'}</option>
                    <option value="3-day">{isZh ? '三日两晚·身心平衡慢活 (3-Day Mind-Body)' : '3-Day Mind-Body Stay'}</option>
                    <option value="5-day">{isZh ? '五日四晚·深层调养寻静 (5-Day Deep Healing)' : '5-Day Deep Healing'}</option>
                    <option value="custom">{isZh ? '根据家庭情况量身定制 (Custom Consultation)' : 'Custom Need / Not Sure Yet'}</option>
                  </select>
                </div>

                {/* Preferred Language */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    {isZh ? '陪诊与沟通语言偏好' : 'Companion Language'}
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  >
                    <option value="English">{isZh ? '英语为主 (English Primary)' : 'English Primary'}</option>
                    <option value="Mandarin">{isZh ? '普通话为主 (Mandarin)' : 'Mandarin'}</option>
                    <option value="Hokkien">{isZh ? '闽南话乡音 (Hokkien / 专为长辈)' : 'Hokkien (Special senior care)'}</option>
                    <option value="Bilingual">{isZh ? '双语 (中英/闽南语组合)' : 'Bilingual (English + Mandarin/Hokkien)'}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Approximate Dates */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    {isZh ? '计划出行月份' : 'Target Travel Month'}
                  </label>
                  <input
                    type="text"
                    value={formData.travelDates}
                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                    placeholder={isZh ? '例如：2026年10月 / 待定' : 'e.g. October 2026 / Flexible'}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    {isZh ? '出行人数' : 'Number of Guests'}
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  >
                    <option value="1 Guest">{isZh ? '1 位长辈 (单人出行)' : '1 Guest'}</option>
                    <option value="2 Guests">{isZh ? '2 位长辈 (父母同行)' : '2 Guests (e.g. Parents)'}</option>
                    <option value="3+ Family Members">{isZh ? '3 位及以上 (全家同行)' : '3+ Family Members'}</option>
                  </select>
                </div>
              </div>

              {/* Health Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#222222] mb-1">
                  {isZh ? '健康关注点或特殊生活习惯' : 'Health Notes & Mobility Preferences'}
                </label>
                <textarea
                  rows={3}
                  value={formData.healthNotes}
                  onChange={(e) => setFormData({ ...formData, healthNotes: e.target.value })}
                  placeholder={
                    isZh
                      ? '例如：行动是否需要轮椅或平缓路线、是否有高血压或心血管重点排查、饮食习惯（少油低糖、素食等）...'
                      : 'e.g. Mobility limits, wheelchair routing needed, pre-existing hypertension or cardiac concerns, dietary restrictions...'
                  }
                  className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] resize-none"
                />
              </div>

              <div className="bg-[#2C5E43]/5 p-3 rounded-lg flex items-center space-x-2 text-[11px] text-[#555555]">
                <ShieldAlert className="w-4 h-4 text-[#2C5E43] shrink-0" />
                <span>
                  {isZh
                    ? '您的信息严格保密，仅用于为您出具专属定制建议书。'
                    : 'Your information is strictly confidential and used solely to draft your family proposal.'}
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#2C5E43] hover:bg-[#3A7856] text-white font-medium rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 text-sm cursor-pointer"
              >
                {isSubmitting ? (
                  <span>{isZh ? '正在提交需求...' : 'Preparing Proposal...'}</span>
                ) : (
                  <>
                    <span>{isZh ? '免费提交家庭定制需求' : 'Request Free Tailored Proposal'}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
