import { Container, Box, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent, CardMedia, Chip } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

import BasicTimeline from "../components/TimeLine";
import Line from "../components/Line";
import Navbar from '../components/Navbar';
import DotNav from '../components/DotNav';

import { useRef, useState, useEffect, useCallback } from "react";

// ========== Section animation variants ==========
const sectionVariants: Variants = {
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

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
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

const SECTIONS_EN = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "certificate", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

const SECTIONS_TH = [
  { id: "hero", label: "หน้าแรก" },
  { id: "about", label: "เกี่ยวกับฉัน" },
  { id: "certificate", label: "เกียรติบัตร" },
  { id: "experience", label: "ประสบการณ์การทำงาน" },
  { id: "projects", label: "ผลงานโครงงาน" },
  { id: "education", label: "ประวัติการศึกษา" },
  { id: "skills", label: "ทักษะความสามารถ" },
];

// ========== Home Component ==========
const Home: React.FC = () => {

  const MotionTypography = motion(Typography);
  const MotionBox = motion(Box as any);
  const MotionButton = motion(Button);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [showResume, setShowResume] = useState(false);
  const [lang, setLang] = useState<'en' | 'th'>('en');

  const SECTIONS = lang === 'th' ? SECTIONS_TH : SECTIONS_EN;

  // ---------- Data ----------
  const certificatesData = useRef([
    { title: "Certificate 1", image: "/image/certificate/cert1.png" },
    { title: "Certificate 2", image: "/image/certificate/cert2.png" },
    { title: "Certificate 4", image: "/image/certificate/cert4.png" },
    { title: "Certificate 5", image: "/image/certificate/cert5.png" },
    { title: "Certificate 6", image: "/image/certificate/cert6.png" },
    { title: "Certificate 7", image: "/image/certificate/cert7.png" },
    { title: "Certificate 8", image: "/image/certificate/cert8.png" },
    { title: "Certificate 9", image: "/image/certificate/cert9.png" },
    { title: "Certificate 3", image: "/image/certificate/cert3.png" },
  ]);

  const projectsData_EN = [
    {
      title: "EDR/XDR Security Dashboard & Data Pipeline",
      description: "Engineered real-time security telemetry pipelines using Wazuh, Kafka, and OpenSearch, paired with a high-performance Next.js dashboard for high-volume log visualization.",
      tech: ["Next.js", "Kafka", "OpenSearch", "Wazuh"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      modalImages: [
        "/image/cer1/1.png",
        "/image/cer1/2.png"
      ]
    },
    {
      title: "Primo HR — AI Resume Screening Platform",
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
          body: "Primo HR is an AI-powered resume screening and evaluation platform designed to automate initial candidate assessments for recruitment teams. The system converts unstructured PDF resumes into structured data and evaluates candidate profiles against specific Job Descriptions (JDs) using Large Language Models (LLMs). This allows recruiters to instantly view suitability fit scores, skill matrices, and actionable candidate summaries."
        },
        {
          heading: "🏗️ System Architecture & Tech Stack",
          bullets: [
            "Frontend: Next.js (App Router), Tailwind CSS, TypeScript — Interactive HR dashboard for batch uploads, candidate tracking, and analytics visualization.",
            "Backend & API: Node.js — RESTful API services, PDF text extraction pipelines, and business logic routing.",
            "Database & Auth: Supabase (PostgreSQL) — Structured candidate storage, schema management, and session authentication.",
            "Task Queue & Caching: Redis & BullMQ — Asynchronous background job processing to handle multi-file resume queues without UI or server blocking.",
            "AI & LLM Inference: DeepSeek-R1-Distill-Llama-8B via Ollama (Local) — Contextual analysis, skill matching, and enforced JSON schema scoring outputs."
          ]
        },
        {
          heading: "⚡ Key Features & Workflow",
          bullets: [
            "Automated Batch Ingestion: Bulk upload resumes with real-time file validation and parsing status tracking.",
            "Asynchronous Queue Management: Heavy LLM processing is offloaded to Redis/BullMQ workers to ensure responsive frontend interactions.",
            "AI-Powered Fit Scoring: Analyzes applicant experience against job criteria to generate a normalized fit score (0–100%).",
            "Structured Output Validation: Enforces strict JSON responses from local LLMs for reliable database storage and clean UI rendering.",
            "Recruiter Dashboard: Advanced search, filtering, and comparative candidate ranking."
          ]
        },
        {
          heading: "🏆 Key Engineering Takeaways",
          bullets: [
            "Scalable Queue Architecture: Decoupled PDF ingestion and AI evaluation using BullMQ workers, ensuring stability during concurrent file uploads.",
            "Cost Efficiency & Data Privacy: Local inference via Ollama keeps sensitive resume data secure while eliminating recurring third-party API costs.",
            "Schema Reliability: Structured prompt engineering guarantees uniform JSON outputs, preventing UI rendering errors."
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
  ];

  const projectsData_TH = [
    {
      title: "EDR/XDR Security Dashboard & Data Pipeline",
      description: "พัฒนาระบบประมวลผลข้อมูลความปลอดภัยแบบ Real-time ด้วย Wazuh, Kafka และ OpenSearch พร้อมเชื่อมต่อกับหน้า Dashboard ประสิทธิภาพสูงด้วย Next.js เพื่อแสดงผลและวิเคราะห์บันทึกเหตุการณ์การโจมตี (Logs) ปริมาณมหาศาล",
      tech: ["Next.js", "Kafka", "OpenSearch", "Wazuh"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      modalImages: [
        "/image/cer1/1.png",
        "/image/cer1/2.png"
      ]
    },
    {
      title: "Primo HR — แพลตฟอร์มคัดกรองเรซูเม่ด้วย AI",
      description: "แพลตฟอร์มคัดกรองและประเมินเรซูเม่อัตโนมัติด้วย AI โดยใช้โมเดล DeepSeek เพื่อแปลงข้อมูลเรซูเม่และคำนวณคะแนนความเหมาะสมกับตำแหน่งงาน",
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
          heading: "📌 ภาพรวมของโครงงาน (Project Overview)",
          body: "Primo HR คือแพลตฟอร์มคัดกรองและประเมินคุณสมบัติของผู้สมัครงานด้วยปัญญาประดิษฐ์ (AI) ออกแบบมาเพื่อเพิ่มประสิทธิภาพและลดระยะเวลาในการประเมินผู้สมัครของทีมสรรหาบุคลากร (HR) โดยระบบจะแปลงเอกสารเรซูเม่รูปแบบ PDF ให้อยู่ในโครงสร้างข้อมูลแบบ Structured Data และนำมาประเมินเปรียบเทียบกับคำอธิบายลักษณะงาน (Job Description) ผ่านโมเดลภาษาขนาดใหญ่ (LLMs) ทำให้ HR ทราบคะแนนความเหมาะสม (Fit Score), ทักษะที่ตรงตามเกณฑ์ และบทวิเคราะห์จุดเด่นจุดด้อยของผู้สมัครได้ในทันที"
        },
        {
          heading: "🏗️ สถาปัตยกรรมระบบและเทคโนโลยีที่ใช้ (Architecture & Tech Stack)",
          bullets: [
            "Frontend: Next.js (App Router), Tailwind CSS, TypeScript — หน้าจอ Dashboard แบบอินเทอร์แอคทีฟ รองรับการอัปโหลดไฟล์พร้อมกัน การติดตามสถานะผู้สมัคร และการแสดงผลข้อมูลเชิงสถิติ",
            "Backend & API: Node.js — บริการ RESTful API, ระบบดึงข้อความจากไฟล์ PDF และการประมวลผล Business Logic",
            "Database & Auth: Supabase (PostgreSQL) — จัดเก็บข้อมูลผู้สมัครอย่างมีโครงสร้าง พร้อมระบบจัดการ Schema และการยืนยันตัวตน",
            "Task Queue & Caching: Redis & BullMQ — ระบบคิวงานเบื้องหลังแบบ Asynchronous เพื่อจัดการคิววิเคราะห์เรซูเม่ปริมาณมากโดยไม่ทำให้ UI หรือเซิร์ฟเวอร์เกิดการติดขัด",
            "AI & LLM Inference: DeepSeek-R1-Distill-Llama-8B ผ่าน Ollama (Local) — วิเคราะห์บริบท, ประเมินความสอดคล้องของทักษะ และส่งออกผลลัพธ์เป็นโครงสร้าง JSON ตามที่กำหนด"
          ]
        },
        {
          heading: "⚡ ฟีเจอร์หลักและกระบวนการทำงาน (Key Features & Workflow)",
          bullets: [
            "Automated Batch Ingestion: อัปโหลดเรซูเม่ทีละหลายไฟล์ พร้อมระบบตรวจสอบความถูกต้องและรายงานสถานะการประมวลผลแบบ Real-time",
            "Asynchronous Queue Management: ส่งต่องานประมวลผล AI ไปยัง Worker ของ Redis/BullMQ เพื่อให้หน้าเว็บทำงานได้อย่างรวดเร็วและลื่นไหล",
            "AI-Powered Fit Scoring: ประเมินประสบการณ์การทำงานของผู้สมัครเทียบกับคุณสมบัติที่เปิดรับ เพื่อคำนวณคะแนนความเหมาะสม (0–100%)",
            "Structured Output Validation: กำหนดโครงสร้างคำตอบ JSON จาก Local LLM อย่างเข้มงวด เพื่อความเสถียรในการบันทึกลงฐานข้อมูลและการแสดงผลบนหน้าเว็บ",
            "Recruiter Dashboard: ระบบค้นหาขั้นสูง กรองข้อมูลผู้สมัคร และจัดอันดับความเหมาะสมเพื่อการตัดสินใจที่แม่นยำ"
          ]
        },
        {
          heading: "🏆 จุดเด่นด้านวิศวกรรมซอฟต์แวร์ (Key Engineering Takeaways)",
          bullets: [
            "Scalable Queue Architecture: แยกการนำเข้าไฟล์ PDF และการประมวลผล AI ออกจากกันด้วย BullMQ Worker ช่วยรักษาเสถียรภาพของระบบขณะมีการใช้งานพร้อมกันสูง",
            "Cost Efficiency & Data Privacy: การประมวลผล AI ในเครื่อง (Local Inference) ผ่าน Ollama ช่วยรักษาความปลอดภัยของข้อมูลส่วนบุคคลของผู้สมัคร และลดค่าใช้จ่าย Third-party API",
            "Schema Reliability: เทคนิค Prompt Engineering แบบเฉพาะเจาะจงเพื่อควบคุมผลลัพธ์ JSON ให้มีความแม่นยำและถูกต้องตาม Schema 100%"
          ]
        }
      ]
    },
    {
      title: "Friend Ship Marketplace",
      description: "ออกแบบระบบ UI/UX ของแพลตฟอร์มตลาดสองฝั่ง (Two-Sided Marketplace) ที่เชื่อมโยงระหว่างนักท่องเที่ยวและผู้ให้บริการเข้าด้วยกัน",
      tech: ["Vue.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      demoLink: "https://www.figma.com/design/AC9xjRhBAubG2RIBZS392K/IT-358?node-id=0-1&t=AxdtSK7vb6qfSBKt-1"
    },
    {
      title: "Smart Water Management",
      description: "ระบบ IoT อัจฉริยะสำหรับตรวจสอบและควบคุมการใช้น้ำแบบ Real-time โดยใช้ไมโครคอนโทรลเลอร์และเซ็นเซอร์วัดระยะอัลตราโซนิก",
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
      description: "พัฒนาระบบประมวลผลภาพและวิดีโอ (Video Analytics Pipeline) ด้วย YOLO, OpenCV และอัลกอริทึมการจำแนกประเภท โดยเน้นการพัฒนาระบบตรวจจับและอ่านป้ายทะเบียนรถยนต์อัตโนมัติ",
      tech: ["YOLO", "OpenCV", "Python"],
      image: "/image/license-plate-cv.png",
      modalImages: [
        "/image/cer5/image.png"
      ]
    },
  ];

  const currentProjects = lang === 'th' ? projectsData_TH : projectsData_EN;

  const skillCategories_EN = [
    {
      category: 'Frontend Development',
      icon: <CodeIcon sx={{ color: '#00abf0' }} />,
      color: '#00abf0',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Vue.js',
        'Next.js',
        'Bootstrap',
        'Responsive Web Design',
      ],
    },
    {
      category: 'Backend & Integration',
      icon: <DnsIcon sx={{ color: '#4CAF50' }} />,
      color: '#4CAF50',
      skills: [
        'Node.js',
        'REST APIs',
        'API Integration',
      ],
    },
    {
      category: 'Databases',
      icon: <StorageIcon sx={{ color: '#f59e0b' }} />,
      color: '#f59e0b',
      skills: [
        'MySQL',
        'phpMyAdmin',
      ],
    },
    {
      category: 'AI & Engineering Tools',
      icon: <AutoAwesomeIcon sx={{ color: '#ec4899' }} />,
      color: '#ec4899',
      skills: [
        'Antigravity',
        'Git / GitHub',
        'Postman',
        'Ollama (LLM Integration)',
      ],
    },
    {
      category: 'Core Competencies',
      icon: <AccountTreeIcon sx={{ color: '#a855f7' }} />,
      color: '#a855f7',
      skills: [
        'System Architecture & Data Flow Design',
        'AI-Assisted Development',
        'Rapid Prototyping',
        'Debugging',
      ],
    },
  ];

  const skillCategories_TH = [
    {
      category: 'การพัฒนาส่วนติดต่อผู้ใช้ (Frontend Development)',
      icon: <CodeIcon sx={{ color: '#00abf0' }} />,
      color: '#00abf0',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Vue.js',
        'Next.js',
        'Bootstrap',
        'Responsive Web Design',
      ],
    },
    {
      category: 'การพัฒนาระบบหลังบ้านและการเชื่อมต่อ (Backend & Integration)',
      icon: <DnsIcon sx={{ color: '#4CAF50' }} />,
      color: '#4CAF50',
      skills: [
        'Node.js',
        'REST APIs',
        'API Integration',
      ],
    },
    {
      category: 'ระบบฐานข้อมูล (Databases)',
      icon: <StorageIcon sx={{ color: '#f59e0b' }} />,
      color: '#f59e0b',
      skills: [
        'MySQL',
        'phpMyAdmin',
      ],
    },
    {
      category: 'เครื่องมือ AI และวิศวกรรมซอฟต์แวร์ (AI & Engineering Tools)',
      icon: <AutoAwesomeIcon sx={{ color: '#ec4899' }} />,
      color: '#ec4899',
      skills: [
        'Antigravity',
        'Git / GitHub',
        'Postman',
        'Ollama (LLM Integration)',
      ],
    },
    {
      category: 'สมรรถนะหลักและความเชี่ยวชาญ (Core Competencies)',
      icon: <AccountTreeIcon sx={{ color: '#a855f7' }} />,
      color: '#a855f7',
      skills: [
        'การออกแบบสถาปัตยกรรมระบบและ Data Flow',
        'การพัฒนาด้วยเครื่องมือ AI (AI-Assisted Development)',
        'การสร้างต้นแบบอย่างรวดเร็ว (Rapid Prototyping)',
        'การตรวจสอบและแก้ไขข้อบกพร่อง (Debugging)',
      ],
    },
  ];

  const currentSkills = lang === 'th' ? skillCategories_TH : skillCategories_EN;

  const education_EN = [
    {
      title: "Bachelor's degree",
      subTitle: 'B.Sc. Computer Science - Data Science\nSchool of Information Technology and Innovation\nBangkok University\nGPA: 3.01',
      years: 'Expected Graduation: 2026',
    },
    {
      title: 'High Vocational Certificate - Eastern Technological College',
      subTitle: 'Information Technology\nGPA: 3.79',
      years: 'Expected Graduation: 2020',
    },
  ];

  const education_TH = [
    {
      title: "ปริญญาตรี (Bachelor's degree)",
      subTitle: 'วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ (มุ่งเน้นวิทยาการข้อมูล)\nคณะเทคโนโลยีสารสนเทศและนวัตกรรม มหาวิทยาลัยกรุงเทพ\nเกรดเฉลี่ยสะสม (GPA): 3.01',
      years: 'คาดว่าจะสำเร็จการศึกษา: 2026',
    },
    {
      title: 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) - วิทยาลัยเทคโนโลยีภาคตะวันออก (อี.เทค)',
      subTitle: 'สาขาวิชาเทคโนโลยีสารสนเทศ\nเกรดเฉลี่ยสะสม (GPA): 3.79',
      years: 'สำเร็จการศึกษา: 2020',
    },
  ];

  const currentEducation = lang === 'th' ? education_TH : education_EN;

  const experience_EN = [
    {
      title: 'ACADEMIC & AI PROJECTS - Bangkok University',
      years: '2026',
      detail: [
        'Primo HR: Built an AI-powered resume parsing platform using Next.js, Node.js, Redis/BullMQ task queues, and Ollama for candidate evaluation',
        'Image and Video Processing: License Plate Recognition using YOLOv8',
        'Data Analytics and Mining: Create AI model for project',
        'EDR/XDR & SOC Security Monitoring Pipeline',
      ],
    },
    {
      title: 'Front End Developer - Ottimo System',
      years: 'Oct 2023 - Jan 2025',
      detail: [
        'Developed and maintained frontend parts of company websites',
        'Integrated frontend with backend systems via API',
        'Improved UI/UX based on team feedback',
        'Conducted initial functionality testing before QA handoff',
        'Utilized Vue.js, HTML, CSS, JavaScript, and Postman',
      ],
    },
    {
      title: 'Front End Developer - High Vocational Certificate',
      years: '2019',
      detail: [
        'Developed E-Commerce websites using Vue.js and Bootstrap',
        'Designed web pages using HTML and CSS',
        'Integrated backend systems and external APIs',
        'Tested APIs using Postman',
        'Managed data and databases via phpMyAdmin',
      ],
    },
    {
      title: 'Front End Developer - Vocational Certificate',
      years: '2018',
      detail: [
        'Developed basic websites using PHP, HTML, CSS, and Bootstrap',
        'Managed databases using phpMyAdmin',
        'Learned website development processes in a professional environment',
      ],
    },
  ];

  const experience_TH = [
    {
      title: 'โครงงานวิชาการและโครงงาน AI - มหาวิทยาลัยกรุงเทพ',
      years: '2026',
      detail: [
        'Primo HR: แพลตฟอร์มคัดกรองเรซูเม่ด้วย AI (Next.js, Node.js, Redis/BullMQ, Ollama)',
        'Image & Video Processing: พัฒนาระบบตรวจจับและอ่านป้ายทะเบียนรถยนต์ด้วย YOLOv8',
        'Data Analytics & Mining: พัฒนาโมเดล AI สำหรับการวิเคราะห์ข้อมูลโครงงาน',
        'Security Pipeline: ระบบตรวจสอบความปลอดภัย EDR/XDR & SOC Telemetry Pipeline',
      ],
    },
    {
      title: 'นักพัฒนา Front End Developer - Ottimo System',
      years: 'ต.ค. 2023 - ม.ค. 2025',
      detail: [
        'พัฒนาและดูแลรักษาระบบ Frontend ของเว็บไซต์บริษัทให้ทำงานได้อย่างมีประสิทธิภาพ',
        'เชื่อมต่อส่วน Frontend เข้ากับระบบ Backend ผ่าน RESTful API',
        'ปรับปรุงและพัฒนา UI/UX ตามข้อเสนอแนะของทีม',
        'ทดสอบการทำงานเบื้องต้น (Unit/Integration Testing) ก่อนส่งมอบให้ QA',
        'ประยุกต์ใช้ Vue.js, HTML, CSS, JavaScript และ Postman',
      ],
    },
    {
      title: 'นักพัฒนา Front End Developer - ระดับ ปวส. (อี.เทค)',
      years: '2019',
      detail: [
        'พัฒนาเว็บไซต์ E-Commerce ด้วย Vue.js และ Bootstrap',
        'ออกแบบและจัดทำหน้าเว็บไซต์ด้วย HTML และ CSS',
        'เชื่อมต่อระบบ Backend และ External API พร้อมทดสอบด้วย Postman',
        'จัดการโครงสร้างฐานข้อมูลผ่าน phpMyAdmin',
      ],
    },
    {
      title: 'นักพัฒนา Front End Developer - ระดับ ปวช.',
      years: '2018',
      detail: [
        'พัฒนาเว็บไซต์พื้นฐานด้วย PHP, HTML, CSS และ Bootstrap',
        'จัดการฐานข้อมูลผ่าน phpMyAdmin และเรียนรู้กระบวนการทำงานจริง',
      ],
    },
  ];

  const currentExperience = lang === 'th' ? experience_TH : experience_EN;


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
      {/* Navbar — receives scroll helper, lang state and toggle */}
      <Navbar
        scrollToSection={scrollToSectionById}
        onShowResume={() => setShowResume(true)}
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'en' ? 'th' : 'en'))}
      />

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
          <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', alignItems: 'flex-start', pt: { xs: 7, md: 8 } }}>
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
                            fontWeight={800}
                            sx={{
                              textAlign: { xs: 'center', lg: 'left' },
                              mb: { xs: 0.5, sm: 1, lg: 2.5 },
                              mt: 0,
                              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
                            }}
                          >
                            {lang === 'th' ? 'สวัสดีครับ' : 'Hello'}<span className='text-red-600'>.</span>
                          </MotionTypography>

                          <MotionTypography
                            variant='h4'
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.35 }}
                            sx={{
                              textAlign: { xs: 'center', lg: 'left' },
                              my: { xs: 0.5, sm: 1, lg: 2.5 },
                              fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.15rem' }
                            }}
                          >
                            <span className='text-red-600'>____</span>
                            {lang === 'th' ? 'ผม นภมณฑล' : "I'm Napamonton"}
                            <span className='text-red-600'>(</span>
                            {lang === 'th' ? 'สตางค์' : 'Stang'}
                            <span className='text-red-600'>)</span>
                          </MotionTypography>

                          <MotionTypography
                            variant='h3'
                            fontWeight={800}
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
                            sx={{
                              textAlign: { xs: 'center', lg: 'left' },
                              my: { xs: 0.5, sm: 1, lg: 2.5 },
                              fontSize: { xs: '2rem', sm: '2.4rem', md: '3rem' }
                            }}
                          >
                            {lang === 'th' ? 'นักพัฒนาซอฟต์แวร์' : 'Developer'}
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
                                sx={{ color: 'white', transition: 'all 0.25s ease', '&:hover': { color: '#E1306C', transform: 'translateY(-2px)' } }}
                              >
                                <InstagramIcon fontSize="large" />
                              </IconButton>
                              <IconButton
                                component="a"
                                href="https://www.facebook.com/napamonton.nork/"
                                target="_blank"
                                sx={{ color: 'white', transition: 'all 0.25s ease', '&:hover': { color: '#1877F2', transform: 'translateY(-2px)' } }}
                              >
                                <FacebookIcon fontSize="large" />
                              </IconButton>
                              <IconButton
                                component="a"
                                href="https://github.com/napamontonnorkhuntod-lab"
                                target="_blank"
                                sx={{ color: 'white', transition: 'all 0.25s ease', '&:hover': { color: '#e6edf3', transform: 'translateY(-2px)' } }}
                              >
                                <GitHubIcon fontSize="large" />
                              </IconButton>
                              <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/napamonton-norkhuntod-b88629346/"
                                target="_blank"
                                sx={{ color: 'white', transition: 'all 0.25s ease', '&:hover': { color: '#0077b5', transform: 'translateY(-2px)' } }}
                              >
                                <LinkedInIcon fontSize="large" />
                              </IconButton>
                            </Box>
                          </motion.div>
                        </Box>

                        <Box sx={{ my: { xs: 2, sm: 2.5, lg: 4 }, textAlign: { xs: 'center', lg: 'start' } }}>
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
                            {lang === 'th' ? 'ผลงานของฉัน' : 'My Project'}
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
                            {lang === 'th' ? 'เรซูเม่ของฉัน' : 'My Resume'}
                          </MotionButton>
                        </Box>

                        <Dialog open={showResume} onClose={() => setShowResume(false)} maxWidth="md" fullWidth PaperProps={{ sx: { backgroundColor: 'transparent', boxShadow: 'none' } }}>
                          <Box sx={{ position: 'relative' }}>
                            <img
                              src={lang === 'th' ? '/resume-thai.jpg' : '/resume.jpg'}
                              alt="Resume"
                              style={{ width: '100%', borderRadius: '12px', objectFit: 'contain' }}
                            />
                            <IconButton onClick={() => setShowResume(false)} sx={{ position: 'absolute', top: 10, right: 10, color: '#f9be1d', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' } }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </IconButton>
                          </Box>
                        </Dialog>
                      </Box>
                    </Box>

                    {/* Right: Profile Image with Bottom-Fade Mask & Ambient Spotlight */}
                    <MotionBox
                      className="xl:w-1/2 lg:w-1/2 w-full items-center justify-center flex relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.3 }}
                    >
                      {/* Ambient Background Glow / Spotlight */}
                      <Box
                        sx={{
                          position: 'absolute',
                          width: { xs: 300, sm: 400, md: 480, xl: 560 },
                          height: { xs: 300, sm: 400, md: 480, xl: 560 },
                          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.24) 0%, rgba(220, 38, 38, 0.09) 45%, transparent 70%)',
                          filter: 'blur(50px)',
                          borderRadius: '50%',
                          pointerEvents: 'none',
                          zIndex: 0,
                        }}
                      />

                      {/* Profile Image with Bottom Fade Mask */}
                      <Box
                        component="img"
                        src="/image/resume_person.png"
                        alt="Napamonton"
                        className="w-[360px] sm:w-[440px] md:w-[500px] lg:w-[540px] xl:w-[600px] max-w-full object-contain relative z-10"
                        sx={{
                          WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
                          maskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
                          filter: 'contrast(1.03) brightness(0.98)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.02)',
                          },
                        }}
                      />
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
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'scroll', pt: { xs: 6, md: 7 }, pb: 3 }}>
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
                    fontWeight={700}
                    align='center'
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.15 }}
                    sx={{ mb: 3, mt: 0, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
                  >
                    {lang === 'th' ? 'เกี่ยวกับฉัน' : 'About Me'}
                  </MotionTypography>

                  <Line />

                  <Container maxWidth="lg" sx={{ mt: 4 }}>
                    <MotionTypography
                      variant='subtitle1'
                      textAlign={'center'}
                      initial={{ opacity: 0, y: -40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.3 }}
                      sx={{
                        fontSize: { xs: '1.05rem', md: '1.25rem' },
                        lineHeight: 2.1,
                        color: '#e2e8f0',
                        maxWidth: '900px',
                        mx: 'auto',
                        bgcolor: 'rgba(28, 45, 56, 0.5)',
                        p: { xs: 3, md: 4 },
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {lang === 'th'
                        ? 'นักศึกษาวิทยาการคอมพิวเตอร์ชั้นปีสุดท้ายที่มีพื้นฐานการพัฒนา Front-End มีความสนใจในตรรกะระบบ (System Logic), การวาง Backend Workflows และสถาปัตยกรรม Full-Stack มีประสบการณ์สร้างเว็บแอปพลิเคชัน ปัจจุบันมีการใช้เครื่องมือพัฒนาด้วย AI (AI-assisted engineering) เพื่อเร่งสปีดการทำงานและการประมวลผลข้อมูล มุ่งมั่นค้นหาโอกาสฝึกงานตำแหน่ง Full-Stack / Software Engineer เพื่อนำความรู้และกระบวนการพัฒนายุคใหม่มาส่งมอบดิจิทัลโซลูชันที่ใช้งานได้จริง'
                        : 'Final-year Computer Science student with a previous foundation in front-end web development, passionate about system logic, backend workflows, and full-stack architecture. Experienced in building web applications and utilizing AI-assisted engineering tools to accelerate development and data processing. Seeking a Full-Stack / Software Engineer Internship to leverage both practical background and modern development workflows to deliver functional digital solutions.'}
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
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'scroll', pt: { xs: 7, md: 8 }, pb: 4 }}>
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
                    sx={{ mb: 3, mt: 1, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
                  >
                    {lang === 'th' ? 'เกียรติบัตรและใบรับรอง' : 'My Certificates'}
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
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'scroll', pt: { xs: 4, md: 5 }, pb: 2 }}>
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
                    fontWeight={700}
                    align='center'
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                    sx={{ mb: 1.5, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
                  >
                    {lang === 'th' ? 'ประสบการณ์การทำงาน' : 'Work Experiences'}
                  </MotionTypography>

                  <Box className="w-full flex flex-wrap">
                    {/* Timeline */}
                    <MotionBox
                      className="w-full md:w-1/2"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                    >
                      {currentExperience.map((e, i) => (
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
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'scroll', pt: { xs: 5.5, md: 6 }, pb: 2 }}>
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
                    sx={{ mb: 2, mt: 0, fontSize: { xs: '1.6rem', md: '2.2rem' } }}
                  >
                    {lang === 'th' ? 'ผลงานโครงงาน' : 'My Projects'}
                  </MotionTypography>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
                      gap: { xs: 1.5, md: 2 },
                      pb: 4,
                    }}
                  >
                    {currentProjects.map((project, i) => (
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
                            transform: 'translateY(-8px) scale(1.02)',
                            zIndex: 10,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                            backgroundColor: 'rgba(20, 20, 20, 0.95)'
                          }
                        }}
                        onClick={() => setSelectedProject(project)}
                      >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', boxShadow: 'none', color: 'white', borderRadius: '8px', overflow: 'hidden' }}>
                          <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.title}
                            sx={{ height: { xs: 130, md: 140, lg: 135 }, objectFit: 'cover' }}
                          />
                          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 1.5, '&:last-child': { pb: 1.5 } }}>
                            <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'bold', color: '#f9be1d', fontSize: '0.95rem', lineHeight: 1.25, mb: 1 }}>
                              {project.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#ccc',
                                mb: 1.5,
                                fontSize: '0.8rem',
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
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {project.tech.map((t, idx) => (
                                <Chip key={idx} label={t} size="small" sx={{ backgroundColor: '#D32F2F', color: 'white', fontWeight: 'bold', fontSize: '0.7rem', height: '22px' }} />
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
                                {lang === 'th' ? 'เปิดดูตัวอย่างบน Figma' : 'View Figma Demo'}
                              </Button>
                            </Box>
                          )}

                          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                            {lang === 'th' ? 'เทคโนโลยีที่ใช้:' : 'Technologies Used:'}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {selectedProject.tech.map((t: string, idx: number) => (
                              <Chip key={idx} label={t} sx={{ backgroundColor: '#D32F2F', color: 'white', fontWeight: 'bold' }} />
                            ))}
                          </Box>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={() => setSelectedProject(null)} sx={{ color: '#f9be1d' }}>
                            {lang === 'th' ? 'ปิด' : 'Close'}
                          </Button>
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
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'scroll', pt: { xs: 10, md: 12 }, pb: 2 }}>
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
                    {lang === 'th' ? 'ประวัติการศึกษา' : 'Education'}
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
                      {currentEducation.map((e, i) => (
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
          <Container maxWidth="xl" className="no-scrollbar" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'scroll', pt: { xs: 6, md: 7 }, pb: 3 }}>
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
                    sx={{ mb: 2.5, mt: 0, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
                  >
                    {lang === 'th' ? 'ทักษะและความสามารถ' : 'My Skills'}
                  </MotionTypography>

                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2.5, pb: 4 }}>
                    {currentSkills.map((cat, i) => (
                      <MotionBox
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.1 + (i * 0.08) }}
                        sx={{
                          bgcolor: 'rgba(28, 45, 56, 0.75)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '16px',
                          p: 2.5,
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          '&:hover': {
                            borderColor: cat.color,
                            boxShadow: `0 8px 30px ${cat.color}25`,
                            transform: 'translateY(-4px)',
                          },
                        }}
                      >
                        {/* Category Header */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, pb: 1.5, borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 40,
                              height: 40,
                              borderRadius: '10px',
                              bgcolor: `${cat.color}18`,
                              border: `1px solid ${cat.color}35`,
                            }}
                          >
                            {cat.icon}
                          </Box>
                          <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'white' }}>
                            {cat.category}
                          </Typography>
                        </Box>

                        {/* Skills Badges */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {cat.skills.map((skill, idx) => (
                            <Chip
                              key={idx}
                              label={skill}
                              sx={{
                                bgcolor: 'rgba(255, 255, 255, 0.06)',
                                color: '#e2e8f0',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '8px',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                py: 0.5,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  bgcolor: `${cat.color}25`,
                                  borderColor: cat.color,
                                  color: 'white',
                                  transform: 'translateY(-1px)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </MotionBox>
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
