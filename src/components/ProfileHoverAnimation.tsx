"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: '600' });

const ConnectionAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<SVGPathElement>(null);
  const rightLineRef = useRef<SVGPathElement>(null);
  const leftAvatarRef = useRef<HTMLDivElement>(null);
  const rightAvatarRef = useRef<HTMLDivElement>(null);
  const leftBarRef = useRef<HTMLDivElement>(null);
  const rightBarRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const leftVerticalRef = useRef<SVGLineElement>(null);
  const rightVerticalRef = useRef<SVGLineElement>(null);
  const centerCircleRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<SVGLineElement>(null);
  const bottomLineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    // Initial state - all elements gray and dashed
    gsap.set([leftLineRef.current, rightLineRef.current], {
      strokeDasharray: '5,5',
      stroke: '#D1D5DB',
    });

    gsap.set([leftVerticalRef.current, rightVerticalRef.current], {
      strokeDasharray: '5,5',
      stroke: '#D1D5DB',
    });

    gsap.set([topLineRef.current, bottomLineRef.current], {
      strokeDasharray: '5,5',
      stroke: '#D1D5DB',
    });

    gsap.set([leftAvatarRef.current, rightAvatarRef.current], {
      borderColor: '#D1D5DB',
    });

    gsap.set([leftBarRef.current, rightBarRef.current, topBarRef.current, bottomBarRef.current], {
      backgroundColor: '#9CA3AF',
    });

    gsap.set(centerCircleRef.current, {
      borderColor: '#D1D5DB',
    });

    const playAnimation = () => {
      const tl = gsap.timeline();

      // Step 1: Animate left bar to pink/magenta + left vertical line to pink
      tl.to(leftBarRef.current, {
        backgroundColor: '#E91E63',
        duration: 0.6,
        ease: 'power2.out',
      }, '+=0.5');
      
      tl.to(leftVerticalRef.current, {
        stroke: '#E91E63',
        strokeDasharray: '0',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6');

      tl.to(topLineRef.current, {
        stroke: '#E91E63',
        strokeDasharray: '0',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6');

      // Step 2: Animate right bar to blue + right vertical line to blue
      tl.to(rightBarRef.current, {
        backgroundColor: '#00BCD4',
        duration: 0.6,
        ease: 'power2.out',
      }, '+=0.3');
      
      tl.to(rightVerticalRef.current, {
        stroke: '#00BCD4',
        strokeDasharray: '0',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6');

      tl.to(bottomLineRef.current, {
        stroke: '#00BCD4',
        strokeDasharray: '0',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6');

      // Step 3: Animate top bar to dark pink + left horizontal line to dark pink
      tl.to(topBarRef.current, {
        backgroundColor: '#D81B60',
        duration: 0.6,
        ease: 'power2.out',
      }, '+=0.3');
      
      tl.to(leftLineRef.current, {
        stroke: '#D81B60',
        strokeDasharray: '0',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6');

      // Step 4: Animate bottom bar to orange + right horizontal line to orange
      tl.to(bottomBarRef.current, {
        backgroundColor: '#FF9800',
        duration: 0.6,
        ease: 'power2.out',
      }, '+=0.3');
      
      tl.to(rightLineRef.current, {
        stroke: '#FF9800',
        strokeDasharray: '0',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6');

      // Step 5: Turn everything blue including center circle and avatars
      tl.to([leftLineRef.current, rightLineRef.current, leftVerticalRef.current, rightVerticalRef.current, topLineRef.current, bottomLineRef.current], {
        stroke: '#00BCD4',
        duration: 0.8,
        ease: 'power2.inOut',
      }, '+=0.5');

      tl.to([leftAvatarRef.current, rightAvatarRef.current, centerCircleRef.current], {
        borderColor: '#00BCD4',
        duration: 0.6,
      }, '-=0.6');
    };

    const resetAnimation = () => {
      gsap.set([leftLineRef.current, rightLineRef.current], {
        strokeDasharray: '5,5',
        stroke: '#D1D5DB',
      });

      gsap.set([leftVerticalRef.current, rightVerticalRef.current], {
        strokeDasharray: '5,5',
        stroke: '#D1D5DB',
      });

      gsap.set([topLineRef.current, bottomLineRef.current], {
        strokeDasharray: '5,5',
        stroke: '#D1D5DB',
      });

      gsap.set([leftAvatarRef.current, rightAvatarRef.current], {
        borderColor: '#D1D5DB',
      });

      gsap.set(centerCircleRef.current, {
        borderColor: '#D1D5DB',
      });

      gsap.set([leftBarRef.current, rightBarRef.current, topBarRef.current, bottomBarRef.current], {
        backgroundColor: '#9CA3AF',
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', playAnimation);
      container.addEventListener('mouseleave', resetAnimation);

      return () => {
        container.removeEventListener('mouseenter', playAnimation);
        container.removeEventListener('mouseleave', resetAnimation);
      };
    }
  }, []);

  return (
 <div>
   <h1 className={`text-[24px] font-semibold tracking-normal mb-2 leading-normal text-black ${dmSans.className}`}>Match minds, not just skills.</h1>
    <p className={`mb-4 text-black text-[20px] font-normal leading-normal tracking-normal ${inter.className}`}>Stop hiring great portfolios attached to difficult personalities.</p>
   <div className="flex mt-15 items-center justify-center h-[300px] overflow-hidden border border-gray-200 rounded-xl shadow-sm bg-white outline outline-gray-300 outline-offset-4">
      <div 
        ref={containerRef}
        className="relative w-full h-[280px] p-8 cursor-pointer"
      >
        <div className="w-full h-full flex items-center justify-center relative">
          {/* SVG for connection lines */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 520 280"
            style={{ pointerEvents: 'none' }}
          >
            {/* Top vertical line from avatar */}
            <line
              ref={topLineRef}
              x1="103"
              y1="0"
              x2="103"
              y2="55"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Left vertical line */}
            <line
              ref={leftVerticalRef}
              x1="103"
              y1="105"
              x2="103"
              y2="135"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Left horizontal line */}
            <path
              ref={leftLineRef}
              d="M 103 135 L 103 150 Q 103 160, 113 160 L 248 160 Q 258 160, 258 170 L 258 170"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Right horizontal line */}
            <path
              ref={rightLineRef}
              d="M 262 170 L 262 160 Q 262 160, 272 160 L 407 160 Q 417 160, 417 170 L 417 205"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Right vertical line */}
            <line
              ref={rightVerticalRef}
              x1="417"
              y1="205"
              x2="417"
              y2="235"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Bottom vertical line to avatar */}
            <line
              ref={bottomLineRef}
              x1="417"
              y1="285"
              x2="417"
              y2="340"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Left Avatar */}
          <div
            ref={leftAvatarRef}
            className="absolute left-[30px] top-[5px] w-20 h-20 rounded-full border-2 bg-white flex items-center justify-center shadow-sm transition-all"
            style={{ borderColor: '#D1D5DB' }}
          >
            <div className="w-[54px] h-[54px] rounded-full overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="User 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Logo Circle */}
          <div 
            ref={centerCircleRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 bg-white flex items-center justify-center shadow-sm"
            style={{ borderColor: '#D1D5DB' }}
          >
            <div className="relative w-[38px] h-[38px]">
              {/* Left bar */}
              <div
                ref={leftBarRef}
                className="absolute left-0 top-0 w-[11px] h-full rounded-sm transition-colors"
                style={{ backgroundColor: '#9CA3AF' }}
              ></div>
              
              {/* Top bar */}
              <div
                ref={topBarRef}
                className="absolute left-3.5 top-0 w-[11px] h-[17px] rounded-sm transition-colors"
                style={{ backgroundColor: '#9CA3AF' }}
              ></div>
              
              {/* Right bar */}
              <div
                ref={rightBarRef}
                className="absolute right-0 top-2.5 w-[11px] h-5 rounded-sm transition-colors"
                style={{ backgroundColor: '#9CA3AF' }}
              ></div>
              
              {/* Bottom bar */}
              <div
                ref={bottomBarRef}
                className="absolute left-3.5 bottom-0 w-[11px] h-[19px] rounded-sm transition-colors"
                style={{ backgroundColor: '#9CA3AF' }}
              ></div>
            </div>
          </div>

          {/* Right Avatar */}
          <div
            ref={rightAvatarRef}
            className="absolute right-[30px] bottom-[5px] w-20 h-20 rounded-full border-2 bg-white flex items-center justify-center shadow-sm transition-all"
            style={{ borderColor: '#D1D5DB' }}
          >
            <div className="w-[54px] h-[54px] rounded-full overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" 
                alt="User 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default ConnectionAnimation;