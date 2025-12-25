import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  Globe, 
  Cpu, 
  ArrowRight,
  Workflow,
  Braces,
  Database,
  Gauge,
  FileText
} from 'lucide-react';
import { TechIconStack } from '../TechIcon';
import './Projects.css';

interface Project {
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  type: 'web-app' | 'vscode-extension' | 'ai-ml';
  icon: React.ReactNode;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: 'AI Playground',
    description: 'Interactive platform for experimenting with various AI/ML models with unified API interface.',
    longDescription: 'A comprehensive platform for experimenting with various AI/ML models including GPT-4, LLaMA, and Gemini. Features a unified API interface, real-time streaming responses, model comparison tools, and conversation history management. Built with modern React patterns and FastAPI backend.',
    tags: ['React', 'TypeScript', 'FastAPI', 'OpenAI', 'Gemini'],
    type: 'ai-ml',
    icon: <Cpu size={24} />,
    link: '#',
  },
  {
    name: 'API Performance Simulator',
    description: 'Real-time API performance testing with latency analysis and throughput metrics.',
    longDescription: 'A powerful tool for testing and visualizing API performance in real-time. Features include latency analysis, throughput metrics, concurrent request simulation, and interactive D3.js visualizations. Supports WebSocket connections for live monitoring and historical data comparison.',
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    type: 'web-app',
    icon: <Gauge size={24} />,
    link: '#',
  },
  {
    name: 'Big-O Complexity Extension',
    description: 'VS Code extension analyzing code complexity with Big-O notation suggestions.',
    longDescription: 'A VS Code extension that provides real-time code complexity analysis. Uses AST parsing to analyze loops, recursion, and data structure operations. Displays Big-O notation inline and offers optimization suggestions. Supports JavaScript, TypeScript, Python, and Java.',
    tags: ['TypeScript', 'VS Code API', 'AST Analysis'],
    type: 'vscode-extension',
    icon: <Braces size={24} />,
    github: 'https://github.com/kshitijzutshi',
  },
  {
    name: 'Datadog Stats Extension',
    description: 'VS Code extension for viewing Datadog metrics directly in the editor.',
    longDescription: 'Monitor your Datadog dashboards and metrics without leaving VS Code. Features include real-time metric graphs, alert notifications, log tailing, and APM trace viewing. Integrates with Datadog API for seamless monitoring experience.',
    tags: ['TypeScript', 'Datadog API', 'VS Code API'],
    type: 'vscode-extension',
    icon: <Workflow size={24} />,
    github: 'https://github.com/kshitijzutshi',
  },
  {
    name: '.NET Visualizer',
    description: 'Interactive dependency graph visualizer for .NET projects.',
    longDescription: 'Visualize and analyze .NET project dependencies with an interactive graph interface. Features include real-time analysis, NuGet package inspection, circular dependency detection, and export capabilities. Built with React frontend and C# analyzer backend running in Docker.',
    tags: ['React', 'C#', 'Docker', 'GraphQL'],
    type: 'web-app',
    icon: <Database size={24} />,
    link: '#',
  },
  {
    name: 'Resume Evaluator',
    description: 'AI-powered resume analysis with feedback and improvement suggestions.',
    longDescription: 'An intelligent resume analysis tool powered by OpenAI. Provides detailed feedback on resume structure, keyword optimization for ATS systems, industry-specific suggestions, and comparison with job descriptions. Includes a modern React interface with PDF parsing.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    type: 'ai-ml',
    icon: <FileText size={24} />,
    link: '#',
  },
];

const typeLabels = {
  'web-app': 'Web App',
  'vscode-extension': 'VS Code Extension',
  'ai-ml': 'AI / Machine Learning',
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        {/* Projects Container with Inline Detail View */}
        <div className="projects-container">
          {/* Detail View - Shows on top when a project is selected */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="project-detail"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-detail-inner">
                  <button 
                    className="project-detail-close"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={20} />
                  </button>

                  <div className="project-detail-header">
                    <div className="project-detail-icon">
                      {selectedProject.icon}
                    </div>
                    <div className="project-detail-info">
                      <span className="project-detail-type">{typeLabels[selectedProject.type]}</span>
                      <h3 className="project-detail-title">{selectedProject.name}</h3>
                    </div>
                  </div>

                  <p className="project-detail-description">
                    {selectedProject.longDescription}
                  </p>

                  <div className="project-detail-tech">
                    <span className="project-detail-tech-label">Technologies</span>
                    <div className="project-detail-tags">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-detail-actions">
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <Globe size={16} />
                        Launch Project
                      </a>
                    )}
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        <Github size={16} />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects Grid */}
          <motion.div 
            className="projects-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                className={`project-card ${selectedProject?.name === project.name ? 'project-card-active' : ''}`}
                variants={item}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(
                  selectedProject?.name === project.name ? null : project
                )}
              >
                {/* Icon */}
                <div className="project-icon">
                  {project.icon}
                </div>

                {/* Type Badge */}
                <span className="project-type">{typeLabels[project.type]}</span>

                {/* Title */}
                <h3 className="project-name">{project.name}</h3>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Tech Icons */}
                <div className="project-tech">
                  <TechIconStack techs={project.tags} size={18} max={4} />
                </div>

                {/* View Details Link */}
                <button className="project-details-btn">
                  {selectedProject?.name === project.name ? 'Close' : 'View Details'} 
                  <ArrowRight size={14} className={selectedProject?.name === project.name ? 'rotate-icon' : ''} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
