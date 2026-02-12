import React from 'react';
import { SOCIAL_DATA } from '../constants';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark mb-12 font-serif">
          Perché puoi fidarti di questa guida
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center font-sans">
          {SOCIAL_DATA.stats.map((stat, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-apple-blue mb-2 font-serif">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Author Note */}
        <div className="max-w-3xl mx-auto text-center mb-20 bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
          <p className="text-lg text-gray-700 font-sans italic leading-relaxed">
            "L’autore, Manuel Diamanti, usa macOS dal 2005 come daily driver e conosce profondamente le insidie di Windows. Questa guida nasce dall'esperienza diretta di chi ha aiutato migliaia di utenti a fare il grande salto."
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 font-sans">
          {SOCIAL_DATA.testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-apple-orange fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow font-serif text-lg">"{t.text}"</p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="font-bold text-apple-dark">{t.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};