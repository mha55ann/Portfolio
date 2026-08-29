import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";

function Education() {
  return (
    <section id="education" className="bg-white py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 font-primary mb-10">
          <span className="text-cyan-600">Education</span>
        </h2>

        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-cyan-200 hover:border-cyan-400 transition-all duration-300 flex items-start gap-5 shadow-sm hover:shadow-md">
          <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
            <HiOutlineAcademicCap className="text-2xl text-cyan-600" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              BS Computer Science
            </h3>
            <p className="text-gray-600 mt-1">
              National Skills University Islamabad
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-gray-600">
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
