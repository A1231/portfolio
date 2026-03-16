
import { SiGithub } from "react-icons/si"
import { SlSocialLinkedin } from "react-icons/sl"
import { Link } from "react-router-dom"

function Socials() {
    return (
        <div className="flex gap-2">
           <Link to="https://github.com/A1231" 
           className="border border-border rounded-md p-2 cursor-pointer"> 
           <SiGithub size={24} style={{ color: "#ffffff" }} /></Link>

           <Link to="https://linkedin.com/in/apoorva--iyer" 
           className="border border-border rounded-md p-2 cursor-pointer"> 
           <SlSocialLinkedin size={24} style={{ color: "#0A66C2" }} /></Link>
        </div>
    )
}

export default Socials