import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Github } from 'lucide-react';
import { resumeData } from '../../data/resume';
import './About.css';

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          className="about-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image">
            <motion.img
              src={resumeData.photo}
              alt={resumeData.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="about-content">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
            </div>

            <h3 className="about-name">{resumeData.name}</h3>
            <p className="about-role">{resumeData.title}</p>

            <div className="about-links">
              <a href={`mailto:${resumeData.email}`} className="about-link">
                <Mail size={16} />
                {resumeData.email}
              </a>
              <span className="about-link">
                <MapPin size={16} />
                {resumeData.location}
              </span>
              <a 
                href={resumeData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-link"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a 
                href={resumeData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-link"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>

            <p className="about-bio">
              {resumeData.summary}
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">{resumeData.githubStats.publicRepos}</span>
                <span className="stat-label">Public Repos</span>
              </div>
              <div className="stat">
                <span className="stat-number">{resumeData.githubStats.totalPRs}+</span>
                <span className="stat-label">Pull Requests</span>
              </div>
              <div className="stat">
                <span className="stat-number">20M+</span>
                <span className="stat-label">Customers Served</span>
              </div>
            </div>

            <div className="about-achievements">
              <span className="achievements-label">GitHub Achievements:</span>
              <div className="achievements-tags">
                {resumeData.githubStats.achievements.map((achievement) => (
                  <span key={achievement} className="tag">{achievement}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
