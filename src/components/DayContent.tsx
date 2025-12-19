import { Briefcase, Users, Zap, ArrowRight } from 'lucide-react';

export default function DayContent() {
  const projects = [
    {
      title: "Enterprise AI Adoption",
      role: "Lead Facilitator",
      desc: "Guiding Fortune 500 companies through the integration of generative AI workflows, ensuring 40% efficiency gains.",
      icon: <Briefcase className="mb-4" size={32} />
    },
    {
      title: "Tech Workshops",
      role: "Speaker & Trainer",
      desc: "Conducting hands-on workshops for cross-functional teams to demystify LLMs and agentic workflows.",
      icon: <Users className="mb-4" size={32} />
    },
    {
      title: "Strategic Consulting",
      role: "Advisor",
      desc: "Developing long-term AI roadmaps that align technical capabilities with business objectives.",
      icon: <Zap className="mb-4" size={32} />
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="border-2 border-black p-6 hover:shadow-hard transition-shadow bg-white flex flex-col items-start h-full">
            {p.icon}
            <h3 className="font-bold text-xl mb-1">{p.title}</h3>
            <span className="font-mono text-sm text-gray-600 mb-4 uppercase tracking-widest">{p.role}</span>
            <p className="text-gray-800 flex-grow mb-6">{p.desc}</p>
            <button className="flex items-center gap-2 font-bold text-sm border-b-2 border-transparent hover:border-black transition-all">
              CASE STUDY <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t-2 border-black pt-8">
        <h2 className="font-mono text-2xl font-bold mb-6">LATEST INSIGHTS</h2>
        <ul className="space-y-4 font-mono">
          <li className="flex justify-between items-center border-b border-gray-300 pb-2 cursor-pointer hover:pl-2 transition-all">
            <span>The Future of Work is Hybrid AI</span>
            <span>2023.10.12</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-300 pb-2 cursor-pointer hover:pl-2 transition-all">
            <span>Facilitating Change in Legacy Systems</span>
            <span>2023.09.28</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-300 pb-2 cursor-pointer hover:pl-2 transition-all">
            <span>Agentic Workflows 101</span>
            <span>2023.08.15</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
