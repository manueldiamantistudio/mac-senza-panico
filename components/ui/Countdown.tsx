import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const STORAGE_KEY = 'mac-senza-panico-timer';
    // 48 hours in milliseconds
    const HOURS_48 = 48 * 60 * 60 * 1000;
    
    let endTime = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (!endTime) {
      // Set end time 48 hours from now if not set
      const newEndTime = now + HOURS_48;
      localStorage.setItem(STORAGE_KEY, newEndTime.toString());
      endTime = newEndTime.toString();
    }

    const end = parseInt(endTime, 10);

    const tick = () => {
      const current = Date.now();
      const diff = end - current;
      if (diff <= 0) {
        setTimeLeft(0);
        // Optional: clear timer or keep at 0
      } else {
        setTimeLeft(diff);
      }
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)));
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const PadNumber = ({ num, label }: { num: number, label: string }) => (
    <div className="flex flex-col items-center mx-1 sm:mx-2">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-1 shadow-sm">
        <span className="text-xl sm:text-2xl font-bold text-apple-dark font-mono">
          {num.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center mb-8">
      <p className="text-xs font-bold text-apple-orange uppercase tracking-wide mb-3 flex items-center">
        <span className="w-2 h-2 rounded-full bg-apple-orange animate-pulse mr-2"></span>
        L'offerta scade tra
      </p>
      <div className="flex justify-center items-start">
        <PadNumber num={hours} label="Ore" />
        <span className="text-xl sm:text-2xl font-bold text-gray-300 mt-3 sm:mt-4">:</span>
        <PadNumber num={minutes} label="Min" />
        <span className="text-xl sm:text-2xl font-bold text-gray-300 mt-3 sm:mt-4">:</span>
        <PadNumber num={seconds} label="Sec" />
      </div>
    </div>
  );
};