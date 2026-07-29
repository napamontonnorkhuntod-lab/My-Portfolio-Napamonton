import { Container, Box, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent, CardMedia, Chip } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { motion, AnimatePresence } from "framer-motion";

import BasicTimeline from "../components/TimeLine";
import Skill from "../components/Skill";
import Line from "../components/Line";
import Navbar from '../components/Navbar';
import DotNav from '../components/DotNav';

import SubNav from "../assets/config/subMenu";

import { useRef, useState, useEffect, useCallback } from "react";

// ========== Section animation variants ==========
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "certificate", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

// ========== Home Component ==========
const Home: React.FC = () => {

  const MotionTypography = motion(Typography);
  const MotionBox = motion(Box as any);
  const MotionButton = motion(Button);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [showResume, setShowResume] = useState(false);

  // ---------- Data ----------
  const certificatesData = useRef([
    { title: "Certificate 1", image: "/image/certificate/cert1.png" },
    { title: "Certificate 2", image: "/image/certificate/cert2.png" },
    { title: "Certificate 3", image: "/image/certificate/cert3.png" },
    { title: "Certificate 4", image: "/image/certificate/cert4.png" },
    { title: "Certificate 5", image: "/image/certificate/cert5.png" },
    { title: "Certificate 6", image: "/image/certificate/cert6.png" },
    { title: "Certificate 7", image: "/image/certificate/cert7.png" },
    { title: "Certificate 8", image: "/image/certificate/cert8.png" },
  ]);

  const projectsData = useRef([
    {
      title: "High-Performance EDR/XDR Dashboard",
      description: "Engineered a scalable, open-source EDR/XDR infrastructure and real-time data pipeline using Wazuh, Kafka, and OpenSearch to ingest and route high-volume security telemetry. Built a high-performance Next.js dashboard optimized for rendering massive attack logs seamlessly without browser performance degradation.",
      tech: ["Next.js", "Kafka", "OpenSearch", "Wazuh"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      modalImages: [
        "/image/cer1/1.png",
        "/image/cer1/2.png"
      ]
    },
    {
      title: "Primo HR Platform",
      description: "AI-Powered resume screening platform using DeepSeek model for automated parsing and job-fit candidate scoring.",
      tech: ["Next.js", "Node.js", "Redis", "DeepSeek AI", "Ollama"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
      modalImages: [
        "/image/cer2/image.png",
        "/image/cer2/image copy.png",
        "/image/cer2/image copy 2.png",
        "/image/cer2/image copy 3.png",
        "/image/cer2/image copy 4.png",
        "/image/cer2/image copy 5.png",
        "/image/cer2/image copy 6.png",
        "/image/cer2/image copy 7.png"
      ],
      detailSections: [
        {
          heading: "📌 Project Overview",
          body: "Primo HR is an AI-powered resume screening platform designed to streamline and automate the initial candidate evaluation process for HR teams. The system converts unstructured PDF resumes into structured JSON data and evaluates candidate qualifications against specific Job Descriptions (JDs) using Large Language Models (LLMs). This enables HR professionals to instantly view candidate suitability scores, key skill matches, and insightful summaries of strengths and weaknesses."
        },
        {
          heading: "🏗️ System Architecture & Tech Stack",
          body: "Built on a scalable Microservices Architecture to handle asynchronous processing and high-volume file ingestion:",
          bullets: [
            "Frontend: Next.js + Tailwind CSS / MUI — interactive dashboard for file uploads, candidate management, and data visualization.",
            "Backend API & Services: Node.js — API routing, authentication, and PDF document parsing.",
            "Task Queue & Caching: Redis — asynchronous background job processing to queue and process multiple resumes without server bottlenecking.",
            "AI Engine: DeepSeek-R1-Distill-Llama-8B via Ollama (local) — analyzes skills, experience, and generates structured JSON outputs with suitability scores."
          ]
        },
        {
          heading: "⚡ Key Features & Workflow",
          bullets: [
            "Automated Document Ingestion: Bulk upload candidate PDF resumes effortlessly.",
            "Asynchronous Processing Queue: Offloads heavy resume analysis to a Redis-backed queue for efficient background processing.",
            "AI-Driven Resume Parsing & Matching: Extracts skills, experience, and education — cross-referenced against job requirements.",
            "Structured JSON Scoring: Outputs a suitability score (0–100%) with highlighted pros and cons.",
            "Interactive HR Dashboard: Filtering, searching, and candidate ranking for data-driven hiring decisions."
          ]
        },
        {
          heading: "🏆 Key Takeaways",
          bullets: [
            "Scalable Architecture: Asynchronous Redis queues handle high concurrency and large batch uploads.",
            "Reliable AI Parsing: Enforced strict JSON schema output from the LLM for seamless UI rendering and data consistency.",
            "Data Privacy & Cost Optimization: Local AI inference via Ollama ensures candidate data security while minimizing cloud API costs."
          ]
        }
      ]
    },
    {
      title: "Friend Ship Marketplace",
      description: "Two-Sided marketplace application UI/UX workflows connecting travelers with service providers.",
      tech: ["Vue.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      demoLink: "https://www.figma.com/design/AC9xjRhBAubG2RIBZS392K/IT-358?node-id=0-1&t=AxdtSK7vb6qfSBKt-1"
    },
    {
      title: "Smart Water Management",
      description: "Smart IoT System using microcontrollers and ultrasonic sensors for real-time monitoring and control.",
      tech: ["IoT", "ESP32", "Blynk"],
      image: "/image/smart-water-management.png",
      modalImages: [
        "/image/cer4/image.png",
        "/image/cer4/image copy.png",
        "/image/cer4/image copy 2.png",
        "/image/cer4/image copy 3.png",
        "/image/cer4/image copy 4.png"
      ]
    },
    {
      title: "Computer Vision & ML",
      description: "Worked with video analytics pipelines using YOLO, OpenCV, and classification algorithms for data-driven applications. Specifically focused on developing a system for detecting and recognizing car license plates.",
      tech: ["YOLO", "OpenCV", "Python"],
      image: "/image/license-plate-cv.png",
      modalImages: [
        "/image/cer5/image.png"
      ]
    },
  ]);
  const skills = useRef([
    { name: 'React', skill: 'good', pic: '/image/React-icon.svg.png' },
    { name: 'Vue', skill: 'good', pic: '/image/Vue.js_Logo_2.svg.png' },
    { name: 'Html/Css', skill: 'good', pic: '/image/5968267.png' },
    { name: 'JavaScript/TypeScript', skill: 'good', pic: '/image/yuxa9EAfarIcX9EK8Ei1JSjwRnP7e0-metaanMtdHMuanBn-.jpg' },
    { name: 'Bootstrap', skill: 'good', pic: '/image/5968672.png' },
    { name: 'Tailwind', skill: 'good', pic: '/image/Tailwind_CSS_Logo.svg.png' },
    { name: 'Material-ui', skill: 'good', pic: '/image/mui-docs-icon-unplated.png' },
    { name: 'Postman', skill: 'good', pic: '/image/6934042159649_ac803d1cddbcbef8f110_512.png' },
    { name: 'Git', skill: 'good', pic: '/image/Git-Icon-1788C.png' },
  ]);

  const education = useRef([
    { title: 'Vocational Certificate - Eastern Technological College', subTitle: 'Information Technology', years: '2016 - 2018' },
    { title: 'High Vocational Certificate - Eastern Technological College', subTitle: 'Information Technology', years: '2018 - 2020' },
    { title: 'Bachelors degree', subTitle: 'Computer Science', years: '2021 - 2026' },
  ]);

  const experience = useRef([
    {
      title: 'Front End Developer - Vocational Certificate',
      years: '2018',
      detail: [
        '-Developed basic websites using PHP, HTML, CSS, and Bootstrap',
        '-Managed databases using phpMyAdmin',
        '-Learned website development processes in a professional environment',
      ],
    },
    {
      title: 'Front End Developer - High Vocational Certificate',
      years: '2019',
      detail: [
        '-Developed E-Commerce websites using Vue.js and Bootstrap',
        '-Designed web pages using HTML and CSS',
        '-Integrated backend systems and external APIs',
        '-Tested APIs using Postman',
        '-Managed data and databases via phpMyAdmin',
      ],
    },
    {
      title: 'Front End Developer - Ottimo System',
      years: 'Oct 2023 - Jan 2025',
      detail: [
        '-Developed and maintained frontend parts of company websites',
        '-Integrated frontend with backend systems via API',
        '-Improved UI/UX based on team feedback',
        '-Conducted initial functionality testing before QA handoff',
        '-Utilized Vue.js, HTML, CSS, JavaScript, and Postman',
      ],
    },
    {
      title: 'MiniProject - Bangkok University',
      years: '2026',
      detail: [
        '-Image and Video Processing detect plate car By Prompting AI',
        '-Data Analytics and Mining Create AI model for project',
        '-Project Siam AI create SOC system',
      ],
    },
  ]);


  // ---------- Scroll Snap: detect active section ----------
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollTop = container.scrollTop;
    const height = container.clientHeight;
    const index = Math.round(scrollTop / height);
    setActiveSection(Math.min(index, SECTIONS.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ---------- Scroll to section by index ----------
  const scrollToSection = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // ---------- Scroll to section by section ID ----------
  const scrollToSectionById = useCallback((id: string) => {
    const index = SECTIONS.findIndex((s) => s.id === id);
    if (index !== -1) scrollToSection(index);
  }, [scrollToSection]);

  // ============================================================
  return (
    <>
      {/* Navbar — receives scroll helper */}
      <Navbar scrollToSection={scrollToSectionById} onShowResume={() => setShowResume(true)} />

      {/* Dot Navigation */}
      <DotNav
        sections={SECTIONS}
        activeSection={activeSection}
        onDotClick={scrollToSection}
      />

      {/* ===== Scroll Snap Container ===== */}
      <div ref={scrollContainerRef} className="scroll-container">

        {/* ── Section 0: Hero ── */}
        <div
          className="scroll-section"
          ref={(el) => { sectionRefs.current[0] = el; }}
          id="hero"
        >
          <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <AnimatePresence>
              {activeSection === 0 && (
                <motion.div
                  key="hero-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ width: '100%' }}
                >
                  <Box className="flex flex-wrap w-full">
                    {/* Left: Text */}
                    <Box className="xl:w-1/2 lg:w-1/2 w-full lg:pb-5 xl:pb-5 flex justify-center lg:justify-start items-center">
                      <Box>
                        <Box>
                          <MotionTypography
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                            variant='h4'
                            className='my-5'
                            fontWeight={800}
                            sx={{ textAlign: { xs: 'center', lg: 'left' } }}
                          >
                            Hello<span className='text-red-600'>.</span>
                          </MotionTypography>

                          <MotionTypography
                            variant='h4'
                            className='my-5'
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.35 }}
                            sx={{ textAlign: { xs: 'center', lg: 'left' } }}
                          >
                            <span className='text-red-600'>____</span>
                            I'm Napamonton
                            <span className='text-red-600'>(</span>
                            Stang
                            <span className='text-red-600'>)</span>
                          </MotionTypography>

                          <MotionTypography
                            variant='h3'
                            className='my-5'
                            fontWeight={800}
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
                            sx={{ textAlign: { xs: 'center', lg: 'left' } }}
                          >
                            Developer
                          </MotionTypography>

                          <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}
                          >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3, alignItems: { xs: 'center', lg: 'flex-start' } }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <PhoneIcon sx={{ color: '#4CAF50' }} />
                                <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>098-249-8727</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <EmailIcon sx={{ color: '#f44336' }} />
                                <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>napamonton.norkhuntod@gmail.com</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <ChatIcon sx={{ color: '#00B900' }} />
                                <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>_stang.</Typography>
                              </Box>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' }, mb: 2 }}>
                              <IconButton
                                component="a"
                                href="https://www.instagram.com/n4p4.78/"
                                target="_blank"
                                sx={{ color: 'white', '&:hover': { color: '#E1306C' } }}
                              >
                                <InstagramIcon fontSize="large" />
                              </IconButton>
                              <IconButton
                                component="a"
                                href="https://www.facebook.com/napamonton.nork/"
                                target="_blank"
                                sx={{ color: 'white', '&:hover': { color: '#1877F2' } }}
                              >
                                <FacebookIcon fontSize="large" />
                              </IconButton>
                              <IconButton
                                component="a"
                                href="https://github.com/napamontonnorkhuntod-lab"
                                target="_blank"
                                sx={{ color: 'white', '&:hover': { color: '#6e5494' } }}
                              >
                                <GitHubIcon fontSize="large" />
                              </IconButton>
                              <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/napamonton-norkhuntod-b88629346/"
                                target="_blank"
                                sx={{ color: 'white', '&:hover': { color: '#0077b5' } }}
                              >
                                <LinkedInIcon fontSize="large" />
                              </IconButton>
                            </Box>
                          </motion.div>
                        </Box>

                        <Box className="my-5" sx={{ textAlign: { xs: 'center', lg: 'start' } }}>
                          <MotionButton
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.65 }}
                            variant='contained'
                            color='error'
                            className='px-4 py-2 me-4'
                            sx={{ textTransform: 'none' }}
                            onClick={() => scrollToSectionById('projects')}
                          >
                            My Project
                          </MotionButton>
                          <MotionButton
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
                            variant='outlined'
                            color='error'
                            className='px-4 py-2'
                            sx={{ textTransform: 'none' }}
                            onClick={() => setShowResume(true)}
                          >
                            My Resume
                          </MotionButton>
                        </Box>

                        <Dialog open={showResume} onClose={() => setShowResume(false)} maxWidth="md" fullWidth PaperProps={{ sx: { backgroundColor: 'transparent', boxShadow: 'none' } }}>
                          <Box sx={{ position: 'relative' }}>
                            <img src="/resume.jpg" alt="Resume" style={{ width: '100%', borderRadius: '12px', objectFit: 'contain' }} />
                            <IconButton onClick={() => setShowResume(false)} sx={{ position: 'absolute', top: 10, right: 10, color: '#f9be1d', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' } }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </IconButton>
                          </Box>
                        </Dialog>
                      </Box>
                    </Box>

                    {/* Right: Image */}
                    <MotionBox
                      className="xl:w-1/2 lg:w-1/2 w-full items-center justify-center flex"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.3 }}
                    >
                      <img src="/image/porttest.png" alt="Napamonton" className='w-[400px] xl:w-[500px]' />
                    </MotionBox>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>

        {/* ── Section 1: About ── */}
        <div
          className="scroll-section"
          ref={(el) => { sectionRefs.current[1] = el; }}
          id="about"
        >
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'scroll', py: 2 }}>
            <AnimatePresence>
              {activeSection === 1 && (
                <motion.div
                  key="about-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <MotionTypography
                    variant='h3'
                    fontWeight={500}
                    align='center'
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                    sx={{ mb: 4 }}
                  >
                    About Me
                  </MotionTypography>

                  <Line />

                  <Container>
                    <MotionTypography
                      variant='subtitle1'
                      textAlign={'justify'}
                      initial={{ opacity: 0, y: -80 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
                      sx={{ fontSize: '1.15rem', lineHeight: 2 }}
                    >
                      I'm a Frontend Developer with 1–2 years of hands-on experience in Vue.js and 3 months of experience in user support as a Help Desk. Currently expanding my expertise in React.js, Next.js, and Node.js, I enjoy building intuitive, high-performance user interfaces with modern styling frameworks like MUI and Tailwind CSS.
                      <br /><br />
                      Beyond frontend development, I have practical experience delivering complex end-to-end projects and data pipelines...{' '}
                      <span
                        onClick={() => setShowMoreAbout(true)}
                        style={{ color: '#D32F2F', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Read more
                      </span>

                      <Dialog
                        open={showMoreAbout}
                        onClose={() => setShowMoreAbout(false)}
                        maxWidth="md"
                        fullWidth
                        PaperProps={{
                          sx: {
                            backgroundColor: 'rgba(30, 30, 30, 0.95)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                          }
                        }}
                      >
                        <DialogTitle sx={{ fontWeight: 'bold', fontSize: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', color: '#f9be1d' }}>
                          About Me
                        </DialogTitle>
                        <DialogContent
                          sx={{
                            mt: 2,
                            '&::-webkit-scrollbar': { width: '6px' },
                            '&::-webkit-scrollbar-track': { background: 'transparent' },
                            '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px' },
                            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: 'rgba(249, 190, 29, 0.8)' }
                          }}
                        >
                          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#E0E0E0' }}>
                            I'm a Frontend Developer with 1–2 years of hands-on experience in Vue.js and 3 months of experience in user support as a Help Desk. Currently expanding my expertise in React.js, Next.js, and Node.js, I enjoy building intuitive, high-performance user interfaces with modern styling frameworks like MUI and Tailwind CSS.<br /><br />

                            Beyond frontend development, I have practical experience delivering complex end-to-end projects and data pipelines:<br /><br />

                            <strong style={{ color: '#D32F2F' }}>High-Performance EDR/XDR Security Dashboard & Data Pipeline:</strong> Engineered a scalable, open-source EDR/XDR infrastructure and real-time data pipeline using Wazuh, Kafka, and OpenSearch to ingest and route high-volume security telemetry. Built a high-performance Next.js dashboard optimized for rendering massive attack logs seamlessly without browser performance degradation.<br /><br />

                            <strong style={{ color: '#D32F2F' }}>AI-Powered Resume Screening Platform ("Primo HR"):</strong> Built a microservices-based resume screening tool that utilizes the DeepSeek AI model to automate resume parsing and job-fit candidate scoring via Next.js, Node.js, and Redis task queues.<br /><br />

                            <strong style={{ color: '#D32F2F' }}>Two-Sided Marketplace Application ("Friend Ship"):</strong> Architected and designed UI/UX workflows connecting travelers with service providers, creating flexible user roles within a unified system at Bangkok University.<br /><br />

                            <strong style={{ color: '#D32F2F' }}>Smart IoT Solutions:</strong> Built a Smart Water Management System using microcontrollers (ESP32/ESP8266), ultrasonic sensors, and the Blynk IoT platform for real-time monitoring and control.<br /><br />

                            <strong style={{ color: '#D32F2F' }}>Computer Vision & Machine Learning:</strong> Worked with video analytics pipelines using YOLO, OpenCV, and classification algorithms for data-driven applications.<br /><br />

                            I am passionate about continuous learning, bridging the gap between infrastructure/AI concepts and slick web applications, and constantly improving my full-stack and front-end development skills.
                          </Typography>
                        </DialogContent>
                        <DialogActions sx={{ p: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)', justifyContent: 'center' }}>
                          <Button onClick={() => setShowMoreAbout(false)} variant="contained" sx={{ backgroundColor: '#D32F2F', color: 'white', '&:hover': { backgroundColor: '#B71C1C' }, borderRadius: '20px', px: 4, fontWeight: 'bold' }}>
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </MotionTypography>
                  </Container>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>

        {/* ── Section 2: Certificates ── */}
        <div
          className="scroll-section"
          ref={(el) => { sectionRefs.current[2] = el; }}
          id="certificate"
        >
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'scroll', py: 4 }}>
            <AnimatePresence>
              {activeSection === 2 && (
                <motion.div
                  key="certificate-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <MotionTypography
                    variant='h3'
                    fontWeight={700}
                    align='center'
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.15 }}
                    sx={{ mb: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
                  >
                    My Certificates
                  </MotionTypography>

                  <Box className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 w-full">
                    {certificatesData.current.map((cert, i) => (
                      <MotionBox
                        key={i}
                        className="break-inside-avoid mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.1 + (i * 0.05) }}
                        onClick={() => setSelectedImage(cert.image)}
                        style={{ cursor: 'pointer' }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                          <CardMedia
                            component="img"
                            image={cert.image}
                            alt={cert.title}
                            sx={{ borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.2)', width: '100%', display: 'block' }}
                          />
                        </Card>
                      </MotionBox>
                    ))}
                  </Box>

                  <Dialog
                    open={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    maxWidth="lg"
                    PaperProps={{
                      sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'
                      }
                    }}
                  >
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Certificate Preview"
                        style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '12px', cursor: 'pointer' }}
                        onClick={() => setSelectedImage(null)}
                      />
                    )}
                  </Dialog>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>

        {/* ── Section 3: Experience ── */}
        <div
          className="scroll-section"
          ref={(el) => { sectionRefs.current[3] = el; }}
          id="experience"
        >
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'scroll', py: 2 }}>
            <AnimatePresence>
              {activeSection === 3 && (
                <motion.div
                  key="experience-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <MotionTypography
                    variant='h3'
                    fontWeight={500}
                    align='center'
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                    sx={{ mb: 3 }}
                  >
                    Work Experiences
                  </MotionTypography>

                  <Box className="w-full flex flex-wrap">
                    {/* Timeline */}
                    <MotionBox
                      className="w-full md:w-1/2"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                    >
                      {experience.current.map((e, i) => (
                        <MotionBox variants={itemVariants} key={i}>
                          <BasicTimeline
                            type={'Experiences'}
                            title={e.title}
                            detail={e.detail}
                            years={e.years}
                          />
                        </MotionBox>
                      ))}
                    </MotionBox>

                    {/* Image */}
                    <MotionBox
                      className="w-full md:w-1/2 flex items-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
                    >
                      <Box>
                        <img src="/image/workEx.jpg" alt="Work Experience" className='rounded-2xl' />
                      </Box>
                    </MotionBox>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>

        {/* ── Section 4: Projects ── */}
        <div
          className="scroll-section"
          ref={(el) => { sectionRefs.current[4] = el; }}
          id="projects"
        >
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'scroll', py: 4 }}>
            <AnimatePresence>
              {activeSection === 4 && (
                <motion.div
                  key="projects-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <MotionTypography
                    variant='h3'
                    fontWeight={700}
                    align='center'
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.15 }}
                    sx={{ mb: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
                  >
                    My Projects
                  </MotionTypography>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
                      gap: 0,
                    }}
                  >
                    {projectsData.current.map((project, i) => (
                      <MotionBox
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 + (i * 0.1) }}
                        sx={{
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          zIndex: 0,
                          '&:hover': {
                            transform: 'translateY(-10px) scale(1.02)',
                            zIndex: 10,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                            backgroundColor: 'rgba(20, 20, 20, 0.95)'
                          }
                        }}
                        onClick={() => setSelectedProject(project)}
                      >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', boxShadow: 'none', color: 'white', borderRadius: 0 }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={project.image}
                            alt={project.title}
                            sx={{ height: 160, objectFit: 'cover' }}
                          />
                          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#f9be1d' }}>
                              {project.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#ccc',
                                mb: 2,
                                flexGrow: 1,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}
                            >
                              {project.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {project.tech.map((t, idx) => (
                                <Chip key={idx} label={t} size="small" sx={{ backgroundColor: '#D32F2F', color: 'white', fontWeight: 'bold' }} />
                              ))}
                            </Box>
                          </CardContent>
                        </Card>
                      </MotionBox>
                    ))}
                  </Box>

                  <Dialog
                    open={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    maxWidth="md"
                    fullWidth
                    PaperProps={{
                      sx: {
                        backgroundColor: 'rgba(30, 30, 30, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        borderRadius: '16px',
                      }
                    }}
                  >
                    {selectedProject && (
                      <>
                        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="h5" fontWeight="bold" sx={{ color: '#f9be1d' }}>
                            {selectedProject.title}
                          </Typography>
                          <IconButton onClick={() => setSelectedProject(null)} sx={{ color: 'white' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                          </IconButton>
                        </DialogTitle>
                        <DialogContent
                          dividers
                          sx={{
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            '&::-webkit-scrollbar': { width: '6px' },
                            '&::-webkit-scrollbar-track': { background: 'transparent' },
                            '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px' },
                            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: 'rgba(249, 190, 29, 0.8)' }
                          }}
                        >
                          <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} />
                          {selectedProject.detailSections ? (
                            <Box sx={{ mb: 3 }}>
                              {selectedProject.detailSections.map((section: any, sidx: number) => (
                                <Box key={sidx} sx={{ mb: 3 }}>
                                  <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#f9be1d', mb: 1, fontSize: '1rem' }}>
                                    {section.heading}
                                  </Typography>
                                  {section.body && (
                                    <Typography variant="body2" sx={{ color: '#ccc', lineHeight: 1.8, mb: section.bullets ? 1 : 0 }}>
                                      {section.body}
                                    </Typography>
                                  )}
                                  {section.bullets && (
                                    <Box component="ul" sx={{ pl: 2.5, mt: 0.5, mb: 0 }}>
                                      {section.bullets.map((bullet: string, bidx: number) => (
                                        <Box component="li" key={bidx} sx={{ color: '#ccc', fontSize: '0.875rem', lineHeight: 1.9, mb: 0.5 }}>
                                          {bullet}
                                        </Box>
                                      ))}
                                    </Box>
                                  )}
                                </Box>
                              ))}
                            </Box>
                          ) : (
                            <Typography variant="body1" sx={{ color: '#eee', mb: 3, lineHeight: 1.6 }}>
                              {selectedProject.description}
                            </Typography>
                          )}

                          {selectedProject.modalImages && selectedProject.modalImages.map((img: string, idx: number) => (
                            <img key={idx} src={img} alt={`${selectedProject.title} detail ${idx + 1}`} style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }} />
                          ))}

                          {selectedProject.demoLink && (
                            <Box sx={{ mt: 2, mb: 4, display: 'flex' }}>
                              <Button
                                variant="contained"
                                href={selectedProject.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  backgroundColor: '#f9be1d',
                                  color: '#000',
                                  fontWeight: 'bold',
                                  px: 4,
                                  py: 1.5,
                                  borderRadius: '30px',
                                  textTransform: 'none',
                                  fontSize: '1rem',
                                  boxShadow: '0 4px 14px rgba(249, 190, 29, 0.4)',
                                  transition: 'all 0.3s ease',
                                  '&:hover': { backgroundColor: '#e5ab19', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(249, 190, 29, 0.6)' }
                                }}
                              >
                                View Figma Demo
                              </Button>
                            </Box>
                          )}

                          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Technologies Used:</Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {selectedProject.tech.map((t: string, idx: number) => (
                              <Chip key={idx} label={t} sx={{ backgroundColor: '#D32F2F', color: 'white', fontWeight: 'bold' }} />
                            ))}
                          </Box>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={() => setSelectedProject(null)} sx={{ color: '#f9be1d' }}>Close</Button>
                        </DialogActions>
                      </>
                    )}
                  </Dialog>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>

        {/* ── Section 5: Education ── */}
        <div
          className="scroll-section"
          ref={(el) => { sectionRefs.current[5] = el; }}
          id="education"
        >
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'scroll', py: 2 }}>
            <AnimatePresence>
              {activeSection === 5 && (
                <motion.div
                  key="education-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <MotionTypography
                    variant='h3'
                    fontWeight={500}
                    align='center'
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                    sx={{ mb: 3 }}
                  >
                    Education
                  </MotionTypography>

                  <Box className="flex flex-wrap">
                    {/* Image */}
                    <MotionBox
                      className="w-full md:w-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.3 }}
                    >
                      <Box>
                        <img src="/image/school.jpg" alt="Education" className='rounded-2xl' />
                      </Box>
                    </MotionBox>

                    {/* Timeline */}
                    <MotionBox
                      className="w-full md:w-1/2"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                    >
                      {education.current.map((e, i) => (
                        <MotionBox key={i} variants={itemVariants}>
                          <BasicTimeline
                            type={'Education'}
                            title={e.title}
                            subTitle={e.subTitle}
                            years={e.years}
                          />
                        </MotionBox>
                      ))}
                    </MotionBox>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>

        {/* ── Section 6: Skills ── */}
        <div
          className="scroll-section"
          ref={(el) => { sectionRefs.current[6] = el; }}
          id="skills"
        >
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'scroll', py: 1 }}>
            <AnimatePresence>
              {activeSection === 6 && (
                <motion.div
                  key="skills-content"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <MotionTypography
                    variant='h3'
                    fontWeight={700}
                    align='center'
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.15 }}
                    sx={{ mb: 1.5, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
                  >
                    My Skills
                  </MotionTypography>

                  <Box className="flex flex-wrap justify-center">
                    {skills.current.map((e, i) => (
                      <Box key={i} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
                        <Skill
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            delay: i * 0.07,
                          }}
                          name={e.name}
                          skill={e.skill}
                          pic={e.pic}
                        />
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </div>



      </div>{/* end scroll-container */}
    </>
  );
};

export default Home;
