'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import OpeningCover from '@/app/components/OpeningCover';
import QuranVerse from '@/app/components/QuranVerse';
import CoupleProfile from '@/app/components/CoupleProfile';
import CountdownTimer from '@/app/components/CountdownTimer';
import EventSchedule from '@/app/components/EventSchedule';
import Gallery from '@/app/components/Gallery';
import RSVPForm from '@/app/components/RSVPForm';
import GiftSection from '@/app/components/GiftSection';
import Footer from '@/app/components/Footer';

export default function WeddingApp() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Extract guestName from dynamic route params (if present)
  const params = useParams();
  const guestNameParam = params?.guestName;
  const recipient = guestNameParam ? decodeURIComponent(guestNameParam.toString()).replace(/-/g, ' ') : 'Tamu Undangan';

  const handleOpenInvitation = () => {
    setIsOpen(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <main className="relative bg-cream text-brown antialiased selection:bg-maroon/20 selection:text-maroon overflow-x-hidden min-h-screen">
      {/* Opening Cover */}
      <AnimatePresence mode="wait">
        {!isOpen && (
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
            <CountdownTimer />
            <EventSchedule />
            {/* Gallery diaktifkan kembali dan disesuaikan */}
            {/* <Gallery /> */}
            <RSVPForm guestName={recipient} />
            <GiftSection />
            <Footer />
          </div>
        )}
      </div>
    </main>
  );
}
