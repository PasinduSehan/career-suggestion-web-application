import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaGoogle, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone || !formData.dateOfBirth) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      console.log('Registering with:', formData);
      router.push('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  const primaryImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80';
  const fallbackImage = '/images/fallback-image.jpg'; // Ensure this file exists in public/images/

  return (
    <div className="min-h-screen bg-[rgba(10,10,10,1)] text-white p-6 flex items-center justify-center relative">
      {imageError ? (
        <Image
          src={fallbackImage}
          alt="Fallback background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-50"
        />
      ) : (
        <Image
          src={primaryImage}
          alt="Background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-50"
          onError={handleImageError}
        />
      )}
      <motion.div
        className="form-card relative z-10 bg-black/50 p-8 rounded-lg backdrop-blur-sm max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="neon-heading text-3xl mb-6 text-center">Create Your Account</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="form-input w-full p-2 bg-black/30 border border-gray-700 rounded"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="form-input w-full p-2 bg-black/30 border border-gray-700 rounded"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              className="form-input w-full p-2 bg-black/30 border border-gray-700 rounded"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="dateOfBirth"
              className="form-input w-full p-2 bg-black/30 border border-gray-700 rounded text-white"
              placeholder="Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="form-input w-full p-2 bg-black/30 border border-gray-700 rounded"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="confirmPassword"
              className="form-input w-full p-2 bg-black/30 border border-gray-700 rounded"
              placeholder="Re-enter Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <motion.button
            type="submit"
            className="cta-button w-full bg-purple-600 hover:bg-purple-700 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-text">Sign Up</span>
          </motion.button>
        </form>
        <div className="mt-6 text-center">
          <p className="mb-2">Or sign up with:</p>
          <div className="flex justify-center space-x-4">
            <motion.div
              className="text-2xl text-neon-blue hover:text-neon-white cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => console.log('Google sign-up clicked')}
            >
              <FaGoogle />
            </motion.div>
            <motion.div
              className="text-2xl text-neon-blue hover:text-neon-white cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => console.log('Twitter sign-up clicked')}
            >
              <FaTwitter />
            </motion.div>
            <motion.div
              className="text-2xl text-neon-blue hover:text-neon-white cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => console.log('LinkedIn sign-up clicked')}
            >
              <FaLinkedin />
            </motion.div>
            <motion.div
              className="text-2xl text-neon-blue hover:text-neon-white cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => console.log('Instagram sign-up clicked')}
            >
              <FaInstagram />
            </motion.div>
          </div>
        </div>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <motion.span
            className="text-purple-400 cursor-pointer hover:text-purple-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/login')}
          >
            Log In
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
}