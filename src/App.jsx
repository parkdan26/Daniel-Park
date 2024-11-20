import Header from "./components/header"
import Intro from "./components/intro"
import Bio from "./components/bio"
import Project from "./components/projects"
import Footer from "./components/footer"

export default function App() {
  return (
    <>
      <section className = "min-h-[95vh]">
        <Header/>
        <Intro/>` 
      </section>
      <section id = "Bio" className = "min-h-[50vh]">
        <Bio/>
      </section>
      <section id = "Projects" className = "min-h-[90vh] max-lg:[90vh]">
        <Project/>
      </section>
      <section id = "Contact"className = "min-h-[15vh]">
        <Footer/>
      </section>
    </>
  )
}