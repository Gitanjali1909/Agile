'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const socialIcons = [
  { Icon: Facebook, href: 'https://facebook.com/agileedtech' },
  { Icon: Twitter, href: 'https://twitter.com/agileedtech' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/agileedtech' },
  { Icon: Instagram, href: 'https://instagram.com/agileedtech' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-gray-900 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="text-sm text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              © {currentYear} Agile Edtech Solutions Private Limited. All rights reserved.
            </motion.span>
            <div className="mt-2 space-x-4">
              <Link href="/privacy" className="hover:text-blue-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-500 transition-colors duration-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
         