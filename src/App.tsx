import './App.css'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import servicesImage from './assets/images/services.jpeg'
import aboutImage from './assets/images/about.jpeg'
import ContactUs from './components/CuntactUs'
import Testimonials from './components/Testemonials'

function App() {

  return (
    <div className="App">
      <Hero />
      <ContentSection 
        title="Our Services" 
        description="Here's what we offer." 
        imageUrl={servicesImage}
      />
      <ContentSection 
        title="About Us" 
        description="Learn more about our company." 
        imageUrl={aboutImage}
      />
      <Testimonials/>
      <ContactUs/>
      <Footer />
    </div>
  )
}

export default App
