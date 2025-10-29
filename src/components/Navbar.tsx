import { NavLink } from "react-router-dom"
import { navLinks } from "../data/navLinks"
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "./ThemeSwitcher";
import { useAudioControls } from './DarkModeAudio';

const Navbar = () => {

  const { theme, handleTheme } = useTheme();

  const { audioRef, toggleAudio } = useAudioControls();

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      <nav
        className={`relative z-10 flex items-center justify-between w-full h-[90px] shadow-xl px-4 sm:px-6 font-roboto 
          ${theme === true ? "bg-white text-[#2b2b23]" : "bg-contain bg-no-repeat bg-center bg-[#dc0103] bg-blend-overlay text-black"}
          `}
          // bg-[url('/batman-pattinson.png')]
      >

        <div className="w-43 h-10 rounded-full">

        </div>

        <ul
          className="hidden md:flex flex-row items-center justify-center gap-16 text-lg  tracking-widest"
        >
          {navLinks.map((link) => (
            <li
              key={link.href}
            > 
              <NavLink 
                to={link.href}
                className={({ isActive }) => 
                  `hover:underline underline-offset-8 cursor-pointer
                  ${isActive ? "font-bold underline" : ""}`}
                  >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className="flex items-center justify-between w-43"
        >

          <audio
            ref={audioRef}
            src="/The Batman Something in the Way but only the good part (2023).mp3"
            preload="auto"
            style={{ display: 'none' }}
          />

          {/* dark mode button */}
          <span>
            {theme === true ? "Dark Mode" : "No, too dark!"}
          </span>
          <div
            className="flex items-center justify-center px-2 w-20 h-10 rounded-full  shadow-[inset_-20px_-20px_50px_#46464620]"
          >

           <div
            className={`relative flex items-center w-full outline-1 outline-gray-100 rounded-full bg-white`}
           >
              <button
              onClick={() => {
                handleTheme();
                toggleAudio();
              }}
                className={`bg-gray-500 h-7 w-7 rounded-full cursor-pointer transition-transform duration-500 ${
                  theme === true ? "translate-x-0" : "translate-x-9" 
                }`}
              >
                
              </button>
            
            </div> 
          </div>

        </div>

        <div className="md:hidden ml-auto">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
          <Icon icon="ci:hamburger-lg" width={30} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-screen w-3/4 bg-white z-50 shadow-2xl flex flex-col p-8">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <Icon icon="ci:close-big" width={30} />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-10 text-2xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "font-bold underline" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      </nav>
    </>
  )
}

export default Navbar;