import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-4xl lg:text-6xl text-center font-bold mb-20 text-blue-400">Get In <span className="text-blue-500">Touch</span></h2>
      
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Side: Contact Information */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-slate-200 mb-4">Contact Information</h3>
          
          <div className="glass-card p-6 flex items-center gap-6 group hover:border-accent-cyan transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
              <Mail size={24} />
            </div>
            <div>
              <p className="font-bold text-slate-200">Email</p>
              <p className="text-slate-400">amdadislam733@gmail.com</p>
            </div>
          </div>
          
          <div className="glass-card p-6 flex items-center gap-6 group hover:border-accent-cyan transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
              <Phone size={24} />
            </div>
            <div>
              <p className="font-bold text-slate-200">Phone</p>
              <p className="text-slate-400">+880 1540-138209</p>
            </div>
          </div>
          
          <div className="glass-card p-6 flex items-center gap-6 group hover:border-accent-cyan transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold text-slate-200">Location</p>
              <p className="text-slate-400">Dhaka, Bangladesh</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-accent-cyan mb-8">Follow Me</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan transition-all"><GithubIcon /></a>
              <a href="#" className="w-12 h-12 rounded-xl bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan transition-all"><LinkedinIcon /></a>
              <a href="#" className="w-12 h-12 rounded-xl bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan transition-all"><FacebookIcon /></a>
              <a href="#" className="w-12 h-12 rounded-xl bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan transition-all"><TwitterIcon /></a>
              <a href="#" className="w-12 h-12 rounded-xl bg-bg-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan transition-all"><WhatsappIcon /></a>
            </div>
          </div>
        </div>
        
        {/* Right Side: Send Message Form */}
        <div className="glass-card p-10">
          <h3 className="text-2xl font-bold text-slate-200 mb-8">Send Message</h3>
          <form className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 font-medium">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="bg-bg-dark border border-white/10 rounded-xl p-4 focus:outline-none focus:border-accent-cyan transition-all text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 font-medium">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your email" 
                  className="bg-bg-dark border border-white/10 rounded-xl p-4 focus:outline-none focus:border-accent-cyan transition-all text-white"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-slate-400 font-medium">Message</label>
              <textarea 
                rows="5" 
                placeholder="Tell me about your project, requirements..." 
                className="bg-bg-dark border border-white/10 rounded-xl p-4 focus:outline-none focus:border-accent-cyan transition-all text-white resize-none"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
