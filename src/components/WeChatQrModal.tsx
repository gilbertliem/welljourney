import React from 'react';
import { X, QrCode, MessageCircle, Mail, Phone, Copy, Check } from 'lucide-react';

interface WeChatQrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeChatQrModal: React.FC<WeChatQrModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFBF7] text-[#555555] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#F5F0EB] text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/5 text-[#555555] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 bg-[#2C5E43]/10 text-[#2C5E43] rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#222222] mb-1">
          Connect with Our Concierge
        </h3>
        <p className="text-xs text-[#C87D55] font-serif mb-6">
          微信 / WhatsApp 在线咨询 · 全天候双语服务
        </p>

        {/* QR Code Placeholder Box */}
        <div className="bg-white p-5 rounded-2xl border-2 border-dashed border-[#D4A359]/40 max-w-[220px] mx-auto mb-6 shadow-inner flex flex-col items-center justify-center">
          <div className="w-36 h-36 bg-[#F5F0EB] rounded-xl flex flex-col items-center justify-center p-3 relative group">
            <QrCode className="w-24 h-24 text-[#2C5E43]" />
            <span className="text-[10px] text-[#555555] font-mono mt-1 font-semibold">
              Scan with WeChat
            </span>
          </div>
          <span className="text-xs text-[#222222] font-medium mt-3">WeChat ID: WellJourney_QZ</span>
        </div>

        {/* Contact list & copy */}
        <div className="space-y-2.5 text-xs text-left bg-[#F5F0EB] p-4 rounded-xl mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#222222]">
              <Mail className="w-4 h-4 text-[#2C5E43]" />
              <span className="font-medium">hello@welljourney.com</span>
            </div>
            <button
              onClick={() => handleCopy('hello@welljourney.com')}
              className="text-[#2C5E43] hover:underline flex items-center text-[11px]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-700 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E8DFD8]">
            <div className="flex items-center space-x-2 text-[#222222]">
              <Phone className="w-4 h-4 text-[#C87D55]" />
              <span className="font-medium">+86 189 0595 2026 (WhatsApp)</span>
            </div>
            <button
              onClick={() => handleCopy('+8618905952026')}
              className="text-[#2C5E43] hover:underline flex items-center text-[11px]"
            >
              Copy
            </button>
          </div>
        </div>

        <p className="text-[11px] text-[#555555]">
          Based in Quanzhou & Jinjiang, Fujian · Operating under YiMediTour
        </p>
      </div>
    </div>
  );
};
