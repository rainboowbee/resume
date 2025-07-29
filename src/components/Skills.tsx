'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Bot, Cpu } from 'lucide-react'

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Адаптивная верстка", level: 95 }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      color: "green",
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Prisma", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "PHP (Yii2)", level: 70 }
      ]
    },
    {
      title: "DevOps",
      icon: <Cpu className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "Docker", level: 75 },
        { name: "GitHub", level: 85 },
        { name: "CI/CD", level: 70 }
      ]
    },
    {
      title: "Другое",
      icon: <Code className="w-6 h-6" />,
      color: "orange",
      skills: [
        { name: "Парсеры", level: 80 },
        { name: "API", level: 85 },
        { name: "Telegram-боты", level: 90 },
        { name: "C++", level: 60 }
      ]
    },
    {
      title: "ИИ",
      icon: <Bot className="w-6 h-6" />,
      color: "pink",
      skills: [
        { name: "Langchain", level: 75 },
        { name: "OpenAI API", level: 80 },
        { name: "ИИ-интеграция", level: 85 }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
      green: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
      purple: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
      orange: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
      pink: "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-400"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getProgressColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      pink: "bg-pink-500"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Навыки
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Технологии и инструменты, с которыми я работаю
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-3 ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${getProgressColor(category.color)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Дополнительные навыки</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Английский B1",
              "Адаптивный дизайн",
              "REST API",
              "Git",
              "Responsive Design",
              "TypeScript",
              "Node.js",
              "MongoDB"
            ].map((skill, index) => (
              <div
                key={index}
                className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 