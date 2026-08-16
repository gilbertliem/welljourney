import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Send, ShieldAlert, Sparkles, Phone, Mail } from 'lucide-react';
import { ConsultationFormData } from '../types';

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
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    contactMethod: '',
    preferredPackage: initialPackage,
    preferredLanguage: 'Both / Either (双语)',
    travelDates: '',
    guestsCount: '1-2 Guests (一至两位长辈)',
    healthNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate concierge submission
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
              WellJourney Concierge
            </span>
            <h3 className="font-serif text-xl font-bold mt-0.5">
              Family Consultation & Custom Proposal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
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
                  Inquiry Received / 咨询已收到
                </h4>
                <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#222222]">{formData.name || 'valued guest'}</strong>. Our wellness concierge has received your details and will prepare a tailored health & cultural proposal within <strong className="text-[#2C5E43]">24 hours</strong>.
                </p>
              </div>

              <div className="bg-[#F5F0EB] p-4 rounded-xl text-xs text-left max-w-md mx-auto space-y-2 border border-[#E8DFD8]">
                <p className="font-semibold text-[#222222] flex items-center">
                  <Sparkles className="w-4 h-4 text-[#D4A359] mr-1.5" /> Next Steps:
                </p>
                <p className="text-[#555555]">
                  1. Our concierge will contact you via <strong>{formData.contactMethod || 'your provided contact'}</strong> to review health priorities.
                </p>
                <p className="text-[#555555]">
                  2. We coordinate tailored VIP checkup items with Quanzhou partner hospitals.
                </p>
                <p className="text-[#555555]">
                  3. You receive a complete digital PDF itinerary and quote with zero obligation.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#2C5E43] text-white text-sm font-medium rounded-full hover:bg-[#3A7856] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <p className="text-xs sm:text-sm text-[#555555] mb-2">
                Leave your details below. We specialize in coordinating gentle, escorted checkups and peaceful retreats for overseas families and returning guests.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Your Name / 姓名 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Zhang / 张先生"
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    WhatsApp / WeChat / Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    placeholder="e.g. +1 (415) ... or WeChat ID"
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Package */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Interested Package / 意向行程
                  </label>
                  <select
                    value={formData.preferredPackage}
                    onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  >
                    <option value="1-day">1-Day Express Escort (一日体检)</option>
                    <option value="3-day">3-Day Mind-Body Stay (三日身心平衡)</option>
                    <option value="5-day">5-Day Deep Healing (五日深度调养)</option>
                    <option value="custom">Custom Need / Not Sure Yet (定制咨询)</option>
                  </select>
                </div>

                {/* Preferred Language */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Companion Language / 陪诊语言
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  >
                    <option value="English">English / 英语为主</option>
                    <option value="Mandarin">Mandarin / 普通话</option>
                    <option value="Hokkien">Hokkien / 闽南话 (Special senior care)</option>
                    <option value="Both / Either (双语)">Bilingual (English + Mandarin/Hokkien)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Approximate Dates */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Target Travel Month / 计划出行月份
                  </label>
                  <input
                    type="text"
                    value={formData.travelDates}
                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                    placeholder="e.g. October 2026 / 灵活调整"
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Number of Guests / 出行人数
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43]"
                  >
                    <option value="1 Guest">1 Guest / 单人出行</option>
                    <option value="2 Guests (e.g. Parents)">2 Guests (e.g. Parents / 父母两位)</option>
                    <option value="3+ Family Members">3+ Family Members (家庭出行)</option>
                  </select>
                </div>
              </div>

              {/* Health Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#222222] mb-1">
                  Health Notes & Mobility Preferences / 特殊健康或生活备注
                </label>
                <textarea
                  rows={3}
                  value={formData.healthNotes}
                  onChange={(e) => setFormData({ ...formData, healthNotes: e.target.value })}
                  placeholder="e.g. Mobility limits, wheelchair routing needed, pre-existing hypertension or cardiac concerns, dietary restrictions (low sugar, vegetarian)..."
                  className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] resize-none"
                />
              </div>

              <div className="bg-[#2C5E43]/5 p-3 rounded-lg flex items-center space-x-2 text-[11px] text-[#555555]">
                <ShieldAlert className="w-4 h-4 text-[#2C5E43] shrink-0" />
                <span>Your information is strictly confidential and used solely to draft your family proposal.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#2C5E43] hover:bg-[#3A7856] text-white font-medium rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
              >
                {isSubmitting ? (
                  <span>Preparing Proposal...</span>
                ) : (
                  <>
                    <span>Request Free Tailored Proposal</span>
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
