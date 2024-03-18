import About from "./Pages/About/About";
import Service from "./service/Service";
import Layout from "./components/Layouts/Layout";
import Skill from './Pages/Skills/Skill';
import Project from "./Pages/Projects/Project";
import Education from "./Pages/Educations/Education";
import Contact from "./Pages/Contacts/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import MobileMenu from "./components/MobileNav/MobileMenu";
import { ToastContainer } from 'react-toastify';
import Fade from 'react-reveal/Fade'
import Testo from './Pages/testomonials/Testo';
;
function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
   
    <ToastContainer
    position="top-center" />
    
    <MobileMenu />
      <Layout />
      <div className="container">
        <About />
        <Service/>
        <Fade top distance = "20%" duration = {1500}>
        <Education/>
        <Skill/>
      <Project/>
      <Testo/>
      <Contact/>
      </Fade>
      </div>
      <footer class=" py-2 mt-5 " >
        <div class="container text-light footer-text">
            <small class="text-white-50 ">&copy; 2024 Minhaz Ashraf. All rights rsesrved</small>
        </div>
    </footer>
    </div>
      <ScrollToTop
        smooth
        color="#ffff"
        style={{ backgroundColor: "#a434fa", borderRadius: "80px" }}
      />
     
    </>
  );
}

export default App;