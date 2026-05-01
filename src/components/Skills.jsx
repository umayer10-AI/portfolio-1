'use client';
import { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-border.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ]
  };

  return (
    <section id="skills" className="py-32 px-8 max-w-[1200px] mx-auto text-center">
      <h2 className="text-4xl lg:text-6xl font-bold mb-12">Skills</h2>
      
      <div className="inline-flex bg-bg-card p-2 rounded-2xl mb-16 border border-white/10">
        {Object.keys(skillsData).map(tab => (
          <button 
            key={tab}
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === tab ? 'bg-accent-gradient text-white shadow-lg shadow-cyan-500/30' : 'text-slate-400'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {skillsData[activeTab].map(skill => (
          <div key={skill.name} className="glass-card p-10 flex flex-col items-center gap-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent-cyan hover:shadow-2xl hover:shadow-cyan-500/10 group">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
