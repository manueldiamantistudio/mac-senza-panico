import React from 'react';

export const Lifestyle: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-apple-dark font-serif">
            Finalmente una scrivania digitale ordinata
          </h2>
        </div>
        
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-gray-900/5 bg-gray-100">
          <img 
            src="https://drive.google.com/thumbnail?id=1r7zn_ATqLHkIyO05WTvvMQZLVgZ5lMZQ&sz=w1920" 
            alt="Mac Senza Panico Lifestyle - Postazione ordinata" 
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[700px] hover:scale-105 transition-transform duration-[1.5s] ease-out"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-12 md:pb-20 pointer-events-none">
             <p className="text-white/90 text-lg md:text-2xl font-sans font-light text-center px-6 max-w-3xl drop-shadow-md">
               Immagina di accendere il Mac e sapere esattamente dove si trova ogni file, ogni progetto e ogni ricordo.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};