import React from 'react';
import { Button } from './ui/Button';
import { Check, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { Countdown } from './ui/Countdown';

export const Pricing: React.FC<{ onBuy: () => void, id?: string }> = ({ onBuy, id }) => {
  return (
    <section id={id} className="py-24 relative overflow-hidden">
      {/* Background Lifestyle Image with blur overlay */}
      <div className="absolute inset-0 z-0">
         {/* Updated path to images/lifestyle.jpg */}
         <img 
            src="images/lifestyle.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
            onError={(e) => {
               // Fallback background if image is missing
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement.style.backgroundColor = '#f3f4f6';
            }}
         />
         {/* White overlay with blur */}
         <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark mb-12 font-serif">
          Offerta di lancio • Mac Senza Panico
        </h2>

        <div className="relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-white/80 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-apple-blue to-purple-400"></div>
          
          <div className="p-8 md:p-16 text-center">
            
            {/* Added Countdown Timer */}
            <div className="bg-white/80 rounded-xl inline-block p-4 mb-6 shadow-sm border border-white">
              <Countdown />
            </div>

            <div className="mb-8 font-sans">
              <span className="text-gray-500 line-through text-2xl mr-4 decoration-2">Prezzo pieno: {HERO_DATA.priceFull}</span>
              <span className="text-6xl font-bold text-apple-dark tracking-tight">{HERO_DATA.priceDiscount}</span>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mb-10 text-left md:text-center font-sans">
              <div className="flex items-center justify-center bg-white/50 px-4 py-2 rounded-full border border-white">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">Ebook PDF completo</span>
              </div>
              <div className="flex items-center justify-center bg-white/50 px-4 py-2 rounded-full border border-white">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">Checklist operative</span>
              </div>
              <div className="flex items-center justify-center bg-white/50 px-4 py-2 rounded-full border border-white">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">Aggiornamenti futuri</span>
              </div>
            </div>

            <Button onClick={onBuy} className="w-full md:w-auto min-w-[320px] text-xl py-5 mb-12 transform hover:scale-105 transition-transform shadow-xl shadow-blue-500/30 font-sans border-2 border-white/20">
              Acquista ora a {HERO_DATA.priceDiscount}
            </Button>

            <div className="bg-blue-50/80 rounded-3xl p-6 md:p-8 max-w-2xl mx-auto border border-blue-100/50 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-blue-900 mb-2 font-serif text-xl">Garanzia senza panico</h3>
                <p className="text-sm text-blue-800/80 leading-relaxed font-sans max-w-lg">
                  Se dopo aver letto la guida e applicato le checklist non ti senti più sicuro, più veloce e più organizzato nell’uso del tuo Mac, scrivimi entro 14 giorni dall’acquisto e ti rimborso l’intero importo. Senza fare domande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};