import React from 'react';

export const ValueComparison: React.FC = () => {
  return (
    <section className="py-24 bg-orange-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-apple-dark mb-8 font-serif">
            Quanto costa davvero imparare ad utilizzare MacOS?
          </h2>
          <div className="text-lg text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed space-y-4">
            <p>
              Esistono tanti modi per imparare a usare il Mac. Non tutti valgono il tempo e i soldi che costano: Potresti cercare su YouTube per settimane, tra video in inglese, tutorial datati e risposte incomplete. Potresti pagare un consulente o un corso online. <b>Oppure puoi avere tutto in una guida pratica, aggiornata al 2026, pronta da usare subito.</b>
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm font-sans bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-bottom border-gray-200">
                <th className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-xs">Alternativa</th>
                <th className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-xs">Costo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-4 text-gray-600">Corso macOS su Udemy</td>
                <td className="px-6 py-4 text-gray-900 font-medium">€80–120</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-600">Ora di consulenza Apple</td>
                <td className="px-6 py-4 text-gray-900 font-medium">€60–80</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-600">Settimane di tutorial YouTube</td>
                <td className="px-6 py-4 text-gray-400 italic">Ore di tempo perso</td>
              </tr>
              <tr className="bg-blue-50/50">
                <td className="px-6 py-4 text-blue-900 font-bold">Mac Senza Panico</td>
                <td className="px-6 py-4 text-blue-600 font-bold text-lg">€24,90</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 font-sans italic mt-12">
          La scorciatoia che avresti voluto avere fin dal primo giorno.
        </p>
      </div>
    </section>
  );
};
