import React from 'react';
import { TARGET_DATA } from '../constants';
import { Check, X } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark mb-16 font-serif">
          È per te se...
        </h2>

        <div className="grid md:grid-cols-2 gap-8 font-sans">
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

          {/* Not For You Card - Pastel Gray/Red */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-200 shadow-sm relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -ml-16 -mb-16 opacity-50"></div>

            <h3 className="text-2xl font-bold text-gray-500 mb-8 flex items-center font-serif relative z-10">
              <span className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-4 font-sans">
                <X className="w-6 h-6" />
              </span>
              Non fa per te
            </h3>
            <ul className="space-y-6 relative z-10">
              {TARGET_DATA.notForYou.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-4 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};