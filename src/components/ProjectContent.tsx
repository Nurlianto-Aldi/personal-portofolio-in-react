import { useParams } from "react-router-dom";
import { projectList } from "../data/projects";
import { useTheme } from "./ThemeSwitcher";

const ProjectContent = () => {
  const { projectId } = useParams();

  const { theme } = useTheme()

  const project = projectList.find((p) => p.id.toString() === projectId);

  if (!project) {
    return (
      <div className="text-center p-12">
        <h1 className="text-4xl font-bold">404 - Project Not Found</h1>
        <p className="mt-4">Sorry, we couldn't find the project you were looking for.</p>
      </div>
    );
  }

  return (
    <div className={`p-5 md:p-12 lg:py-[90px] lg:px-[300px] font-roboto min-h-[calc(100vh-90px)] ${theme === true ? "bg-white bg-[url('/pattern.png')] text-[#2b2b23]" : "bg-contain bg-no-repeat bg-center bg-[#dc0103] bg-blend-overlay text-black"}`}>
      <div
        className={`${theme === true ? "bg-white" : "bg-[#dc0103] bg-[url('/batman-pattinson.png')] bg-contain bg-no-repeat bg-center bg-blend-overlay"} px-8 py-12 rounded-md shadow-2xl`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{project.title}</h1>
        <hr className="my-2 mt-8"/>
        <h2 className=" italic">Tools: {project.tools.join(", ")}</h2>
        <p className="italic mt-2">
          See the project live:{" "}
          <a
            href={project.projLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Live Demo
          </a>
        </p>

        <hr className="my-2"/>

        <div className="mt-8 text-justify">
          {project.content.map((item, index) => { // Parameter 'item' sudah benar
            switch (item.type) { // Menggunakan 'item.type'
              case "text":
                return <p key={index} className="mb-4 leading-relaxed">{item.text}</p>; // Menggunakan 'item.text'
              case "subHeader":
                return <h2 key={index} className="text-2xl font-bold my-4">{item.text}</h2>; // Menggunakan 'item.text'
              case "image":
              case "video":
                return (
                  <img
                    key={index}
                    src={item.src} // Menggunakan 'item.src'
                    alt={item.alt || `Content for ${project.title}`}
                    className="w-full max-w-lg h-60 bg-gray-200 my-6 object-cover rounded-lg mx-auto block"
                  />
                );
              case "list":
                return (
                  <ul key={index} className="list-disc list-outside mx-4 my-4 space-y-2">
                    {item.items?.map((listItem, itemIndex) => ( // Menggunakan 'item.items'
                      <li key={itemIndex}>{listItem}</li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>

      </div>
      
    </div>
  );
};

export default ProjectContent;