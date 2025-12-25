export interface Experience {
  company: string;
  title: string;
  location?: string;
  period: string;
  highlights: string[];
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  coursework?: string[];
  achievement?: string;
  logo?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface GitHubStats {
  publicRepos: number;
  totalPRs: number;
  followers: number;
  following: number;
  achievements: string[];
  pinnedProjects: { name: string; description: string; language: string; stars: number }[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  photo: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  githubStats: GitHubStats;
}

export const resumeData: ResumeData = {
  name: "Kshitij Zutshi",
  title: "Software Engineer",
  location: "Boston, MA, USA",
  phone: "+1 (857)-334-6703",
  email: "kshitij.neu.21@gmail.com",
  linkedin: "https://www.linkedin.com/in/kshitij-zutshi/",
  github: "https://github.com/kshitijzutshi",
  photo: "/assets/kshitij-photo.jpg",
  summary:
    "Software Engineer with 6+ years building distributed systems, scalable APIs, and data pipelines for high-traffic e-commerce platforms. Expertise in .NET microservices, real-time data streaming (Kafka/CDC), and cloud infrastructure (AWS/GCP). Proven track record optimizing performance and developer experience for order management systems serving 20M+ customers.",

  experience: [
    {
      company: "Wayfair LLC",
      title: "Software Engineer – Supply Chain Retail Tech",
      location: "Boston, MA",
      period: "September 2024 – Present",
      logo: "/assets/logos/Wayfair-Symbol.png",
      highlights: [
        "Architected service warming patterns for database connection pooling at startup, reducing cold-start latency by 40% and improving fault-tolerance for order management services processing 10M+ monthly transactions",
        "Designed Dev Container infrastructure enabling AI coding agents to execute integration tests with full infrastructure (PostgreSQL, Kafka, BigQuery, Aerospike) and secrets management, accelerating AI-assisted SDLC workflows",
        "Built Kafka CDC pipelines for real-time data synchronization across PostgreSQL, Aerospike, and BigQuery, enabling sub-minute analytics latency for order resolution data serving 20M+ customers",
        "Engineered partitioned batch processing to backfill 6M+ resolution records with checkpoint tracking and Polly retry logic, working within Hangfire job constraints while ensuring data consistency",
        "Migrated critical API endpoints from legacy PHP monolith to .NET 8 microservices with service mesh routing, reducing technical debt and improving endpoint response times by 35%",
        "Implemented Datadog monitors for Kafka consumer lag and BigQuery PDT audit jobs, reducing mean-time-to-detect (MTTD) from 30min to <5min and improving data freshness SLA compliance",
      ],
    },
    {
      company: "Abecedarian LLC",
      title: "Software Engineer - Contract",
      period: "February 2024 – September 2024",
      highlights: [
        "Designed and implemented scalable RESTful APIs using Python and FastAPI for integrating various LLM models (GPT-4o, LLaMA3) into a unified platform, enhancing model interoperability and performance",
        "Developed automated pipelines with GitHub Actions & Docker for analyzing code quality and collecting performance metrics using SonarQube & Prometheus, leading to 20% improvement in model response times and accuracy",
      ],
    },
    {
      company: "Philips North America",
      title: "Software Engineer Co-Op",
      location: "Cambridge, MA",
      period: "January 2023 – August 2023",
      logo: "/assets/logos/Phillips-Logo.png",
      highlights: [
        "Engineered .NET microservices to streamline the ingestion and processing of hospital patient monitoring data, improving data retrieval speeds by 40% using technologies like RabbitMQ and Kafka for real-time data streaming",
        "Implemented automated CI/CD pipelines using GitHub Actions, AWS Code Pipeline, and Terraform, enhancing the deployment and scaling of microservices across multiple environments by 50%",
      ],
    },
    {
      company: "WebileApps LLC",
      title: "Senior Software Engineer - Infrastructure",
      location: "India",
      period: "June 2019 – August 2021",
      logo: "/assets/logos/webileapps-logo.jpg",
      highlights: [
        "Architected and developed key infrastructure components for the Indian e-Governance Portal's mortgage and estate modules, utilizing React, GraphQL, C#/.NET, and JavaScript (ES6+), integrated with PostgreSQL databases",
        "Built APIs for document verification using OCR, Elasticsearch, enhancing fraud detection by 40% and performance by 70%",
      ],
    },
    {
      company: "Infosys Limited",
      title: "Software Engineer",
      location: "India",
      period: "September 2018 – June 2019",
      logo: "/assets/logos/infosys-logo.png",
      highlights: [
        "Contributed to the development of banking client's Customer Account Opening (CAO) eKYC (electronic Know-Your-Customer) features using .NET microservices and 3rd party APIs for identity verification, accelerating customer onboarding by 35%",
        "Optimized SQL queries to analyze Customer Churn Rate (CCR) among users with special needs leading to 30% increase in retention",
      ],
    },
  ],

  education: [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Computer Software Engineering",
      period: "December 2023",
      gpa: "3.6/4.0",
      coursework: [
        "Data Structures and Algorithms",
        "Big Data Systems & Intelligence Analytics",
        "Cloud Computing",
      ],
      logo: "/assets/logos/neu-logo.png",
    },
    {
      institution: "Politecnico di Milano",
      degree: "Exchange Student, Ingegneria Elettronica",
      period: "January 2018 – August 2018",
      coursework: [
        "Microelectronics",
        "Biomedical Electronics",
      ],
      logo: "/assets/logos/politecnico_milano-logo.jpg",
    },
    {
      institution: "Amrita Vishwa Vidyapeetham",
      degree: "Bachelor of Technology in Computer & Electronics Engineering",
      period: "May 2018",
      achievement: "🏅 Graduated First Class with Medal",
      coursework: [
        "Digital Signal Processing",
        "Image Processing",
        "VLSI Design",
      ],
      logo: "/assets/logos/Amrita_Vishwa_Vidyapeetham-Logo_Icon.png",
    },
  ],

  skills: [
    {
      category: "Languages",
      skills: [
        "C#",
        "Python",
        "Java",
        "TypeScript",
        "JavaScript",
        "SQL",
        "Go",
        "GraphQL",
        "Shell Scripting",
      ],
    },
    {
      category: "Frameworks",
      skills: [
        ".NET 8",
        "ASP.NET Core",
        "Entity Framework",
        "React",
        "FastAPI",
        "Node.js",
      ],
    },
    {
      category: "Data & Messaging",
      skills: [
        "Kafka",
        "BigQuery",
        "PostgreSQL",
        "MSSQL",
        "Aerospike",
        "Redis",
        "CDC Pipelines",
      ],
    },
    {
      category: "Cloud & Infra",
      skills: [
        "AWS (Lambda, SageMaker, S3)",
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Dev Containers",
      ],
    },
    {
      category: "Observability",
      skills: [
        "Datadog",
        "Prometheus",
        "Grafana",
        "Distributed Tracing",
        "Argo CD",
      ],
    },
  ],

  githubStats: {
    publicRepos: 165,
    totalPRs: 151,
    followers: 76,
    following: 287,
    achievements: [
      "Starstruck",
      "YOLO",
      "Quickdraw",
      "Pull Shark x3",
      "Arctic Code Vault Contributor",
    ],
    pinnedProjects: [
      {
        name: "INFO6105-Final-Portfolio-Project",
        description: "Understanding Image Segmentation using UNet & Model interpretability using Pytorch Captum",
        language: "Jupyter Notebook",
        stars: 1,
      },
      {
        name: "FastAPI-Authentication-with-JWT",
        description: "Create authentication in a FastAPI application using JSON Web Tokens",
        language: "Python",
        stars: 3,
      },
      {
        name: "BERT-Summary-API",
        description: "Built and deployed Text Summarization Hugging face Model on AWS",
        language: "Python",
        stars: 2,
      },
      {
        name: "FAST-API-Text-OCR",
        description: "Python & FastAPI Tutorial: Create an AI microservice to extract text from images",
        language: "Python",
        stars: 1,
      },
      {
        name: "Big-Data-Pipeline-Weather-Nowcasting-SEVIR-Data",
        description: "DAMG 7245 - Big Data Systems & IA Assignment",
        language: "Python",
        stars: 2,
      },
    ],
  },
};
