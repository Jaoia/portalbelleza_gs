
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import { BUSINESS_INFO } from './constants';

const App: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-serif text-4xl font-bold mb-6 text-white">Portal de Belleza</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                Tu destino de confianza para medicina estética, bienestar y salud integral en Medellín. 
                Excelencia clínica, tecnología de punta y calidez humana en cada tratamiento.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Navegación</h4>
              <ul className="space-y-4 text-slate-400 font-light">
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center"><span>Servicios</span></a></li>
                <li><a href="#nosotros" className="hover:text-white transition-colors flex items-center"><span>Nosotros</span></a></li>
                <li><a href="#testimonios" className="hover:text-white transition-colors flex items-center"><span>Testimonios</span></a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors flex items-center"><span>Contacto</span></a></li>
                <li><a href={BUSINESS_INFO.whatsappUrl} target="_blank" className="text-white font-medium hover:underline">Agendar Cita</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Información</h4>
              <ul className="space-y-4 text-slate-400 font-light text-sm leading-loose">
                <li>{BUSINESS_INFO.phone}</li>
                <li>{BUSINESS_INFO.email}</li>
                <li>{BUSINESS_INFO.address}</li>
                <li className="font-bold text-white">Medellín, Colombia</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs tracking-widest uppercase">
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Medicina Estética de Vanguardia.</p>
            <div className="flex space-x-8 mt-8 md:mt-0">
              <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Business</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Mobile CTA - Enhanced with Label */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 flex justify-center pointer-events-none">
        <a 
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-full shadow-2xl font-bold transition-all active:scale-95 animate-pulse"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Agendar Cita</span>
        </a>
      </div>

      {/* Scroll to top button */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 p-3 bg-white/80 backdrop-blur text-slate-900 rounded-full shadow-lg border border-slate-200 hover:bg-white transition-all active:scale-95"
          aria-label="Volver arriba"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}

      <ChatBot />
    </div>
  );
};

export default App;
