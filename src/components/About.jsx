import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-32 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-4xl lg:text-6xl text-center font-bold mb-20">About <span className="gradient-text">Me</span></h2>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:order-1 order-2">
          <Image 
            src="/images/about.png" 
            alt="Programming Illustration" 
            width={500} 
            height={400}
            className="w-full h-auto max-w-[500px]"
          />
        </div>
        
        <div className="glass-card lg:order-2 order-1">
          <div className="p-8 lg:p-12 flex flex-col gap-6">
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a passionate <span className="text-accent-cyan font-semibold">Front-End Developer</span> and <span className="text-accent-cyan font-semibold">MERN Stack Developer</span> with experience building responsive and interactive web applications. I enjoy turning complex problems into simple, elegant solutions through clean code and modern technologies.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              My journey in web development started with HTML, CSS, and JavaScript, and has evolved into mastering React.js, Node.js, Express.js, and MongoDB. I focus on creating user-friendly experiences that are not only visually appealing but also performant and scalable.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Beyond coding, I have a strong interest in solving challenges, exploring new technologies, and continuously improving my craft. I am eager to collaborate on projects that combine creativity with technical excellence.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I thrive on developing functional, responsive applications and bringing ideas to life. My goal is to build digital solutions that make an impact and deliver meaningful user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
