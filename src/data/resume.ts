export const personalInfo = {
  name: "VIVEK PATHAK",
  phone: "7677381303",
  email: "vivekpathak2083@gmail.com",
  linkedin: "linkedin.com/in/vivek-pathak-in/",
  github: "vivek-ptk",
  leetcode: "vivekpathak04"
};

export const education = [
  {
    institution: "Siksha 'O' Anusandhan Deemed to be University",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2021 - 2025",
    grade: "CGPA: 8.75",
    location: "Bhubaneswar, Odisha"
  },
  {
    institution: "Delhi Public School Bokaro",
    degree: "CBSE-2020 (CLASS XII)",
    duration: "2020",
    grade: "Percentage: 80%",
    location: "Bokaro, Jharkhand"
  },
  {
    institution: "Delhi Public School Bokaro",
    degree: "CBSE-2018 (CLASS X)",
    duration: "2018",
    grade: "Percentage: 84%",
    location: "Bokaro, Jharkhand"
  }
];

export const skills = {
  languages: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
  frameworks: ["React", "Next.js", "Node.js", "Express.js", "FastAPI"],
  technologies: ["Docker", "AWS EC2", "MongoDB", "TensorFlow"],
  specializations: [
    "Coding complex UI",
    "CRUD API making and integration",
    "Data Structures and Algorithm",
    "OOPs",
    "Prompt engineering",
    "Microservices",
  ],
  tools: ["VS Code", "GitHub"],
  otherSkills: [
    "Fluent Spoken English",
    "Engaging Presenter",
    "Effective Communicator",
    "On the go learner"
  ]
};

export const experience = [
  {
    title: "Product Engineering Intern",
    company: "Reverie Language Technologies",
    duration: "08/2024 – 05/2025",
    description: [
      "Revamped UI and added key features (analytics dashboard, chatbot config) for Indocord, improving usability for internal teams.",
      "Built and delivered UI for WhatsApp campaign dashboard in 7 days.",
      "Fixed bugs and enhanced CRUD operations across modules, leading to smoother workflows and fewer support tickets."
    ],
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "REST"]
  }
];

export const projects = [
  {
    name: "The Unbiased Report",
    description: "AI driven multisource news aggregator and summarization website.",
    duration: "05/2025 – 06/2025",
    liveLink: "https://the-unbiased-report.vercel.app/",
    githubLink: "https://github.com/vivek-ptk/The-Unbiased-Report",
    details: [
      "Designed and built the UI, delivering an intuitive experience for consuming AI-summarized news, interacting with LLM-powered article queries chats, and viewing source and bias breakdowns.",
      "Built backend pipeline for news aggregation, similarity clustering, and AI-driven summarization."
    ],
    tech: ["Python", "TensorFlow", "FastAPI", "React"]
  },
  {
    name: "Aperture – Photography Company Lander Page",
    description: "Next.js based Lander Page",
    duration: "02/2025 – 03/2025",
    liveLink: "https://aperture-photography-company-lander.vercel.app/",
    githubLink: "https://github.com/vivek-ptk/Aperture-Photography-Company-Lander",
    details: [],
    tech: ["Next.js"]
  },
  {
    name: "Gallery Worded",
    description: "Built an AI-powered gallery that enables image search through natural language.",
    duration: "02/2025 – 03/2025",
    liveLink: "",
    githubLink: "https://github.com/vivek-ptk/Gallery-Worded",
    details: [
      "Used image tagging and semantic search to make search operations cost-efficient without heavy ML infra."
    ],
    tech: ["Python", "TensorFlow", "FastAPI", "React"]
  },
  {
    name: "KNOW",
    description: "Developed an on-device feature extraction API using template matching powered by Gen-AI.",
    duration: "01/2024 – 02/2024",
    liveLink: "",
    githubLink: "https://github.com/vivek-ptk/KNOW",
    details: [
      "Achieved 99% accuracy in parsing banking SMS with fewer server calls by batching and parallel requests."
    ],
    tech: ["Flutter", "Node.js", "Express", "MongoDB", "OpenAI API"]
  },
  {
    name: "Neon Store – Meme Marketplace",
    description: "Implemented AI-powered meme upload (auto-tagging), smart search, meme analytics, and meme evolution visualization, AI generated meme Ideas (meme storm).",
    duration: "06/2025 – 06/2025",
    liveLink: "https://neon-store-frontend.vercel.app/",
    githubLink: "https://github.com/vivek-ptk/Neon-Store-App",
    details: [],
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Gemini API"]
  }
];

export const achievements = [
  {
    title: "LeetCode Problem Solver",
    description: "Solved 300+ DSA questions and won a 50 days badge on LeetCode",
    link: "https://leetcode.com/u/vivekpathak04/"
  },
  {
    title: "Full-Stack Development",
    description: "Built multiple end-to-end applications using modern web technologies",
    link: ""
  },
  {
    title: "AI Integration Specialist",
    description: "Successfully integrated AI/ML models into web applications for enhanced functionality",
    link: ""
  },
  {
    title: "Open Source Contributor",
    description: "Contributing to open-source projects and maintaining personal repositories",
    link: "https://github.com/vivek-ptk"
  }
];

export const socialLinks = [
  {
    platform: "LinkedIn",
    url: `https://${personalInfo.linkedin}`,
    username: "vivek-pathak-in"
  },
  {
    platform: "GitHub", 
    url: `https://github.com/${personalInfo.github}`,
    username: personalInfo.github
  },
  {
    platform: "LeetCode",
    url: `https://leetcode.com/u/${personalInfo.leetcode}/`,
    username: personalInfo.leetcode
  },
  {
    platform: "Email",
    url: `mailto:${personalInfo.email}`,
    username: personalInfo.email
  }
];

export const resume = {
  personalInfo,
  education,
  skills,
  experience,
  projects,
  achievements,
  socialLinks
};
