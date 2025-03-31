import { useState } from "react";
import { usePortfolioStore } from "./PortfolioStore";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Coffee,
} from "lucide-react";
import Profile from "../Profile.jpg";

export const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [currentCertPage, setCurrentCertPage] = useState(0);
  const skills = usePortfolioStore((state) => state.skills);
  const experiences = usePortfolioStore((state) => state.experiences);
  const education = usePortfolioStore((state) => state.education);
  const certifications = usePortfolioStore((state) => state.certifications);
  

  const certsPerPage = 2;
  const totalPages = Math.ceil(certifications.length / certsPerPage);

  const currentCerts = certifications.slice(
    currentCertPage * certsPerPage,
    (currentCertPage + 1) * certsPerPage
  );


  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#cccccc]">
      {/* Navigation Dots */}
      {/* <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeSection === section ? "bg-[#007acc]" : "bg-[#333333]"
            }`}
            onClick={() => setActiveSection(section)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div> */}

      <div className="max-w-5xl mx-auto p-8 space-y-24">
        {/* Profile Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#007acc] to-transparent" />
          <div className="bg-[#252526] rounded-lg p-8 border border-[#333333] transform hover:scale-[1.01] transition-transform">
            <div className="flex items-start space-x-8">
              {/* <motion.img
                src={Profile}
                alt="Profile"
                className="w-32 h-32 rounded-lg ring-4 ring-[#007acc] ring-opacity-50"
                whileHover={{ rotate: 5, scale: 1.1 }}
              /> */}
              <div>
                <motion.h1
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Prince Patel
                </motion.h1>
                <motion.p
                  className="text-xl text-[#007acc] mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Full Stack Developer
                </motion.p>
                <motion.p
                  className="text-[#8c8c8c] leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Passionate software engineer with expertise in building modern
                  web applications. Focused on creating elegant solutions to
                  complex problems.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Code2 className="mr-2" /> Technical Skills
          </h2>
          <div className="space-y-8">
            {skills.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-lg text-[#007acc] font-medium">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                      className="relative bg-[#252526] rounded-lg p-4 border border-[#333333] transform-gpu"
                      whileHover={{
                        scale: 1.05,
                        borderColor: skill.color,
                        transition: { duration: 0.2 },
                      }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{
                            backgroundColor: `${skill.color}15`,
                            color: skill.color,
                          }}
                        >
                          <skill.icon size={24} />
                        </div>
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          layoutId="skillIndicator"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <Briefcase className="mr-2" /> Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-[#252526] rounded-lg p-6 border border-[#333333]"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#333333] rounded-lg">
                    <exp.icon className="text-[#007acc]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">
                      {exp.title}
                    </h3>
                    <p className="text-[#007acc]">{exp.company}</p>
                    <p className="text-sm text-[#8c8c8c] mt-1">{exp.period}</p>
                    <p className="mt-2 text-[#cccccc]">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-[#252526] rounded-lg p-6 border border-[#333333]"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#333333] rounded-lg">
                      <edu.icon className="text-[#007acc]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{edu.degree}</h3>
                      <p className="text-[#007acc]">{edu.school}</p>
                      <p className="text-sm text-[#8c8c8c] mt-1">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Award className="mr-2" /> Certifications
            </h2>
            {/* <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-[#252526] rounded-lg p-6 border border-[#333333]"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#333333] rounded-lg">
                      <cert.icon className="text-[#007acc]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{cert.name}</h3>
                      <p className="text-[#007acc]">{cert.issuer}</p>
                      <p className="text-sm text-[#8c8c8c] mt-1">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCertPage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {currentCerts.map((cert, index) => (
                    <motion.div
                    key={index}
                      className="bg-[#252526] rounded-lg p-6 border border-[#333333]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      >
                      <a
                        target="_blank"
                        href={cert.link}
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className="p-3 rounded-lg"
                            style={{
                              backgroundColor: `${cert.color}15`,
                              color: cert.color,
                            }}
                          >
                            <cert.icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-white font-medium">
                              {cert.name}
                            </h3>
                            <p className="text-[#007acc]">{cert.issuer}</p>
                            <p className="text-sm text-[#8c8c8c] mt-1">
                              {cert.date}
                            </p>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center space-x-2 mt-6">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentCertPage === index
                        ? "bg-[#007acc]"
                        : "bg-[#333333]"
                    }`}
                    onClick={() => setCurrentCertPage(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Fun Facts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 text-[#8c8c8c]">
            <Coffee size={18} />
            <span>Powered by prince patel</span>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
