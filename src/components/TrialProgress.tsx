'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, LocateFixed } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (value > displayValue) {
      setDirection(1);
    } else if (value < displayValue) {
      setDirection(-1);
    }
    setDisplayValue(value);
  }, [value]);

  return (
    <div className="relative inline-block overflow-hidden" style={{ minWidth: suffix ? '35px' : '20px', height: '20px' }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={displayValue}
          initial={{ y: direction > 0 ? -20 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: direction > 0 ? 20 : -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 flex items-center"
        >
          {displayValue}{suffix}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const TrialProgressCard: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [trialDays, setTrialDays] = useState(1);
  const [status, setStatus] = useState<'ON TRACK' | 'COMPLETE'>('ON TRACK');

 const animateProgress = () => {
  if (isAnimating) return;
  setIsAnimating(true);

  let currentProgress = 0;
  const progressInterval = setInterval(() => {
    currentProgress += Math.floor(Math.random() * 15) + 5;

   if (currentProgress >= 100) {
  currentProgress = 100;
  clearInterval(progressInterval);

  // Hold steady for 3 seconds before resetting
  setTimeout(() => {
    resetAnimation(); 
  }, 3000); // 3 seconds
}


    setProgressPercent(currentProgress);
  }, 100);

  let currentDays = 1;
  const daysInterval = setInterval(() => {
    currentDays += Math.floor(Math.random() * 5) + 1;

    if (currentDays >= 30) {
      currentDays = 30;
      clearInterval(daysInterval);
    }

    setTrialDays(currentDays);
  }, 100);

  setTimeout(() => {
    setStatus('COMPLETE');
  }, 2000);
};

  const resetAnimation = () => {
    setIsAnimating(false);
    setProgressPercent(0);
    setTrialDays(1);
    setStatus('ON TRACK');
  };

  return (
    <div className="font-sans">
      <h1 className="text-2xl font-semibold mb-2 text-black">Test drive before you commit.</h1>
      <p className="mb-4 text-black text-xl">End the "seemed great in interviews, terrible at work" cycle.</p>
      <div className="flex mt-15 items-center justify-center h-[300px] p-4 overflow-hidden border border-gray-200 rounded-xl shadow-sm bg-white outline outline-gray-300 outline-offset-4">
          <div
            className="w-full max-w-lg space-y-4"
            onMouseEnter={animateProgress}   // start animation
            // REMOVE onMouseLeave
          >
          <div className="bg-white border border-gray-200 py-5 rounded-2xl shadow-lg p-8 transition-transform duration-300">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Isabel Reyes"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-base font-semibold text-gray-900">Isabel Reyes</h2>
                  <p className="text-xs text-gray-500">Product Designer</p>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={status}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    status === 'COMPLETE'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {status}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <LocateFixed className="w-4 h-4" />
                    <span>Overall Progress</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    <AnimatedNumber value={progressPercent} suffix="%" />
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: '0%', backgroundColor: '#0EA5E9' }}
                    animate={{
                      width: `${progressPercent}%`,
                      backgroundColor: progressPercent === 100 ? '#10B981' : '#0EA5E9',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span>Trial Progress</span>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <AnimatedNumber value={trialDays} />
                    <span className="ml-1">/ 30 days</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gray-400"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(trialDays / 30) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.button
            disabled={!isAnimating}
            className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 disabled:cursor-not-allowed"
            initial={{ backgroundColor: '#E5E7EB', color: '#9CA3AF' }}
            animate={{
              backgroundColor: isAnimating ? '#0EA5E9' : '#E5E7EB',
              color: isAnimating ? '#ffffff' : '#9CA3AF',
            }}
            whileHover={isAnimating ? { scale: 1.02 } : {}}
            whileTap={isAnimating ? { scale: 0.98 } : {}}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            Hire as full-time
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TrialProgressCard;