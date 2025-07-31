import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  const [uniSlide, setUniSlide] = useState(0); // Separate state for universities
  const [jobSlide, setJobSlide] = useState(0); // Separate state for jobs

  // Dummy data for universities (5 items) with unique Unsplash images
  const universities = [
    {
      id: 1,
      name: 'University A',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
      details: 'Top-rated with excellent career programs.',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'University B',
      image: 'https://images.unsplash.com/photo-1559766162-439e7e0f7d6c?auto=format&fit=crop&w=300&q=80',
      details: 'Known for innovative technology courses.',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'University C',
      image: 'https://images.unsplash.com/photo-1573164713988-8665e27c2610?auto=format&fit=crop&w=300&q=80',
      details: 'Offers strong business management programs.',
      rating: 4.0,
    },
    {
      id: 4,
      name: 'University D',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
      details: 'Renowned for medical and health sciences.',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'University E',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80',
      details: 'Leader in environmental studies.',
      rating: 4.3,
    },
  ];

  // Dummy data for jobs (5 items) with unique Unsplash images
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80',
      details: 'Full-time position with a tech giant.',
      rating: 4.7,
    },
    {
      id: 2,
      title: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80',
      details: 'Remote role with growth opportunities.',
      rating: 4.3,
    },
    {
      id: 3,
      title: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=300&q=80',
      details: 'Lead creative campaigns for a top firm.',
      rating: 4.5,
    },
    {
      id: 4,
      title: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1517245384741-6f5c6f29ef9e?auto=format&fit=crop&w=300&q=80',
      details: 'Freelance role with flexible hours.',
      rating: 4.2,
    },
    {
      id: 5,
      title: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80',
      details: 'Oversee tech projects with a global team.',
      rating: 4.6,
    },
  ];

  const handleUniSlide = (direction: number) => {
    setUniSlide((prev) => {
      const newSlide = prev + direction;
      if (newSlide < 0) return universities.length - 2; // Loop to last pair
      if (newSlide >= universities.length - 1) return 0; // Loop to first pair
      return newSlide;
    });
  };

  const handleJobSlide = (direction: number) => {
    setJobSlide((prev) => {
      const newSlide = prev + direction;
      if (newSlide < 0) return jobs.length - 2; // Loop to last pair
      if (newSlide >= jobs.length - 1) return 0; // Loop to first pair
      return newSlide;
    });
  };

  return (
    <div className="min-h-screen bg-[rgba(10,10,10,1)] text-white p-6 relative">
      {/* Enhanced Header with Text Logo */}
      <header className="header fixed top-0 left-0 w-full p-4 z-50 bg-[rgba(0,0,0,0.8)] flex justify-between items-center">
        <div className="text-2xl font-bold text-neon-blue">CareerHub</div> {/* Restored text logo */}
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

      {/* Hero Section with Background Image */}
      <div className="hero relative pt-24">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80"
          alt="Career background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-50"
        />
        <motion.div
          className="neon-text relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl mb-6">Unlock Your Career Journey</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Explore personalized career paths with our innovative assessment tools designed for your success.</p>
          <motion.button
            className="cta-button relative text-lg md:text-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/quiz')}
          >
            <span className="button-text">Start Your Journey</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Key Benefits of Career Planning */}
      <div className="info-section mt-16 max-w-6xl mx-auto">
        <h2 className="neon-heading text-3xl mb-8 text-center">Key Benefits of Career Planning</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="feature bg-black/70 p-4 rounded-lg h-48 flex flex-col justify-between shadow-neon"
            whileHover={{ rotate: 2, transition: { duration: 0.3 } }}
          >
            <div className="feature-icon text-3xl">🎯</div>
            <h3 className="text-neon-pink text-xl mb-2">Personal Growth</h3>
            <p>Align your career with your aspirations.</p>
          </motion.div>
          <motion.div
            className="feature bg-black/70 p-4 rounded-lg h-48 flex flex-col justify-between shadow-neon"
            whileHover={{ rotate: -2, transition: { duration: 0.3 } }}
          >
            <div className="feature-icon text-3xl">⚖️</div>
            <h3 className="text-neon-pink text-xl mb-2">Life Harmony</h3>
            <p>Balance work and personal life.</p>
          </motion.div>
          <motion.div
            className="feature bg-black/70 p-4 rounded-lg h-48 flex flex-col justify-between shadow-neon"
            whileHover={{ rotate: 2, transition: { duration: 0.3 } }}
          >
            <div className="feature-icon text-3xl">🌱</div>
            <h3 className="text-neon-pink text-xl mb-2">Skill Advancement</h3>
            <p>Develop skills for future growth.</p>
          </motion.div>
          <motion.div
            className="feature bg-black/70 p-4 rounded-lg h-48 flex flex-col justify-between shadow-neon"
            whileHover={{ rotate: -2, transition: { duration: 0.3 } }}
          >
            <div className="feature-icon text-3xl">💰</div>
            <h3 className="text-neon-pink text-xl mb-2">Financial Success</h3>
            <p>Secure a stable future.</p>
          </motion.div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="info-section mt-16 max-w-6xl mx-auto">
        <h2 className="neon-heading text-3xl mb-8 text-center">Top Universities</h2>
        <div className="relative">
          <motion.div
            className="flex overflow-hidden"
            animate={{ x: `-${uniSlide * (100 / 2)}%` }} // 2 cards visible
            transition={{ duration: 0.5 }}
          >
            {universities.map((uni) => (
              <div key={uni.id} className="w-1/4 flex-shrink-0 p-2">
                <div className="bg-black/70 p-3 rounded-lg h-64 flex flex-col justify-between shadow-neon hover:shadow-neon-lg transition-shadow duration-300">
                  <Image
                    src={uni.image} // Unique Unsplash image
                    alt={uni.name}
                    width={200}
                    height={150}
                    className="w-full h-28 object-cover rounded"
                  />
                  <h3 className="text-lg font-semibold mt-2">{uni.name}</h3>
                  <p className="text-sm mt-1 line-clamp-2">{uni.details}</p>
                  <div className="text-yellow-400 mt-2 text-sm">{'★'.repeat(Math.floor(uni.rating))}{uni.rating % 1 !== 0 && '½'} ({uni.rating}/5)</div>
                </div>
              </div>
            ))}
          </motion.div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={() => handleUniSlide(-1)}
          >
            ←
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={() => handleUniSlide(1)}
          >
            →
          </button>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="info-section mt-16 max-w-6xl mx-auto">
        <h2 className="neon-heading text-3xl mb-8 text-center">Featured Jobs</h2>
        <div className="relative">
          <motion.div
            className="flex overflow-hidden"
            animate={{ x: `-${jobSlide * (100 / 2)}%` }} // 2 cards visible
            transition={{ duration: 0.5 }}
          >
            {jobs.map((job) => (
              <div key={job.id} className="w-1/4 flex-shrink-0 p-2">
                <div className="bg-black/70 p-3 rounded-lg h-64 flex flex-col justify-between shadow-neon hover:shadow-neon-lg transition-shadow duration-300">
                  <Image
                    src={job.image} // Unique Unsplash image
                    alt={job.title}
                    width={200}
                    height={150}
                    className="w-full h-28 object-cover rounded"
                  />
                  <h3 className="text-lg font-semibold mt-2">{job.title}</h3>
                  <p className="text-sm mt-1 line-clamp-2">{job.details}</p>
                  <div className="text-yellow-400 mt-2 text-sm">{'★'.repeat(Math.floor(job.rating))}{job.rating % 1 !== 0 && '½'} ({job.rating}/5)</div>
                </div>
              </div>
            ))}
          </motion.div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={() => handleJobSlide(-1)}
          >
            ←
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={() => handleJobSlide(1)}
          >
            →
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="info-section mt-16 max-w-6xl mx-auto">
        <h2 className="neon-heading text-3xl mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
            alt="About Us"
            width={300}
            height={200}
            className="rounded-lg object-cover shadow-neon"
          />
          <div>
            <p className="text-center md:text-left max-w-xl">
              CareerHub is dedicated to helping you discover your ideal career path with personalized assessments and resources. Our mission is to empower individuals with the tools they need to succeed in a competitive job market. Founded in 2023, we partner with top universities and employers to provide cutting-edge career guidance.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <FaFacebook className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
              <FaTwitter className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
              <FaInstagram className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="info-section mt-16 max-w-6xl mx-auto">
        <h2 className="neon-heading text-3xl mb-8 text-center">Contact Us</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p><FaEnvelope className="inline mr-2 text-neon-blue" /> Email: support@careerhub.com | info@careerhub.com</p>
          <p><FaPhone className="inline mr-2 text-neon-blue" /> Phone: +1-800-555-1234 | +1-800-555-5678 | +1-800-555-9012</p>
          <p><FaMapMarkerAlt className="inline mr-2 text-neon-blue" /> Address: 123 Career Lane, Tech City, TC 45678</p>
          <p className="mt-4">Follow us:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <FaFacebook className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
            <FaTwitter className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
            <FaInstagram className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
            <FaLinkedin className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 p-6 bg-[rgba(0,0,0,0.8)] text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <FaFacebook className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
          <FaTwitter className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
          <FaInstagram className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
          <FaLinkedin className="text-neon-blue hover:text-neon-white cursor-pointer text-2xl" />
        </div>
        <p>&copy; 2025 CareerHub. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="text-neon-blue hover:text-neon-white">Privacy</a>
          <a href="/terms" className="text-neon-blue hover:text-neon-white">Terms</a>
          <a href="/contact" className="text-neon-blue hover:text-neon-white">Contact</a>
          <a href="/blog" className="text-neon-blue hover:text-neon-white">Blog</a>
          <a href="/careers" className="text-neon-blue hover:text-neon-white">Careers</a>
        </div>
        <p className="mt-2 text-sm">Powered by xAI | Follow us for career tips!</p>
      </footer>
    </div>
  );
}