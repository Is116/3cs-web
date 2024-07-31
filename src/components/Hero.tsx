import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero.jpeg';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen text-white rounded-xl p-2" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="flex flex-col justify-center items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-2">
            Welcome to CS3
          </h1>
          <p className="text-2xl">
            Explore our services
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

