import React, { useState } from 'react';
import { ArrowRight, Clock, Heart, Sparkles, Shield, Check, MessageSquare, ExternalLink, MapPin, Coffee, PhoneCall } from 'lucide-react';
import { PageId } from '../types';
import { PACKAGES_DATA } from '../data/packagesData';
import teaPouringImg from '../assets/images/tea_pouring_gongfu_1786863146357.jpg';
import whatsappReassuranceImg from '../assets/images/whatsapp_sync_reassurance_1786864062004.jpg';

interface HomePageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenConsultation: (pkgId?: string) => void;
  onOpenLiveSync: () => void;
  onOpenPdf: (pkgId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenLiveSync,
  onOpenPdf
}) => {
  const [inlineFormSubmitted, setInlineFormSubmitted] = useState(false);
  const [inlineForm, setInlineForm] = useState({
    name: '',
    contact: '',
    pkg: '3-day',
    notes: ''
  });

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInlineFormSubmitted(true);
  };

  return (
    <div className="bg-[#FDFBF7]">
      {/* SECTION 1: HERO */}
      <section className="relative pt-20 lg:pt-0 lg:min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1549646698-c116d946d0a7?auto=format&fit=crop&q=80&w=2000"
            alt="Quanzhou traditional courtyard"
            className="w-full h-full object-cover object-center hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/85 to-[#FDFBF7]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent lg:hidden"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:w-3/5">
          <div className="inline-flex items-center space-x-2 bg-[#F5F0EB]/90 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 w-max border border-[#D4A359]/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C87D55]"></span>
            <span className="text-xs font-semibold text-[#2C5E43] tracking-wider uppercase">
              WellJourney · powered by YiMediTour
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222222] leading-tight mb-4 font-bold">
            In authentic daily life, <br />
            <span className="text-[#2C5E43]">reclaim your mind-body balance.</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#555555] mb-8 font-medium">
            在真实的日常里，找回身心平衡。
          </p>

          <p className="text-base sm:text-lg text-[#555555] mb-10 max-w-xl leading-relaxed font-light">
            Comprehensive health checkups, multi-language escorting, and slow-living cultural retreats in Quanzhou. Tailored specifically for overseas Chinese and international guests seeking restorative care.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-[#2C5E43] hover:bg-[#3A7856] transition-all duration-300 group"
            >
              <span>Explore Wellness Packages</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex justify-center items-center px-8 py-4 border border-[#C87D55] text-base font-medium rounded-xl text-[#C87D55] bg-transparent hover:bg-[#C87D55]/10 transition-all duration-300"
            >
              Book a Family Consultation
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-[#555555]/20 flex flex-wrap gap-8">
            <div className="flex items-center text-sm font-medium text-[#555555]">
              <Clock className="w-5 h-5 text-[#D4A359] mr-2" />
              <span>Slow Down</span>
            </div>
            <div className="flex items-center text-sm font-medium text-[#555555]">
              <Heart className="w-5 h-5 text-[#D4A359] mr-2" />
              <span>Be Supported</span>
            </div>
            <div className="flex items-center text-sm font-medium text-[#555555]">
              <Sparkles className="w-5 h-5 text-[#D4A359] mr-2" />
              <span>Find Peace</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE "ANTI-TOURISM" PHILOSOPHY */}
      <section id="philosophy" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="mb-12 lg:mb-0">
              <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-2 font-serif">
                A Different Kind of Stay
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-medium mb-6">
                Not a rushed tour.<br />
                Not just a medical trip.
              </h2>
              <div className="w-16 h-1 bg-[#C87D55] mb-8"></div>
              <p className="text-lg text-[#555555] mb-6 leading-relaxed">
                We don't drag you between crowded tourist spots or leave you anxious in hospital hallways. We create a few gentle days where you can rest, sip local tea, eat nourishing meals, and get professional health checks at your own pace.
              </p>
              <p className="text-lg text-[#555555] leading-relaxed mb-8">
                Embracing the rich heritage of Quanzhou, our approach seamlessly blends world-class medical facilitation with the restorative power of slow, intentional living.
              </p>

              <button
                onClick={() => onNavigate('culture')}
                className="inline-flex items-center text-sm font-medium text-[#2C5E43] hover:text-[#3A7856] group"
              >
                <span>Read about our 5 Elements of Quanzhou Healing</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Image Comparison Card Style */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#2C5E43] rounded-2xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <img
                src={teaPouringImg}
                alt="Pouring traditional tea"
                className="relative rounded-2xl shadow-xl w-full object-cover h-96"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FDFBF7]/90 backdrop-blur-md p-4 rounded-xl border border-white/60 text-xs text-[#222222]">
                <p className="font-serif italic font-medium">"Rest comes when you are truly looked after."</p>
                <p className="text-[#C87D55] mt-0.5">— Quanzhou Courtyard Tea Companion</p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Clock className="w-6 h-6 text-[#2C5E43]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#222222] mb-3">Slow Down</h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  Sleep in, enjoy local tea chats, and explore historic streets without a packed schedule. Reconnect with a natural, unhurried rhythm.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8DFD8]">
                <span className="text-xs text-[#2C5E43] font-medium font-serif">顺应时节 · 从容自得</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Shield className="w-6 h-6 text-[#2C5E43]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#222222] mb-3">Be Supported</h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  Full medical checkup booking, multi-language guide (English, Mandarin, Hokkien), and dedicated transport coordination step-by-step.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8DFD8]">
                <span className="text-xs text-[#2C5E43] font-medium font-serif">全程陪护 · 双语无阻</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F5F0EB] p-8 rounded-2xl border border-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Heart className="w-6 h-6 text-[#2C5E43]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#222222] mb-3">Find Peace</h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  Gentle TCM physical assessments, nourishing local meals, and restorative stays in beautifully preserved heritage spaces.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8DFD8]">
                <span className="text-xs text-[#2C5E43] font-medium font-serif">食养调息 · 身心安顿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PACKAGES OVERVIEW */}
      <section id="packages" className="py-24 bg-[#F5F0EB] border-t border-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-medium mb-4">
              Curated Restorative Stays
            </h2>
            <p className="text-lg text-[#555555]">
              Choose a program that fits your health goals and travel schedule. Every detail is handled with deep emotional care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: 1-Day */}
            <div className="bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-soft flex flex-col transition duration-300 hover:shadow-xl border border-white">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={PACKAGES_DATA[0].image}
                  alt="1-Day Express Checkup Escort"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#FDFBF7]/90 backdrop-blur text-[#555555] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Light Experience
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-semibold text-[#222222] mb-1">
                  1-Day Express Checkup Escort
                </h3>
                <p className="text-xs text-[#C87D55] font-serif mb-4">一日舒心体检陪诊</p>
                <p className="text-[#555555] mb-6 text-sm flex-1">
                  Perfect for those with tight schedules needing efficient, supported medical screening.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#C87D55] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">VIP appointment booking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#C87D55] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Bilingual hospital companion</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#C87D55] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Preliminary report translation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#C87D55] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Private transport & local lunch</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-[#E8DFD8] flex items-center justify-between mt-auto">
                  <span className="font-serif text-lg font-bold text-[#222222]">
                    ¥2,800 <span className="text-xs font-sans font-normal text-[#555555]">/ person</span>
                  </span>
                  <button
                    onClick={() => onNavigate('packages')}
                    className="px-4 py-2 border border-[#2C5E43] text-[#2C5E43] font-medium text-xs rounded-lg hover:bg-[#2C5E43] hover:text-white transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: 3-Day (Most Popular) */}
            <div className="bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-xl border-2 border-[#D4A359]/40 flex flex-col transform md:-translate-y-4 relative">
              <div className="bg-[#D4A359] text-center py-2 text-white text-xs font-bold tracking-wider uppercase">
                Most Popular for Seniors
              </div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src={PACKAGES_DATA[1].image}
                  alt="3-Day Mind-Body Balance Hotel Suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#FDFBF7]/90 backdrop-blur text-[#2C5E43] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Signature Retreat
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-semibold text-[#222222] mb-1">
                  3-Day Mind-Body Balance
                </h3>
                <p className="text-xs text-[#C87D55] font-serif mb-4">三日两晚·身心平衡慢活</p>
                <p className="text-[#555555] mb-6 text-sm flex-1">
                  Our flagship experience blending thorough health assessments with mindful cultural immersion.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#2C5E43] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555] font-medium">Comprehensive health screening</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#2C5E43] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">TCM body condition evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#2C5E43] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Quiet courtyard boutique stay</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#2C5E43] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Curated tea & craft sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#2C5E43] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Remote family node sync</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-[#E8DFD8] flex items-center justify-between mt-auto">
                  <span className="font-serif text-lg font-bold text-[#2C5E43]">
                    ¥8,500 <span className="text-xs font-sans font-normal text-[#555555]">/ person</span>
                  </span>
                  <button
                    onClick={() => onNavigate('packages')}
                    className="px-4 py-2 bg-[#2C5E43] text-white font-medium text-xs rounded-lg hover:bg-[#3A7856] transition-colors shadow-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: 5-Day */}
            <div className="bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-soft flex flex-col transition duration-300 hover:shadow-xl border border-white">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={PACKAGES_DATA[2].image}
                  alt="5-Day Deep Healing Retreat Pagodas Quanzhou"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#FDFBF7]/90 backdrop-blur text-[#C87D55] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Full Restoration
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-semibold text-[#222222] mb-1">
                  5-Day Deep Healing Retreat
                </h3>
                <p className="text-xs text-[#C87D55] font-serif mb-4">五日四晚·深层调养寻静</p>
                <p className="text-[#555555] mb-6 text-sm flex-1">
                  A profound reset combining extensive medical interpretation, dietetics, and deep cultural exploration.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#C87D55] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">In-depth medical checks & interpretation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#C87D55] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Customized dietary plan during stay</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#C87D55] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Slow-paced Quanzhou UNESCO immersion</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#C87D55] mt-0.5 mr-2 shrink-0" />
                    <span className="text-sm text-[#555555]">Post-trip health tracking support</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-[#E8DFD8] flex items-center justify-between mt-auto">
                  <span className="font-serif text-lg font-bold text-[#222222]">
                    ¥15,500 <span className="text-xs font-sans font-normal text-[#555555]">/ person</span>
                  </span>
                  <button
                    onClick={() => onNavigate('packages')}
                    className="px-4 py-2 border border-[#2C5E43] text-[#2C5E43] font-medium text-xs rounded-lg hover:bg-[#2C5E43] hover:text-white transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: REMOTE FAMILY PEACE OF MIND */}
      <section id="reassurance" className="py-24 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Content */}
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <div className="inline-block px-3 py-1 bg-[#F5F0EB] text-[#C87D55] text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
                For Overseas Families
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-medium mb-6">
                Total Reassurance for Families Living Abroad
              </h2>
              <p className="text-lg text-[#555555] mb-8 leading-relaxed">
                Booking on behalf of aging parents? We understand the anxiety of distance. WellJourney acts as your trusted proxy, ensuring your loved ones feel secure and you stay fully informed.
              </p>

              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#2C5E43] text-white shadow-sm">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-semibold text-[#222222]">Real-Time Node Sync</h4>
                    <p className="mt-2 text-base text-[#555555]">
                      Step-by-step updates sent directly to family members via WhatsApp or WeChat during hospital visits and transfers.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#2C5E43] text-white shadow-sm">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-semibold text-[#222222]">Bilingual Escort</h4>
                    <p className="mt-2 text-base text-[#555555]">
                      Empathetic companions fluent in English, Mandarin, and local Hokkien to bridge all language and cultural barriers.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#2C5E43] text-white shadow-sm">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-semibold text-[#222222]">Traceable Care</h4>
                    <p className="mt-2 text-base text-[#555555]">
                      Complete transparency on the itinerary, daily meals, accommodation quality, and translated medical notes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={onOpenLiveSync}
                  className="px-5 py-3 bg-[#2C5E43] text-white text-sm font-medium rounded-xl hover:bg-[#3A7856] shadow-sm flex items-center space-x-2 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#D4A359]" />
                  <span>Preview Live Family Sync Demo</span>
                </button>
                <button
                  onClick={() => onNavigate('medical')}
                  className="px-5 py-3 border border-[#2C5E43] text-[#2C5E43] text-sm font-medium rounded-xl hover:bg-[#2C5E43]/5 transition-colors"
                >
                  Explore Medical Safety Protocols
                </button>
              </div>
            </div>

            {/* Image & Interactive Floating Card */}
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#C87D55] rounded-2xl transform -translate-x-4 translate-y-4 opacity-10"></div>
              <img
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
                src={whatsappReassuranceImg}
                alt="Family receiving real-time WhatsApp updates from medical escort"
              />

              {/* Floating notification mockup */}
              <div
                onClick={onOpenLiveSync}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#F5F0EB] cursor-pointer hover:bg-white transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#2C5E43] flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                    Live WhatsApp Notification
                  </span>
                  <span className="text-[10px] text-[#555555] font-mono">Just now</span>
                </div>
                <p className="text-xs text-[#222222] font-medium line-clamp-2">
                  "Companion Lin: Ultrasound concluded smoothly. Parents are resting at the lounge enjoying hot soup."
                </p>
                <span className="text-[11px] text-[#D4A359] font-medium mt-1 inline-block group-hover:underline">
                  Click to open complete timeline simulation →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CREDIBILITY & LEGAL BOUNDARY */}
      <section className="py-12 bg-white border-y border-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm font-semibold text-[#555555] uppercase tracking-wider mb-8">
            Supported By & Partnered With
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-75 hover:opacity-100 transition duration-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-[#2C5E43]" />
              <span className="font-serif font-bold text-base sm:text-lg text-[#222222]">
                Licensed Partner Tertiary Hospitals
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-[#2C5E43]" />
              <span className="font-serif font-bold text-base sm:text-lg text-[#222222]">
                Tongji Univ. Jinjiang Innovation Center
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-[#2C5E43]" />
              <span className="font-serif font-bold text-base sm:text-lg text-[#222222]">
                Jinjiang Three-Innovation Park
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-[#F5F0EB]/60 p-6 rounded-xl text-center border border-[#F5F0EB]">
            <p className="text-xs sm:text-sm text-[#555555] max-w-4xl mx-auto leading-relaxed">
              <strong className="font-semibold text-[#222222]">Notice:</strong> WellJourney provides travel coordination, language accompaniment, and lifestyle wellness management. All medical examinations, diagnoses, and treatments are strictly performed by qualified, licensed partner medical institutions. We do not provide direct medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONSULTATION & LEAD CAPTURE FORM */}
      <section id="contact" className="py-24 bg-[#F5F0EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FDFBF7] rounded-2xl shadow-xl overflow-hidden border border-white">
            <div className="p-8 sm:p-12">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold text-[#C87D55] uppercase tracking-wider block mb-1">
                  Zero Obligation
                </span>
                <h2 className="font-serif text-3xl text-[#222222] font-medium mb-3">
                  Begin Your Healing Journey
                </h2>
                <p className="text-[#555555] text-sm sm:text-base">
                  Leave your details below. Our wellness concierge will contact you within 24 hours to craft your tailored proposal.
                </p>
              </div>

              {inlineFormSubmitted ? (
                <div className="p-8 bg-[#F5F0EB] rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 bg-[#2C5E43]/10 text-[#2C5E43] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#222222]">
                    Thank you! Consultation Request Received.
                  </h4>
                  <p className="text-sm text-[#555555] max-w-md mx-auto">
                    Our care coordinator will reach out to you via <strong>{inlineForm.contact || 'your contact method'}</strong> with customized checkup and retreat details.
                  </p>
                  <button
                    onClick={() => setInlineFormSubmitted(false)}
                    className="text-xs text-[#2C5E43] font-semibold underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#222222] mb-1">
                        Full Name / 姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={inlineForm.name}
                        onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                        className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] transition-shadow text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    {/* Contact Method */}
                    <div>
                      <label htmlFor="contact-method" className="block text-sm font-medium text-[#222222] mb-1">
                        Contact Method / 联系方式 *
                      </label>
                      <input
                        type="text"
                        name="contact-method"
                        id="contact-method"
                        required
                        value={inlineForm.contact}
                        onChange={(e) => setInlineForm({ ...inlineForm, contact: e.target.value })}
                        className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] transition-shadow text-sm"
                        placeholder="Email / WhatsApp / WeChat / Phone"
                      />
                    </div>
                  </div>

                  {/* Preferred Package */}
                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-[#222222] mb-1">
                      Preferred Package / 意向行程
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={inlineForm.pkg}
                      onChange={(e) => setInlineForm({ ...inlineForm, pkg: e.target.value })}
                      className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] transition-shadow text-sm"
                    >
                      <option value="1-day">1-Day Express Checkup Escort (一日陪诊)</option>
                      <option value="3-day">3-Day Mind-Body Balance Stay (三日身心平衡)</option>
                      <option value="5-day">5-Day Deep Healing & Cultural Retreat (五日深度调养)</option>
                      <option value="custom">Custom Needs / Not Sure Yet (根据家庭情况定制)</option>
                    </select>
                  </div>

                  {/* Personal Needs */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-[#222222] mb-1">
                      Personal Needs & Health Notes / 特殊需求及健康备注
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={inlineForm.notes}
                      onChange={(e) => setInlineForm({ ...inlineForm, notes: e.target.value })}
                      className="w-full bg-[#F5F0EB] border border-[#555555]/20 rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#2C5E43] transition-shadow resize-none text-sm"
                      placeholder="e.g., specific language requirements (English, Hokkien), mobility considerations, dietary preferences, or specific medical concerns."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-[#2C5E43] hover:bg-[#3A7856] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5E43] transition-colors"
                    >
                      Request Free Family Consultation
                    </button>
                    <p className="text-center text-xs text-[#555555] mt-4">
                      Your information is secure and will only be used to organize your wellness journey.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
