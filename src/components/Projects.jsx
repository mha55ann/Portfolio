import React from "react";
import { motion } from "framer-motion";
import ecommerceImg from "../images/myestore.png";
import restaurantImg from "../images/website.png";
import portfolioImg from "../images/myestore.png"; // Replace with actual portfolio image

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A responsive and modern eCommerce website built with React.js. Features include product listings, cart management, and smooth navigation. Designed for a clean user experience with reusable components and state management.",
      technologies: [
        "React.js",
        "JavaScript",
        "CSS",
        "React Router",
        "Context API/Zustand",
      ],
      image: ecommerceImg,
      link: "https://ecommerce-website-eta-jade.vercel.app/",
      reverse: false,
    },
    {
      title: "Savoury Bytes – Restaurant Website",
      description:
        "A responsive and visually appealing restaurant website featuring a modern layout, interactive menu, smooth navigation, and engaging call-to-action sections to enhance user experience and promote the brand online.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      image: restaurantImg,
      link: "https://savoury-bytes.vercel.app/index.html",
      reverse: true,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built to showcase skills and projects. Includes smooth navigation, animations, and a clean UI design that demonstrates frontend development abilities.",
      technologies: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
      ],
      image: portfolioImg,
      link: "#",
      reverse: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="bg-[#11071f] py-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-primary">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Here are some of my recent works showcasing my skills and expertise
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto space-y-28"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className={`flex flex-col ${
              project.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 items-center`}
          >
            <div className="md:w-1/2 group relative">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-xl border border-white/10 transition-all duration-300 group-hover:border-purple-400/30"
                />
                <div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-primary mb-4">
                {project.title}
              </h3>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
