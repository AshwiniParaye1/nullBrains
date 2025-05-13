//src/sections/BlogGrid.jsx

import BlogCard from "../components/BlogCard";

const BlogGrid = () => {
  const topPosts = [
    {
      title: "Refreshing Designs",
      category: "RESOURCES",
      description:
        "Quench satisfying designs to help you stir up emotion and tell a story.",
      image:
        "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      title: "Healthier Lifestyle",
      category: "LIFESTYLE",
      description:
        "Living a healthier lifestyle will help with your productivity and your mind-set.",
      image:
        "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      title: "Gaming Evolution",
      category: "ENTERTAINMENT",
      description:
        "Learn about the evolution of gaming and how it started a revolution.",
      image:
        "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
  ];

  const bottomPosts = [
    {
      title: "Best Workstations of the Year",
      category: "INSPIRATION",
      description:
        "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
      image:
        "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Eating for Productivity",
      category: "FOOD",
      description:
        "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "A Design Mind-set",
      category: "RESOURCES",
      description:
        "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          The Project Blog
        </h1>
        <p className="text-gray-400">
          Designs and layouts to help you with your app.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {topPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            category={post.category}
            description={post.description}
            image={post.image}
            isLarge={true}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {bottomPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            category={post.category}
            description={post.description}
            image={post.image}
            isLarge={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
