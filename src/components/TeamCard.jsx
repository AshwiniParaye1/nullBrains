//src/components/TeamCard.jsx

import PropTypes from "prop-types";
import { FaTwitter, FaGithub } from "react-icons/fa";

const TeamCard = ({ name, role, avatar, bgColor }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${bgColor} rounded-3xl mb-4 overflow-hidden`}>
        <div className="w-[180px] h-[180px] flex items-center justify-center">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
            <img
              src={avatar || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <h3 className="font-medium text-base">{name}</h3>
      <p className="text-blue-500 text-sm mb-2">{role}</p>
      <div className="flex space-x-2">
        <a href="#" className="text-gray-300 hover:text-gray-500">
          <FaTwitter size={16} />
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-500">
          <FaGithub size={16} />
        </a>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default TeamCard;
