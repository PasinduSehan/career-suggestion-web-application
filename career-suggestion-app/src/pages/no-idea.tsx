import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function NoIdea() {
  const router = useRouter();
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push('/results');
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
        <h2 className="neon-heading text-3xl mb-6 text-center">Career Exploration Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
              required
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
              required
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
              required
            />
            <select
              name="educationStatus"
              value={formData.educationStatus}
              onChange={handleChange}
              className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
              required
            >
              <option value="">Select Education Status</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Current Subject/Field"
              className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
              required
            />
            <input
              type="text"
              name="favoriteSubject"
              value={formData.favoriteSubject}
              onChange={handleChange}
              placeholder="Favorite Subject"
              className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
              required
            />
            <textarea
              name="pathway"
              value={formData.pathway}
              onChange={handleChange}
              placeholder="Education/Job Pathway Goals"
              className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded md:col-span-2"
              rows={3}
              required
            />
            <textarea
              name="opportunities"
              value={formData.opportunities}
              onChange={handleChange}
              placeholder="Opportunities You Seek"
              className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded md:col-span-2"
              rows={3}
              required
            />
          </div>

          {/* Career Guidance Questions */}
          <div className="mt-4">
            <h3 className="neon-heading text-xl mb-4">Career Guidance Questions</h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="q1"
                value={formData.q1}
                onChange={handleChange}
                placeholder="1. What skills do you enjoy using?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q2"
                value={formData.q2}
                onChange={handleChange}
                placeholder="2. What are your long-term career goals?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q3"
                value={formData.q3}
                onChange={handleChange}
                placeholder="3. Do you prefer working alone or in a team?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q4"
                value={formData.q4}
                onChange={handleChange}
                placeholder="4. What industries interest you?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q5"
                value={formData.q5}
                onChange={handleChange}
                placeholder="5. Are you open to relocating?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q6"
                value={formData.q6}
                onChange={handleChange}
                placeholder="6. What is your preferred work environment?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q7"
                value={formData.q7}
                onChange={handleChange}
                placeholder="7. Do you have any certifications?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q8"
                value={formData.q8}
                onChange={handleChange}
                placeholder="8. What challenges motivate you?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q9"
                value={formData.q9}
                onChange={handleChange}
                placeholder="9. How much work experience do you have?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
              <input
                type="text"
                name="q10"
                value={formData.q10}
                onChange={handleChange}
                placeholder="10. What salary range are you targeting?"
                className="p-2 bg-[rgba(255,255,255,0.1)] border border-neon-green rounded"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="cta-button p-3 mt-6 bg-transparent text-neon-purple border-2 --neon-purple rounded-lg transition-all duration-300 hover:--neon-purple hover:text-white hover:shadow-[0_0_15px_var(--neon-lime)]"
            whileHover={{ scale: 0.95 }}
             onClick={() => router.push('/recommendations')}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
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
