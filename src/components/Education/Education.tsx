import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../../data/resume';
import './Education.css';

export function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="education-grid">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="education-logo">
                {edu.logo ? (
                  <img src={edu.logo} alt={edu.institution} />
                ) : (
                  <GraduationCap size={32} />
                )}
              </div>

              <div className="education-date">{edu.period}</div>
              <h3 className="education-school">{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              
              {edu.gpa && (
                <div className="education-gpa">
                  GPA: <strong>{edu.gpa}</strong>
                </div>
              )}

              {edu.achievement && (
                <div className="education-achievement">
                  {edu.achievement}
                </div>
              )}

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="education-coursework">
                  <span className="coursework-label">Relevant Coursework:</span>
                  <div className="coursework-tags">
                    {edu.coursework.map((course, cIndex) => (
                      <span key={cIndex} className="tag">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
