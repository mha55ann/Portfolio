import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const educationData = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "National Skills University Islamabad",
    year: "2023 - 2027",
    grade: "3.41 / 4.00",
  },
  {
    degree: "Intermediate (ICS, Computer Science)",
    institution: "Harvard College of Commerce & Science",
    year: "2021 - 2023",
    grade: "81.27%",
  },
  {
    degree: "Matriculation (Computer Science)",
    institution: "Shining Star Public School",
    year: "2021",
    grade: "-",
  },
];

function Education() {
  return (
    <section id="education" className="bg-[#11071f] py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white font-primary mb-10">
          <span className="text-purple-400">EDUCATIONAL QUALIFICATION</span>
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <HiOutlineAcademicCap className="text-2xl text-purple-400" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-white/70 mt-1">{edu.institution}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-white/60">
                  <span>{edu.grade !== "-" ? `Percentage / CGPA: ${edu.grade}` : "Percentage / CGPA: —"}</span>
                  <span>{`Year: ${edu.year}`}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
