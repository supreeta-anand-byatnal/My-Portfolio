import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.div
      className="footer-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center w-full px-3 text-white bg-black bottom-0">
        <motion.h1
          className="text-3xl font-signature mt-7 text-white text-right"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            Supreeta Anand Byatnal
        </motion.h1>

        <div className='text-lime-600'> &copy;All rights reserved. {new Date().getFullYear()}</div>
        <div className="footer-content mt-4 text-center">
          
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#home" className="experience text-white hover:text-lime-600 transition-colors duration-300">Home</a> | <a href="#about" className="text-white hover:text-lime-600 transition-colors duration-300">About</a> | <a href="#portfolio" className="text-white hover:text-lime-600 transition-colors duration-300">Portfolio</a> |{' '}
            <a href="#experience" className="experience text-white text-lg hover:text-lime-600 transition-colors duration-300">Experience</a> |{' '}  <a href="#contact" className="text-white hover:text-lime-600 transition-colors duration-300">Contact</a>
          </motion.p>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            sab9920@nyu.edu | (+1) 551-344-7460
          </motion.p>
          
          <div className="flex justify-center mb-5 space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/supreeta-anand-byatnal" target="_blank" rel="noopener noreferrer" className="text-lime-500 hover:text-lime-700 transition-colors duration-300">
              <FaLinkedin className="text-3xl hover:text-lime-700 transition-colors duration-300" />
            </a>
            <a href="https://github.com/supreeta-anand-byatnal" target="_blank" rel="noopener noreferrer" className="text-lime-500 hover:text-lime-700 transition-colors duration-300">
              <FaGithub className="text-3xl hover:text-lime-700 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
