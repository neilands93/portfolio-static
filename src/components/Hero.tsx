interface HeroProps {
  mode: 'day' | 'night';
}

export default function Hero({ mode }: HeroProps) {
  return (
    <section className={`
      w-full py-20 px-4 md:px-8 flex flex-col items-center justify-center text-center
      transition-colors duration-500
      ${mode === 'day' ? 'bg-white text-black' : 'bg-black text-[#39ff14]'}
    `}>
      <h1 className="font-mono text-6xl md:text-9xl font-bold tracking-tighter mb-4 uppercase">
        Cane
      </h1>
      <div className={`h-1 w-24 mb-6 ${mode === 'day' ? 'bg-black' : 'bg-[#39ff14]'}`}></div>
      <p className="font-mono text-lg md:text-xl max-w-2xl">
        {mode === 'day'
          ? "AI Facilitation & Tech Adoption Specialist"
          : "Exploring the Digital Void // Creative AI Experiments"
        }
      </p>
    </section>
  );
}
