import React from 'react';
import { X, ShieldCheck, FileText, AlertCircle } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
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
              {type === 'privacy' && 'Privacy Policy / 隐私保护政策'}
              {type === 'terms' && 'Terms of Service / 服务条款'}
              {type === 'disclaimer' && 'Medical & Legal Disclaimer / 医疗与法律声明'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#555555] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                <strong>WellJourney (康旅途, powered by YiMediTour)</strong> is deeply committed to protecting the personal privacy and medical information of our guests and their families.
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
          )}

          {type === 'terms' && (
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
          )}

          {type === 'disclaimer' && (
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
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F5F0EB] border-t border-[#E8DFD8] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#2C5E43] text-[#FDFBF7] font-medium rounded-full hover:bg-[#3A7856] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
