import React from "react";
import { motion } from "framer-motion";
import { SiFiverr } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi2";

function Experience() {
  const highlights = [
    "Delivered frontend projects for international clients",
    "Built responsive websites",
    "Worked directly with clients",
    "Maintained 5-star rating",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="bg-[#11071f] py-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-primary">
          <span className="text-purple-400">Experience</span>
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Real client work, delivered through freelance frontend development
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Freelance Role Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
              <HiOutlineBriefcase className="text-2xl text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Freelance Frontend Developer
              </h3>
              <div className="flex items-center gap-2 text-white/60 mt-1 text-sm sm:text-base">
                <SiFiverr className="text-[#1DBF73] text-lg" />
                <span>Fiverr</span>
                <span className="text-white/30">|</span>
                <span>2025 — Present</span>
              </div>
            </div>
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((point, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-start gap-2 text-white/80"
              >
                <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Client Project + Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Client Project */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 flex flex-col">
            <h4 className="text-lg font-semibold text-white mb-3">
              Client Project
            </h4>
            <p className="text-white/80 mb-5 flex-grow">
              Designed and implemented a calm, premium, user-centered
              questionnaire experience.
            </p>

            <div className="mb-5">
              <h5 className="text-white/60 text-sm font-medium mb-1">
                Result
              </h5>
              <p className="text-white">Received 5-star Fiverr review.</p>
            </div>

            <div>
              <h5 className="text-white/60 text-sm font-medium mb-2">
                Technologies
              </h5>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "Responsive Design"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Client Feedback */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 flex flex-col">
            <h4 className="text-lg font-semibold text-white mb-3">
              Client Feedback
            </h4>
            <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
            <p className="text-white/80 italic mb-6 flex-grow">
              "Muhammad fully understood the emotional intent behind our
              questionnaire and delivered a calm, premium experience that
              exceeded our expectations — professional, responsive, and
              aligned with our vision throughout."
            </p>
            <p className="text-white/60 text-sm">— Francis, Nyumba Yetu</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
