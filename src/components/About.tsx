import Image from "next/image";
import { LangScroller } from "./other/LangScroller";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-10 max-[1170px]:flex-col max-w-[60rem] w-[90%] mx-auto relative py-[10rem]">
        <div className="w-full h-[5rem] bg-gradient-to-r from-cyan-600 to-pink-600 mx-auto absolute top-[30rem] blur-[100px] opacity-50 z-[1]"></div>
        <div className="flex-[2] flex flex-col gap-8 z-[999]">
          <h1 className="text-4xl font-bold">Hello There! 👋</h1>
          <p className="opacity-90 text-md max-sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio
            vel magni. Aliquid aliquam fuga provident ut, sequi explicabo
            laborum.
          </p>
          <p className="opacity-90 text-md max-sm:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            aspernatur atque voluptatem excepturi minus, optio facere
            consequatur. Provident, consequatur repudiandae.
          </p>
          <div className="max-w-[35rem] max-sm:max-w-[20rem] max-sm:mx-auto max-[354px]:max-w-[10rem] mr-auto">
            <LangScroller />
          </div>
        </div>
        <div className="flex-[1] flex relative rounded-md">
          <div className="rounded-[inherit] [border:calc(1.9*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]  absolute inset-0 rounded-inherit border-2 border-transparent !mask-clip-padding-box-border-box after:absolute after:aspect-square after:w-[250px] after:animate-animatedBeam after:bg-gradient-to-l after:from-purple-500 after:via-purple-950 after:to-transparent after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_250px)] z-[9999]"></div>
          <Image
            width={1620}
            height={2000}
            className="max-w-full w-full h-auto rounded-md  z-[999]"
            src={
              "https://images.unsplash.com/photo-1547992087-e67e3944257e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="About Image"
          />
        </div>
      </div>
    </>
  );
};

export { About };
