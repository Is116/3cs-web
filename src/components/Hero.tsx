import heroImage from '../assets/images/hero.jpeg';
import AnimatedSection from './AnimatedSection';

const Hero = () => {

  return (
    <div id='Home' className="bg-cover bg-center h-screen text-white rounded-xl p-2 relative" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="flex flex-col justify-center items-center h-full z-10 pt-24"> {/* Add padding top to ensure content does not overlap header */}
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-2">
            Welcome to CS3
          </h1>
          <p className="text-2xl">
            Explore our services
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Hero;
