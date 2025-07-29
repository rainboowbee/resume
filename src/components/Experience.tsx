'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Code, Users, Phone } from 'lucide-react'

const Experience = () => {
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

  const experiences = [
    {
      title: "Fullstack-разработчик",
      company: "Веб-студия",
      period: "Апрель 2023 — Август 2024",
      location: "Удалённо",
      icon: <Code className="w-5 h-5" />,
      color: "blue",
      description: "Разработка сайтов с интеграцией ИИ-агентов",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "API", "Docker"],
      achievements: [
        "Создавал современные веб-приложения с использованием Next.js",
        "Интегрировал ИИ-агентов в веб-проекты для автоматизации процессов",
        "Работал с базами данных PostgreSQL и ORM Prisma",
        "Настраивал Docker-контейнеры для развертывания приложений"
      ]
    },
    {
      title: "Преподаватель программирования",
      company: "Компьютерная академия",
      period: "Сентябрь 2024 — Июль 2025",
      location: "Ярославль",
      icon: <Users className="w-5 h-5" />,
      color: "green",
      description: "Ведение курсов по созданию сайтов и игр",
      technologies: ["Python", "Веб-разработка", "Игровая разработка"],
      achievements: [
        "Обучал школьников и студентов основам веб-разработки",
        "Вел курсы по Python программированию",
        "Помогал ученикам создавать собственные проекты",
        "Разрабатывал учебные материалы и практические задания"
      ]
    },
    {
      title: "Оператор поддержки",
      company: "Call-центр, Ситимобил",
      period: "Ноябрь 2022 — Март 2023",
      location: "Ярославль",
      icon: <Phone className="w-5 h-5" />,
      color: "purple",
      description: "Консультация клиентов по заказам в чате и по телефону",
      technologies: ["CRM системы", "Чат-боты", "Телефонная поддержка"],
      achievements: [
        "Консультировал клиентов по вопросам заказов и услуг",
        "Работал с внутренними сервисами компании",
        "Обрабатывал обращения в чате и по телефону",
        "Помогал решать технические проблемы клиентов"
      ]
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
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Опыт работы
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Мой профессиональный путь в сфере разработки и технологий
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className={`p-3 rounded-lg ${getColorClasses(experience.color)}`}>
                    {experience.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {experience.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Технологии:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold mb-2">Достижения:</h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 