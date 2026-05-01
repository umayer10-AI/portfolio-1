import { Mail, Phone, MapPin } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 10.6 10.6 0 0 1 2.5 0A8.5 8.5 0 0 1 21 11.5z"></path><path d="M11 11h.01"></path><path d="M15 11h.01"></path><path d="M10 15c1.5 1 3.5 1 5 0"></path></svg>
);

export default function Footer() {
  return (
    <footer className="bg-bg-card/30 pt-20 pb-10 px-8 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
        {/* Logo and Description */}
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-extrabold tracking-tighter">
            <span className="gradient-text">&lt;AMDAD.ISLAM/&gt;</span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-[350px]">
            A passionate Full Stack Developer dedicated to building high-quality web applications with modern technologies and exceptional user experiences.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan transition-all"><GithubIcon /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan transition-all"><LinkedinIcon /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan transition-all"><FacebookIcon /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan transition-all"><TwitterIcon /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan transition-all"><WhatsappIcon /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-8">Quick Links</h3>
          <ul className="flex flex-col gap-4 text-slate-400">
            <li><a href="#home" className="hover:text-accent-cyan transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-accent-cyan transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-accent-cyan transition-colors">Skills</a></li>
            <li><a href="#services" className="hover:text-accent-cyan transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-accent-cyan transition-colors">Projects</a></li>
            <li><a href="#education" className="hover:text-accent-cyan transition-colors">Education</a></li>
          </ul>
        </div>

        {/* Let's Connect */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-8">Let's Connect</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                <Mail size={20} />
              </div>
              <span>amdadislam733@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                <Phone size={20} />
              </div>
              <span>+880 1540-138209</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                <MapPin size={20} />
              </div>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-10 border-t border-white/5 flex justify-between items-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} <span className="text-accent-cyan font-bold">AMDAD.ISLAM</span></p>
      </div>
    </footer>
  );
}
