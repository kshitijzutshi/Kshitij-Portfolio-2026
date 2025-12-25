import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';
import { resumeData } from '../../data/resume';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="contact-intro">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about technology and 
              distributed systems. Feel free to reach out!
            </p>

            <div className="contact-cards">
              {/* Email Card */}
              <motion.a 
                href={`mailto:${resumeData.email}?subject=Hello%20from%20Portfolio`}
                className="contact-card"
                whileHover={{ y: -4 }}
              >
                <div className="contact-card-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Email Me</h3>
                  <p>{resumeData.email}</p>
                </div>
                <ExternalLink size={16} className="contact-card-arrow" />
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a 
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ y: -4 }}
              >
                <div className="contact-card-icon linkedin">
                  <Linkedin size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Connect on LinkedIn</h3>
                  <p>Let's connect professionally</p>
                </div>
                <ExternalLink size={16} className="contact-card-arrow" />
              </motion.a>

              {/* GitHub Card */}
              <motion.a 
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ y: -4 }}
              >
                <div className="contact-card-icon github">
                  <Github size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>View GitHub</h3>
                  <p>Check out my projects</p>
                </div>
                <ExternalLink size={16} className="contact-card-arrow" />
              </motion.a>

              {/* Location Card */}
              <motion.div 
                className="contact-card location"
                whileHover={{ y: -4 }}
              >
                <div className="contact-card-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Location</h3>
                  <p>{resumeData.location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} {resumeData.name}. Built with React & Framer Motion.</p>
        </motion.footer>
      </div>
    </section>
  );
}
