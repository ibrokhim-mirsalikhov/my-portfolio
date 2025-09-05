import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Award, Calendar, GraduationCap, Briefcase, Code, Server, Database, Cloud, Settings, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['Java', 'JavaScript', 'TypeScript', 'C++', 'Python'],
    frameworks: ['SpringBoot', 'Node.js', 'Express.js', 'Flask', 'Gin', 'Django'],
    tools: ['Docker', 'Kubernetes', 'Jenkins', 'Vault', 'Terraform', 'Grafana'],
    databases: ['PostgreSQL', 'SQL Server', 'MongoDb', 'Cassandra', 'Redis'],
    cloud: ['AWS', 'Microsoft Azure'],
    scripting: ['Bash', 'Shell', 'Powershell']
  };

  const experiences = [
    {
      company: "Udevs",
      position: "Software Engineer",
      duration: "Sep 2022 - Present",
      type: "Full-time",
      achievements: [
        "Developed and deployed backend microservices using Spring Boot, Node.js, and PostgreSQL, powering scalable internal platforms",
        "Designed and documented RESTful APIs using Gin and Swagger, achieving 95% test coverage and reducing integration time by 40%",
        "Leveraged Docker and Kubernetes to containerize and orchestrate microservices, boosting deployment efficiency across cloud environments",
        "Created infrastructure-as-code using Terraform to automate deployments on AWS, improving provisioning consistency by 50%",
        "Instrumented services with Grafana and Prometheus for real-time monitoring, reducing MTTR by 30%",
        "Led migration of legacy services to Azure, using Jenkins for CI/CD and scripting automation with Shell"
      ]
    },
    {
      company: "Udevs",
      position: "Software Engineering Intern",
      duration: "Jun 2021 - Aug 2022",
      type: "Internship",
      achievements: [
        "Collaborated on building backend services using Express.js and MongoDB, contributing to the successful launch of a new customer-facing portal",
        "Participated in the design and implementation of APIs using Django and Redis, reducing cache misses and improving load times",
        "Assisted in containerizing services with Docker and deploying them on AWS ECS, enabling smoother development-to-production cycles",
        "Automated test and deployment workflows using Jenkins and Bash, resulting in 30% fewer integration issues",
        "Monitored application performance with Grafana dashboards and helped fine-tune SQL Server queries for analytics modules"
      ]
    }
  ];

  const SkillCategory = ({ title, items, icon: Icon }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl text-blue-600 dark:text-blue-400">IM</div>
              <div className="hidden md:flex space-x-8">
                {['About', 'Experience', 'Skills', 'Education', 'Achievements', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-6 border-4 border-white dark:border-gray-700">
                  <img 
                    src={`${process.env.PUBLIC_URL}/profile-photo.jpg`}
                    alt="Ibrohim Mirsalikhov"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Ibrohim Mirsalikhov
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                  Senior Software Engineer
                </p>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-8">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Chicago, IL
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mb-8">
                  <a href="mailto:john.mirsalikhov@gmail.com" className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </a>
                  <a href="http://linkedin.com/in/ibrokhim-mirsalikhov" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="mb-6">
                I'm a passionate Software Engineer with over 3 years of experience building scalable backend systems and microservices. 
                Currently working at Udevs, I specialize in designing robust APIs, implementing cloud infrastructure, and leading technical migrations.
              </p>
              <p className="mb-6">
                My expertise spans across modern technologies including Spring Boot, Node.js, and cloud platforms like AWS and Azure. 
                I'm particularly skilled in containerization with Docker and Kubernetes, infrastructure automation with Terraform, and monitoring with Grafana.
              </p>
              <p>
                I graduated from Roosevelt University with a 3.91 GPA and have been recognized for my technical achievements, 
                including winning 1st place at NEIU Eagle Hackfest 2025 for an AI-powered campus assistant.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                        <Briefcase className="w-5 h-5 mr-2" />
                        <span className="text-lg font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCategory title="Languages" items={skills.languages} icon={Code} />
              <SkillCategory title="Frameworks" items={skills.frameworks} icon={Server} />
              <SkillCategory title="Tools" items={skills.tools} icon={Settings} />
              <SkillCategory title="Databases" items={skills.databases} icon={Database} />
              <SkillCategory title="Cloud" items={skills.cloud} icon={Cloud} />
              <SkillCategory title="Scripting" items={skills.scripting} icon={Terminal} />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Roosevelt University</h3>
                    <p className="text-gray-600 dark:text-gray-400">Chicago, IL</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">BSc in Computer Science</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">2021 - 2025</p>
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="font-semibold">GPA: 3.91/4.0</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Honors & Awards</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Honors Program</li>
                      <li>• Roosevelt Scholarship Awardee</li>
                      <li>• Honors Scholarship Awardee</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-6">
                    <Award className="w-8 h-8 text-yellow-800" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1st Place - NEIU Eagle Hackfest 2025</h3>
                    <p className="text-gray-600 dark:text-gray-400">AI-Powered Campus Assistant</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Built an AI-powered campus assistant that used data analysis and a rule-based chatbot to provide smart recommendations 
                  on study spaces, dining, events, and courses using real campus datasets. This project demonstrated my ability to 
                  integrate AI technologies with practical applications and work with complex data systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <a href="mailto:john.mirsalikhov@gmail.com" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Mail className="w-5 h-5 mr-3" />
                      john.mirsalikhov@gmail.com
                    </a>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-5 h-5 mr-3" />
                      Chicago, IL
                    </div>
                    <a href="http://linkedin.com/in/ibrokhim-mirsalikhov" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Download Resume</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Get a copy of my resume for your records or to share with your team.
                  </p>
                  <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2025 Ibrohim Mirsalikhov. Built with React and passion for great software.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;