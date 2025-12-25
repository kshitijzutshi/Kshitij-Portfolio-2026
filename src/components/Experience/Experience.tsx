import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { resumeData } from '../../data/resume';
import './Experience.css';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="experience section" ref={containerRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="timeline">
          {/* Animated progress line */}
          <motion.div 
            className="timeline-progress"
            style={{ height: lineHeight }}
          />

          {resumeData.experience.map((job, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-date">{job.period}</div>
              <div className="timeline-header">
                {job.logo && (
                  <img 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    className="company-logo"
                  />
                )}
                <div className="timeline-header-text">
                  <h3 className="timeline-title">{job.company}</h3>
                  <p className="timeline-subtitle">
                    {job.title}
                    {job.location && ` • ${job.location}`}
                  </p>
                </div>
              </div>
              <ul className="timeline-content">
                {job.highlights.slice(0, 4).map((highlight, hIndex) => (
                  <motion.li
                    key={hIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + hIndex * 0.05 }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
