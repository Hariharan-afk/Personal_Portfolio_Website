export const personalInfo = {
  name: "Hariharan Chandrasekar",
  title: "AI Engineer | Machine Learning Specialist",
  location: "Boston, MA",
  email: "hariharanchandrasekar2003@gmail.com",
  phone: {
    us: "+1 (617) 708-6384",
    india: "+91 735 848 9274"
  },
  links: {
    linkedin: "https://linkedin.com/in/hariharan-chandrasekar",
    github: "https://github.com/Hariharan-afk",
  },
  bio: "Passionate AI Engineer with expertise in Agentic AI, RAG systems, and MLOps. Currently pursuing Master's in Artificial Intelligence at Northeastern University. Experienced in building production-ready ML systems with focus on document AI, multi-agent workflows, and end-to-end ML pipelines.",
  stats: [
    { label: "Projects", value: "8+" },
    { label: "Accuracy", value: "95%" },
    { label: "Internships", value: "2" },
    { label: "Publications", value: "1" },
  ]
};

export const education = [
  {
    institution: "Northeastern University",
    location: "Boston, USA",
    degree: "Master of Science in Artificial Intelligence",
    duration: "2024 - 2026",
    gpa: "3.42 / 4.0",
    achievements: [
      "Awarded $25,000 scholarship for academic excellence",
      "Specializing in Agentic AI and MLOps"
    ]
  },
  {
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    degree: "B.Tech in Computer Science (AI & ML Specialization)",
    duration: "2020 - 2024",
    gpa: "9.14 / 10",
    achievements: [
      "Gold Medal - Paper Presentation on Automated Aeroponics System",
      "Presented paper at ICESI 2024"
    ]
  }
];

export const experience = [
  {
    company: "Yantran LLC",
    role: "Product Development Intern",
    location: "Allen, TX",
    duration: "Jun 2025 – Aug 2025",
    type: "Internship",
    description: "Built an Agentic AI system for invoice data extraction and validation",
    responsibilities: [
      "Built an Agentic AI system to dynamically extract and validate structured data for Invoice documents and documented development processes, system design, and deployment steps for future team use and maintainability",
      "Prototyped a multi-stage OCR/VLM agent: Paddle OCR/Easy OCR → query-aware cropping (semantic re-ranking + Grounding DINO) → answer extraction with Donut / Florence-2, improving recall on key fields (totals, dates, vendor info)",
      "Achieved extraction accuracy of 95% in a test set of 100 invoice documents"
    ],
    technologies: ["Python", "OCR", "VLM", "Paddle OCR", "Easy OCR", "Grounding DINO", "Donut", "Florence-2"]
  },
  {
    company: "Space Zee Technology",
    role: "Machine Learning Intern",
    location: "Chennai, India",
    duration: "May 2023 – Aug 2023",
    type: "Internship",
    description: "Built real-time object detection system for surveillance",
    responsibilities: [
      "Built real-time multi-object detection system using YOLO for surveillance camera",
      "Detected vehicles and pedestrians (car, truck, person, bus, etc.)"
    ],
    technologies: ["Python", "YOLO", "Computer Vision", "Object Detection"]
  }
];

export const projects = [
  {
    title: "Automated Due Diligence & Market Intelligence Agent",
    category: "Agentic AI",
    duration: "Sep 2025 – Dec 2025",
    description: "End-to-end market-intelligence system that generates automated due-diligence reports from heterogeneous sources (SEC filings, Wikipedia, NewsAPI)",
    longDescription: "Built an end-to-end market-intelligence system that generates automated due-diligence reports from heterogeneous sources (SEC filings, Wikipedia, NewsAPI).",
    achievements: [
      "Implemented a production RAG pipeline: ingestion → cleaning/structuring → chunking (~800 tokens) → embeddings (BGE-large, 1024-dim) → validation → storage (Qdrant vectors + Postgres metadata)",
      "Designed a multi-agent workflow (Orchestrator → Planner → Researcher → Synthesizer → Evaluator) with loop-back quality control; combined BM25 + vector retrieval for higher-precision evidence gathering",
      "Created an evaluation harness with synthetic test generation, ground-truth JSON test loading, bias checks, and metrics reporting (relevance/coverage/correctness) to gate releases",
      "Productionized with CI/CD: tests/linting + threshold checks → Docker image build/push (Artifact Registry) → rolling deploy to GKE (API) + Cloud Run (UI)",
      "Added observability: deployment notifications, API/pod logging, health checks, latency and error monitoring (Cloud Logging/Monitoring)"
    ],
    technologies: ["Python", "RAG", "Qdrant", "PostgreSQL", "BM25", "BGE-large", "Docker", "Kubernetes", "GKE", "Cloud Run", "CI/CD", "GitHub Actions"],
    github: "https://github.com/Hariharan-afk/Automated-Due-Diligence-Market-Intelligence-Agent",
    demo: null,
    featured: true
  },
  {
    title: "RAG-Based QA System for Medical Drugs",
    category: "RAG",
    duration: "Jan 2025 – April 2025",
    description: "Retrieval-based QA system for drug-related queries using web-scraped data from MayoClinic.org",
    longDescription: "Designed a retrieval-based QA system for drug-related queries using web-scraped data from MayoClinic.org.",
    achievements: [
      "Built a full retrieval pipeline using MiniLM-V6 embedding, FAISS vector search, and Sentence-BioBERT reranking",
      "Integrated Groq-hosted Llama-3.1 LLM for grounded answer generation based strictly on retrieved chunks",
      "Achieved 87.5% retrieval accuracy and 60.96% F1@3, significantly outperforming traditional methods like BM25"
    ],
    technologies: ["Python", "RAG", "FAISS", "MiniLM-V6", "BioBERT", "Llama-3.1", "Groq", "Web Scraping"],
    github: "https://github.com/Hariharan-afk/Medical_Drug_Information_RAG_Assistant_version-2",
    demo: "https://huggingface.co/spaces/llSTRIKERll/RAG_based_QA_system",
    featured: true
  },
  {
    title: "Multi-Label Classification of Thoracic Diseases",
    category: "Computer Vision",
    duration: "Jan 2025 – April 2025",
    description: "Multi-label classifier for 15 thoracic conditions using the NIH ChestX-ray14 dataset",
    longDescription: "Developed a multi-label classifier for 15 thoracic conditions using the NIH ChestX-ray14 dataset, addressing the challenge of class imbalance.",
    achievements: [
      "Implemented a custom CNN using DenseNet121 with focal loss and threshold tuning for imbalanced data",
      "Personally proposed and built a centroid-based synthetic sampling method to augment rare label combinations",
      "CNN achieved AUC > 0.94 for most labels, while XGBoost achieved AUC = 0.98 for rare diseases like Hernia"
    ],
    technologies: ["Python", "PyTorch", "DenseNet121", "Computer Vision", "Medical Imaging", "XGBoost"],
    github: "https://github.com/Hariharan-afk/Multi-Label-Classification-of-Thoracic-Diseases-using-Chest-X-Rays",
    demo: null,
    featured: true
  },
  {
    title: "Interactive Business Intelligence Dashboard",
    category: "MLOps",
    duration: "Sep 2025 - Dec 2025",
    description: "Interactive BI dashboard with automated insights generation and custom visualizations",
    longDescription: "Can handle csv, excel datasets with automated column type identification and manual correction features. Generates numerical, categorical analysis with distribution plots and custom charts.",
    achievements: [
      "Automated column type identification and manual correction features",
      "Can generate numerical, categorical analysis with distribution plots",
      "Custom Charts generation (Time series, Histogram, box plot, bar chart, pie chart, scatter plots)",
      "Automated Insight generation: Data Quality Scores, Top/Bottom Performers, Outlier Detection, Trend Analysis, Correlation Findings"
    ],
    technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Data Analysis"],
    github: "https://github.com/Hariharan-afk/Interactive_Business_Intelligence_Dashboard_V2",
    demo: "https://huggingface.co/spaces/llSTRIKERll/Interactive_Business_Intelligence_Dashboard",
    featured: false
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 95, icon: "SiPython" },
    { name: "SQL", level: 85, icon: "SiPostgresql" },
  ],
  frameworks: [
    { name: "PyTorch", level: 90, icon: "SiPytorch" },
    { name: "TensorFlow", level: 85, icon: "SiTensorflow" },
    { name: "Keras", level: 85, icon: "SiKeras" },
    { name: "Transformers", level: 90, icon: "SiHuggingface" },
    { name: "Scikit-learn", level: 90, icon: "SiScikitlearn" },
    { name: "XGBoost", level: 85, icon: "SiPython" },
    { name: "LangGraph", level: 85, icon: "SiPython" },
    { name: "FastAPI", level: 85, icon: "SiFastapi" },
    { name: "Streamlit", level: 90, icon: "SiStreamlit" },
  ],
  tools: [
    { name: "Git/GitHub", level: 90, icon: "SiGithub" },
    { name: "Linux", level: 85, icon: "SiLinux" },
    { name: "Docker", level: 85, icon: "SiDocker" },
    { name: "Kubernetes", level: 80, icon: "SiKubernetes" },
    { name: "GitHub Actions", level: 85, icon: "SiGithubactions" },
    { name: "Airflow", level: 75, icon: "SiApacheairflow" },
    { name: "Qdrant", level: 85, icon: "SiPython" },
    { name: "PostgreSQL", level: 85, icon: "SiPostgresql" },
    { name: "Google Cloud", level: 80, icon: "SiGooglecloud" },
  ],
  domain: [
    { name: "Agentic AI", level: 95, highlight: true },
    { name: "Multi-Agent Systems", level: 90, highlight: true },
    { name: "RAG", level: 95, highlight: true },
    { name: "Document AI", level: 90, highlight: false },
    { name: "Computer Vision", level: 85, highlight: false },
    { name: "MLOps", level: 85, highlight: false },
    { name: "Information Retrieval", level: 90, highlight: false },
  ]
};

export const certifications = [
  {
    title: "Generative AI - Introduction and Application",
    issuer: "IBM",
    date: "2024",
    icon: "SiIbm"
  },
  {
    title: "Developing AI applications with Python and Flask",
    issuer: "IBM",
    date: "2024",
    icon: "SiIbm"
  },
  {
    title: "Generative AI - Prompt Engineering Basics",
    issuer: "IBM",
    date: "2024",
    icon: "SiIbm"
  }
];

export const achievements = [
  {
    title: "Scholarship Award",
    description: "Awarded $25,000 scholarship from Northeastern University for academic excellence",
    year: "2024",
    icon: "🏆"
  },
  {
    title: "Paper Presentation - ICESI 2024",
    description: "Presented paper on 'Probabilistic Eye-State Classification from EEG Signals'",
    year: "2024",
    icon: "📄"
  },
  {
    title: "Gold Medal - SRM Research Day",
    description: "Paper Presentation on 'Automated Aeroponics System'",
    year: "2023",
    icon: "🥇"
  }
];

