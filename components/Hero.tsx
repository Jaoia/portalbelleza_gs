
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('servicios');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video/Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/45 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source 
            src="https://cdn.pixabay.com/video/2020/03/17/33714-398284693_large.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Aesthetic Center"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="overflow-hidden mb-4">
          <h2 className="text-sm md:text-base font-bold tracking-[0.4em] uppercase opacity-90 animate-fade-in-down">
            Salud, Belleza y Bienestar Integral
          </h2>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-10 leading-[1.1] animate-fade-in-up">
          Donde tu bienestar <br className="hidden md:block"/> es nuestra prioridad
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 mb-14 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
          Expertos en medicina ortomolecular y tratamientos estéticos de vanguardia en Medellín. 
          Resultados naturales con la mejor tecnología.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-500">
          <a 
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-12 py-5 bg-white text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10">Reserva tu cita ahora</span>
            <div className="absolute inset-0 bg-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          
          <a 
            href="#servicios" 
            onClick={scrollToServices}
            className="w-full sm:w-auto px-12 py-5 border-2 border-white/40 bg-white/5 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:border-white/80 active:scale-95 flex items-center justify-center gap-2"
          >
            Nuestros servicios
            <svg className="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-pulse">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Descubrir más</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
