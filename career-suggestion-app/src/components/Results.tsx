import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';

interface ResultsProps {
  profession: string;
  onRestart: () => void;
}

export default function Results({ profession, onRestart }: ResultsProps) {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-[rgba(10,10,10,1)] text-white p-6 relative">
      {/* Header */}
      <header className="header fixed top-0 left-0 w-full p-4 z-50 bg-[rgba(0,0,0,0.8)] flex justify-between items-center">
        <div className="text-2xl font-bold text-neon-blue">CareerHub</div>
        <div className="flex space-x-4">
          <motion.button
            className="cta-button relative text-sm md:text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/register')}
          >
            <span className="button-text">Register</span>
          </motion.button>
          <motion.button
            className="cta-button relative text-sm md:text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/login')}
          >
            <span className="button-text">Login</span>
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <div className="neon-card p-6 rounded-lg mt-24 mb-16">
        <h2 className="neon-heading text-3xl mb-6 text-center">Your Career Recommendations</h2>
        <div className="career-recommendations flex flex-col gap-4 mb-6 text-center">
          <div className="recommendation p-4 border-l-4 border-neon-green bg-[rgba(255,255,255,0.1)] rounded-r-lg mx-auto max-w-md">
            <h3 className="text-neon-green text-xl mb-2">{profession}</h3>
            <p className="text-sm">Based on your answers, a career in {profession} could be a great fit for you.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <motion.button
            className="cta-button p-3 bg-transparent text-neon-green border-2 border-neon-green rounded-lg transition-all duration-300 hover:bg-neon-green hover:text-white hover:shadow-[0_0_15px_var(--neon-green)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate('/study-details')}
          >
            Study
          </motion.button>
          <motion.button
            className="cta-button p-3 bg-transparent text-neon-purple border-2 border-neon-purple rounded-lg transition-all duration-300 hover:bg-neon-purple hover:text-white hover:shadow-[0_0_15px_var(--neon-purple)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate('/job-details')}
          >
            Find Job
          </motion.button>
          <motion.button
            className="cta-button p-3 bg-transparent text-neon-orange border-2 border-neon-orange rounded-lg transition-all duration-300 hover:bg-neon-orange hover:text-white hover:shadow-[0_0_15px_var(--neon-orange)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate('/no-idea')}
          >
            No Idea
          </motion.button>
        </div>
      </div>

      {/* About Section */}
      <div className="info-section mt-8 max-w-6xl mx-auto">
        <h2 className="neon-heading text-2xl mb-4 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-center md:text-left max-w-xl">
            CareerHub is dedicated to helping you discover your ideal career path with personalized assessments and resources. Founded in 2023, we partner with top universities and employers to provide cutting-edge career guidance.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="info-section mt-8 max-w-6xl mx-auto">
        <h2 className="neon-heading text-2xl mb-4 text-center">Contact Us</h2>
        <div className="text-center max-w-xl mx-auto">
          <p><FaEnvelope className="inline mr-2 text-neon-blue" /> Email: support@careerhub.com</p>
          <p><FaPhone className="inline mr-2 text-neon-blue" /> Phone: +1-800-555-1234</p>
          <p><FaMapMarkerAlt className="inline mr-2 text-neon-blue" /> Address: 123 Career Lane, Tech City, TC 45678</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 p-6 bg-[rgba(0,0,0,0.8)] text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <FaFacebook className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
          <FaTwitter className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
          <FaInstagram className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
        </div>
        <p>&copy; 2025 CareerHub. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="text-neon-blue hover:text-neon-white">Privacy</a>
          <a href="/terms" className="text-neon-blue hover:text-neon-white">Terms</a>
          <a href="/contact" className="text-neon-blue hover:text-neon-white">Contact</a>
        </div>
      </footer>
    </div>
  );
}