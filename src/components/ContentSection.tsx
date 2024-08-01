import AnimatedSection from "./AnimatedSection";

interface ContentSectionProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const ContentSection: React.FC<ContentSectionProps> = ({ title, description, imageUrl }) => {
    return (
      
        <div className="flex flex-col sm:flex-row items-center py-12 w-full">
          <img src={imageUrl} alt="Description" className=" md:max-w-96 w-full sm:w-1/2 h-auto object-cover rounded-xl" />
          <div className="text-center md:ml-6 w-full">
          <AnimatedSection>
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-bold my-2">{title}</h2>
            <p className="text-md xs:text-lg mb-4">{description}</p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
            </AnimatedSection>
          </div>
        </div>
    );
  };
  
  export default ContentSection;
  