'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const words = ["Advertise", "Innovate", "Build"]

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [showTagline, setShowTagline] = useState(false)

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)

    if (words[currentWord] === "Innovate") {
      setShowTagline(true)
    }

    return () => {
      clearInterval(wordInterval)
    }
  }, [currentWord]) 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-gray-900 relative overflow-hidden">
      {/* Background Particle Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
              borderRadius: '50%',
              opacity: Math.random() * 0.5 + 0.5,
              animation: `moveParticle ${Math.random() * 5 + 5}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 relative h-24 sm:h-32">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[currentWord]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </h1>

        {showTagline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-xl mt-4 text-gray-600"
          >
            <TypewriterEffect text="Amplify brands with passion and purpose" />
          </motion.p>
        )}
      </div>

      {/* CTA Button */}
      {showTagline && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-105 flex items-center"
        >
          Let's Connect
          <ArrowRight className="ml-2" size={20} />
        </motion.button>
      )}
    </main>
  )
}

function TypewriterEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [text])

  return <span>{displayText}</span>
}
