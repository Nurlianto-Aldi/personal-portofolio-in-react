import { NavLink } from "react-router-dom"
import { navLinks } from "../data/navLinks"
import { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="flex items-center justify-center w-full h-[90px] shadow-xl px-4 sm:px-6"
      >
        <ul
          className="hidden md:flex flex-row items-center justify-center gap-16 text-lg"
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