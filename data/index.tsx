import {
  DraftingCompass,
  HandHelping,
  Blocks,
  Wrench,
  Code,
  Braces,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export const navItems = [
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
];

export const services = [
   {
      ico: <Code />,
    title: "AI & Machine Learning Development",
    description:
      "Develop intelligent applications using Python, TensorFlow, and scikit-learn — including image classification, NLP, and predictive models tailored to real-world problems.",
  },
 {
    ico: <Braces />,
    title: "Frontend Web Development",
    description:
      "Develop robust and scalable web applications using modern frameworks like React, Next.js, and Node.js. Focus on creating responsive, user-friendly interfaces with strong backend integration.",
  },
    {
    ico: <Blocks />,
    title: "AI-Powered Automation",
    description:
      "Implement intelligent workflow automation using tools such as N8N and custom Python scripts. Streamline business operations through AI-based decision-making and data processing pipelines.",
  },
  {
    ico: <HandHelping />,
    title: "Data Science & Model Optimization",
    description:
      "Perform data preprocessing, feature engineering, and model evaluation using libraries like TensorFlow, scikit-learn, and pandas. Optimize performance and interpret models with Explainable AI (LIME, SHAP).",
  },
  {
    ico: <DraftingCompass />,
    title: "System Optimizatoin & APIs",
    description:
      "Integrate third-party systems, REST APIs, and automation pipelines."+
      " Enable your product to connect with CRMs, payment gateways, and AI services efficiently to ensure reliability and scalability.",
  },
  {
    ico: <Wrench />,
    title: "System Integration and Maintenance ",
    description:
      "Monitor performance and troubleshoot issues promptly. " +
      "Regularly update code and technologies for security and compatibility",
  }
];

export const works = [
  {
    title: "Green Vision",
    description:
      "An AI-powered web application that detects crop diseases using deep learning. Built with TensorFlow, Flask, and a fine-tuned VGG19 model, this project aims to support farmers and agricultural experts with quick, reliable disease detection directly from leaf images.",
    className: "md:col-span-1",
    image: "/images/works/work1.jpg",
    link: "https://github.com/MansoobeZahra/Crop-Disease-Detector-Web-App?tab=readme-ov-file"
  },
  {
    title: "Multi-Agent-Adaptive_E-Learning_System",
    description:
      "Adaptive AI tutoring that reads your mind, adjusts difficulty instantly, and turns struggling into mastery. Each lesson evolves with YOU—practice coding live, get instant hints, and watch your knowledge grow.",
    className: "md:col-span-1",
    image: "/images/works/work7.jpg",
    link: "https://github.com/MansoobeZahra/Multi-Agent-Adaptive_E-Learning_System"
  },
  {
    title: "Exo_Vision",
    description: "ExoVision-AI is a machine learning–driven web application that automatically classifies celestial objects as Confirmed Exoplanets or Planetary Candidates using NASA's open K2 Planets and Candidates Catalog.Developed by a team of passionate space and AI enthusiasts for the NASA Space Apps Hackathon 2025, this project bridges data science and astrophysics through real-time predictive modeling.",
    className: "md:col-span-1",
    image: "/images/works/work4.jpg",
    link: "https://github.com/MansoobeZahra/Exo_Vision"
  },
  {
    title: "Shoplifting Detection using Yolo_v12",
    description:
      "Automated detection of product removal/shoplifting in retail environments",
    className: "md:col-span-1",
    image: "/images/works/work3.jpg",
    link: "https://github.com/MansoobeZahra/Shoplifting_detection_using_Yolov12"
  },
  {
    title: "MindScan_-Mental-Health-Detection-System",
    description:
      "Mental Health Detection System AI-powered depression detection using NLP and machine learning. Includes text analysis and PHQ-9 questionnaire scoring.",
    className: "md:col-span-1",
    image: "/images/works/work6.jpg",
    link: "https://github.com/MansoobeZahra/MindScan_-Mental-Health-Detection-System"
  },
  {
    title: "Boston-house-price-prediction",
    description: "A Streamlit-based web application that predicts median housing prices in Boston using Polynomial Regression, built from the Boston Housing Dataset. It supports interactive model tuning, residual visualization, and user-defined prediction.",
    className: "md:col-span-1",
    image: "/images/works/work4.jpg",
    link: "https://github.com/MansoobeZahra/Boston-house-price-prediction"
  },
];

export const socialMedia = [
  {
    id: 1,
    img: <FaLinkedinIn />,
    href: "http://www.linkedin.com/in/mansoobezahra",
  },
  {
    id: 2,
    img: <FaGithub />,
    href: "https://github.com/MansoobeZahra",
  },
  {
    id: 3,
    img: <FaInstagram />,
    href: "https://www.instagram.com/mansoobezahra/",
  },
];

export const skills = [
  { name: "AI/ML", description: "", percentage: 60 },
  { name: "Web Development", description: "", percentage: 75 },
];

export const skillsIcons = [
  "typescript",
  "javascript",
  "tensorflow",
  "opencv",
  "react",
  "numpy",
  "pandas",
  "html5",
  "css3",
  "nodedotjs",
  "matplotlib",
  "seaborn",
  "huggingface",
  "jupyter",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "kaggle",
  "cypress",
  "docker",
  "git",
  "scikit-learn",
  "github",
  "gitlab",
  "visualstudiocode",
  "pytorch",
  "mongodb",
  "figma",
  "python",
  "nextdotjs",
  "linux",
  "bash",
  "heroku",
  "azure",
  "aws",
  "googlecloud",
  "netlify",
  "n8n",
  "supabase",
  "keras",
  "fastapi",
  "flask",
  "postman",
  "rabbitmq",
  "apachekafka",
  "prometheus",
  "grafana",
  "kubernetes",
  "terraform",
  "ansible",
  "jenkins"
];
