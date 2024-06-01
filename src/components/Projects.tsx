import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      name: "lorem ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://pro.ui.hextastudio.in",
    },
    {
      name: "lorem ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://pro.ui.hextastudio.in",
    },
    {
      name: "lorem ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://pro.ui.hextastudio.in",
    },
    {
      name: "lorem ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://pro.ui.hextastudio.in",
    },
    {
      name: "lorem ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://pro.ui.hextastudio.in",
    },
  ];
  return (
    <>
      <div className="max-w-[60rem] w-[90%] mx-auto flex flex-col gap-7 my-[5rem] overflow-x-hidden">
        <h2 className="text-4xl font-bold text-left mb-[2rem]">Projects.</h2>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.link, "_blank")}
              className="group w-full border-b border-b-white border-opacity-10  pb-4 pt-2 my-2 cursor-pointer flex justify-between items-center gap-3"
            >
              <div className="flex flex-col">
                <h3 className="text-md font-semibold">{project.name}</h3>
                <p className="text-sm opacity-60">{project.description}</p>
              </div>
              <div>
                <FiExternalLink
                  size={22}
                  className="opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { Projects };
