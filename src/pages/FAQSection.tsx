'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import {DM_Sans, Inter} from 'next/font/google';
import { gsap } from 'gsap';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: '600' });

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  { question: 'When will Hireable launch?', answer: 'Were targeting a beta launch in Q4 2025. Waitlist members get early access and priority onboarding when we go live.' },
  { question: 'How is this different from Upwork or Fiverr?', answer: 'Hireable focuses on AI compatibility matching and structured trials.' },
  { question: 'What does "AI compatibility matching" actually mean?', answer: 'It uses AI to match you with the best remote worker for your needs.' },
  { question: 'Do remote workers really only work for one client?', answer: 'Yes, our remote workers focus on one client at a time for maximum efficiency.' },
  { question: 'What\'s included in the "structured trials"?', answer: 'Structured trials include a predefined set of tasks to test compatibility and skills.' },
  { question: 'What types of roles can I hire for?', answer: 'You can hire for tech, design, marketing, and more specialized roles.' },
  { question: 'Can I try it before committing?', answer: 'Yes, we offer a trial period for all new hires.' },
  { question: 'How do I know this will work for my company?', answer: 'Our AI matching ensures you get the right fit, plus you can test via structured trials.' },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (!el) return;
      if (activeIndex === index) {
        gsap.to(el, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out', marginTop: 8 });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.in', marginTop: 0 });
      }
    });
  }, [activeIndex]);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className={`text-[48px] text-black font-semibold mb-8 leading-[120%] ${dmSans.className}`}>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-15">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden"
          >
            <button
              className={`w-full flex justify-between leading-[150%] items-center text-left tracking-[0.2px] font-bold text-[28px]  ${dmSans.className} `}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              style={{
                color:`rgba(33, 33, 33, 1)`
              }}
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              ref={(el) => { refs.current[index] = el; }}
              style={{ height: 0, opacity: 0, overflow: 'hidden' }}
              className={` py-3 text-gray-600 text-[20px] font-normal tracking-[0.4px] leading-[140%] ${inter.className}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
