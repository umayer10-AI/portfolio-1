import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      title: 'Diploma in Computer Science',
      institution: 'NATIONAL POLYTECHNIC INSTITUTE',
      period: '2022 – Present',
      description: 'Focused on computer science fundamentals including programming, data structures, database systems, and modern software development practices.',
      align: 'right'
    },
    {
      title: 'Complete Web Development',
      institution: 'PROGRAMMING HERO',
      period: '2025 – Completed',
      description: 'Practical experience in building real-world projects using HTML, Tailwind CSS, JavaScript, React, REST APIs, and backend fundamentals with strong focus on clean UI/UX.',
      align: 'left'
    }
  ];

  return (
    <section id="education" className="py-32 px-8 max-w-[1200px] mx-auto text-center">
      <h2 className="text-4xl lg:text-6xl font-bold mb-20">Education & <span className="gradient-text">Learning</span></h2>
      
      <div className="relative max-w-[900px] mx-auto py-8">
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-accent-blue -translate-x-1/2 hidden md:block"></div>
        
        {education.map((item, index) => (
          <div key={index} className={`relative w-full mb-16 flex ${item.align === 'right' ? 'md:justify-end' : 'md:justify-start'} justify-start pl-20 md:pl-0`}>
            <div className="absolute top-0 left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-accent-gradient rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <GraduationCap size={28} color="#fff" />
            </div>
            
            <div className={`md:w-[45%] w-full ${item.align === 'right' ? 'md:text-left' : 'md:text-right'} text-left`}>
              <span className="inline-block bg-accent-cyan/10 text-accent-cyan px-5 py-1.5 rounded-full text-[0.85rem] font-bold mb-4 border border-accent-cyan">
                {item.period}
              </span>
              <div className="glass-card p-8 transition-transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <h4 className="text-accent-cyan text-[0.9rem] font-bold mb-4 uppercase tracking-widest">{item.institution}</h4>
                <p className="text-slate-400 text-[0.95rem] leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
