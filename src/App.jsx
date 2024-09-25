import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import ServicesPage from './pages/ServicesPage'
import ContactMePage from './pages/ContactMePage'
import ProjectsPage from './pages/ProjectsPage'
import Route from './components/Route'

function App() {

  return (
    <>
      <Navbar />

      <main role="main" className="container">
        <div>
          <Route path='/'>
            <HomePage />
          </Route>
          <Route path='/about-me'>
            <AboutMePage />
          </Route>
          <Route path='/projects'>
            <ProjectsPage />
          </Route>
          <Route path='/services'>
            <ServicesPage />
          </Route>
          <Route path='/contact-me'>
            <ContactMePage />
          </Route>
        </div>
      </main>

    </>
  )
}

export default App
