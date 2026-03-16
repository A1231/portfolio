import { Link, NavLink } from "react-router-dom"
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

        

    {/*Mobile Menu*/}
    

        <div className="bg-surface/50 border border-border rounded-md p-2 fixed top-2.5 right-5 z-50 sm:hidden cursor-pointer">
      {!isOpen && <Menu onClick={toggleMenu}  />}
      {isOpen && <X onClick={toggleMenu}  />}
      </div>

      <div className="justify-end sm:hidden fixed inset-x-0 top-10 flex flex-col gap-4 items-center">
      
      {isOpen && (
        <>
        
         
            <Link to="/projects"> <div className="bg-surface/50 border border-border rounded-md p-1 flex flex-col gap-4 w-full items-center hover:bg-accent-light/20">Projects</div></Link> 
            
            <Link to="/experience">Experience</Link>
            <Link to="/education">Education</Link>
            <Link to="/contact">Contact</Link>
    
            </>)}

        </div>

        
        </>
    
  )
}

export default Navbar