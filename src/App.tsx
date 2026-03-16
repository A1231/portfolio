import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import LandingPage from "./pages/LandingPage"
import ProjectsPage from "./pages/ProjectsPage"
import ExperiencePage from "./pages/ExperiencePage"
import EducationPage from "./pages/EducationPage"
import ContactPage from "./pages/ContactPage"
import Footer from "./components/Footer"
function App() {
  return (
   
    <div className="bg-bg text-text w-full flex flex-col min-h-screen justify-center font-sans">
      <Header />
       <main className="flex-1 flex flex-col">
       <Routes>
      <Route path="/" element={<LandingPage />} />
    
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
       </main>
    <Footer/>
      
    </div>
  )
}


export default App