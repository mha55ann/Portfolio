import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

function Certificates() {
  const certificates = [
    {
      title: "Web Development Fundamentals",
      issuer: "IBM SkillsBuild",
      year: "2026",
      status: "Completed",
      icon: "🌐",
      description: "Comprehensive certification in web development fundamentals including HTML, CSS, JavaScript, and responsive design principles.",
    },
    {
      title: "Huawei Certified Cloud Developer Associate - Artificial Intelligence",
      issuer: "Huawei",
      year: "2026",
      status: "In Progress",
      icon: "☁️",
      description: "Advanced certification in cloud development with focus on AI/ML applications, cloud architecture, and deployment strategies.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certificates" className="bg-[#11071f] py-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-primary">
          <span className="text-purple-400">Certifications</span>
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Professional certifications and credentials in web development, cloud computing, and AI
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-300"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header with Icon and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-2xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-purple-400 text-sm font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mb-4">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === "Completed"
                      ? "bg-green-500/10 text-green-400 border border-green-400/30"
                      : "bg-blue-500/10 text-blue-400 border border-blue-400/30"
                  }`}
                >
                  <MdVerified className="text-lg" />
                  {cert.status} • {cert.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
                <FaCertificate className="text-purple-400" />
                <span>Professional Credential</span>
              </div>
            </div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto mt-12 bg-purple-500/5 border border-purple-400/20 rounded-xl p-6 text-center"
      >
        <p className="text-white/80 text-sm sm:text-base">
          <span className="text-purple-400 font-semibold">Continuous Learning:</span> Actively pursuing professional certifications to expand expertise in AI/ML, cloud computing, and full-stack development
        </p>
      </motion.div>
    </section>
  );
}

export default Certificates;
