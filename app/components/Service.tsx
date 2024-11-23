'use client'

import { motion } from 'framer-motion'
import { Code, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Development Services',
    description: 'From modern websites to robust software and mobile apps, we craft solutions that bring your ideas to life.',
    highlights: [
      'Custom Web Development',
      'Scalable Mobile Apps',
      'End-to-End Software Solutions'
    ]
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing Services',
    description: 'Maximize your reach with tailored marketing strategies that connect you with the right audience.',
    highlights: [
      'Ad Campaigns & SEO',
      'SMS & Email Marketing',
      'Social Media Management'
    ]
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
}

export default function ServicesSection() {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-3">
        <motion.h2
          className="text-3xl text-gray-900 font-bold text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          Our Services
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex-1 max-w-2xl ml-8"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 h-full shadow-lg transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)' }}
              >
                <service.icon className="w-12 h-12 mb-4 text-blue-300" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="mb-4 text-blue-100">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-blue-300">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition-colors duration-300">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
