import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function recommendations() {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState<{ jobs: string[]; universities: string[] }>({ jobs: [], universities: [] });
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    educationStatus: '',
    subject: '',
    favoriteSubject: '',
    pathway: '',
    opportunities: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
  });

  useEffect(() => {
    const { query } = router;
    // Parse query parameters into formData
    const newFormData = { ...formData };
    for (const key in query) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        newFormData[key as keyof typeof formData] = query[key] as string;
      }
    }
    setFormData(newFormData);

    // Simple frontend logic to generate recommendations
    const jobs = generateJobs(newFormData);
    const universities = generateUniversities(newFormData);
    setRecommendations({ jobs, universities });
  }, [router.query]);

  const generateJobs = (data: typeof formData) => {
    const jobs: string[] = [];
    if (data.q4?.toLowerCase().includes('tech')) jobs.push('Software Developer');
    if (data.q3?.toLowerCase().includes('team')) jobs.push('Project Manager');
    if (data.q9?.toLowerCase().includes('experience')) jobs.push('Senior Analyst');
    if (jobs.length === 0) jobs.push('Entry-Level Position');
    return jobs;
  };

  const generateUniversities = (data: typeof formData) => {
    const universities: string[] = [];
    if (data.educationStatus === 'Undergraduate') universities.push('University of California');
    if (data.subject?.toLowerCase().includes('science')) universities.push('MIT');
    if (data.location?.toLowerCase().includes('city')) universities.push('New York University');
    if (universities.length === 0) universities.push('Local Community College');
    return universities;
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
        <h2 className="neon-heading text-3xl mb-6 text-center">Your Recommendations</h2>
        <div className="mb-6">
          <h3 className="neon-heading text-xl mb-4">Recommended Jobs</h3>
          <ul className="list-disc list-inside">
            {recommendations.jobs.map((job, index) => (
              <li key={index} className="text-lg">{job}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="neon-heading text-xl mb-4">Recommended Universities</h3>
          <ul className="list-disc list-inside">
            {recommendations.universities.map((uni, index) => (
              <li key={index} className="text-lg">{uni}</li>
            ))}
          </ul>
        </div>
        <motion.button
          className="cta-button p-2 mt-6 bg-transparent text-neon-purple border-2 border-dark-blue rounded-lg transition-all duration-300 hover:bg-dark-blue hover:text-white hover:shadow-[0_0_10px_var(--dark-blue)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{ '--dark-blue': '#1E90FF' } as React.CSSProperties}
          onClick={() => router.push('/')}
        >
          Back to Home
        </motion.button>
      </div>

       {/* About and Contact Sections Side by Side */}
      <div className="info-section mt-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Us */}
          <div>
            <h2 className="neon-heading text-2xl mb-4 text-center md:text-left">About Us</h2>
            <p className="text-center md:text-left max-w-md">
              CareerHub is dedicated to helping you discover your ideal career path with personalized assessments and resources. Founded in 2023, we partner with top universities and employers to provide cutting-edge career guidance.
            </p>
          </div>
          {/* Contact Us */}
          <div>
            <h2 className="neon-heading text-2xl mb-4 text-center md:text-left">Contact Us</h2>
            <div className="text-center md:text-left max-w-md">
              <p><FaEnvelope className="inline mr-2 text-neon-blue" /> Email: support@careerhub.com</p>
              <p><FaPhone className="inline mr-2 text-neon-blue" /> Phone: +1-800-555-1234</p>
              <p><FaMapMarkerAlt className="inline mr-2 text-neon-blue" /> Address: 123 Career Lane, Tech City, TC 45678</p>
            </div>
          </div>
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