import React from "react";
import PortfolioImg from "../assets/Card.png";

const Portfolio = () => {
  const projects = Array(8).fill({
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
    image: PortfolioImg,
  });

  return (
    <section className="w-full mt-16 max-w-7xl mx-auto lg:px-0 px-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white">
        PORTFOLIO
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black border border-gray-700 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-46 object-cover rounded-md"
              />
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs rounded-md border"
                    style={{
                      color: "#784dc7",
                      borderColor: "#be9ff6",
                      backgroundColor: "#e9dffc",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-[#1f1f1f] hover:bg-[#2c2c2c] text-sm text-gray-200 py-2 rounded-md mt-4">
                View Product &nbsp; Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
