
import './App.css'
import { Features } from './components/Features'
import HeroSection from './components/Hero'
import { Portfolio } from './components/Portfolio'
import PortFolio2 from './components/PortFolio2'
import { Testimonial } from './components/Testimonial'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { BGMotion } from './layout/BGMotion'
import About from './layout/About'
import { Service } from './components/section/Service'
import Carrer from './components/Carrer'
import { WorkWith } from './components/section/WorkWith'
import Certificate from './components/section/Certicate'
function App() {
  return (
    <>
        <Header />
      <div className="container relative">
        <BGMotion>
          <div className="hero max-w-[1280px] mx-auto space-y-16 px-4">
            <HeroSection />
            <Certificate/>
            <About />
            <Service />
            <Features />
            <PortFolio2/>
            <Testimonial />
            <Portfolio />
            {/* <WorkWith/> */}
            <Carrer />
          </div>
        </BGMotion>
        <div className="hero max-w-[1280px] mx-auto space-y-16 
        ">

      <Footer />

        </div>
      </div>
    </>
  );
}

export default App;

