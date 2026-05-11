'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import OpeningCover from '@/app/components/OpeningCover';
import QuranVerse from '@/app/components/QuranVerse';
import CoupleProfile from '@/app/components/CoupleProfile';
import EventSchedule from '@/app/components/EventSchedule';
import Gallery from '@/app/components/Gallery';
import RSVPForm from '@/app/components/RSVPForm';
import GiftSection from '@/app/components/GiftSection';
import Footer from '@/app/components/Footer';
import MusicPlayer from '@/app/components/MusicPlayer';
import SplashScreen from '@/app/components/SplashScreen';
import DestinySection from '@/app/components/DestinySection';

export default function WeddingApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  
  // Extract guestName from dynamic route params (if present)
  const params = useParams();
  const guestNameParam = params?.guestName;
  const recipient = guestNameParam ? decodeURIComponent(guestNameParam.toString()).replace(/-/g, ' ') : 'Tamu Undangan';

  const handleOpenInvitation = () => {
    setIsOpen(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Tampilkan splash screen selama 3 detik

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <main className="relative bg-cream text-brown antialiased selection:bg-maroon/20 selection:text-maroon overflow-x-hidden min-h-screen">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* Opening Cover */}
      <AnimatePresence mode="wait">
        {!isOpen && !showSplash && (
          <OpeningCover
            key="opening"
            onOpen={handleOpenInvitation}
            guestName={recipient}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-1000`}>
        {isOpen && (
          <div className="relative z-0">
            <QuranVerse />
            <CoupleProfile />
            <DestinySection />
            <EventSchedule />
            {/* Gallery diaktifkan kembali dan disesuaikan */}
            {/* <Gallery /> */}
            <RSVPForm guestName={recipient} />
            <GiftSection />
            <Footer />
            <MusicPlayer isPlaying={isOpen} />
          </div>
        )}
      </div>
    </main>
  );
}
