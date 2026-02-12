import React from 'react';
import { Button } from './ui/Button';

export const Footer: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Final CTA */}
      <div className="py-24 px-6 text-center bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-apple-dark mb-8 font-serif leading-tight">
            Trasforma il tuo Mac da oggetto misterioso a strumento di lavoro affidabile
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
            Con “Mac Senza Panico” non devi più raccogliere pezzi di informazione da mille fonti diverse; hai un unico percorso guidato, dalla prima accensione alla manutenzione annuale.
          </p>
          <Button onClick={onCtaClick} className="text-xl py-4 px-12 shadow-xl shadow-blue-600/20 font-sans hover:-translate-y-1">
            Voglio il mio Mac Senza Panico a 14,90€
          </Button>
        </div>
      </div>
      
      {/* Legal Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-xs text-gray-400 font-sans border-t border-gray-200">
        <p className="mb-4 font-medium">&copy; 2026 Mac Senza Panico. Tutti i diritti riservati.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Termini e Condizioni</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Supporto</a>
        </div>
        <p className="mt-8 text-[10px] leading-relaxed max-w-lg mx-auto opacity-70">
          Questo sito non è affiliato con Apple Inc. Mac, macOS e il logo Apple sono marchi di Apple Inc., registrati negli Stati Uniti e in altri paesi.
        </p>
      </div>
    </footer>
  );
};