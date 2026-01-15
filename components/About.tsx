
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square md:aspect-video lg:aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" 
                alt="Instalaciones de Portal de Belleza" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-200/50 rounded-full -z-0 blur-2xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 border-[1px] border-slate-300 rounded-full -z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-200 rounded-2xl -z-0"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-slate-400">Nuestra Filosofía</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8 text-slate-900 leading-tight">
              Velamos por tu bienestar con los mejores resultados
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                En <span className="font-semibold text-slate-900">Portal de Belleza</span>, entendemos que cada paciente es único. Nuestra propuesta se centra en colocar al cliente como el centro de todo lo que hacemos.
              </p>
              <p>
                Utilizamos tecnología de punta y los mejores productos del mercado internacional para garantizar resultados visibles y duraderos, siempre manteniendo la armonía y naturalidad que te caracteriza.
              </p>
              <p>
                Nuestra misión es llevar servicios de salud y bienestar integral a más personas, permitiéndoles disfrutar de una transformación que va más allá de lo estético: es un equilibrio real entre mente y cuerpo.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-slate-200 pt-8">
              <div className="group">
                <h4 className="text-3xl font-serif font-bold text-slate-900 group-hover:text-slate-600 transition-colors">100%</h4>
                <p className="text-slate-500 uppercase tracking-widest text-xs mt-2 font-bold">Compromiso Ético</p>
              </div>
              <div className="group">
                <h4 className="text-3xl font-serif font-bold text-slate-900 group-hover:text-slate-600 transition-colors">+10</h4>
                <p className="text-slate-500 uppercase tracking-widest text-xs mt-2 font-bold">Años de Confianza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
