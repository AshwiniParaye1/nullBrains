//src/sections/Hero.jsx

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Start Crafting Your{" "}
          <span className="block text-indigo-600">Next Great Idea</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Simplifying the creation of landing pages, blog pages,
          <br />
          application pages and so much more!
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="relative inline-block mb-4">
            <button className="absolute -top-2 -right-6 px-2 py-0.5 bg-green-400 text-white text-xs font-light rounded-full shadow-md">
              only $15/mo
            </button>
            <button className="px-8 py-4 text-sm font-semibold bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
              Purchase Now
            </button>
          </div>
          <button className="text-sm font-light text-gray-400 hover:text-gray-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
