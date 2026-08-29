import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";

function Education() {
  return (
    <section id="education" className="bg-[#11071f] py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white font-primary mb-10">
          <span className="text-purple-400">Education</span>
        </h2>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 flex items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <HiOutlineAcademicCap className="text-2xl text-purple-400" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              BS Computer Science
            </h3>
            <p className="text-white/70 mt-1">
              National Skills University Islamabad
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-white/60">
              <span>CGPA: 3.41/4.00</span>
              <span>Expected Graduation: 2027</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
