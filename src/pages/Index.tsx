import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Code, GraduationCap, Briefcase, Trophy, User, Menu, X, Database, Brain, Layers, Wrench } from "lucide-react";
import { useState } from "react";
import snakeGameImage from "@/assets/snake-game.jpg";
import ecommerceCloneImage from "@/assets/ecommerce-clone.jpg";
import danceStudioImage from "@/assets/dance-studio.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/sri_resume.pdf';
    link.download = 'Sai_Sri_Venkata_Gopi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillCategories = [
    {
      title: "Computer Science",
      icon: Brain,
      skills: [
        "Computer Science",
        "Competitive Programming", 
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Software Engineering",
        "Database Management",
        "System Design"
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        "C",
        "Python", 
        "Java",
        "JavaScript"
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        "React.js",
        "Node.js",
        "Spring Boot",
        "Django",
        "Express.js",
        "Bootstrap"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        "Git & GitHub",
        "MySQL/Oracle",
        "Linux"
      ]
    }
  ];

  const projects = [
    {
      title: "Snake Game",
      year: "2024",
      image: snakeGameImage,
      description: "Developed a classic Snake game using Java, featuring object-oriented design principles and real-time game mechanics. Implemented player-controlled movement system, collision detection algorithms, and interactive UI elements using Java Swing and AWT. The game demonstrates core programming concepts including game loops, event handling, and graphics rendering.",
      tech: ["Java", "Java Swing", "AWT", "Java Timer"],
      highlights: ["Object-oriented design", "Real-time game loops", "Collision detection", "Interactive UI"],
      link: "https://github.com/saigopi47/Projects/tree/main/Snake%20Game"
    },
    {
      title: "Bhimavaram Online Clone",
      year: "2024",
      image: ecommerceCloneImage,
      description: "Created a pixel-perfect front-end clone of Bhimavaram Online Foods e-commerce platform. Focused on responsive design implementation with mobile-first approach, ensuring seamless user experience across all device sizes. Built with modern HTML5 semantics, CSS3 animations, and Bootstrap framework for rapid development and cross-browser compatibility.",
      tech: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      highlights: ["Responsive design", "Mobile-first approach", "Cross-device compatibility", "Modern UI/UX"],
      link: "https://github.com/saigopi47/Projects/blob/main/Bhimavaram%20clone.html"
    },
    {
      title: "Dance Learning Studio",
      year: "2025",
      image: danceStudioImage,
      description: "Built a comprehensive dance studio management platform featuring user authentication, dynamic video gallery, and student portal functionality. Implemented interactive JavaScript features for course enrollment, instructor profiles, and progress tracking. The platform includes responsive design elements and smooth animations to enhance user engagement.",
      tech: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      highlights: ["User authentication", "Dynamic video gallery", "Student management", "Interactive features"],
      link: "https://github.com/saigopi47/Projects/tree/main/Dance%20Learning%20Studio"
    }
  ];

  const achievements = [
    {
      title: "🏆 Smart India Hackathon 2025 Nomination",
      description: "Major Achievement: Our team secured an impressive <strong class='text-amber-500 font-bold text-lg'>6th position</strong> in the Software category among <strong class='text-amber-500 font-bold text-lg'>300+ teams</strong> across all categories in our college-level Hackathon! This outstanding performance has earned us a nomination for the prestigious <strong class='text-amber-500 font-bold'>Smart India Hackathon (SIH) 2025</strong>, one of the world's biggest hackathons and a platform to showcase innovation at the national level.",
      highlight: true
    },
    {
      title: "Top EAMCET Rank",
      description: "Achieved <strong class='text-blue-500 font-bold text-lg'>97.6%</strong> in Intermediate and secured a top EAMCET rank of <strong class='text-blue-500 font-bold text-lg'>6411</strong>, standing out among lakhs of aspirants. This accomplishment reflects my dedication, discipline, and ability to perform under high-pressure competitive examinations."
    }
  ];

  const workExperience = [
    {
      title: "Motivated Computer Science Student",
      company: "",
      duration: "",
      technologies: [],
      achievements: [
        "Self-driven and passionate about software development, algorithms, and problem-solving.",
        "Gained solid technical expertise through academic coursework and personal coding projects.",
        "Completed various individual coding challenges to sharpen problem-solving abilities.",
        "Actively seeking internship opportunities to apply technical knowledge, gain hands-on experience, and contribute to innovative software solutions."
      ]
    }
  ];

  const certifications = [
    "Java and DSA Course from Navgurukul",
    "Python Essentials 1 and 2 from Cisco Networking Academy", 
    "Programming Essentials in C from Cisco Networking Academy",
    "Finding The Leader In You from CMI"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="text-xl font-bold text-white">
              Nukala Sai Sri Venkata Gopi
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
            
            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute left-0 right-0 top-full md:relative md:top-auto bg-slate-900/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-white/10 md:border-none p-4 md:p-0`}>
              <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Education', id: 'education' },
                  { label: 'Achievements', id: 'achievements' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="nav-link text-white/90 hover:text-blue-300 transition-colors text-sm font-medium px-4 py-2 rounded-md hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-300/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-300/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-300/50 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center md:justify-end md:pr-4">
              <div className="relative">
                {/* Animated Ring Behind Image */}
                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                
                <img 
                  src={profilePhoto}
                  alt="Sai Sri Venkata Gopi Profile" 
                  className="floating-animation relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl shadow-purple-500/50 pulse-purple object-cover object-top"
                />
                
                {/* Glowing Dots Around Image */}
                <div className="absolute -top-2 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50"></div>
                <div className="absolute top-1/3 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-400/50" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-1/4 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-400/50" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="text-center md:text-left slide-up">
              <div className="mb-6 space-y-2">
                {/* Animated Greeting */}
                <div className="overflow-hidden">
                  <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-2 animate-slide-in-right">
                    Hi! I'm
                  </h1>
                </div>
                
                {/* Name with Multiple Effects */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 blur-2xl opacity-50 animate-pulse"></div>
                  <h2 className="relative text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x mb-4">
                    Gopi
                  </h2>
                </div>
                
                {/* Professional Title with Typewriter Effect */}
                <div className="overflow-hidden">
                  <div className="flex items-center justify-center md:justify-start gap-3 text-3xl md:text-4xl font-bold">
                    <span className="text-white/90">I am a</span>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 blur-xl opacity-60 animate-pulse"></div>
                      <span className="relative bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent font-extrabold typewriter-text">
                        Java Developer
                      </span>
                      <span className="animate-blink text-cyan-300 ml-1">|</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description with Fade In */}
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                B.Tech Computer Science student passionate about creating{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 blur-lg opacity-40"></span>
                  <span className="relative text-white font-bold">innovative solutions</span>
                </span>
                {' '}with modern technologies and clean code practices.
              </p>
              
              {/* Animated Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8" style={{ animationDelay: '0.5s' }}>
                <Button size="lg" className="glow-on-hover bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 animate-bounce-in">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('projects')}
                  className="glow-on-hover border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary px-8 py-3 text-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Code className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </div>
              
              {/* Quote with Slide In Effect */}
              <blockquote className="text-lg text-white/80 italic max-w-2xl border-l-4 border-purple-400 pl-4 py-2 bg-white/5 backdrop-blur-sm rounded-r-lg animate-slide-in-left" style={{ animationDelay: '0.7s' }}>
                "The best way to predict the future is to create it. Every line of code is a step toward building tomorrow's solutions."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-500/5 to-indigo-600/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 mb-4 bounce-in">
                  Technical Expertise
                </h2>
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 rounded-lg blur opacity-20 animate-pulse"></div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Mastering cutting-edge technologies to build innovative solutions
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glowing Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-75 blur transition-all duration-700 group-hover:duration-200 animate-pulse"></div>
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-border/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 slide-up">
                    
                    {/* Icon Container */}
                    <div className="text-center mb-6">
                      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500/30 to-indigo-500/30 mb-5 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                        <IconComponent className="relative z-10 w-10 h-10 text-violet-600 group-hover:text-purple-500 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
                        
                        {/* Animated Particles */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
                        <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-600"></div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 transition-all duration-300">
                        {category.title}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg shadow-purple-500/50"></div>
                    </div>
                    
                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex} 
                          className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 transform translate-x-0 group-hover:translate-x-2"
                          style={{ transitionDelay: `${skillIndex * 50}ms` }}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 mr-3 opacity-60 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50"></div>
                          <span className="font-medium group-hover:font-semibold">{skill}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="mt-6 pt-4 border-t border-border/30">
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden shadow-inner">
                        <div 
                          className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left shadow-lg shadow-purple-500/50"
                          style={{ transitionDelay: '200ms' }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Skill Count Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-xl shadow-purple-500/50">
                      {category.skills.length}
                    </div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-tr-2xl transition-all duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-bl-2xl transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced Floating Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card lighting-effect shimmer-effect border-glow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => {
                        const isVioletTech = ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3'].includes(tech);
                        return (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className={`text-xs transition-all duration-300 ${
                              isVioletTech 
                                ? 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-110 shadow-lg hover:shadow-violet-500/50' 
                                : 'hover:scale-105'
                            }`}
                          >
                            {tech}
                          </Badge>
                        );
                      })}
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <Button asChild size="sm" className="w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-violet-50/30 via-background to-indigo-50/30 dark:from-violet-950/10 dark:via-background dark:to-indigo-950/10 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 blur-xl opacity-50 animate-pulse"></div>
                <Briefcase className="relative w-16 h-16 text-violet-600 dark:text-violet-400 mx-auto" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="gradient-text">Professional Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">Building expertise through passion and dedication</p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((experience, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 hover:border-violet-500/50 transition-all duration-500 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-violet-500/20">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <User className="w-8 h-8 text-violet-600 group-hover:rotate-12 transition-transform duration-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                          {experience.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">Aspiring Developer</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Achievements Grid */}
                    <div className="grid gap-4">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <div 
                          key={achievementIndex} 
                          className="group/item flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-violet-500/5 to-indigo-500/5 hover:from-violet-500/10 hover:to-indigo-500/10 transition-all duration-300 transform hover:translate-x-2"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full blur-sm opacity-50 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                                {achievementIndex + 1}
                              </div>
                            </div>
                          </div>
                          <p className="text-base text-foreground/90 leading-relaxed flex-1 group-hover/item:text-foreground transition-colors duration-300">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Call to Action */}
                    <div className="pt-6 border-t border-border/50">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold border-2 border-background">
                              CS
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold border-2 border-background">
                              AI
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold border-2 border-background">
                              DS
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">Open to Opportunities</span>
                        </div>
                        <Badge className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white border-0 px-4 py-2 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300">
                          Seeking Internship
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
              <Trophy className="w-8 h-8 mr-3 text-primary" />
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground">Recognition and accomplishments</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className={`project-card lighting-effect shimmer-effect border-glow relative overflow-hidden ${
                  achievement.highlight ? 'ring-2 ring-amber-500 shadow-xl shadow-amber-500/20' : ''
                }`}
              >
                {achievement.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MAJOR ACHIEVEMENT
                  </div>
                )}
                <CardHeader>
                  <CardTitle className={`text-xl flex items-center ${achievement.highlight ? 'text-2xl' : ''}`}>
                    <Trophy className={`w-6 h-6 mr-3 ${achievement.highlight ? 'text-amber-500 w-8 h-8' : 'text-primary'}`} />
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p 
                    className={`${achievement.highlight ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                    dangerouslySetInnerHTML={{ __html: achievement.description }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-primary" />
                <span className="gradient-text">Education</span>
              </h2>
              <div className="space-y-4">
                <Card className="project-card lighting-effect shimmer-effect border-glow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-primary/10 mr-3">
                        <GraduationCap className="icon-glow w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>B.Tech Computer Science and Engineering</CardTitle>
                        <CardDescription>CGPA: 9.44</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Currently pursuing Bachelor of Technology in Computer Science and Engineering
                      with strong academic performance and practical project experience.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>• Strong foundation in programming and algorithms</p>
                      <p>• Object-oriented programming and software development</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="project-card lighting-effect shimmer-effect border-glow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-primary/10 mr-3">
                        <Code className="icon-glow w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Intermediate (MPC)</CardTitle>
                        <CardDescription>Percentage: 97.9%</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Completed Intermediate education with Mathematics, Physics, and Chemistry
                      with exceptional academic performance.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>• Mathematics, Physics, Chemistry specialization</p>
                      <p>• Strong analytical and problem-solving foundation</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-primary" />
                <span className="gradient-text">Certifications</span>
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="project-card lighting-effect shimmer-effect border-glow">
                    <CardContent className="pt-6">
                      <p className="text-sm font-medium">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-gradient opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in new opportunities and collaborations
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:saisrivenkatagopi47@gmail.com" className="lighting-effect flex items-center text-primary-foreground hover:opacity-80 transition-all duration-300 transform hover:scale-105">
              <Mail className="icon-glow w-5 h-5 mr-2" />
              Email Me
            </a>
            <a href="https://github.com/saigopi47" target="_blank" rel="noopener noreferrer" className="lighting-effect flex items-center text-primary-foreground hover:opacity-80 transition-all duration-300 transform hover:scale-105">
              <Github className="icon-glow w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sai-sri-venkata-gopi-nukala-bb6592338/" target="_blank" rel="noopener noreferrer" className="lighting-effect flex items-center text-primary-foreground hover:opacity-80 transition-all duration-300 transform hover:scale-105">
              <Linkedin className="icon-glow w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={downloadResume}
            className="glow-on-hover px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
