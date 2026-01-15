
import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-slate-400">Nuestro Expertiz</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-slate-900">Tratamientos Exclusivos</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
              {/* Image Container with Shimmer placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none"></div>
                <img 
                  src={service.image} 
                  alt={`Servicio de ${service.title}`} 
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Imagen de respaldo elegante y neutra para evitar repetición de cirujanos
                    target.src = "https://images.unsplash.com/photo-1519415510236-855911997607?auto=format&fit=crop&w=800&q=80"; 
                  }}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-slate-900 rounded-full shadow-sm">
                    {service.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 leading-tight group-hover:text-slate-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light mb-6 text-sm">
                  {service.description}
                </p>
              </div>
              
              <div className="px-8 pb-8 mt-auto">
                <a 
                  href={BUSINESS_INFO.getServiceWhatsapp(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-3 border border-slate-900/10 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 bg-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm"
                >
                  <span>Pedir información</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Banner de Consulta */}
        <div className="mt-20 p-8 md:p-16 bg-slate-900 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">¿Buscas una transformación total?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light">
              Nuestra tecnología de vanguardia garantiza resultados que superan tus expectativas.
            </p>
            <a 
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              Consultar catálogo completo
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
