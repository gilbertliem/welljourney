import React from 'react';
import { X, CheckCircle2, MessageSquare, Volume2, Image, FileText, ArrowRight } from 'lucide-react';
import { DEMO_LIVE_SYNC_NODES } from '../data/medicalData';

interface LiveNodeSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const LiveNodeSyncModal: React.FC<LiveNodeSyncModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#FDFBF7] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#F5F0EB] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#2C5E43] text-[#FDFBF7]">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A359] animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-[#D4A359] font-bold">
                Remote Family Live Sync
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold mt-1">
              Real-Time Family Notification Timeline
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-header info */}
        <div className="bg-[#F5F0EB] px-6 py-3 border-b border-[#E8DFD8] text-xs sm:text-sm text-[#555555] flex items-center justify-between">
          <span>Channel: <strong>Family Group (WeChat / WhatsApp)</strong></span>
          <span className="text-[#2C5E43] font-semibold flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-1 text-[#2C5E43]" /> Live Connected
          </span>
        </div>

        {/* Chat / Timeline Container */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#FDFBF7]">
          <p className="text-xs text-center text-[#555555]/70">
            This is an interactive simulation of what overseas family members receive on their phones throughout their parents’ checkup day.
          </p>

          <div className="relative border-l-2 border-[#D4A359]/30 ml-4 space-y-6 pl-6">
            {DEMO_LIVE_SYNC_NODES.map((node, index) => (
              <div key={index} className="relative group">
                {/* Node icon */}
                <div className="absolute -left-[33px] top-1 w-6 h-6 rounded-full bg-[#2C5E43] text-white flex items-center justify-center text-xs shadow-md">
                  {node.type === 'status' && <MessageSquare className="w-3 h-3" />}
                  {node.type === 'voice' && <Volume2 className="w-3 h-3 text-[#D4A359]" />}
                  {node.type === 'photo' && <Image className="w-3 h-3 text-[#D4A359]" />}
                  {node.type === 'report' && <FileText className="w-3 h-3 text-[#C87D55]" />}
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#F5F0EB] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-sm text-[#222222]">{node.sender}</span>
                    <span className="text-xs text-[#555555]/80 bg-[#F5F0EB] px-2 py-0.5 rounded-full font-mono">
                      {node.time} (Quanzhou Time)
                    </span>
                  </div>
                  <h4 className="font-serif font-medium text-[#2C5E43] text-sm mb-2">
                    {node.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {node.content}
                  </p>

                  {node.type === 'voice' && (
                    <div className="mt-3 p-2.5 bg-[#F5F0EB] rounded-lg flex items-center space-x-3 text-xs text-[#2C5E43]">
                      <div className="w-7 h-7 rounded-full bg-[#2C5E43] text-white flex items-center justify-center">
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[#222222]">Voice Note from Dr. Chen (Internal Medicine)</p>
                        <p className="text-[11px] text-[#555555]">Translated audio summary: 1 min 42 sec</p>
                      </div>
                    </div>
                  )}

                  {node.type === 'report' && (
                    <div className="mt-3 p-2.5 bg-[#C87D55]/10 border border-[#C87D55]/30 rounded-lg flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-[#C87D55]" />
                        <span className="font-medium text-[#222222]">Health_Summary_Prelim_EN_ZH.pdf</span>
                      </div>
                      <span className="text-[#C87D55] font-semibold">1.4 MB</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F5F0EB] border-t border-[#E8DFD8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#555555] text-center sm:text-left">
            Included at zero extra charge in all 1-Day, 3-Day, and 5-Day packages.
          </p>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium border border-[#555555]/30 rounded-md hover:bg-black/5"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="flex-1 sm:flex-none px-5 py-2 text-xs font-medium bg-[#2C5E43] text-white rounded-md hover:bg-[#3A7856] flex items-center justify-center space-x-1"
            >
              <span>Setup for My Family</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
