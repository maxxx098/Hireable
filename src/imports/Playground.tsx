import svgPaths from "./svg-4vfx8bbtbq";
import Image from "next/image";
import img18244 from "@/assets/235782d8086475c93db888c87923534addc3d2d8.png";
import img3414 from "@/assets/a325a4a607785e1872f7b28dcef5981e648dcf8d.png";
import img2150103645 from "@assets/a677084cf20bc8cbde24c6b5a0916a48f2cb0468.png";

function Avatars() {
  return (
    <div className="bg-[#dfe4ef] overflow-clip relative rounded-[116.009px] shrink-0 size-[37.123px]" data-name="Avatars">
      <div className="absolute h-[77.03px] left-[-62.18px] top-0 w-[116.009px]" data-name="18244">
        <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img18244.src} />
      </div>
    </div>
  );
}

function NameTitle() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3.712px] grow items-start leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 tracking-[0.1856px]" data-name="Name + Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[12.993px] text-nowrap whitespace-pre">Camille Mercado</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#616161] text-[11.137px] w-min">Marketing Specialist</p>
    </div>
  );
}

function Dpc() {
  return (
    <div className="content-stretch flex gap-[7.425px] h-[37.123px] items-center relative shrink-0 w-full" data-name="DPC">
      <Avatars />
      <NameTitle />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[9.281px] items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[11.137px] text-nowrap tracking-[0.1856px] whitespace-pre">$1,780 /mo</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(39,174,96,0.08)] box-border content-stretch flex gap-2 h-[18.561px] items-center justify-center px-2 py-1 relative rounded-[4.252px] shrink-0" data-name="Badge">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#27ae60] text-[9.281px] text-nowrap tracking-[0.1856px] uppercase whitespace-pre">82% MATCHED</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16.705px] h-[20.418px] items-center relative shrink-0 w-full">
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[11.137px] text-nowrap tracking-[0.1856px] whitespace-pre">2-5 years</p>
      <Badge />
    </div>
  );
}

function Comments() {
  return (
    <div className="content-stretch flex gap-[7.425px] items-center relative shrink-0" data-name="Comments">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#c3c3c3] text-[11.137px] text-nowrap tracking-[0.1856px] whitespace-pre">Activity Title</p>
    </div>
  );
}

function IconComponents() {
  return (
    <div className="relative shrink-0 size-[14.849px]" data-name="Icon Components">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon Components">
          <path d={svgPaths.p23b4f200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-neutral-200 content-stretch flex gap-[9.281px] items-center relative rounded-[92.807px] shrink-0">
      <IconComponents />
    </div>
  );
}

function Activity() {
  return (
    <div className="box-border content-stretch flex h-[22.274px] items-center justify-between px-0 py-[3.712px] relative shrink-0 w-full" data-name="Activity">
      <Comments />
      <Frame2 />
    </div>
  );
}

function Profile2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[7.425px] items-start left-[63px] overflow-clip p-[11.137px] rounded-[7.425px] shadow-[0px_3.849px_15.396px_3.849px_rgba(0,0,0,0.08)] top-[76px] w-[282.133px]" data-name="Profile_03">
      <Dpc />
      <Frame />
      <Activity />
    </div>
  );
}

function Avatars1() {
  return (
    <div className="bg-[#d5d5d5] overflow-clip relative rounded-[87.302px] shrink-0 size-[27.936px]" data-name="Avatars">
      <div className="absolute h-[45.397px] left-[-13.27px] top-[2.1px] w-[51.682px]" data-name="3414">
        <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3414.src} />
      </div>
    </div>
  );
}

function NameTitle1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.794px] grow items-start leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 tracking-[0.1397px]" data-name="Name + Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[9.778px] text-nowrap whitespace-pre">Jethro Soriano</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#616161] text-[8.381px] w-min">Graphic Designer</p>
    </div>
  );
}

function Dpc1() {
  return (
    <div className="content-stretch flex gap-[5.587px] h-[27.936px] items-center relative shrink-0 w-full" data-name="DPC">
      <Avatars1 />
      <NameTitle1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6.984px] items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">$1,980 /mo</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[rgba(39,174,96,0.08)] box-border content-stretch flex gap-2 h-[13.968px] items-center justify-center px-2 py-1 relative rounded-[3.2px] shrink-0" data-name="Badge">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#27ae60] text-[6.984px] text-nowrap tracking-[0.1397px] uppercase whitespace-pre">84% MATCHED</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12.571px] h-[15.365px] items-center relative shrink-0 w-full">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">2-5 years</p>
      <Badge1 />
    </div>
  );
}

function Comments1() {
  return (
    <div className="content-stretch flex gap-[5.587px] items-center relative shrink-0" data-name="Comments">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#c3c3c3] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">Activity Title</p>
    </div>
  );
}

function IconComponents1() {
  return (
    <div className="relative shrink-0 size-[11.175px]" data-name="Icon Components">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Components">
          <path d={svgPaths.p101ae00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-neutral-200 content-stretch flex gap-[6.984px] items-center relative rounded-[69.841px] shrink-0">
      <IconComponents1 />
    </div>
  );
}

function Activity1() {
  return (
    <div className="box-border content-stretch flex h-[16.762px] items-center justify-between px-0 py-[2.794px] relative shrink-0 w-full" data-name="Activity">
      <Comments1 />
      <Frame5 />
    </div>
  );
}

function Profile1() {
  return (
    <div className="absolute bg-white blur-[1px] box-border content-stretch filter flex flex-col gap-[5.587px] items-start left-[98px] overflow-clip p-[8.381px] rounded-[5.587px] shadow-[0px_2.897px_11.586px_2.897px_rgba(0,0,0,0.08)] -top-8 w-[212.317px]" data-name="Profile_02">
      <Dpc1 />
      <Frame1 />
      <Activity1 />
    </div>
  );
}

function Avatars2() {
  return (
    <div className="bg-[silver] overflow-clip relative rounded-[87.302px] shrink-0 size-[27.936px]" data-name="Avatars">
      <div className="absolute h-[66.349px] left-[-8.03px] top-[-3.49px] w-11" data-name="2150103645">
        <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2150103645.src} />
      </div>
    </div>
  );
}

function NameTitle2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.794px] grow items-start leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 tracking-[0.1397px]" data-name="Name + Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[9.778px] text-nowrap whitespace-pre">Michaela Reyes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#616161] text-[8.381px] w-min">Sales Manager</p>
    </div>
  );
}

function Dpc2() {
  return (
    <div className="content-stretch flex gap-[5.587px] h-[27.936px] items-center relative shrink-0 w-full" data-name="DPC">
      <Avatars2 />
      <NameTitle2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[6.984px] items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">$1,680 /mo</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[rgba(39,174,96,0.08)] box-border content-stretch flex gap-2 h-[13.968px] items-center justify-center px-2 py-1 relative rounded-[3.2px] shrink-0" data-name="Badge">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#27ae60] text-[6.984px] text-nowrap tracking-[0.1397px] uppercase whitespace-pre">86% MATCHED</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12.571px] h-[15.365px] items-center relative shrink-0 w-full">
      <Frame6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#212121] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">2-5 years</p>
      <Badge2 />
    </div>
  );
}

function Comments2() {
  return (
    <div className="content-stretch flex gap-[5.587px] items-center relative shrink-0" data-name="Comments">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#c3c3c3] text-[8.381px] text-nowrap tracking-[0.1397px] whitespace-pre">Activity Title</p>
    </div>
  );
}

function IconComponents2() {
  return (
    <div className="relative shrink-0 size-[11.175px]" data-name="Icon Components">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Components">
          <path d={svgPaths.p101ae00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-neutral-200 content-stretch flex gap-[6.984px] items-center relative rounded-[69.841px] shrink-0">
      <IconComponents2 />
    </div>
  );
}

function Activity2() {
  return (
    <div className="box-border content-stretch flex h-[16.762px] items-center justify-between px-0 py-[2.794px] relative shrink-0 w-full" data-name="Activity">
      <Comments2 />
      <Frame8 />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute bg-white blur-[1px] box-border content-stretch filter flex flex-col gap-[5.587px] items-start left-[98px] overflow-clip p-[8.381px] rounded-[5.587px] shadow-[0px_2.897px_11.586px_2.897px_rgba(0,0,0,0.08)] top-[212.94px] w-[212.317px]" data-name="Profile_01">
      <Dpc2 />
      <Frame7 />
      <Activity2 />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-lg shrink-0 w-full" data-name="container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Profile2 />
        <Profile1 />
        <Profile />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function LottieFile() {
  return (
    <div className="absolute bg-[#f2f2f2] box-border content-stretch flex flex-col gap-2.5 h-[280px] items-start left-1/2 p-2 rounded-2xl top-1/2 translate-x-[-50%] translate-y-[-50%] w-[424px]" data-name="lottie file_03">
      <div aria-hidden="true" className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_2px_32px_2px_rgba(0,36,64,0.1)]" />
      <Container />
    </div>
  );
}

export default function Playground() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="Playground">
      <LottieFile />
    </div>
  );
}