import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, X, Zap, Target, TrendingUp, Wrench } from 'lucide-react';
import { GeometricNetwork } from '../GeometricNetwork';
import './Hero.css';

interface FeatureData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

const features: FeatureData[] = [
  {
    id: 'distributed',
    icon: <Zap size={20} />,
    title: 'Distributed Systems',
    description: 'Building scalable microservices and real-time data pipelines with Kafka and CDC.',
    stats: [
      { label: 'Transactions Processed', value: '10M+/month' },
      { label: 'Latency Reduction', value: '40%' },
      { label: 'Data Sync Latency', value: '<1 min' },
      { label: 'Systems Integrated', value: '5+' },
    ],
  },
  {
    id: 'impact',
    icon: <Target size={20} />,
    title: 'Impact-Driven',
    description: 'Every solution designed to deliver measurable results and business value.',
    stats: [
      { label: 'Revenue Protected', value: '$XXX K+' },
      { label: 'Bug Fixes Deployed', value: '150+' },
      { label: 'MTTD Improvement', value: '6x faster' },
      { label: 'SLA Compliance', value: '99.5%' },
    ],
  },
  {
    id: 'performance',
    icon: <TrendingUp size={20} />,
    title: 'Performance Focus',
    description: 'Optimizing systems serving 20M+ customers with sub-minute latency requirements.',
    stats: [
      { label: 'Customers Served', value: '20M+' },
      { label: 'Response Time Improvement', value: '35%' },
      { label: 'Records Backfilled', value: '9.73M' },
      { label: 'Cold-Start Reduction', value: '40%' },
    ],
  },
  {
    id: 'fullstack',
    icon: <Wrench size={20} />,
    title: 'Full-Stack Expertise',
    description: 'From .NET APIs to React frontends, cloud infrastructure to observability.',
    stats: [
      { label: 'Years Experience', value: '6+' },
      { label: 'Languages Proficient', value: '9' },
      { label: 'Cloud Platforms', value: 'AWS, GCP' },
      { label: 'Public Repos', value: '165' },
    ],
  },
];

export function Hero() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleDownloadResume = () => {
    window.open('/assets/Resume_KshitijZutshi.pdf', '_blank');
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeFeature = features.find(f => f.id === activeModal);

  return (
    <section className="hero">
      <GeometricNetwork />
      
      <div className="hero-content container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build. Scale. Deliver.
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Software Engineer with 6+ years of experience.
            Focused on distributed systems and scalable APIs.
          </motion.p>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building distributed systems, scalable APIs, and data pipelines for high-traffic e-commerce platforms. Expertise in .NET microservices, real-time data streaming, and cloud infrastructure.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={16} />
              Download Resume
            </motion.button>

            <motion.button
              className="btn"
              onClick={handleViewProjects}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <motion.div 
        className="hero-features container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {features.map((feature) => (
          <motion.button
            key={feature.id}
            className="feature-card"
            onClick={() => setActiveModal(feature.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="feature-card-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.button>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && activeFeature && (
          <>
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            />
            <motion.div
              className="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <button 
                className="modal-close"
                onClick={() => setActiveModal(null)}
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="modal-icon">{activeFeature.icon}</div>
                <h3>{activeFeature.title}</h3>
              </div>

              <p className="modal-description">{activeFeature.description}</p>

              <div className="modal-stats">
                {activeFeature.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="modal-stat"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
