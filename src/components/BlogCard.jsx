//src/components/BlogCard.jsx

import PropTypes from "prop-types";

const BlogCard = ({ title, category, description, image, isLarge = false }) => {
  const getCategoryStyles = () => {
    const category_upper = category.toUpperCase();

    if (category_upper === "RESOURCES") {
      return {
        bgColor: "bg-purple-500",
        tagBgColor: "bg-white",
        tagTextColor: "text-purple-500",
      };
    } else if (category_upper === "LIFESTYLE") {
      return {
        bgColor: "bg-blue-400",
        tagBgColor: "bg-white",
        tagTextColor: "text-blue-400",
      };
    } else if (category_upper === "ENTERTAINMENT") {
      return {
        bgColor: "bg-yellow-400",
        tagBgColor: "bg-white",
        tagTextColor: "text-yellow-500",
      };
    } else if (category_upper === "FOOD") {
      return {
        bgColor: "bg-gray-100",
        tagBgColor: "bg-orange-400",
        tagTextColor: "text-white",
      };
    } else if (category_upper === "INSPIRATION") {
      return {
        bgColor: "bg-gray-100",
        tagBgColor: "bg-blue-400",
        tagTextColor: "text-white",
      };
    } else {
      return {
        bgColor: "bg-gray-100",
        tagBgColor: "bg-purple-500",
        tagTextColor: "text-white",
      };
    }
  };

  const { bgColor, tagBgColor, tagTextColor } = getCategoryStyles();

  if (isLarge) {
    return (
      <div className="overflow-hidden rounded-lg h-full group cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-6 hover:shadow-xl">
        <div
          className="relative h-[340px] w-full bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute bottom-2 left-4">
            <span
              className={`${tagBgColor} ${tagTextColor} text-xs font-medium px-3 py-1 rounded-full uppercase transition-all duration-300 group-hover:shadow-md`}
            >
              {category}
            </span>
          </div>
        </div>
        <div
          className={`${bgColor} p-6 text-white h-[180px] transition-all duration-300 group-hover:brightness-110`}
        >
          <h3 className="text-2xl font-bold mb-2 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-200 font-light transition-opacity duration-300 group-hover:opacity-90">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg shadow-sm cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute -bottom-2 left-4">
          <span
            className={`${tagBgColor} ${tagTextColor} text-xs font-medium px-3 py-1 rounded-full uppercase transition-all duration-300 group-hover:shadow-md`}
          >
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 bg-white transition-all duration-300 group-hover:bg-gray-50">
        <h3 className="font-bold text-lg mb-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-sm font-light text-gray-400 transition-opacity duration-300 group-hover:opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
};

export default BlogCard;
