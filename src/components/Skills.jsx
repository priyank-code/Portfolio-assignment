import React from "react";
import CircleGraph from "./CircleGraph";

const Skills = () => {
  const skills = [
    {
      title: "UX Design",
      percent: 87,
      desc: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    },
    {
      title: "UI Design",
      percent: 65,
      desc: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    },
    {
      title: "UX Design",
      percent: 75,
      desc: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    },
    {
      title: "UX Design",
      percent: 100,
      desc: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    },
  ];

  return (
    <section id="skills" className="md:scroll-mt-24 scroll-mt-80 w-full mt-16 max-w-7xl mx-auto lg:px-0 px-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-white">
        SKILLS
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-col md:flex-row items-center gap-6 bg-[#0b0b0b] border border-gray-600 rounded-xl p-6"
          >
            {/* Graph */}
            <CircleGraph percent={skill.percent} size={140} stroke={17} />

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
              <p className="text-white text-sm mt-2">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
