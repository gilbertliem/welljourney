import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, toggleLanguage, isZh } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string; anchor?: string; badge?: string }[] = [
    { id: 'home', label: t.philosophy, anchor: 'philosophy' },
    { id: 'packages', label: t.packages },
    { id: 'medical', label: t.medical },
    { id: 'culture', label: t.culture },
    { id: 'about', label: t.about }
  ];

  const handleNavClick = (page: PageId, anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, anchor);
  };

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#F5F0EB]'
          : 'bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#F5F0EB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex flex-col items-start text-left group focus:outline-none"
            >
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2C5E43] tracking-wide group-hover:text-[#3A7856] transition-colors">
                  WellJourney
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C87D55]"></span>
              </div>
              <span className="font-serif text-xs sm:text-sm text-[#C87D55] tracking-widest -mt-1 font-medium">
                {isZh ? '康旅途 · 泉州' : 'Quanzhou Wellness Retreats'}
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id && !link.anchor;
              return (
                <button
                  key={link.id + (link.anchor || '')}
                  onClick={() => handleNavClick(link.id, link.anchor)}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'text-[#2C5E43] font-semibold'
                      : 'text-[#555555] hover:text-[#2C5E43]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2C5E43] rounded-full"></span>
                  )}
                </button>
              );
            })}

            {/* Language Switcher Pill Button */}
            <div className="flex items-center bg-[#F5F0EB] p-1 rounded-full border border-[#E8DFD8]">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  !isZh
                    ? 'bg-[#2C5E43] text-white shadow-xs'
                    : 'text-[#666666] hover:text-[#2C5E43]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  isZh
                    ? 'bg-[#2C5E43] text-white shadow-xs'
                    : 'text-[#666666] hover:text-[#2C5E43]'
                }`}
                title="切换为中文"
              >
                中文
              </button>
            </div>

            {/* Consultation CTA */}
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-[#2C5E43] text-[#FDFBF7] text-sm font-medium rounded-full hover:bg-[#3A7856] transition-all duration-300 shadow-sm hover:shadow-md flex items-center space-x-1.5 cursor-pointer"
            >
              <span>{t.bookConsultation}</span>
            </button>
          </nav>

          {/* Mobile Menu Button & Mobile Language Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Lang Quick Switch */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-bold bg-[#F5F0EB] text-[#2C5E43] border border-[#E8DFD8] rounded-full flex items-center space-x-1 hover:bg-[#E8DFD8] transition-colors"
              title={isZh ? '切换为英文' : 'Switch to Chinese'}
            >
              <Globe className="w-3 h-3 text-[#C87D55]" />
              <span>{isZh ? 'EN' : '中文'}</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 bg-[#2C5E43] text-[#FDFBF7] text-xs font-medium rounded-full hover:bg-[#3A7856] transition-colors"
            >
              {t.consultShort}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#222222] hover:text-[#2C5E43] focus:outline-none p-1.5 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#F5F0EB] shadow-xl px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {/* Mobile Language Selector Bar */}
          <div className="flex items-center justify-between p-2.5 mb-2 bg-[#F5F0EB] rounded-xl border border-[#E8DFD8]">
            <span className="text-xs font-medium text-[#555555] flex items-center">
              <Globe className="w-3.5 h-3.5 mr-1.5 text-[#C87D55]" />
              {isZh ? '语言选择' : 'Select Language'}:
            </span>
            <div className="flex space-x-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  !isZh ? 'bg-[#2C5E43] text-white' : 'text-[#666666] bg-white/70'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  isZh ? 'bg-[#2C5E43] text-white' : 'text-[#666666] bg-white/70'
                }`}
              >
                简体中文
              </button>
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = currentPage === link.id && !link.anchor;
            return (
              <button
                key={link.id + (link.anchor || '')}
                onClick={() => handleNavClick(link.id, link.anchor)}
                className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-[#2C5E43] bg-[#F5F0EB] font-semibold'
                    : 'text-[#555555] hover:text-[#2C5E43] hover:bg-[#F5F0EB]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#2C5E43]"></span>}
              </button>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-base font-medium bg-[#2C5E43] text-[#FDFBF7] rounded-xl hover:bg-[#3A7856] transition-colors shadow-sm"
            >
              {t.bookFreeConsultation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
