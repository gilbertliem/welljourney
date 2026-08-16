import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onOpenWeChat: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenWeChat,
  onOpenConsultation
}) => {
  return (
    <footer className="bg-[#1F422F] text-[#FDFBF7] pt-16 pb-12 border-t-4 border-[#D4A359]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-serif text-2xl font-bold text-white tracking-wide">WellJourney</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A359]"></span>
            </div>
            <span className="font-serif text-sm text-[#D98E66] tracking-widest block mb-4 font-medium">
              康旅途 · Quanzhou
            </span>
            <p className="text-sm text-[#FDFBF7]/75 leading-relaxed mb-6 font-light">
              Slow down. Be supported. Find peace.<br />
              Restorative wellness retreats and dedicated medical escort facilitation in the cultural heart of Quanzhou, China.
            </p>
            <div className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-full text-xs text-[#FDFBF7]/90 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#D4A359] mr-2"></span>
              Powered by YiMediTour (医途通)
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#D4A359] uppercase tracking-wider mb-4 font-serif">
              Explore Journeys
            </h4>
            <ul className="space-y-3 text-sm text-[#FDFBF7]/75">
              <li>
                <button
                  onClick={() => onNavigate('home', 'philosophy')}
                  className="hover:text-[#D4A359] transition-colors text-left"
                >
                  The Anti-Tourism Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-[#D4A359] transition-colors text-left"
                >
                  Curated Wellness Retreats
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('medical')}
                  className="hover:text-[#D4A359] transition-colors text-left"
                >
                  Medical Escort & Safety Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('culture')}
                  className="hover:text-[#D4A359] transition-colors text-left"
                >
                  Quanzhou Cultural Slow Living
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4A359] transition-colors text-left"
                >
                  About WellJourney & Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-sm font-semibold text-[#D4A359] uppercase tracking-wider mb-4 font-serif">
              Compliance & Safety
            </h4>
            <ul className="space-y-3 text-sm text-[#FDFBF7]/75">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#D4A359] transition-colors text-left flex items-center"
                >
                  <span>Privacy & Health Data Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#D4A359] transition-colors text-left flex items-center"
                >
                  <span>Terms of Service & Rescheduling</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-[#D4A359] transition-colors text-left flex items-center"
                >
                  <span>Medical & Legal Boundary Notice</span>
                </button>
              </li>
              <li className="pt-2">
                <div className="text-xs text-[#FDFBF7]/60 leading-relaxed bg-white/5 p-2.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#D4A359] mb-1" />
                  Medical diagnostic services performed exclusively by certified tertiary hospitals.
                </div>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-[#D4A359] uppercase tracking-wider mb-4 font-serif">
              Contact Concierge
            </h4>
            <ul className="space-y-3 text-sm text-[#FDFBF7]/75 mb-6">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2.5 text-[#D4A359] shrink-0" />
                <span>hello@welljourney.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2.5 text-[#D4A359] shrink-0" />
                <span>Quanzhou & Jinjiang, Fujian, China</span>
              </li>
            </ul>

            {/* WeChat QR Card */}
            <button
              onClick={onOpenWeChat}
              className="w-full flex items-center space-x-3 bg-white/10 hover:bg-white/15 p-3 rounded-xl border border-white/20 transition-all text-left group"
            >
              <div className="w-10 h-10 bg-[#D4A359]/20 rounded-lg flex items-center justify-center border border-[#D4A359]/40 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 text-[#D4A359]" />
              </div>
              <div>
                <span className="text-xs text-white font-medium block">
                  Connect on WeChat / WhatsApp
                </span>
                <span className="text-[11px] text-[#D4A359]">
                  Click for QR & Concierge Chat →
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-white/10 text-xs text-[#FDFBF7]/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; 2026 WellJourney (YiMediTour / 康旅途). All rights reserved. Supported by Tongji Univ. Jinjiang Innovation Center.
          </p>
          <div className="flex items-center space-x-4">
            <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-white transition-colors">
              Disclaimer
            </button>
            <span>·</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors">
              Privacy
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              About
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
