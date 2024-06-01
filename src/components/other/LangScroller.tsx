import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiHtml5Fill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const LangScroller = () => {
  return (
    <>
      <div className="flex space-x-16 [mask-image:linear-gradient(to_right,rgba(0,0,0,0),_rgba(0,0,0,1)_20%,_rgba(0,0,0,1)_80%,_rgba(0,0,0,0))] ">
        <div className="flex space-x-16 animate-brandScroller opacity-80">
          <DiJavascript1 size={30} className="aspect-square max-w-none" />
          <RiHtml5Fill size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <FaReact size={30} className="aspect-square max-w-none" />
          <DiJavascript1 size={30} className="aspect-square max-w-none" />
          <RiHtml5Fill size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <FaReact size={30} className="aspect-square max-w-none" />
        </div>
        <div
          className="flex space-x-16 animate-brandScroller opacity-80"
          aria-hidden="true"
        >
          <DiJavascript1 size={30} className="aspect-square max-w-none" />
          <RiHtml5Fill size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <FaReact size={30} className="aspect-square max-w-none" />
          <DiJavascript1 size={30} className="aspect-square max-w-none" />
          <RiHtml5Fill size={30} className="aspect-square max-w-none" />
          <SiTypescript size={30} className="aspect-square max-w-none" />
          <FaReact size={30} className="aspect-square max-w-none" />
        </div>
      </div>
    </>
  );
};

export { LangScroller };
