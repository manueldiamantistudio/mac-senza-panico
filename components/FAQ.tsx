import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark mb-16 font-serif">
          Domande frequenti
        </h2>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-slate-50 rounded-2xl border ${isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100'} overflow-hidden cursor-pointer transition-colors`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className={`text-lg font-semibold pr-8 font-serif ${isOpen ? 'text-blue-900' : 'text-apple-dark'}`}>
                    {item.q}
                  </h3>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed pt-2 font-sans">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};