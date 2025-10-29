import { Icon } from "@iconify/react"
import { useTheme } from "../components/ThemeSwitcher";

const AboutPage = () => {

  const { theme } = useTheme();


  return (
    <main
        className={`flex flex-col items-center justify-center min-h-[calc(100vh-90px)] p-24 max-lg:p-16 max-sm:p-6 font-roboto ${theme === true ? "bg-white bg-[url('/pattern.png')] text-[#2b2b23]" : "bg-[url('/batman-pattinson.png')] bg-contain bg-repeat bg-center bg-[#dc0103] bg-blend-overlay text-black"}`}
      >

        <div
          className="flex flex-row items-center justify-center w-[800px] max-w-full gap-6 md:gap-12 lg:gap-4 max-md:flex-col max-md:text-center"
        >

          {/* image and social */}
          <div 
            className={`flex flex-col items-center justify-between lg:min-h-120 lg:min-w-[200px] px-5 py-8 outline-2 rounded-xl shadow-xl ${theme === true ? "bg-white outline-gray-100" : " bg-[#dc0103] outline-[#2b2b23]"}`}
          >

            {/* image */}
            <div
            
            className="flex flex-col gap-4 items-center">
              <div
                className="bg-gray-400 rounded-full w-[180px] h-[180px] shrink-0 max-sm:w-[150px] max-sm:h-[150px] relative overflow-hidden"
              >
                <img
                  src={theme === true ? "/IMG_1154 - crop (1).png" : "/g2.png"}
                  // src="/IMG_1154 - crop (1).png"
                  alt="nurlianto-aldi"
                  className=" w-full h-full object-cover"
                />
              </div>
              <p className="text-center">JavaScript | Python | Next.js | React.js | Tailwind CSS | TypeScript</p>
            </div>

            {/* social */}
            <div
              className="flex flex-row gap-8 mt-8 max-md:justify-center"
            >
              <a href="https://github.com/Nurlianto-Aldi" target="_blank" rel="noopener noreferrer"><Icon icon="skill-icons:github-dark" width={37.5} height={37.5} aria-label="GitHub" /></a>
              <a href="https://www.linkedin.com/in/nurlianto-aldi" target="_blank" rel="noopener noreferrer"><Icon icon="skill-icons:linkedin" width={37.5} height={37.5} aria-label="LinkedIn" /></a>
              <a href="https://www.instagram.com/nurlianto_aldi/" target="_blank" rel="noopener noreferrer"><Icon icon="skill-icons:instagram" width={37.5} height={37.5} aria-label="Instagram" /></a>
            </div>            
          </div>

          {/* name and desc */}
          <div
            className={`flex flex-col lg:min-h-120 lg:min-w-140 lg:max-w-140 gap-6 px-5 py-8 outline-2 rounded-xl shadow-xl ${theme === true ? "bg-white outline-gray-100" : "bg-[#dc0103] outline-[#2b2b23]"}`}
          >
            <h1
              className="text-5xl font-bold m-0 p-0 max-sm:text-4xl"
            >
              {theme === true ? "Nurlianto Aldi" : "I'm Batman"}
            </h1>
            <p
              className="m-0 p-0"
            >
              {theme === true ? "I am a Front-End Web Developer with a distinctive background in Marketing Management, where I spent over three years driving growth and operational efficiency in startup settings. This transition has armed me with a powerful combination of technical expertise and business insight." : 
              "I'm Batman! Basically. I wake up at night like a bat, fighting crime (bugs), and having black shade around my eye. I'm basically Batman. "}
              {/* I am a Front-End Web Developer with a distinctive background in Marketing Management, where I spent over three years driving growth and operational efficiency in startup settings. This transition has armed me with a powerful combination of technical expertise and business insight. */}
            </p>
            <p
              className="m-0 p-0"
            >
              {theme === true ? "I build robust applications using React.js, Next.js, TypeScript, and Tailwind CSS. Crucially, my history in business strategy, market analysis, and negotiation translates directly into strong project management, stakeholder communication, and solution-driven problem-solving. I am eager to leverage this unique duality to create user-centric and scalable software that directly supports high-level business goals and accelerates company development." : ""}
              {/* I build robust applications using React.js, Next.js, TypeScript, and Tailwind CSS. Crucially, my history in business strategy, market analysis, and negotiation translates directly into strong project management, stakeholder communication, and solution-driven problem-solving. I am eager to leverage this unique duality to create user-centric and scalable software that directly supports high-level business goals and accelerates company development. */}
            </p>

          </div>
        </div>
      </main>
  )
}

export default AboutPage;