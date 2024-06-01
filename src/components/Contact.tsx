import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AnimatedDock } from "./other/Dock";

const Contact = () => {
  return (
    <>
      <div className="max-w-[60rem] w-[90%] overflow-x-hidden mx-auto flex flex-col gap-7 my-[5rem]">
        <h2 className="text-4xl font-bold mb-[2rem]">Let's Get In Touch!</h2>
        <AnimatedDock
          items={[
            {
              link: "https://github.com/preetsuthar17",
              target: "_blank",
              Icon: <FaGithub size={22} />,
            },
            {
              link: "https://x.com/preetsuthar17",
              target: "_blank",
              Icon: <FaXTwitter size={22} />,
            },
            {
              link: "https://dsc.gg/hextastudio",
              target: "_blank",
              Icon: <FaDiscord size={22} />,
            },
            {
              link: "https://linkedin.com/in/preetsuthar17",
              target: "_blank",
              Icon: <FaLinkedin size={22} />,
            },
          ]}
        />
      </div>
    </>
  );
};

export { Contact };
