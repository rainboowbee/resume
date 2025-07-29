'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ДГ</span>
              </div>
              <span className="text-xl font-semibold gradient-text">Дмитрий Глумов</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fullstack разработчик, специализирующийся на создании современных веб-приложений 
              с интеграцией ИИ-агентов и инновационных решений.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="mailto:rainboowbee@gmail.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </motion.a>
            <motion.a
              href="https://github.com/rainboowbee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Дмитрий Глумов. Все права защищены.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Сделано с</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>в Ярославле</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 