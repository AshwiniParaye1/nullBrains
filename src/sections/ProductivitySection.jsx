import { CiMobile1 } from "react-icons/ci";

const ProductivitySection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="/boost-productivity.png"
            alt="Astronaut illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="pr-10">
          <h2 className="text-3xl mb-4">Boost Productivity</h2>
          <p className="text-gray-600 mb-8">
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </p>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white">
                <CiMobile1 />
              </span>
              <span>Maximize productivity and growth</span>
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white">
                <CiMobile1 />
              </span>
              <span>Speed past your competition</span>
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white">
                <CiMobile1 />
              </span>
              <span>Learn the top techniques</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductivitySection;
