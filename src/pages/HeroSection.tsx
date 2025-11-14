'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import GlowDotEffect from '@/assets/GlowDotEffect.png'
import HeroImage from '@/assets/HeroImage.png'
import Image from 'next/image';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: '600' });

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employer' | 'talent'>('employer');

  return (
    <div className="min-h-screen px-4 pt-20">
      <div className="max-w-5xl w-full mx-auto items-center text-center">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-full bg-white border border-gray-200 p-1 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <button
              onClick={() => setActiveTab('employer')}
              className={`px-6 py-2.5 rounded-full text-[14px] font-light transition-all duration-300 ${
                activeTab === 'employer'
                  ? 'bg-white text-sky-600 border border-blue-300 shadow-[inset_0_0_15px_rgba(56,189,248,0.3),0_1px_3px_rgba(0,0,0,0.1)]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className={`inline-flex items-center gap-1.5 ${inter.className}`}>
                {activeTab === 'employer' && (
                    <Image src={GlowDotEffect} alt="Glow Dot Effect" width={20} height={20} className="inline-block" />
                )}
                Employer
              </span>
            </button>
            <button
              onClick={() => setActiveTab('talent')}
              className={`px-6 py-2.5 rounded-full text-[14px] font-light transition-all duration-300 ${
                activeTab === 'talent'
                  ? 'bg-white text-sky-600 border border-blue-300 shadow-[inset_0_0_15px_rgba(56,189,248,0.3),0_1px_3px_rgba(0,0,0,0.1)]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className={`inline-flex items-center gap-1.5 ${inter.className}`}>
                {activeTab === 'talent' && (
                  <Image src={GlowDotEffect} alt="Glow Dot Effect" width={20} height={20} className="object-cover" />
                )}
                Talent
              </span>
            </button>
          </div>
        </div>

        {/* Main Heading */}
         <h1 className={`text-[72px] font-semibold text-[#535353] mb-8 leading-[120%] tracking-[2px] text-center ${inter.className}`}
          style={{ 
            textShadow: '0px 0px 4px rgba(0, 0, 0, 0.4)',
          }}
        >
          Stop settling for
          <br />
          divided attention
        </h1>
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
          Find remote workers who focus on your business, not 5 others.
        </p>

        {/* CTA Button */}
        <button
         style={{ background: "var(--Button-Primary-Default, rgba(0,167,248,1))" }}
         className={` text-white font-medium px-10 py-4 rounded-xl text-lg shadow-md hover:shadow-lg transition-all duration-300 mb-20 ${inter.className}`}>
          Join the waitlist
        </button>

      </div>

      <div className='max-w-8xl px-20'>
        <Image src={HeroImage} alt="Hero Image" className="mt-12 mx-auto" />
      </div>
    </div>
  );
};

export default HeroSection;