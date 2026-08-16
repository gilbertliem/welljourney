import React, { useState } from 'react';
import { X, Download, Printer, Check, FileCheck, MapPin, Calendar, Heart, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedPackages } from '../i18n/translations';
import { PackageDetail } from '../types';

interface PdfItineraryModalProps {
  packageId?: string;
  isOpen: boolean;
  onClose: () => void;
  onBook: (pkgId: string) => void;
}

export const PdfItineraryModal: React.FC<PdfItineraryModalProps> = ({
  packageId = '3-day-mind-body',
  isOpen,
  onClose,
  onBook
}) => {
  const { language, isZh } = useLanguage();
  const packages = getLocalizedPackages(language);
  const [selectedPkgId, setSelectedPkgId] = useState<string>(packageId);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const currentPkg: PackageDetail =
    packages.find((p) => p.id === selectedPkgId) || packages[1] || packages[0];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm print:p-0 print:bg-white animate-fadeIn">
      <div className="bg-[#FDFBF7] text-[#555555] rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#F5F0EB] overflow-hidden print:max-h-none print:shadow-none print:border-none print:w-full">
        {/* Top Control Bar (Hidden in Print) */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-[#2C5E43] text-white print:hidden gap-3">
          <div className="flex items-center space-x-3">
            <FileCheck className="w-5 h-5 text-[#D4A359]" />
            <h3 className="font-serif font-semibold text-lg text-white">
              {isZh ? '官方标准行程方案与服务确认书' : 'Printable PDF Itinerary & Service Binder'}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center text-xs space-x-1 cursor-pointer"
              title={isZh ? '打印行程单' : 'Print itinerary'}
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{isZh ? '打印' : 'Print'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-md bg-[#D4A359] hover:bg-[#D4A359]/90 text-[#222222] font-medium transition-colors flex items-center text-xs space-x-1 cursor-pointer"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-green-800" />
                  <span>{isZh ? '已生成 PDF' : 'PDF Saved'}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{isZh ? '导出 PDF' : 'Export PDF'}</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Package Selector Tabs (Hidden in Print) */}
        <div className="bg-[#F5F0EB] px-6 py-2 border-b border-[#E8DFD8] flex space-x-2 print:hidden overflow-x-auto">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPkgId(pkg.id)}
              className={`px-3 py-1.5 text-xs font-serif rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedPkgId === pkg.id
                  ? 'bg-[#2C5E43] text-white font-medium shadow-sm'
                  : 'text-[#555555] hover:bg-white'
              }`}
            >
              {pkg.duration} - {pkg.title}
            </button>
          ))}
        </div>

        {/* PDF Document Page View */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-8 bg-white flex-1 text-[#222222] font-sans">
          {/* Header of Printable Sheet */}
          <div className="border-b-2 border-[#2C5E43] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-3xl font-bold text-[#2C5E43]">WellJourney</span>
                <span className="font-serif text-xl text-[#C87D55]">康旅途</span>
              </div>
              <p className="text-xs text-[#555555] mt-1">
                {isZh
                  ? '泉州三甲就医陪诊 · 世遗疗愈慢活旅程'
                  : 'Restorative Wellness Retreats & Medical Escort Facilitation · Quanzhou, China'}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block px-3 py-1 bg-[#F5F0EB] text-[#2C5E43] text-xs font-semibold rounded-full uppercase">
                {isZh ? '官方服务建议书' : 'Official Proposal Document'}
              </span>
              <p className="text-xs text-[#555555] mt-1 font-mono">Doc ID: WJ-QZ-{currentPkg.tabKey.toUpperCase()}-2026</p>
            </div>
          </div>

          {/* Package Overview Box */}
          <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#F5F0EB]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h2 className="font-serif text-2xl font-bold text-[#222222]">{currentPkg.title}</h2>
              <span className="text-lg font-serif font-bold text-[#2C5E43]">
                {currentPkg.price} <span className="text-xs font-sans font-normal text-[#555555]">{currentPkg.priceNote}</span>
              </span>
            </div>
            <p className="text-sm text-[#C87D55] font-serif italic mb-3">{currentPkg.subtitle}</p>
            <p className="text-xs text-[#555555] leading-relaxed">{currentPkg.description}</p>
          </div>

          {/* Key Service Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-[#F5F0EB] rounded-lg flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#2C5E43] shrink-0" />
              <div>
                <p className="font-semibold text-[#222222]">{isZh ? '中国·福建泉州' : 'Quanzhou, Fujian'}</p>
                <p className="text-[11px] text-[#555555]">{isZh ? '世遗古城红砖古厝' : 'Ancient Courtyard'}</p>
              </div>
            </div>
            <div className="p-3 bg-[#F5F0EB] rounded-lg flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#D4A359] shrink-0" />
              <div>
                <p className="font-semibold text-[#222222]">{currentPkg.duration}</p>
                <p className="text-[11px] text-[#555555]">{isZh ? '慢调松弛节奏' : 'Paced Itinerary'}</p>
              </div>
            </div>
            <div className="p-3 bg-[#F5F0EB] rounded-lg flex items-center space-x-2">
              <Heart className="w-4 h-4 text-[#C87D55] shrink-0" />
              <div>
                <p className="font-semibold text-[#222222]">{isZh ? '1对1专属管家' : '1-on-1 Companion'}</p>
                <p className="text-[11px] text-[#555555]">{isZh ? '中英闽南语' : 'EN / ZH / Hokkien'}</p>
              </div>
            </div>
            <div className="p-3 bg-[#F5F0EB] rounded-lg flex items-center space-x-2">
              <Shield className="w-4 h-4 text-[#2C5E43] shrink-0" />
              <div>
                <p className="font-semibold text-[#222222]">{isZh ? '海外家属实时通报' : 'Live Family Sync'}</p>
                <p className="text-[11px] text-[#555555]">{isZh ? '微信 / WhatsApp' : 'WeChat / WhatsApp'}</p>
              </div>
            </div>
          </div>

          {/* Detailed Itinerary Schedule */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#222222] mb-4 pb-2 border-b border-[#E8DFD8]">
              {isZh ? '每日行程安排与服务节点' : 'Daily Schedule & Milestone Protocol'}
            </h3>
            <div className="space-y-6">
              {currentPkg.itinerary.map((dayItem, dIdx) => (
                <div key={dIdx} className="space-y-3">
                  <h4 className="font-serif font-semibold text-[#2C5E43] text-sm flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D4A359] mr-2"></span>
                    {dayItem.day}: {dayItem.title}
                  </h4>
                  <div className="space-y-2 pl-4 border-l border-[#F5F0EB]">
                    {dayItem.events.map((evt, eIdx) => (
                      <div key={eIdx} className="text-xs">
                        <span className="font-semibold text-[#222222]">{evt.time && `${evt.time} — `}{evt.title}: </span>
                        <span className="text-[#555555]">{evt.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#222222] mb-4 pb-2 border-b border-[#E8DFD8]">
              {isZh ? '服务明细与透明范围' : 'Transparent Scope of Services'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#FDFBF7] p-4 rounded-lg border border-[#2C5E43]/20">
                <p className="font-semibold text-[#2C5E43] mb-2 uppercase tracking-wide">
                  {isZh ? '套餐已包含项目' : 'Included In Package'}
                </p>
                <ul className="space-y-1.5 text-[#555555]">
                  {currentPkg.inclusions.flatMap((inc) => inc.included).slice(0, 6).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#2C5E43] mr-1.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FDFBF7] p-4 rounded-lg border border-[#C87D55]/20">
                <p className="font-semibold text-[#C87D55] mb-2 uppercase tracking-wide">
                  {isZh ? '不包含与自选范围' : 'Excluded / Out of Scope'}
                </p>
                <ul className="space-y-1.5 text-[#555555]">
                  {currentPkg.inclusions.flatMap((inc) => inc.excluded).filter(e => e !== 'N/A' && e !== '无').slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#C87D55] mr-1.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Document Legal Footer */}
          <div className="text-[10px] text-[#555555]/80 pt-4 border-t border-[#E8DFD8] leading-normal flex flex-col sm:flex-row justify-between gap-2">
            <p>
              {isZh
                ? '* 所有体检及诊疗项目均由泉州当地受认证合作三甲医院执业医师独立实施。康旅途提供专业的全流程就医陪诊、生活关照及在地慢居服务。'
                : '* Medical services and laboratory examinations are performed exclusively by accredited partner tertiary hospitals in Quanzhou. WellJourney provides escort, logistics, and lifestyle care.'}
            </p>
            <p className="shrink-0 font-medium">www.welljourney.com · hello@welljourney.com</p>
          </div>
        </div>

        {/* Modal Action Bar (Hidden in Print) */}
        <div className="px-6 py-4 bg-[#F5F0EB] border-t border-[#E8DFD8] flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
          <p className="text-xs text-[#555555]">
            {isZh ? '所有体检专项及日常餐饮偏好均可在预订时进行个性化微调。' : 'Customizations for dietary preferences and checkup modules can be added upon booking.'}
          </p>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium border border-[#555555]/30 rounded-md hover:bg-black/5 cursor-pointer"
            >
              {isZh ? '关闭' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(currentPkg.id);
              }}
              className="flex-1 sm:flex-none px-5 py-2 text-xs font-medium bg-[#2C5E43] text-white rounded-md hover:bg-[#3A7856] shadow-sm transition-colors cursor-pointer"
            >
              {isZh ? '咨询并预订此套餐' : 'Inquire About This Package'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
