'use client';

import { Sun, Moon } from 'lucide-react';

interface ModeToggleProps {
  mode: 'day' | 'night';
  onToggle: () => void;
}

export default function ModeToggle({ mode, onToggle }: ModeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        fixed top-4 right-4 z-50 p-2 border-2 transition-all duration-300
        hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hard
        ${mode === 'day'
          ? 'border-black bg-white text-black hover:bg-gray-100'
          : 'border-[#39ff14] bg-black text-[#39ff14] hover:bg-gray-900 shadow-[2px_2px_0px_0px_#39ff14]'
        }
      `}
      aria-label="Toggle Day/Night Mode"
    >
      <div className="flex items-center gap-2 font-mono text-sm font-bold uppercase">
        {mode === 'day' ? <Sun size={18} /> : <Moon size={18} />}
        <span>{mode === 'day' ? 'Day Mode' : 'Night Mode'}</span>
      </div>
    </button>
  );
}
