import React from 'react';
import { TARGET_DATA } from '../constants';
import { Check, X, HelpCircle } from 'lucide-react';

import { Button } from './ui/Button';

export const TargetAudience: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark mb-16 font-serif">
          È per te se...
        </h2>

        <div className="grid md:grid-cols-2 gap-8 font-sans mb-16">
          {/* For You Card - Pastel Green */}
          <div className="bg-green-50/50 rounded-[2rem] p-8 md:p-12 shadow-sm border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
            
            <h3 className="text-2xl font-bold text-green-900 mb-8 flex items-center font-serif relative z-10">
              <span className="w-10 h-10 rounded-full bg-green-200 text-green-700 flex items-center justify-center mr-4 shadow-sm font-sans">
                <Check className="w-6 h-6" />
              </span>
              Fa per te
            </h3>
            <ul className="space-y-6 relative z-10">
              {TARGET_DATA.forYou.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You Card - Pastel Red (Very Soft) */}
          <div className="bg-red-50/50 rounded-[2rem] p-8 md:p-12 border border-red-100 shadow-sm relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-100 rounded-full blur-3xl -ml-16 -mb-16 opacity-60"></div>

            <h3 className="text-2xl font-bold text-gray-600 mb-8 flex items-center font-serif relative z-10">
              <span className="w-10 h-10 rounded-full bg-red-100 text-red-400 flex items-center justify-center mr-4 font-sans">
                <X className="w-6 h-6" />
              </span>
              Non fa per te
            </h3>
            <ul className="space-y-6 relative z-10">
              {TARGET_DATA.notForYou.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-300 mr-4 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* New CTA Block */}
        <div className="max-w-4xl mx-auto text-center font-sans mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-apple-dark mb-8 font-serif md:whitespace-nowrap">
            Mac Senza Panico è esattamente quello che ti serve.
          </h3>
          <Button 
            onClick={onCtaClick}
            className="text-xl py-5 px-10 shadow-2xl shadow-blue-500/30 hover:-translate-y-1"
          >
            Sì, voglio la mia guida completa →
          </Button>
          <p className="mt-4 text-sm text-gray-500 font-medium">
            Accesso immediato · PDF scaricabile su tutti i dispositivi
          </p>
        </div>

        {/* Mini FAQ Block */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4 font-sans text-left">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-start mb-2 text-apple-blue">
              <HelpCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-apple-dark text-base leading-tight mb-2">
                  È utile anche se non vengo da Windows?
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sì, i capitoli 1, 3, 4, 5, 6 e 7 coprono tutto il percorso di apprendimento, configurazione e gestione anche per chi non ha un passato Windows. Il capitolo 2 sulla migrazione è l'unico specifico per chi viene da PC.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-start mb-2 text-apple-blue">
              <HelpCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-apple-dark text-base leading-tight mb-2">
                  È aggiornato all'ultima versione di macOS?
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sì, la guida è aggiornata a macOS Tahoe 2026.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-start mb-2 text-apple-blue">
              <HelpCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-apple-dark text-base leading-tight mb-2">
                  E se non mi soddisfa?
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Se dopo aver letto la guida e applicato le checklist non ti senti più sicuro, più veloce e più organizzato nell’uso del tuo Mac, scrivimi entro 14 giorni dall’acquisto. Ti rimborso senza fare domande.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};