import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { MedicalPage } from './pages/MedicalPage';
import { CulturePage } from './pages/CulturePage';
import { AboutPage } from './pages/AboutPage';
import { ConsultationModal } from './components/ConsultationModal';
import { LiveNodeSyncModal } from './components/LiveNodeSyncModal';
import { PdfItineraryModal } from './components/PdfItineraryModal';
import { WeChatQrModal } from './components/WeChatQrModal';
import { LegalModal } from './components/LegalModals';
import { PageId } from './types';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationPkg, setConsultationPkg] = useState<string>('3-day');
  const [liveSyncOpen, setLiveSyncOpen] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfPkgId, setPdfPkgId] = useState<string>('3-day-mind-body');
  const [weChatOpen, setWeChatOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId, anchor?: string) => {
    setCurrentPage(page);

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (pkgId?: string) => {
    if (pkgId) {
      const mapped = pkgId.includes('1-day')
        ? '1-day'
        : pkgId.includes('5-day')
        ? '5-day'
        : '3-day';
      setConsultationPkg(mapped);
    }
    setConsultationOpen(true);
  };

  const handleOpenPdf = (pkgId: string) => {
    setPdfPkgId(pkgId);
    setPdfOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#555555] font-sans antialiased selection:bg-[#2C5E43] selection:text-[#FDFBF7]">
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenLiveSync={() => setLiveSyncOpen(true)}
            onOpenPdf={handleOpenPdf}
          />
        )}

        {currentPage === 'packages' && (
          <PackagesPage
            onOpenConsultation={handleOpenConsultation}
            onOpenPdf={handleOpenPdf}
            onOpenLiveSync={() => setLiveSyncOpen(true)}
          />
        )}

        {currentPage === 'medical' && (
          <MedicalPage
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenLiveSync={() => setLiveSyncOpen(true)}
          />
        )}

        {currentPage === 'culture' && (
          <CulturePage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenWeChat={() => setWeChatOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalType(type)}
        onOpenWeChat={() => setWeChatOpen(true)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Quick Action Buttons */}
      <div className="fixed right-4 bottom-20 md:bottom-8 z-30 flex flex-col space-y-2.5">
        {/* WeChat / WhatsApp Quick Trigger */}
        <button
          onClick={() => setWeChatOpen(true)}
          className="w-12 h-12 bg-[#2C5E43] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#3A7856] hover:scale-105 transition-all"
          title="Connect on WeChat / WhatsApp"
          aria-label="WeChat Consultation"
        >
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/90 text-[#2C5E43] border border-[#F5F0EB] rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all mx-auto"
            title="Scroll to top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialPackage={consultationPkg}
      />

      <LiveNodeSyncModal
        isOpen={liveSyncOpen}
        onClose={() => setLiveSyncOpen(false)}
        onBookConsultation={() => {
          setLiveSyncOpen(false);
          handleOpenConsultation();
        }}
      />

      <PdfItineraryModal
        packageId={pdfPkgId}
        isOpen={pdfOpen}
        onClose={() => setPdfOpen(false)}
        onBook={(id) => {
          setPdfOpen(false);
          handleOpenConsultation(id);
        }}
      />

      <WeChatQrModal
        isOpen={weChatOpen}
        onClose={() => setWeChatOpen(false)}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </div>
  );
}
