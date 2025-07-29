'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code, Brain, Globe } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Fullstack Разработка",
      description: "Создаю полноценные веб-приложения от фронтенда до бэкенда"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "ИИ Интеграция",
      description: "Внедряю ИИ-агентов в веб-проекты для автоматизации процессов"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Современные Технологии",
      description: "Использую Next.js, React, Python и другие современные инструменты"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Обучение",
      description: "Преподаю программирование и делюсь знаниями с другими"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Обо мне
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Меня зовут Дмитрий Глумов, и я Fullstack разработчик с страстью к созданию инновационных веб-решений
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Мой путь в разработке</h3>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Я начал свой путь в программировании в университете, изучая информационные системы и технологии. 
                  Специализация на системах искусственного интеллекта дала мне уникальную перспективу на современные технологии.
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Работая в веб-студии, я получил практический опыт разработки сайтов с интеграцией ИИ-агентов, 
                  что позволило мне создавать инновационные решения для клиентов.
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Сейчас я также преподаю программирование, помогая другим освоить веб-разработку и Python. 
                  Это помогает мне постоянно развиваться и делиться знаниями.
                </p>
              </div>

              {/* Education Info */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                  Образование
                </h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Ярославский государственный технический университет (ЯГТУ)</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Информационные системы и технологии (системы искусственного интеллекта)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    2021 — 2025
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold">{feature.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 