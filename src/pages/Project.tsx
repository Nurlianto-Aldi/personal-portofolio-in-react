import { Link } from "react-router-dom";
import { projectList } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useTheme } from "../components/ThemeSwitcher";

const ProjectPage = () => {

  const { theme } = useTheme()

  if(!projectList) {
    return (
      <main className="flex h-[80vh] flex-col items-center justify-center p-[90px]">
        <h1 className="text-4xl font-bold">Sorry, there is no project right now!</h1>
        <h2 className="mt-4 text-xl">Please come back later</h2>
      </main>
    )
  }

  return (
    <main className={`p-5 md:p-12 lg:p-[90px] min-h-[calc(100vh-90px)] ${theme === true ? "bg-white text-[#2b2b23]" : "bg-[url('/batman-pattinson.png')] bg-contain bg-no-repeat bg-center bg-[#dc0103] bg-blend-overlay text-black"}`}>
      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectList.map((project) => (
          <li
            key={project.id}
          >
            <Link
              to={`/project/${project.id}`}
            >
              <ProjectCard
                title={project.title}
                tools={project.tools}
                desc={project.desc}
                thumbnail={project.thumbnail}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ProjectPage;