import './App.css'
import Navbar from './component/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Certificates from './pages/Certificates'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Navbar />
      

      <main className="pt-16">
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        <Certificates/>
      </main>

      <Footer/>
      
    </>
  )
}

export default App

