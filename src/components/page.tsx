'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import svgPaths from "../imports/svg-xe02m6gypl";
import img18244 from "@/assets/235782d8086475c93db888c87923534addc3d2d8.png";
import img3414 from "@/assets/a325a4a607785e1872f7b28dcef5981e648dcf8d.png";
import img2150103645 from "@/assets/a677084cf20bc8cbde24c6b5a0916a48f2cb0468.png";
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: '600' });

// Profile card configurations for shuffling with numeric positions
// Perfectly aligned vertically
const profileConfigs = [
  // State 1: Michaela front
  {
    profiles: [
      {
        id: 1,
        name: "Michaela Reyes",
        title: "Sales Manager",
        salary: "$1,680 /mo",
        match: "86% MATCHED",
        image: img2150103645,
        bg: "silver",
        imgStyle: { height: "88.167px", left: "-10.67px", top: "-4.64px", width: "58.468px" },
        position: { left: 63, top: 74 },
        size: "large",
        blur: false
      },
      {
        id: 2,
        name: "Jethro Soriano",
        title: "Graphic Designer",
        salary: "$1,980 /mo",
        match: "84% MATCHED",
        image: img3414,
        bg: "#d5d5d5",
        imgStyle: { height: "45.397px", left: "-13.27px", top: "2.1px", width: "51.682px" },
        position: { left: 98, top: 210 },
        size: "small",
        blur: true
      },
      {
        id: 3,
        name: "Camille Mercado",
        title: "Marketing Specialist",
        salary: "$1,780 /mo",
        match: "82% MATCHED",
        image: img18244,
        bg: "#dfe4ef",
        imgStyle: { height: "57.968px", left: "-46.79px", top: "0", width: "87.302px" },
        position: { left: 98, top: -34 },
        size: "small",
        blur: true
      }
    ]
  },
  // State 2: Jethro front
  {
    profiles: [
      {
        id: 2,
        name: "Jethro Soriano",
        title: "Graphic Designer",
        salary: "$1,980 /mo",
        match: "84% MATCHED",
        image: img3414,
        bg: "#d5d5d5",
        imgStyle: { height: "60.325px", left: "-17.63px", top: "2.78px", width: "68.677px" },
        position: { left: 63, top: 74 },
        size: "large",
        blur: false
      },
      {
        id: 1,
        name: "Michaela Reyes",
        title: "Sales Manager",
        salary: "$1,680 /mo",
        match: "86% MATCHED",
        image: img2150103645,
        bg: "silver",
        imgStyle: { height: "66.349px", left: "-8.03px", top: "-3.49px", width: "44px" },
        position: { left: 98, top: -34 },
        size: "small",
        blur: true
      },
      {
        id: 3,
        name: "Camille Mercado",
        title: "Marketing Specialist",
        salary: "$1,780 /mo",
        match: "82% MATCHED",
        image: img18244,
        bg: "#dfe4ef",
        imgStyle: { height: "57.968px", left: "-46.79px", top: "0", width: "87.302px" },
        position: { left: 98, top: 210 },
        size: "small",
        blur: true
      }
    ]
  },
  // State 3: Camille front
  {
    profiles: [
      {
        id: 3,
        name: "Camille Mercado",
        title: "Marketing Specialist",
        salary: "$1,780 /mo",
        match: "82% MATCHED",
        image: img18244,
        bg: "#dfe4ef",
        imgStyle: { height: "77.03px", left: "-62.18px", top: "0", width: "116.009px" },
        position: { left: 63, top: 74 },
        size: "large",
        blur: false
      },
      {
        id: 2,
        name: "Jethro Soriano",
        title: "Graphic Designer",
        salary: "$1,980 /mo",
        match: "84% MATCHED",
        image: img3414,
        bg: "#d5d5d5",
        imgStyle: { height: "45.397px", left: "-13.27px", top: "2.1px", width: "51.682px" },
        position: { left: 98, top: -34 },
        size: "small",
        blur: true
      },
      {
        id: 1,
        name: "Michaela Reyes",
        title: "Sales Manager",
        salary: "$1,680 /mo",
        match: "86% MATCHED",
        image: img2150103645,
        bg: "silver",
        imgStyle: { height: "66.349px", left: "-8.03px", top: "-3.49px", width: "44px" },
        position: { left: 98, top: 210 },
        size: "small",
        blur: true
      }
    ]
  }
];

function ProfileCard({ profile }: { profile: any }) {
  const isLarge = profile.size === "large";
  
  if (isLarge) {
    return (
      <motion.div 
        className="absolute bg-white box-border content-stretch flex flex-col gap-[7.425px] items-start overflow-clip p-[11.137px] rounded-[7.425px] shadow-[0px_3.849px_15.396px_3.849px_rgba(0,0,0,0.08)] w-[282.133px]"
        initial={false}
        animate={{
          left: profile.position.left,
          top: profile.position.top,
          filter: profile.blur ? 'blur(1px)' : 'blur(0px)',
          scale: 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.42, 0, 1, 1], // easeIn cubic-bezier
        }}
      >
        <div className="content-stretch flex gap-[7.425px] h-[37.123px] items-center relative shrink-0 w-full">
          <div className={`bg-[${profile.bg}] overflow-clip relative rounded-[116.009px] shrink-0 size-[37.123px]`}>
            <div className="absolute" style={profile.imgStyle}>
              <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={profile.image} />
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[3.712px] grow items-start leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 tracking-[0.1856px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[12.993px] text-nowrap whitespace-pre">{profile.name}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#616161] text-[11.137px] w-min">{profile.title}</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[16.705px] h-[20.418px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[9.281px] items-center justify-center relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[11.137px] text-nowrap tracking-[0.1856px] whitespace-pre">{profile.salary}</p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[11.137px] text-nowrap tracking-[0.1856px] whitespace-pre">2-5 years</p>
          <div className="bg-[rgba(39,174,96,0.08)] box-border content-stretch flex gap-2 h-[18.561px] items-center justify-center px-2 py-1 relative rounded-[4.252px] shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#27ae60] text-[9.281px] text-nowrap tracking-[0.1856px] uppercase whitespace-pre">{profile.match}</p>
          </div>
        </div>
        <div className="box-border content-stretch flex h-[22.274px] items-center justify-between px-0 py-[3.712px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[7.425px] items-center relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#c3c3c3] text-[11.137px] text-nowrap tracking-[0.1856px] whitespace-pre">Activity Title</p>
          </div>
          <div className="bg-neutral-200 content-stretch flex gap-[9.281px] items-center relative rounded-[92.807px] shrink-0">
            <div className="relative shrink-0 size-[14.849px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g>
                  <path d={svgPaths.p23b4f200} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      className="absolute bg-white box-border content-stretch flex flex-col gap-[5.587px] items-start overflow-clip p-[8.381px] rounded-[5.587px] shadow-[0px_2.897px_11.586px_2.897px_rgba(0,0,0,0.08)] w-[212.317px]"
      initial={false}
      animate={{
        left: profile.position.left,
        top: profile.position.top,
        filter: profile.blur ? 'blur(1px)' : 'blur(0px)',
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        ease: [0.42, 0, 1, 1], // easeIn cubic-bezier
      }}
    >
      <div className="content-stretch flex gap-[5.587px] h-[27.936px] items-center relative shrink-0 w-full">
        <div className={`bg-[${profile.bg}] overflow-clip relative rounded-[87.302px] shrink-0 size-[27.936px]`}>
          <div className="absolute" style={profile.imgStyle}>
            <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={profile.image} />
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[2.794px] grow items-start leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 tracking-[0.1397px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[9.778px] text-nowrap whitespace-pre">{profile.name}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#616161] text-[8.381px] w-min">{profile.title}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[12.571px] h-[15.365px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[6.984px] items-center justify-center relative shrink-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">{profile.salary}</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">2-5 years</p>
        <div className="bg-[rgba(39,174,96,0.08)] box-border content-stretch flex gap-2 h-[13.968px] items-center justify-center px-2 py-1 relative rounded-[3.2px] shrink-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#27ae60] text-[6.984px] text-nowrap tracking-[0.1397px] uppercase whitespace-pre">{profile.match}</p>
        </div>
      </div>
      <div className="box-border content-stretch flex h-[16.762px] items-center justify-between px-0 py-[2.794px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[5.587px] items-center relative shrink-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#c3c3c3] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">Activity Title</p>
        </div>
        <div className="bg-neutral-200 content-stretch flex gap-[6.984px] items-center relative rounded-[69.841px] shrink-0">
          <div className="relative shrink-0 size-[11.175px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <g>
                <path d={svgPaths.p101ae00} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % profileConfigs.length);
      }, 1000);
    } else {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const currentConfig = profileConfigs[currentIndex];

  return (
    <div>
     <h1 className={`text-[24px] font-semibold tracking-normal mb-2 leading-normal text-black ${dmSans.className}`}>See every candidate. Miss nothing.</h1>
    <p className={`mb-4 text-black text-[20px] font-normal leading-normal tracking-normal ${inter.className}`}>No more "Wait, who was that designer from last week?" moments.</p>
    <div className="bg-neutral-50 relative size-full mt-15">
      <div 
        className="box-border content-stretch flex flex-col gap-2.5 items-start p-2  h-[300px] overflow-hidden border border-gray-200 rounded-xl shadow-sm bg-white outline outline-gray-300 outline-offset-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-2xl shadow-[0px_2px_32px_2px_rgba(0,36,64,0.1)]" />
        <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-lg shrink-0 w-full">
          <div className="overflow-clip relative rounded-[inherit] size-full">
          {currentConfig.profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        
        </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}
