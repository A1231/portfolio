import {Menu, X} from "lucide-react"
import { useState } from "react"
import NavItem from "./NavItem"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <>
    

        {/*Desktop Menu*/}
        <div className="hidden sm:flex gap-2 font-sans p-2 shrink  min-w-0 flex-wrap">
        <NavItem to="/">home</NavItem>
         

        <NavItem to="/projects">projects</NavItem>

        <NavItem to="/experience">experience</NavItem>

        <NavItem to="/education">education</NavItem>

        <NavItem to="/contact">contact</NavItem>

        
        
        </div>

        

    {/*Mobile Menu - Drawer */}
        <div className="bg-surface/50 border border-border rounded-md p-2 fixed top-2.5 right-5 z-60 sm:hidden cursor-pointer">
          {!isOpen && <Menu onClick={toggleMenu} />}
          {isOpen && <X onClick={toggleMenu} />}
        </div>

        {/* Backdrop - blur overlay */}
        <div
          className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
          aria-hidden={!isOpen}
        >
          <div className="absolute inset-0 bg-bg/60 backdrop-blur-sm" />
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 max-w-[85vw] bg-surface border-l border-border z-50 sm:hidden
            flex flex-col gap-6 pt-16 px-6 shadow-xl
            transition-transform duration-300 ease-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <NavItem to="/" onClick={toggleMenu}>home</NavItem>
          <NavItem to="/projects" onClick={toggleMenu}>projects</NavItem>
          <NavItem to="/experience" onClick={toggleMenu}>experience</NavItem>
          <NavItem to="/education" onClick={toggleMenu}>education</NavItem>
          <NavItem to="/contact" onClick={toggleMenu}>contact</NavItem>
        </div>

        
        </>
    
  )
}

export default Navbar