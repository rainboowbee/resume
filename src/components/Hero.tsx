'use client'

import { motion } from 'framer-motion'
import { Download, Github, Mail, MapPin, Calendar } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar and Name */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-4xl font-bold gradient-text">ДГ</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Дмитрий Глумов</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Fullstack Developer
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Ярославль, РФ</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <Calendar className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">22 года</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 sm:col-span-2 md:col-span-1">
              <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium hidden sm:inline">rainboowbee@gmail.com</span>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium sm:hidden">Email</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Разрабатываю современные веб-приложения с интеграцией ИИ-агентов. 
            Специализируюсь на Next.js, React, Python и создании инновационных решений.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              <span>Связаться</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/rainboowbee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 