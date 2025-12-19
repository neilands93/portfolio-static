import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  mode: 'day' | 'night';
}

export default function Footer({ mode }: FooterProps) {
  const isDay = mode === 'day';

  return (
    <footer className={`
      w-full py-12 px-4 border-t-2
      ${isDay
        ? 'bg-white text-black border-black'
        : 'bg-black text-[#39ff14] border-[#39ff14]'
      }
    `}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg">CANE PORTFOLIO</h4>
          <p className="font-mono text-xs mt-1 opacity-70">
            {isDay ? "© 2024 All Rights Reserved." : "NO COPYRIGHT. STEAL LIKE AN ARTIST."}
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:scale-110 transition-transform"><Mail size={24} /></a>
          <a href="#" className="hover:scale-110 transition-transform"><Github size={24} /></a>
          <a href="#" className="hover:scale-110 transition-transform"><Linkedin size={24} /></a>
          <a href="#" className="hover:scale-110 transition-transform"><Twitter size={24} /></a>
        </div>
      </div>
    </footer>
  );
}
