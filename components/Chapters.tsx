import React from 'react';
import { CHAPTERS_DATA } from '../constants';
import { FileText } from 'lucide-react';

export const Chapters: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark mb-16 font-serif">
          Cosa trovi dentro l’ebook
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS_DATA.map((chapter) => (
            <div 
              key={chapter.id} 
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-100 hover:-translate-y-1"
            >
              <div className="text-xs font-bold text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded-md uppercase tracking-wider mb-4 font-sans">
                {typeof chapter.id === 'number' ? `Capitolo ${chapter.id}` : 'Bonus'}
              </div>
              <h3 className="text-xl font-bold text-apple-dark mb-4 font-serif group-hover:text-apple-blue transition-colors">
                {chapter.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                {chapter.desc}
              </p>
              {typeof chapter.id !== 'number' && (
                 <div className="mt-4 flex items-center text-orange-600 bg-orange-50 p-2 rounded-lg text-xs font-bold font-sans w-fit">
                    <FileText className="w-3 h-3 mr-1" /> Toolkit incluso
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};