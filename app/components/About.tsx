'use client'

import { motion } from 'framer-motion'
import { Rocket, Target, Lightbulb } from 'lucide-react'

export default function WhoWeAre() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <motion.div 
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={fadeInUp}
        >
          Who We Are
        </motion.h2>

        {/* Brief Company Overview */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeInUp}
        >
          <p className="text-lg md:text-xl text-gray-700">
            Agile Edtech Solutions Private Limited (AESPL) is a forward-thinking company headquartered in Jaipur, Rajasthan. Since our incorporation in 2023, we have been committed to empowering education through cutting-edge technology and innovative solutions.
          </p>
        </motion.div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={fadeInUp}
          >
            <Rocket className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center">
              To leverage education technology for impactful learning experiences, fostering growth and innovation in the education sector.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={fadeInUp}
          >
            <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center">
              To become a trusted leader in education technology, enabling seamless access to knowledge and empowering educators and learners.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={fadeInUp}
          >
            <Lightbulb className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Our Approach</h3>
            <p className="text-gray-600 text-center">
              Harnessing innovative technology and a learner-centric approach to address challenges in the education ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Company Details */}
        <motion.div 
          className="bg-blue-100 p-6 rounded-lg mt-12"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">Key Details</h3>
          <ul className="text-gray-700 text-lg space-y-2">
            <li><strong>Incorporation Date:</strong> 04 Oct 2023</li>
            <li><strong>Location:</strong> Jaipur, Rajasthan, India</li>
            <li><strong>Status:</strong> Active</li>
            <li><strong>CIN:</strong> U85500RJ2023PTC090334</li>
            <li><strong>Industry:</strong> Education Technology</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
