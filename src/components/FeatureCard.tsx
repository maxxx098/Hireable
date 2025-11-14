'use client';

import { useEffect, useRef, useState } from "react";

export default function FeatureCard() {
const container = useRef<HTMLDivElement | null>(null);
  const cards = useRef<Array<HTMLDivElement | null>>([]);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // positions represent style for top, middle, bottom respectively
    const positions = [
      { y: -150, scale: 0.88, opacity: 0.5, blur: 2, zIndex: 1, shadow: false }, // top
      { y: 0, scale: 1, opacity: 1, blur: 0, zIndex: 3, shadow: true },          // middle (active)
      { y: 150, scale: 0.88, opacity: 0.5, blur: 2, zIndex: 1, shadow: false },   // bottom
    ];

    // apply initial positions
    cards.current.forEach((card, i) => {
      if (!card) return;
      const pos = positions[i];
      card.style.transform = `translateY(${pos.y}px) scale(${pos.scale})`;
      card.style.opacity = pos.opacity.toString();
      card.style.filter = `blur(${pos.blur}px)`;
      card.style.zIndex = pos.zIndex.toString();
      card.style.boxShadow = pos.shadow ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' : 'none';
      card.style.transition = 'all 0.4s ease-in-out';
    });

    // rotation animation
    const rotateOnce = () => {
      const last = positions.pop();
      if (last) positions.unshift(last);

      cards.current.forEach((card, i) => {
        if (!card) return;
        const p = positions[i];
        card.style.transform = `translateY(${p.y}px) scale(${p.scale})`;
        card.style.opacity = p.opacity.toString();
        card.style.filter = `blur(${p.blur}px)`;
        card.style.zIndex = p.zIndex.toString();
        card.style.boxShadow = p.shadow ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' : 'none';
      });
    };

    // Start/stop animation based on hover
    if (isHovered) {
      rotateOnce(); // Start immediately
      intervalRef.current = setInterval(rotateOnce, 1500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const cardBase =
    "absolute w-[300px] h-[150px] bg-white rounded-2xl p-4 flex flex-col justify-between";
  return (
   <div>
    <h1 className="text-2xl font-bold mb-2 text-black">See every candidate. Miss nothing.</h1>
    <p className="mb-4 text-black">No more "Wait, who was that designer from last week?" moments.</p>
    <div className="flex items-center justify-center h-[300px] p-10 overflow-hidden border border-gray-200 rounded-xl shadow-sm bg-white outline outline-gray-300 outline-offset-4">
      <div 
        ref={container} 
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Michaela */}
        <div
          ref={(el) => { cards.current[0] = el; }}
          className={cardBase}
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="flex gap-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Michaela Reyes"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Michaela Reyes</h3>
              <p className="text-xs text-gray-500">Sales Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="font-medium text-gray-700">$1,680 /mo</span>
            <span className="text-gray-600">2–5 years</span>
            <span className="ml-auto px-2 py-0.5 rounded-md bg-green-100 text-green-700 font-semibold">
              86% MATCHED
            </span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">Activity Title</p>
            <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Jethro */}
        <div
          ref={(el) => { cards.current[1] = el; }}
          className={cardBase}
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="flex gap-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="Jethro Soriano"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Jethro Soriano</h3>
              <p className="text-xs text-gray-500">Graphic Designer</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="font-medium text-gray-700">$1,980 /mo</span>
            <span className="text-gray-600">2–5 years</span>
            <span className="ml-auto px-2 py-0.5 rounded-md bg-green-100 text-green-700 font-semibold">
              84% MATCHED
            </span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">Activity Title</p>
            <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Camille */}
        <div
          ref={(el) => { cards.current[2] = el; }}
          className={cardBase}
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="flex gap-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              alt="Camille Mercado"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Camille Mercado</h3>
              <p className="text-xs text-gray-500">Marketing Specialist</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="font-medium text-gray-700">$1,780 /mo</span>
            <span className="text-gray-600">2–5 years</span>
            <span className="ml-auto px-2 py-0.5 rounded-md bg-green-100 text-green-700 font-semibold">
              82% MATCHED
            </span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">Activity Title</p>
            <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}