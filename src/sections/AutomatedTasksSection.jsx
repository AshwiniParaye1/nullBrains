import { CiMobile1 } from "react-icons/ci";

const AutomatedTasksSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 pl-14">
          <h2 className="text-3xl mb-4">Automated Tasks</h2>
          <p className="text-gray-600 mb-8">
            Save time and money with our revolutionary services. We are the
            leaders in the industry.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white">
                <CiMobile1 />
              </span>
              <span>Automated task management workflow</span>
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white">
                <CiMobile1 />
              </span>
              <span>Detailed analytics for your data</span>
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white">
                <CiMobile1 />
              </span>
              <span>Some awesome integrations</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="/automated-tasks.png"
            alt="Robot illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AutomatedTasksSection;
