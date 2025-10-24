import { NavLink } from "react-router-dom"
import { navLinks } from "../data/navLinks"

const Navbar = () => {
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
      </nav>
    </>
  )
}

export default Navbar;