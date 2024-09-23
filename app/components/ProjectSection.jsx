"use client";
import React, { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Movie Informer",
    description:
      "Movie Information is a comprehensive platform that provides detailed data about films, including synopses, cast and crew information, reviews, ratings, and release dates. Users can easily search for movies, explore genres, and discover new films based on their preferences.",
    image: "/images/projects/movie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevendranBalasubramaniyam/MiniProjects/tree/main/Movies",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weather Report",
    description:
      " A simple weather application that fetches real-time weather data from an external API (like OpenWeather) based on user input. It displays current weather, temperature, humidity, and forecast.",
    image: "/images/projects/Weather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevendranBalasubramaniyam/MiniProjects/tree/main/weather",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "TV Shows and Series",
    description:
      "TV Show and Series Information is a comprehensive platform that provides detailed data about films, including synopses, cast and crew information, reviews, ratings, and release dates. Users can easily search for movies, explore genres, and discover new films based on their preferences.",
    image: "/images/projects/movie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevendranBalasubramaniyam/Miniprojects/tree/main/TV%20Shows%20and%20Movies",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Cloned HTML5",
    description:
      "This project involves cloning the Hyperspace website from HTML5 UP. The goal is to replicate its design and functionality using HTML5, CSS, and JavaScript. The clone will maintain the original aesthetic while allowing for customization and learning opportunities in web development.",
    image: "/images/projects/HTML5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevendranBalasubramaniyam/Miniprojects/mani/assignment2",
    previewUrl: "/",
  },
];

export const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
