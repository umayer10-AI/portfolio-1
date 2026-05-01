import { ExternalLink, ChevronDown } from 'lucide-react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default function Projects() {
  const projects = [
    {
      title: 'Tech-Store',
      description: 'Tech-Store is a premium, high-fidelity e-commerce platform designed for modern consumers who value both innovation and elegance.',
      tags: ['Next.js', 'TypeScript', 'Mongoose'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop',
    },
    {
      title: 'TicketBari Booking Platform',
      description: 'The primary goal of TicketBari is to deliver a production-ready, real-world ticket booking system that demonstrates strong full-stack skills.',
      tags: ['React.js', 'Express.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1469&auto=format&fit=crop',
    },
    {
      title: 'Event Management',
      description: 'A modern and fully functional Event Management platform where users can explore events, view detailed schedules, and purchase tickets securely.',
      tags: ['Next.js', 'Express.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop',
    }
  ];

  return (
    <section id="projects" className="py-32 px-8 max-w-[1200px] mx-auto text-center">
      <h2 className="text-4xl lg:text-6xl font-bold mb-20">My Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
        {projects.map((project, index) => (
          <div key={index} className="glass-card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-accent-cyan group">
            <div className="w-full h-[220px] overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-8 flex flex-col gap-5">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-slate-400 text-[0.95rem] leading-relaxed h-[80px] line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-accent-cyan/10 text-accent-cyan px-3 py-1 rounded-full text-xs font-bold border border-accent-cyan/20">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="btn-primary !px-5 !py-2 text-sm">View Details</button>
                <div className="flex gap-6">
                  <a href="#" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">Live <ExternalLink size={16} /></a>
                  <a href="#" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">Code <GithubIcon /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20">
        <button className="bg-bg-card border border-white/10 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-slate-800 hover:border-accent-cyan transition-all">
          View All Projects <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
}
