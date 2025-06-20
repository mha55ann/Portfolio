import React, { useState } from "react";
import { motion } from "framer-motion";

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const offerings = [
    {
      title: "Website Development",
      icon: "🌐",
      points: [
        "Build responsive, user-friendly websites using HTML, CSS, and JavaScript.",
        "Convert Figma, Adobe XD, or Sketch designs into fully functional websites.",
        "Create landing pages, portfolios, business sites, and e-commerce stores.",
      ],
    },
    {
      title: "Frontend Frameworks",
      icon: "⚛️",
      points: [
        "Develop apps with React.js, Vue.js, or Angular.",
        "Build Single Page Applications (SPAs) and Progressive Web Apps (PWAs).",
        "Optimize performance and ensure smooth UI interactions.",
      ],
    },
    {
      title: "UI/UX Implementation",
      icon: "🎨",
      points: [
        "Follow UI/UX best practices for usability and accessibility.",
        "Implement animations, transitions, and micro-interactions.",
        "Use Sass, LESS, Tailwind CSS, Bootstrap, and Material UI.",
      ],
    },
    {
      title: "Responsive Design",
      icon: "📱",
      points: [
        "Build mobile-friendly layouts using media queries, flexbox, and grid.",
        "Ensure cross-browser and multi-device compatibility.",
      ],
    },
    {
      title: "Performance Optimization",
      icon: "⚡",
      points: [
        "Speed up sites by optimizing assets and scripts.",
        "Use lazy loading, code splitting, and efficient bundling.",
        "Improve Core Web Vitals and CLS.",
      ],
    },
    {
      title: "API Integration",
      icon: "🔌",
      points: [
        "Integrate with REST APIs or GraphQL.",
        "Use Axios, Fetch API, or Apollo Client.",
        "Handle authentication, and manage state using Redux, Zustand, or Context API.",
      ],
    },
    {
      title: "Web Accessibility",
      icon: "♿",
      points: [
        "Follow WCAG standards.",
        "Add ARIA labels, keyboard navigation, and screen reader compatibility.",
      ],
    },
    {
      title: "Testing & Debugging",
      icon: "🐛",
      points: [
        "Write unit/integration tests using Jest, React Testing Library, or Cypress.",
        "Debug UI across various browsers and devices.",
      ],
    },
    {
      title: "CMS & Static Sites",
      icon: "🛠️",
      points: [
        "Work with WordPress, Shopify, or Webflow.",
        "Build static sites using Next.js, Gatsby, or Hugo.",
      ],
    },
    {
      title: "Maintenance & Support",
      icon: "🔧",
      points: [
        "Offer ongoing bug fixes, updates, and feature improvements.",
        "Provide frontend technical support and consulting.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <div
      className="bg-[#11071f] py-16 px-4 sm:px-8 font-primary text-white"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          What I <span className="text-purple-400">Offer</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          High-quality frontend development services tailored to your needs.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {offerings.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 transition-all duration-300 ${
              hoveredCard === index ? "border-purple-400/30" : ""
            }`}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{service.icon}</span>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
            </div>
            <ul className="space-y-3 text-white/80 text-sm sm:text-base">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
            {hoveredCard === index && (
              <motion.div
                className="absolute inset-0 -z-10 bg-purple-500/10 rounded-xl blur-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
