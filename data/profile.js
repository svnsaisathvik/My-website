export const profile = {
  name: "SVN Sai Sathvik",
  role: "CS Engineer · ML Researcher · Competitive Programmer",
  email: "saisathviksvn@gmail.com",
  phone: "+91-7416226695",
  github: "https://github.com/svnsaisathvik",
  linkedin: "https://www.linkedin.com/in/svn-sai-sathvik-9b944a281",
  githubUser: "svnsaisathvik",
  location: "Bangalore, India",
  education: {
    school: "International Institute of Information Technology Bangalore (IIITB)",
    degree: "Integrated M.Tech, Computer Science and Engineering",
    period: "Jul 2023 — Jul 2028",
    cgpa: "3.64 / 4.0"
  }
};

export const neofetchStats = [
  { label: "os", value: "IIIT-Bangalore (2023–2028)" },
  { label: "cgpa", value: "3.64 / 4.0" },
  { label: "focus", value: "ML Research · Systems · Full-Stack" },
  { label: "shell", value: "C++ / Python / JS" },
  { label: "uptime", value: "3rd year, still compiling" }
];

// accent cycles through cyan / pink / amber / violet for vibrant card theming
export const experience = [
  {
    role: "Machine Learning Intern — QuantTech LLM (Startup, IIT Indore)",
    period: "Mar 2026 — May 2026",
    stack: "Computer Vision, Deep Learning",
    github: "https://github.com/svnsaisathvik/Soyabean-Disease-Classification",
    accent: "pink",
    points: [
      "Developed a 2-stage ResNet–MobileNetV2 pipeline for leaf detection and soybean disease classification.",
      "Achieved 99.07% test accuracy on leaf detection and 86.3% on disease classification."
    ]
  },
  {
    role: "Research Intern — Lab for Spatial Informatics, IIIT Hyderabad",
    period: "Aug 2025 — Dec 2025",
    stack: "PyTorch, U-Net, TerraMind, Remote Sensing",
    github: "https://github.com/svnsaisathvik/Cloud-Removal",
    accent: "cyan",
    points: [
      "Built a Sentinel-2 cloud removal pipeline using physics-based validity masks and exponential decay temporal weighting, achieving 0.9137 SSIM and 32.67 dB PSNR on reconstructed imagery.",
      "Trained a residual U-Net on 26K image patches for 80 epochs using L1+MSE loss, with a tiled inference pipeline for scenes up to 25M pixels."
    ]
  },
  {
    role: "Research Intern — Computational Geometry & Topology Lab, IIIT Bangalore",
    period: "May 2025 — Dec 2025",
    stack: "Graph Algorithms, Computational Complexity, Multi-Agent Systems",
    github: null,
    accent: "amber",
    points: [
      "Researched the complexity of Multi-Agent Path Finding (MAPF) on structured graph families.",
      "Proved q-colored MAPF on 2×n grid graphs is NP-hard and designed an XP-time algorithm for unlabelled MAPF."
    ]
  },
  {
    role: "Teaching Assistant — IIIT Bangalore",
    period: "Aug 2024 — Dec 2024",
    stack: "Linear Algebra, Design and Analysis of Algorithms",
    github: null,
    accent: "violet",
    points: [
      "Mentored undergraduates through weekly problem-solving sessions in Linear Algebra and DAA.",
      "Evaluated assignments and provided feedback to improve conceptual understanding."
    ]
  }
];

export const featuredProjects = [
  {
    slug: "fairexploration",
    name: "FairExploration",
    period: "Jan 2026 — Jun 2026",
    stack: ["PyTorch", "SBERT", "FAISS", "Neural LinUCB", "Transformers"],
    accent: "pink",
    description:
      "A 4-component fairness-aware recommendation framework for cold-start creator discovery. Reduced CCDR to 0.44 (Twitch) and 0.18 (KuaiRand) using a custom FairnessBonus reward, outperforming 5 fairness baselines (FairRec, APAS, FairCo) with up to 84% CCDR improvement across 3 datasets.",
    github: null,
    live: null
  },
  {
    slug: "gridsync",
    name: "GridSync",
    period: "Mar 2026 — Apr 2026",
    stack: ["React", "TypeScript", "Spring Boot", "Firebase"],
    accent: "amber",
    description:
      "A full-stack peer-to-peer energy trading platform for real-time electricity trading among microgrid participants. React + TypeScript frontend, Spring Boot backend with Firebase Auth and Firestore, and a LAN-based microgrid algorithm for energy allocation, billing, and P2P revenue optimization. Regional Finalist, Global Sustainability Challenge 2025–26.",
    github: "https://github.com/svnsaisathvik/GSC",
    live: null
  },
  {
    slug: "nasa-log-analytics",
    name: "NASA Log Analytics",
    period: "Jan 2026 — May 2026",
    stack: ["Python", "Hadoop", "MongoDB", "Pig", "Hive", "PostgreSQL"],
    accent: "cyan",
    description:
      "A 4-pipeline analytics framework over 1.89M NASA HTTP logs with a unified PostgreSQL schema and Python CLI. Benchmarked all pipelines — MongoDB (26s) delivered a 7x speedup over MapReduce (183s).",
    github: "https://github.com/ashokCh-dev/No_Sql_final_project",
    live: null
  },
  {
    slug: "cloud-free-satellite-imagery",
    name: "Cloud-Free Satellite Imagery Generation",
    period: "Aug 2025 — Dec 2025",
    stack: ["PyTorch", "U-Net", "TerraMind"],
    accent: "violet",
    description:
      "A TimeGate-based MnasNet U-Net for Sentinel-2 cloud removal, achieving 0.9137 SSIM and 32.67 dB PSNR. Trained a residual U-Net on 26K patches and fine-tuned the 1B-parameter IBM/ESA TerraMind model, scaling tiled inference to satellite scenes up to 25M pixels.",
    github: "https://github.com/svnsaisathvik/Cloud-Removal",
    live: null
  },
  {
    slug: "stackconnect",
    name: "StackConnect",
    period: "May 2026 — Jun 2026",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Gemini API"],
    accent: "cyan",
    description:
      "A developer networking platform with JWT auth, Google Gemini + Tesseract OCR for AI-based skill extraction from resumes, and skill-based matching via MongoDB aggregation, Levenshtein search, and Socket.io chat.",
    github: "https://github.com/KhSudhir2345/Buildathon-2.0---Actual",
    live: "https://buildathon-2-0-actual.vercel.app/"
  },
  {
    slug: "academia-portal",
    name: "Academia Portal",
    period: "Mar 2025 — May 2025",
    stack: ["C", "POSIX Sockets", "pthreads", "File I/O"],
    accent: "pink",
    description:
      "A multi-threaded client-server course registration system over TCP sockets supporting 3 user roles, concurrent sessions via detached pthreads, mutex synchronization, and low-level POSIX file I/O for persistence.",
    github: "https://github.com/svnsaisathvik/Academia-Portal",
    live: null
  }
];

export const skillGroups = [
  {
    label: "languages",
    color: "cyan",
    items: ["Python", "C++", "C", "Java", "JavaScript", "HTML", "CSS"]
  },
  {
    label: "ai / ml",
    color: "pink",
    items: ["Supervised & Unsupervised Learning", "Computer Vision", "CNNs", "Transformers", "Multi-Armed Bandits"]
  },
  {
    label: "frameworks",
    color: "amber",
    items: ["React", "Node.js", "Express.js", "Socket.io"]
  },
  {
    label: "databases",
    color: "violet",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore"]
  },
  {
    label: "tools",
    color: "cyan",
    items: ["Git", "GitHub", "Linux", "VS Code", "Jupyter Notebook"]
  }
];

export const achievements = [
  { title: "Dean's Merit List", detail: "Awarded 3 consecutive years (CGPA ≥ 3.6/4.0), IIIT Bangalore", date: "May 2026" },
  { title: "Regional Finalist", detail: "Global Sustainability Challenge 2025–26 (South Asia Regional Finals) — GridSync", date: "Apr 2026" },
  { title: "GATE CS", detail: "Secured AIR 2436 in GATE Computer Science and Information Technology", date: "Feb 2026" },
  { title: "7th Place", detail: "ML Fiesta Hackathon (Synergy 2024) among 120 teams", date: "Nov 2024 – Dec 2024" },
  { title: "JEE Main & Advanced", detail: "Secured AIR 5589 (JEE Main) and AIR 5450 (JEE Advanced)", date: "Aug 2021 – May 2023" }
];

export const leadership = [
  {
    role: "Organizer, Synergy 2025",
    org: "IIIT Bangalore",
    period: "Apr 2024 — Mar 2025",
    detail: "Organized IIIT Bangalore's flagship technical fest — coordinated events, sponsorships, scheduling, and outreach for 700+ participants."
  }
];

export const coursework = [
  "Database Management Systems",
  "Operating Systems",
  "NoSQL",
  "Data Structures & Algorithms",
  "Design and Analysis of Algorithms",
  "Recommendation Systems",
  "Visual Recognition"
];
