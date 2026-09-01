import Header from "./components/Header"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Experience from "./components/Experience";
import Education from "./components/Education";
import  Projects from "./components/Projects";
import  Certifications from "./components/Certifications";
import  Achievements from "./components/Achievements";
import  AllAchievements from "./components/AllAchievements";
import ThemeToggle from "./components/ThemeToggle";
import Services from "./components/Services";
import Learning from "./components/Learning";
import Contact from "./components/Contact"





function App() {
  return (
    <main>
      <Header/>
      <Hero />
      <About/>
      <Skills/>
      {/* <Experience/> */}
      <Education/>
      <Projects/>
      <Certifications/>
      <Achievements/>
      <AllAchievements/>
       <ThemeToggle />
       <Services/>
       <Learning/>
       <Contact/>
    </main>
  );
}

export default App;