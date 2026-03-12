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
      <section id = "Contact"className = "min-h-[15vh]">
        <Footer/>
      </section>
    </>
  )
}