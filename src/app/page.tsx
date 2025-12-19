'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ModeToggle from '@/components/ModeToggle';
import DayContent from '@/components/DayContent';
import NightContent from '@/components/NightContent';
import Footer from '@/components/Footer';

export default function Home() {
  const [mode, setMode] = useState<'day' | 'night'>('day');

  const toggleMode = () => {
    setMode((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${mode === 'day' ? 'bg-white text-black' : 'bg-black text-[#39ff14]'}`}>
      <ModeToggle mode={mode} onToggle={toggleMode} />

      <main className="flex flex-col min-h-screen">
        <Hero mode={mode} />

        <div className="flex-grow">
          {mode === 'day' ? (
            <DayContent />
          ) : (
            <NightContent />
          )}
        </div>

        <Footer mode={mode} />
      </main>
    </div>
  );
}
