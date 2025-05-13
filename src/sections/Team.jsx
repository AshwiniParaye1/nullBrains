//src/sections/Team.jsx

import TeamCard from "../components/TeamCard";
import { team } from "../data/team";

const bgColors = [
  "bg-yellow-100", // Freddy Smith
  "bg-green-100", // Carl Jones
  "bg-pink-100", // Susan Peterson
  "bg-blue-100", // Tommy Barnes
  "bg-blue-100", // Ron Jenson
  "bg-pink-100", // Pete Tompkins
  "bg-yellow-100", // Kelly Richards
  "bg-yellow-100", // Alexis Jordan
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="mb-12">
        <p className="text-blue-400 font-light text-left mb-2">OUR TEAM</p>
        <h2 className="text-4xl text-gray-800 font-semi text-left mb-4">
          An incredible team of <br /> amazing individuals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
            bgColor={bgColors[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
