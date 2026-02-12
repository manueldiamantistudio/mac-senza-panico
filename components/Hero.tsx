import React from 'react';
import { HERO_DATA } from '../constants';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-32 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column - Added z-20 to ensure text stays on top if layout gets tight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left z-20 relative"
          >
            {/* Pastel Blue Badge */}
            <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase bg-blue-100 text-blue-900 rounded-full font-sans border border-blue-200/50">
              {HERO_DATA.superhead}
            </div>
            
            {/* Headline: Removed whitespace-nowrap. Text will wrap naturally to avoid going under image. */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-apple-dark mb-6 leading-[1] font-serif break-words">
              {HERO_DATA.headline}
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-600 mt-4 font-medium font-sans tracking-tight leading-snug">
              {HERO_DATA.subheadline}
            </h2>

            <p className="text-lg text-gray-600 my-8 leading-relaxed max-w-lg font-sans">
              {HERO_DATA.description}
            </p>

            <ul className="space-y-4 mb-10 font-sans">
              {HERO_DATA.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-4 h-4 text-green-700" />
                  </span>
                  <span className="text-gray-700 text-sm font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 inline-block w-full sm:w-auto font-sans shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-4 mb-6">
                <span className="text-gray-400 line-through text-xl decoration-2 mb-1 sm:mb-0">Prezzo pieno: {HERO_DATA.priceFull}</span>
                {/* Launch Price: Bolder and Larger */}
                <span className="text-apple-orange font-extrabold text-4xl sm:text-5xl tracking-tight">Prezzo lancio: {HERO_DATA.priceDiscount}</span>
              </div>
              <Button onClick={onCtaClick} fullWidth className="shadow-xl shadow-blue-500/20 text-lg py-4">
                Acquista ora a {HERO_DATA.priceDiscount}
              </Button>
              <p className="text-center text-xs text-gray-500 mt-3 font-medium">
                Offerta lancio • Aggiornamenti futuri inclusi
              </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative z-10"
          >
             {/* Abstract decorative blobs - Pastel Tones */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-70 mix-blend-multiply filter"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-70 mix-blend-multiply filter"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 bg-white aspect-[4/5] sm:aspect-square lg:aspect-[4/5] mx-auto max-w-md">
                {/* Book Mockup Image - Corrected path to images/ folder */}
                <img 
                  src="images/book-mockup.png" 
                  alt="Copertina Mac Senza Panico" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML += '<div class="flex items-center justify-center h-full bg-gray-100 text-gray-400 text-center p-4">Immagine non trovata.<br/>Controlla che book-mockup.png sia in /images</div>';
                  }}
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};