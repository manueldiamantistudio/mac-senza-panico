import React from 'react';
import { HERO_DATA } from '../constants';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-32 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Layout Change: flex-col-reverse puts image on top for mobile. Grid puts them side-by-side on desktop. items-start allows pushing the image down. */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left z-20 relative min-w-0 mt-10 lg:mt-0"
          >
            <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase bg-blue-100 text-blue-900 rounded-full font-sans border border-blue-200/50">
              {HERO_DATA.superhead}
            </div>
            
            {/* Headline adjusted: whitespace-nowrap forces single line. Font sizes tuned to fit column width. */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tighter text-apple-dark mb-6 leading-[1] font-serif whitespace-nowrap">
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
            // lg:mt-32 pushes the image down on desktop to align with the subheadline/description
            className="relative z-10 flex justify-center lg:mt-32 w-full"
          >
             {/* Abstract decorative blobs */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-gradient-to-tr from-blue-100 to-orange-100 rounded-full blur-3xl opacity-60 -z-10"></div>

            {/* Main Cover Image - Updated ID */}
            <img 
              src="https://drive.google.com/thumbnail?id=1B1v7h6hCzDIpVYT8Ml4Dt37MiSNieonL&sz=w1000" 
              alt="Copertina Mac Senza Panico" 
              referrerPolicy="no-referrer"
              className="w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};