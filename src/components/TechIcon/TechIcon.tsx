import { useState } from 'react';
import './TechIcon.css';

interface TechIconProps {
  tech: string;
  size?: number;
}

// Map technology names to devicon identifiers
const techToDevicon: Record<string, string> = {
  // Frontend
  'react': 'react',
  'typescript': 'typescript',
  'javascript': 'javascript',
  'next.js': 'nextjs',
  'vite': 'vitejs',
  'tailwindcss': 'tailwindcss',
  'css': 'css3',
  'html': 'html5',
  'vue': 'vuejs',
  'd3.js': 'd3js',
  
  // Backend
  'node.js': 'nodejs',
  'express': 'express',
  'python': 'python',
  'fastapi': 'fastapi',
  '.net': 'dotnetcore',
  'c#': 'csharp',
  'java': 'java',
  'go': 'go',
  
  // Database
  'postgresql': 'postgresql',
  'mongodb': 'mongodb',
  'redis': 'redis',
  
  // DevOps & Tools
  'docker': 'docker',
  'kubernetes': 'kubernetes',
  'github': 'github',
  'vscode': 'vscode',
  'vs code api': 'vscode',
  'ast analysis': 'vscode',
  
  // Cloud
  'aws': 'amazonwebservices',
  'azure': 'azure',
  'gcp': 'googlecloud',
  
  // Other
  'graphql': 'graphql',
  'websocket': 'socketio',
  'kafka': 'apachekafka',
  
  // AI/ML
  'tensorflow': 'tensorflow',
  'pytorch': 'pytorch',
  'openai': 'openai',
  'gemini': 'google',
  'datadog api': 'datadoghq',
};

function getDeviconId(tech: string): string | null {
  const normalized = tech.toLowerCase().trim();
  return techToDevicon[normalized] || null;
}

export function TechIcon({ tech, size = 20 }: TechIconProps) {
  const [hasError, setHasError] = useState(false);
  const deviconId = getDeviconId(tech);
  
  if (!deviconId || hasError) {
    return (
      <div 
        className="tech-icon-fallback"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
        title={tech}
      >
        {tech.charAt(0).toUpperCase()}
      </div>
    );
  }
  
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconId}/${deviconId}-original.svg`;
  
  return (
    <img
      src={iconUrl}
      alt={tech}
      width={size}
      height={size}
      className="tech-icon"
      onError={() => setHasError(true)}
      loading="lazy"
      title={tech}
    />
  );
}

export function TechIconStack({ 
  techs, 
  size = 20, 
  max = 5 
}: { 
  techs: string[]; 
  size?: number;
  max?: number;
}) {
  const displayTechs = techs.slice(0, max);
  const remaining = techs.length - max;
  
  return (
    <div className="tech-icon-stack">
      {displayTechs.map((tech) => (
        <TechIcon key={tech} tech={tech} size={size} />
      ))}
      {remaining > 0 && (
        <span className="tech-icon-more">+{remaining}</span>
      )}
    </div>
  );
}

