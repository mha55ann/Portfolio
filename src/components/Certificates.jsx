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
    <section id="certificates" className="bg-white py-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-primary">
          <span className="text-cyan-600">Certifications</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
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
            className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-cyan-200 hover:border-cyan-400 transition-all duration-300 group relative overflow-hidden shadow-sm hover:shadow-md"
          >
            {/* Background Gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-100/20 rounded-full blur-2xl group-hover:bg-cyan-100/40 transition-all duration-300"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header with Icon and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0 text-2xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-600 text-sm font-medium mt-1">
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
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-blue-100 text-blue-700 border border-blue-300"
                  }`}
                >
                  <MdVerified className="text-lg" />
                  {cert.status} • {cert.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                <FaCertificate className="text-cyan-600" />
                <span>Professional Credential</span>
              </div>
            </div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-100/0 via-cyan-100/0 to-cyan-100/0 group-hover:from-cyan-100/10 group-hover:via-cyan-100/10 group-hover:to-cyan-100/10 transition-all duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto mt-12 bg-cyan-50 border border-cyan-300 rounded-xl p-6 text-center"
      >
        <p className="text-gray-700 text-sm sm:text-base">
          <span className="text-cyan-600 font-semibold">Continuous Learning:</span> Actively pursuing professional certifications to expand expertise in AI/ML, cloud computing, and full-stack development
        </p>
      </motion.div>
    </section>
  );
}

export default Certificates;
