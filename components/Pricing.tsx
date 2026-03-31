import React from 'react';
import { Button } from './ui/Button';
import { Check, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../constants';

export const Pricing: React.FC<{ onBuy: () => void, id?: string }> = ({ onBuy, id }) => {
  return (
    <section id={id} className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark mb-12 font-serif">
          Mac Senza Panico – Edizione 2026
        </h2>

        <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-apple-blue to-purple-400"></div>
          
          <div className="p-8 md:p-16 text-center">
            
            {/* Social Proof Banner */}
            <div className="bg-blue-50/50 rounded-xl inline-block px-6 py-3 mb-8 border border-blue-100 font-sans text-sm font-medium text-blue-900">
              📚 Già acquistata da oltre 100+ persone - ⭐ Aggiornata al 2026 - ✅ Accesso immediato
            </div>

            <div className="mb-4 font-sans">
              <span className="text-6xl font-bold text-apple-dark tracking-tight">{HERO_DATA.priceDiscount}</span>
            </div>
            <p className="text-gray-500 mb-8 font-sans max-w-md mx-auto leading-relaxed italic">
              “Meno di un caffè al giorno per una settimana, una volta sola — e il tuo Mac diventa il tuo migliore strumento di lavoro e svago.”
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mb-10 text-left md:text-center font-sans">
              <div className="flex items-center justify-center bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">Ebook PDF completo</span>
              </div>
              <div className="flex items-center justify-center bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">Checklist operative</span>
              </div>
              <div className="flex items-center justify-center bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100">
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">Aggiornamenti futuri</span>
              </div>
            </div>

            <Button onClick={onBuy} className="w-full md:w-auto min-w-[320px] text-xl py-5 mb-12 transform hover:scale-105 transition-transform shadow-xl shadow-blue-500/30 font-sans">
              Sì, voglio la guida
            </Button>

            <div className="bg-slate-50 rounded-3xl p-6 md:p-8 max-w-2xl mx-auto border border-slate-200">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-blue-900 mb-2 font-serif text-xl">Garanzia senza panico</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-lg mb-4">
                  Se dopo aver letto la guida e applicato le checklist non ti senti più sicuro, più veloce e più organizzato nell’uso del tuo Mac, scrivimi entro 14 giorni dall’acquisto e ti rimborso l’intero importo. Ti rimborso senza fare domande.*
                </p>
                <p className="text-[10px] text-gray-400 font-sans italic">
                  * Il rimborso viene erogato tramite coupon di pari valore, spendibile su tutti i prodotti e servizi di Manuel Diamanti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};