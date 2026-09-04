import akhilAvatar from '../assets/akhil.jpeg';

export const COURSES_DATA = [
  {
    id: "cs-101",
    code: "CS 101",
    title: "Introduction to Computer Science & Algorithms",
    department: "Computer Science",
    level: "Beginner",
    credits: 4,
    instructor: {
      name: "Dr. siva krishna",
      title: "Professor of Computing",
      email: "siva.krishna@university.edu",
      office: "Turing Hall 402"
    },
    schedule: "Mon & Wed • 10:00 AM - 11:30 AM",
    location: "Science Building Room 204",
    prerequisites: "None",
    rating: 4.8,
    reviewsCount: 128,
    capacity: 60,
    enrolledCount: 42,
    shortDescription: "Foundations of computational thinking, algorithm design, data representation, and Python programming.",
    description: "This comprehensive foundational course introduces fundamental concepts of computational problem-solving. Students explore how computers represent information, how algorithm efficiency is measured with Big-O notation, and how to write clean, modular software using Python. Key topics include recursion, sorting algorithms, linked structures, and basic software engineering methodologies.",
    syllabus: [
      { week: 1, topic: "Computational Thinking & Python Syntax Primer" },
      { week: 2, topic: "Control Structures, Functions & Scope" },
      { week: 3, topic: "Data Structures: Lists, Tuples, Dictionaries & Sets" },
      { week: 4, topic: "Recursion & Divide-and-Conquer Strategies" },
      { week: 5, topic: "Algorithm Analysis & Big-O Notation" },
      { week: 6, topic: "Sorting & Searching Algorithms in Practice" },
      { week: 7, topic: "Object-Oriented Programming (OOP) Essentials" },
      { week: 8, topic: "Final Capstone Project: Algorithmic Simulation Engine" }
    ],
    learningOutcomes: [
      "Formulate algorithmic solutions to complex computational problems.",
      "Analyze time and space complexity using asymptotic Big-O analysis.",
      "Implement robust object-oriented code following industry standards.",
      "Debug, test, and write unit tests for procedural and recursive code."
    ]
  },
  {
    id: "web-205",
    code: "WEB 205",
    title: "Full-Stack Web Application Development",
    department: "Software Engineering",
    level: "Intermediate",
    credits: 4,
    instructor: {
      name: "Prof. pavan kumar",
      title: "Senior Lecturer in Web Systems",
      email: "p.kumar@university.edu",
      office: "Tech Hub 115"
    },
    schedule: "Tue & Thu • 02:00 PM - 03:45 PM",
    location: "Digital Media Lab B",
    prerequisites: "CS 101 or equivalent programming experience",
    rating: 4.9,
    reviewsCount: 164,
    capacity: 45,
    enrolledCount: 38,
    shortDescription: "Modern client-server web architecture using React, Node.js, Express, REST APIs, and database integration.",
    description: "Immerse yourself into contemporary web development. This course takes students from modern JavaScript (ES6+) and reactive UI components in React through backend services with Node.js and Express. Students develop secure RESTful microservices, integrate relational and document databases, handle authentication, and deploy production-ready cloud applications.",
    syllabus: [
      { week: 1, topic: "Modern ECMAScript (ES6+), DOM, and Async/Await" },
      { week: 2, topic: "React Fundamentals: JSX, Props, State & Hooks" },
      { week: 3, topic: "Advanced React: Context API, Reducers & Custom Hooks" },
      { week: 4, topic: "Client-Side Routing with React Router v6" },
      { week: 5, topic: "Node.js & Express RESTful API Architecture" },
      { week: 6, topic: "Database Modeling with PostgreSQL & MongoDB" },
      { week: 7, topic: "Authentication, JWT Tokens & Web Security (OWASP)" },
      { week: 8, topic: "CI/CD Deployment, Docker Basics & Cloud Hosting" }
    ],
    learningOutcomes: [
      "Architect single-page applications (SPAs) with state-driven UI patterns.",
      "Construct secure, scalable RESTful APIs with Node.js and Express.",
      "Design normalized relational schemas and optimize query execution.",
      "Deploy full-stack applications with environment isolation and HTTPS."
    ]
  },
  {
    id: "ds-301",
    code: "DS 301",
    title: "Data Science & Statistical Modeling",
    department: "Data Science",
    level: "Advanced",
    credits: 3,
    instructor: {
      name: "Dr. Ananya Sharma",
      title: "Associate Professor of Statistics",
      email: "ananya.sharma@university.edu",
      office: "Analytical Hall 310"
    },
    schedule: "Mon & Wed • 01:30 PM - 03:00 PM",
    location: "Data Center Annex 102",
    prerequisites: "CS 101 & Linear Algebra",
    rating: 4.7,
    reviewsCount: 94,
    capacity: 40,
    enrolledCount: 31,
    shortDescription: "Statistical inference, regression models, data wrangling with Pandas/NumPy, and exploratory data analysis.",
    description: "Uncover insights hidden inside complex real-world datasets. This course emphasizes statistical rigor combined with practical Python data analysis tooling. Topics include hypothesis testing, multivariate regression, data cleaning pipelines, interactive visualization libraries (Seaborn, Plotly), and an introduction to machine learning workflows.",
    syllabus: [
      { week: 1, topic: "Data Wrangling & Vectorized Computing with NumPy & Pandas" },
      { week: 2, topic: "Exploratory Data Analysis & Visual Storytelling" },
      { week: 3, topic: "Probability Distributions & Central Limit Theorem" },
      { week: 4, topic: "Statistical Hypothesis Testing & A/B Experimentation" },
      { week: 5, topic: "Linear & Logistic Regression Modeling" },
      { week: 6, topic: "Feature Engineering & Dimensionality Reduction (PCA)" },
      { week: 7, topic: "Introduction to Supervised Machine Learning with Scikit-Learn" },
      { week: 8, topic: "End-to-End Predictive Analytics Capstone Presentation" }
    ],
    learningOutcomes: [
      "Process, clean, and impute noisy real-world tabular data.",
      "Formulate rigorous statistical hypotheses and execute A/B tests.",
      "Interpret multivariable predictive models with evaluation metrics.",
      "Synthesize data narratives for both technical and executive audiences."
    ]
  },
  {
    id: "ai-402",
    code: "AI 402",
    title: "Artificial Intelligence & Deep Learning",
    department: "Computer Science",
    level: "Advanced",
    credits: 4,
    instructor: {
      name: "Dr. Alexander sharma",
      title: "Chair of Cognitive Systems Lab",
      email: "alexander.sharma@university.edu",
      office: "AI Pavilion 505"
    },
    schedule: "Tue & Thu • 11:00 AM - 12:45 PM",
    location: "Silicon Auditorium 1",
    prerequisites: "DS 301 & Multivariable Calculus",
    rating: 4.9,
    reviewsCount: 182,
    capacity: 50,
    enrolledCount: 48,
    shortDescription: "Neural network architectures, deep learning fundamentals, computer vision, and modern NLP transformers.",
    description: "Explore the cutting-edge frontiers of artificial intelligence. Starting from multi-layer perceptrons and backpropagation, this course dives into convolutional neural networks (CNNs), recurrent networks, attention mechanisms, and modern transformer architectures. Hands-on labs utilize PyTorch and GPU-accelerated computing.",
    syllabus: [
      { week: 1, topic: "History of AI, Heuristic Search & Agent Architectures" },
      { week: 2, topic: "Perceptrons, Gradient Descent & Backpropagation" },
      { week: 3, topic: "Deep Feedforward Networks, Regularization & Optimizers" },
      { week: 4, topic: "Convolutional Neural Networks (CNNs) & Computer Vision" },
      { week: 5, topic: "Sequence Modeling & Recurrent Neural Networks (RNN/LSTM)" },
      { week: 6, topic: "Attention Mechanisms & Transformer Architectures" },
      { week: 7, topic: "Fine-tuning Large Language Models (LLMs) & Prompt Tuning" },
      { week: 8, topic: "Responsible AI, Alignment & Safety Protocols" }
    ],
    learningOutcomes: [
      "Construct, train, and optimize deep neural networks using PyTorch.",
      "Evaluate architectures against benchmarks for vision and NLP tasks.",
      "Address common training pitfalls including overfitting and gradient vanishing.",
      "Critically evaluate ethical implications and safety in AI deployment."
    ]
  },
  {
    id: "sec-310",
    code: "SEC 310",
    title: "Cybersecurity & Network Defense",
    department: "Information Security",
    level: "Intermediate",
    credits: 3,
    instructor: {
      name: "Prof. Sara sharma",
      title: "Adjunct Professor & Threat Analyst",
      email: "sara.sharma@university.edu",
      office: "Defense Center 201"
    },
    schedule: "Friday • 09:00 AM - 12:30 PM",
    location: "Cyber Defense Range Room 3",
    prerequisites: "CS 101 or Computer Networks",
    rating: 4.6,
    reviewsCount: 79,
    capacity: 35,
    enrolledCount: 22,
    shortDescription: "Threat modeling, cryptography, web vulnerabilities, penetration testing, and defensive system hardening.",
    description: "In an interconnected world, digital defense is critical. SEC 310 offers practical experience analyzing security vulnerabilities and engineering robust safeguards. Students examine symmetrical and asymmetrical cryptography, packet inspection, firewalls, threat hunting, vulnerability assessments, and defensive countermeasures.",
    syllabus: [
      { week: 1, topic: "Security Principles: Confidentiality, Integrity & Availability" },
      { week: 2, topic: "Applied Cryptography: RSA, AES, Hashing & Digital Signatures" },
      { week: 3, topic: "Network Protocols & Packet Sniffing with Wireshark" },
      { week: 4, topic: "Web Application Attacks: SQL Injection, XSS & CSRF" },
      { week: 5, topic: "Penetration Testing Methodology & Tooling" },
      { week: 6, topic: "Firewalls, Intrusion Detection Systems (IDS/IPS)" },
      { week: 7, topic: "Cloud Security, IAM & Zero-Trust Architecture" },
      { week: 8, topic: "Incident Response Simulation & Forensic Analysis" }
    ],
    learningOutcomes: [
      "Conduct vulnerability assessments and threat modeling on web infrastructure.",
      "Implement cryptographic solutions for data at rest and in transit.",
      "Formulate incident response plans for unauthorized intrusion scenarios.",
      "Harden Unix/Windows operating systems against modern attack vectors."
    ]
  },
  {
    id: "ux-201",
    code: "UX 201",
    title: "User Experience (UX) & Interface Design",
    department: "Design Systems",
    level: "Beginner",
    credits: 3,
    instructor: {
      name: "Anil Mohanty",
      title: "Lead Product Designer in Residence",
      email: "anil.mohanty@university.edu",
      office: "Design Guild 108"
    },
    schedule: "Tuesday • 09:30 AM - 12:45 PM",
    location: "Studio Hall A",
    prerequisites: "None",
    rating: 4.8,
    reviewsCount: 110,
    capacity: 35,
    enrolledCount: 29,
    shortDescription: "Design thinking, user research, wireframing in Figma, accessibility (a11y), and interactive prototyping.",
    description: "Learn how to build digital products that users love. This studio course walks students through the design thinking methodology: empathizing with users, synthesizing user personas, conducting usability tests, crafting accessible color palettes and typography, and building interactive prototypes in Figma.",
    syllabus: [
      { week: 1, topic: "Design Thinking Framework & User-Centered Philosophy" },
      { week: 2, topic: "User Research Methodologies, Interviews & Empathy Maps" },
      { week: 3, topic: "Information Architecture, User Flows & Sitemap Design" },
      { week: 4, topic: "Low-Fidelity Wireframing & Rapid Iteration" },
      { week: 5, topic: "Typography, Color Theory & Design Systems in Figma" },
      { week: 6, topic: "Interactive Prototyping & Micro-Interactions" },
      { week: 7, topic: "Accessibility Standards (WCAG 2.1) & Inclusive Design" },
      { week: 8, topic: "Usability Testing & Design System Hand-off to Developers" }
    ],
    learningOutcomes: [
      "Execute qualitative and quantitative user research studies.",
      "Create high-fidelity interactive component libraries and prototypes.",
      "Ensure web interfaces satisfy WCAG 2.1 AA accessibility guidelines.",
      "Collaborate effectively across developer and product teams."
    ]
  }
];

export const INITIAL_STUDENT_PROFILE = {
  id: "STU-2026-176",
  name: "Akhil Apata",
  email: "akhil.apata@student.university.edu",
  major: "Artificial Intelligence & Machine Learning",
  year: "3rd Year",
  semester: "5th Semester",
  gpa: 7.3,
  maxCredits: 18,
  avatar: akhilAvatar
};
