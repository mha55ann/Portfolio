import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbStack2 } from "react-icons/tb";

function TechStack() {
  const stackGroups = [
    {
      title: "AI / ML & Research",
      items: [
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
        { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
        { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
        { name: "scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
        { name: "Pandas", icon: <SiPandas />, color: "#150458" },
        { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
      ],
    },
    {
      title: "Web Engineering",
      items: [
        { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
      ],
    },
    {
      title: "State & Architecture",
      items: [
        { name: "Zustand", icon: <TbStack2 />, color: "#C084FC" },
        { name: "REST APIs", icon: <TbStack2 />, color: "#38BDF8" },
      ],
    },
    {
      title: "Development Tools",
      items: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
        { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="tech-stack" className="bg-[#11071f] py-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-primary">
          Tech <span className="text-purple-400">Stack</span>
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Technologies and analytical tools leveraging machine learning research and full-stack engineering.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stackGroups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={groupVariants}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-5 pb-3 border-b border-white/10">
              {group.title}
            </h3>

            <div className="flex flex-col gap-4">
              {group.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group"
                >
                  <span
                    className="text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TechStack;
