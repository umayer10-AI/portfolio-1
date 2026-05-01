import { MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] h-[70px] bg-bg-card/70 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between px-8 z-[1000] shadow-2xl shadow-black/30">
      <div className="text-xl font-extrabold tracking-tighter">
        <span className="gradient-text">&lt;AMDAD.ISLAM/&gt;</span>
      </div>
      <ul className="hidden lg:flex gap-8">
        <li><a href="#home" className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:height-[2px] after:bg-accent-gradient after:rounded-full">Home</a></li>
        <li><a href="#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About Me</a></li>
        <li><a href="#skills" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Skills</a></li>
        <li><a href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Services</a></li>
        <li><a href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Projects</a></li>
        <li><a href="#education" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Education</a></li>
        <li><a href="#tools" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Tools</a></li>
      </ul>
      <a href="#contact" className="btn-primary">
        Contact Me <MessageSquare size={20} />
      </a>
    </nav>
  );
}
