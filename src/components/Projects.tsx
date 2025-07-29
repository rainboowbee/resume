'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Bot, BookOpen, Globe, Mail } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: "BitLab",
      subtitle: "Образовательная платформа с ИИ",
      description: "Сайт для подготовки к ЕГЭ по информатике с интеграцией ИИ-ассистента и автопроверкой решений",
      icon: <BookOpen className="w-6 h-6" />,
      color: "blue",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Telegram OAuth", "Langchain"],
      features: [
        "AI-ассистент для помощи в обучении",
        "Автоматическая проверка решений",
        "Telegram-бот для уведомлений",
        "Система авторизации через Telegram",
        "База данных с задачами и решениями"
      ],
      github: "https://github.com/rainboowbee/bitlab",
      demo: "#"
    },
    {
      title: "ИИ-агенты для веб-сайтов",
      subtitle: "Интеграция ИИ в веб-проекты",
      description: "Разработка и внедрение ИИ-агентов для автоматизации процессов на веб-сайтах клиентов",
      icon: <Bot className="w-6 h-6" />,
      color: "green",
      technologies: ["OpenAI API", "Langchain", "Next.js", "Python", "Docker"],
      features: [
        "Чат-боты для поддержки клиентов",
        "Автоматическая обработка запросов",
        "Интеграция с CRM системами",
        "Анализ и обработка данных",
        "Масштабируемые решения"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Парсеры и API",
      subtitle: "Автоматизация сбора данных",
      description: "Разработка парсеров и API для автоматизации сбора и обработки данных",
      icon: <Globe className="w-6 h-6" />,
      color: "purple",
      technologies: ["Python", "BeautifulSoup", "Selenium", "FastAPI", "PostgreSQL"],
      features: [
        "Парсинг веб-сайтов",
        "REST API для доступа к данным",
        "Автоматическое обновление информации",
        "Обработка больших объемов данных",
        "Мониторинг и логирование"
      ],
      github: "#",
      demo: "#"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
      green: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
      purple: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Проекты
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Мои основные проекты и достижения в разработке
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(project.color)}`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Технологии:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">Основные функции:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Заинтересованы в сотрудничестве? Давайте обсудим ваш проект!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>Связаться</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 