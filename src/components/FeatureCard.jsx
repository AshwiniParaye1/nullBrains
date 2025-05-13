/* eslint-disable no-unused-vars */
//src/components/FeatureCard.jsx

const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-[#f9fafb] p-8 rounded-xl">
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#4f7df3] w-14 h-14 rounded-full flex items-center justify-center mb-6">
          <Icon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-xl font-light text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
