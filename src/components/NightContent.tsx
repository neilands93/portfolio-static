import { Code, Terminal, Cpu } from 'lucide-react';

export default function NightContent() {
  const experiments = [
    {
      id: "01",
      title: "Neural Dreams",
      tag: "Generative Art",
      desc: "An endless stream of hallucinated landscapes powered by custom diffusion models.",
    },
    {
      id: "02",
      title: "Synth-Voice Agent",
      tag: "Audio Synthesis",
      desc: "Real-time conversational agent exploring the uncanny valley of synthetic emotion.",
    },
    {
      id: "03",
      title: "Algorithmic Poetry",
      tag: "NLP",
      desc: "Fine-tuned models generating haikus about the heat death of the universe.",
    },
    {
      id: "04",
      title: "Void Scraper",
      tag: "Data Viz",
      desc: "Visualizing the hidden layers of neural networks as 3D terrain.",
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {experiments.map((ex) => (
          <div key={ex.id} className="group relative border border-[#39ff14] p-4 bg-black overflow-hidden hover:bg-[#39ff14] hover:text-black transition-colors duration-300">
            <div className="flex justify-between items-start mb-8">
              <span className="font-mono text-xs border border-[#39ff14] group-hover:border-black px-1 py-0.5 rounded-full">
                {ex.id}
              </span>
              <Terminal size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2 uppercase tracking-tight">{ex.title}</h3>
            <p className="font-mono text-xs opacity-70 mb-4 group-hover:opacity-100">{ex.tag}</p>
            <p className="text-sm leading-relaxed">{ex.desc}</p>

            {/* Glitch Overlay Effect on Hover (Simulated via opacity for now) */}
            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-0 group-hover:opacity-10 pointer-events-none mix-blend-overlay"></div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 border border-[#39ff14] p-8">
          <Code className="mb-4" />
          <h2 className="font-mono text-2xl font-bold mb-4 uppercase">Latest Experiment</h2>
          <div className="bg-gray-900 p-4 font-mono text-xs text-[#39ff14] overflow-x-auto whitespace-pre">
{`function dream(seed) {
  const reality = new Tensor(seed);
  while (true) {
    reality.entropy += 0.1;
    if (reality.collapse()) break;
    yield reality.visualize();
  }
}`}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="font-mono text-4xl font-bold mb-6 text-[#39ff14]">MANIFESTO_V1</h2>
          <p className="text-[#39ff14] font-mono text-sm leading-loose">
            We are building the bridge while walking on it. The night is not for sleep; it is for training.
            Every parameter tweaked is a step closer to the singularity. Create until the model converges.
            <br/><br/>
            // END OF LINE
          </p>
        </div>
      </div>
    </div>
  );
}
