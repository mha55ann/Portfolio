import React from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";

function Research() {
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

  const researchDetails = [
    "Multimodal AI system for forecasting localized wildfire risk up to five days in advance",
    "Combining satellite-derived environmental features, meteorological time-series data, and historical fire activity",
    "Using Sentinel-2 and Landsat imagery, NOAA weather data, and NASA FIRMS records to model changing wildfire conditions",
    "Applying explainable AI techniques to identify the environmental and weather factors that influence each prediction",
  ];

  const technologies = [
    "Python",
    "PyTorch",
    "Google Earth Engine",
    "Sentinel-2 & Landsat",
    "NASA FIRMS",
    "NOAA Weather Data",
    "Vision Transformers",
    "LSTM",
    "GeoPandas & Rasterio",
    "SHAP",
    "Streamlit",
    "FastAPI & Docker",
  ];

  return (
    <section id="research" className="bg-[#11071f] py-20 px-4 sm:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-primary">
          Research &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d926a9] to-[#9333ea]">
            Final Year Project
          </span>
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Investigating multimodal geospatial AI for proactive wildfire risk forecasting and environmental decision support
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Main Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#190c2e]/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 shadow-xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d926a9]/20 to-[#9333ea]/20 border border-[#d926a9]/30 flex items-center justify-center flex-shrink-0">
              <HiOutlineSparkles className="text-2xl text-[#d926a9]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Multimodal Wildfire Risk Forecasting
              </h3>
              <p className="text-[#c084fc] mt-1 text-sm sm:text-base">
                Final Year Project & Research Initiative | National Skills University Islamabad
              </p>
            </div>
          </div>

          {/* Status & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-[#21103c]/60 p-4 rounded-xl border border-purple-500/20">
            <div>
              <p className="text-[#c084fc]/70 text-sm font-medium">Research Status</p>
              <p className="text-white font-semibold">Literature Review & Model Development</p>
            </div>
            <div>
              <p className="text-[#c084fc]/70 text-sm font-medium">Timeline</p>
              <p className="text-white font-semibold">Sep 2026 – 2027</p>
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">Project Overview</h4>
            <p className="text-white/80 leading-relaxed">
              This research explores a proactive wildfire risk forecasting system that combines satellite imagery, geospatial environmental indicators, and meteorological time-series data. The project aims to estimate localized wildfire risk up to five days ahead by learning how factors such as temperature, humidity, wind, vegetation condition, and previous fire activity interact across geographic regions. Deep learning models, including Vision Transformers for spatial features and LSTM networks for temporal patterns, are investigated through a multimodal fusion approach. The system also incorporates explainable AI to make predictions more interpretable and support earlier, better-informed disaster management decisions.
            </p>
          </div>

          {/* Key Highlights */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
          >
            {researchDetails.map((point, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-start gap-2 text-white/80"
              >
                <FaCheckCircle className="text-[#d926a9] mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-3">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#2a134a]/60 text-[#c084fc] px-3 py-1 rounded-full text-sm border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Research Goals Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#190c2e]/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 shadow-xl"
        >
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Research Objectives
          </h4>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-[#d926a9] font-bold mt-1">•</span>
              <span>Develop a multimodal forecasting framework that integrates remote sensing and meteorological data for localized wildfire-risk assessment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d926a9] font-bold mt-1">•</span>
              <span>Extract meaningful spatial features from Sentinel-2 and Landsat imagery alongside environmental indicators collected through Google Earth Engine</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d926a9] font-bold mt-1">•</span>
              <span>Model temporal weather patterns and historical fire activity to forecast wildfire risk for up to five days ahead</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d926a9] font-bold mt-1">•</span>
              <span>Use SHAP-based explanations and interactive Streamlit and Folium visualizations to support transparent environmental decision-making</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Research;
