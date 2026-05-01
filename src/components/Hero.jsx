'use client';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export default function Hero() {
  const techStack = [
    { name: 'Next.js', color: '#ffffff' },
    { name: 'Express.js', color: '#94a3b8' },
    { name: 'Node.js', color: '#22c55e' },
    { name: 'TypeScript', color: '#3b82f6' },
    { name: 'MongoDB', color: '#10b981' },
    { name: 'React', color: '#06b6d4' },
  ];

  return (
    <section id="home" className="grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-16 min-h-screen pt-40 px-8 max-w-[1200px] mx-auto">
      <div>
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl lg:text-8xl leading-tight mb-6 font-black"
        >
          Hello, I am<br />
          <span className="gradient-text">MD Amdad Islam</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl lg:text-3xl text-slate-400 font-mono mb-8"
        >
          &lt; Transforming Ideas into Reality /&gt; |
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg text-slate-400 max-w-[500px] mb-12"
        >
          I'm a computer engineering student with a strong focus on web development, 
          aiming to build <strong className="text-white">innovative</strong> and <strong className="text-white">user-friendly</strong> websites.
        </motion.p>

        <div className="flex flex-wrap items-center gap-8">
          <a href="/resume.pdf" className="btn-primary">
            Download Resume <Download size={20} />
          </a>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-accent-cyan transition-transform hover:-translate-y-1"><GithubIcon /></a>
            <a href="#" className="hover:text-accent-cyan transition-transform hover:-translate-y-1"><LinkedinIcon /></a>
            <a href="#" className="hover:text-accent-cyan transition-transform hover:-translate-y-1"><TwitterIcon /></a>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] flex justify-center items-center">
          <div className="w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-accent-blue shadow-[0_0_50px_rgba(59,130,246,0.4)] z-[5] bg-bg-card">
            <Image 
              src="/images/profile.png" 
              alt="MD Amdad Islam" 
              width={400} 
              height={400} 
              className="w-full h-full object-cover"
              priority
            />
          </div>
          
          {techStack.map((tech, index) => (
            <div 
              key={tech.name} 
              className="absolute top-1/2 left-1/2 w-full h-full flex justify-center items-start pointer-events-none orbit-rotate"
              style={{ 
                '--index': index, 
                '--total': techStack.length,
                '--color': tech.color 
              }}
            >
              <span className="bg-bg-card text-[var(--color)] px-3 py-1.5 rounded-full text-xs lg:text-sm font-bold border border-white/10 shadow-xl -translate-y-1/2 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
          
          <div className="absolute w-[380px] h-[380px] border border-white/5 rounded-full"></div>
          <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
