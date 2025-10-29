import { useTheme } from "./ThemeSwitcher";

interface ProjectListProps {
  title: string;
  tools: string[];
  desc: string;
  thumbnail: string;
}

const ProjectCard = ({title, tools, desc, thumbnail}: ProjectListProps) => {

  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col shadow-xl rounded-b-xl w-full h-83 font-roboto ${theme === true ? "bg-white" : "bg-[#dc0103]"}`}
    >

      {/* image */}
      <div
        className="min-h-[190.12px] bg-gray-400 rounded-xl w-full relative overflow-hidden"
      >
        <img
          src={thumbnail}
          alt="project-thumbnail"
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* title and desc */}
      <div 
        className="m-3" // ini nanti diganti dengan m-[12px]
      >

        {/* title */}
        <h2
          className="text-[18px] font-bold "
        >
          {title}
        </h2>

        {/* tools */}
        <p
          className="text-[12px] italic"
          >
          {tools.join(", ")}
        </p>

        <hr className="my-2"/>

          {/* desc */}
        <p
          className="text-[12px] line-clamp-3"
        >
          {desc}
        </p>
      </div>

    </div>
  )
}

export default ProjectCard;