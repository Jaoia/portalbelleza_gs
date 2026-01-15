
import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Izquierda */}
        <div className="flex-1 flex justify-start">
          <a href="#" className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}>
            Portal de Belleza
          </a>
        </div>
        
        {/* Menú - Centro (Desktop) */}
        <div className="hidden md:flex flex-[2] justify-center space-x-10 items-center">
          {['servicios', 'nosotros', 'contacto'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => handleNavClick(e, item)}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:opacity-60 relative group ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                isScrolled ? 'bg-slate-900' : 'bg-white'
              }`}></span>
            </a>
          ))}
        </div>

        {/* Botón Reserva - Derecha */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <a 
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:block px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-95 ${
              isScrolled 
                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                : 'bg-white text-slate-900 hover:bg-slate-50'
            }`}
          >
            Reserva tu cita
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 transform ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } md:hidden flex flex-col items-center justify-center space-y-8 p-10`}>
        <span className="font-serif text-4xl font-bold text-slate-900 mb-8">
          Portal de Belleza
        </span>
        {['servicios', 'nosotros', 'contacto'].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            onClick={(e) => handleNavClick(e, item)}
            className="text-2xl font-serif font-bold text-slate-900 uppercase tracking-widest"
          >
            {item}
          </a>
        ))}
        <a 
          href={BUSINESS_INFO.whatsappUrl}
          className="w-full text-center py-4 bg-slate-900 text-white rounded-full font-bold text-lg"
        >
          Reserva tu cita
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
