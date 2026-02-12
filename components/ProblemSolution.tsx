import React from 'react';
import { PROBLEM_DATA, SOLUTION_DATA } from '../constants';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSolution: React.FC = () => {
  return (
    <>
      {/* Problem Section - Pastel Red/Orange Warm Tone */}
      <section className="py-24 bg-orange-50/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-apple-dark mb-6 font-serif leading-tight">
              {PROBLEM_DATA.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
              {PROBLEM_DATA.intro}
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg shadow-orange-100/50 border border-orange-100">
            <ul className="space-y-6 font-sans">
              {PROBLEM_DATA.points.map((point, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mr-4 mt-0.5" />
                  <span className="text-gray-700 text-lg font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-12 pt-10 border-t border-gray-100 text-center">
              <p className="text-xl md:text-3xl font-serif italic text-apple-dark leading-normal">
                "{PROBLEM_DATA.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Clean White with Pastel accents */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-6xl font-bold text-apple-dark mb-6 tracking-tight font-serif leading-[1.1]">
              {SOLUTION_DATA.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
              {SOLUTION_DATA.intro}
            </p>
            <div className="inline-flex items-center text-apple-blue font-bold tracking-wide uppercase text-sm font-sans bg-blue-50 px-4 py-2 rounded-full">
              {SOLUTION_DATA.subtitle} <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {SOLUTION_DATA.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start space-x-5 p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-apple-dark mb-2 font-serif">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-sans">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};