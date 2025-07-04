import { motion } from 'framer-motion';

function Experience({ portfolioData }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          variants={cardVariants}
        >
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Experience</span>
        </motion.h2>
        
        <div className="space-y-8">
          {portfolioData.experience.map((job, index) => (
            <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-indigo-400 font-semibold">{job.company}</p>
                </div>
                <div className="text-gray-400 text-sm mt-2 md:mt-0">
                  {job.duration}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{job.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="mt-4 space-y-2">
                {job.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-gray-300 text-sm flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience 