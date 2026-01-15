
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-slate-400">Ubicación y Contacto</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-slate-900">Visítanos en Medellín</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-serif font-bold mb-6 text-slate-900">Sede Principal</h3>
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-slate-900 p-3 rounded-lg text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Dirección</p>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-slate-900 p-3 rounded-lg text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Teléfono / WhatsApp</p>
                  <p className="text-slate-600 font-light leading-relaxed">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 p-3 rounded-lg text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Correo Electrónico</p>
                  <p className="text-slate-600 font-light leading-relaxed">{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href={BUSINESS_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-xl text-center font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <span>Instagram: @{BUSINESS_INFO.instagram}</span>
              </a>
            </div>
          </div>

          <div className="h-[450px] bg-slate-100 rounded-2xl overflow-hidden shadow-inner relative">
             {/* Note: This is a placeholder for an interactive map. We could use Gemini to provide directions if asked in chat. */}
            <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center">
               <svg className="w-16 h-16 text-slate-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
               </svg>
               <h4 className="text-xl font-bold text-slate-800 mb-2">Encuéntranos en Belén la Mota</h4>
               <p className="text-slate-500 mb-6">Haz clic para abrir en Google Maps y ver la ruta exacta desde tu ubicación.</p>
               <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors"
               >
                 Abrir Google Maps
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
