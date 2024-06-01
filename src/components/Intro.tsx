import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Countdown } from "@/components/hexta-ui/Countdown";

const Intro = () => {
  const containerRef = useRef(null!);

  useEffect(() => {
    gsap.to((containerRef.current as HTMLDivElement).children, {
      y: "-1000px",
      border: "1px solid rgb(82 82 91)",
      stagger: 0.2,
      duration: 1,
      delay: 2.7,
      ease: "circ.inOut",
    });
    gsap.to(containerRef.current, {
      display: "none",
      delay: 4,
    });
  }, []);

  return (
    <>
      <div
        className=" flex fixed  w-dvw h-dvh z-[999999999999]"
        ref={containerRef}
      >
        <div className="w-[20%] border border-zinc-950 bg-zinc-950 h-dvh z-[99999999]"></div>
        <div className="w-[20%] border border-zinc-950 bg-zinc-950 h-dvh z-[99999999]"></div>
        <div className="w-[20%] border border-zinc-950 bg-zinc-950 h-dvh z-[99999999] flex items-center justify-center">
          <Countdown fontSize={40} end={100} duration={2.6} />
          <span className="font-bold text-[40px]">%</span>
        </div>
        <div className="w-[20%] border border-zinc-950 bg-zinc-950 h-dvh z-[9999999]"></div>
        <div className="w-[20%] border border-zinc-950 bg-zinc-950 h-dvh z-[9999999]"></div>
      </div>
    </>
  );
};

export { Intro };
