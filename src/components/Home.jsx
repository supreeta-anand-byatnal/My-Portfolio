import React from 'react';
import photo from '../assets/photo.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import resumePDF from '../assets/resume.pdf';

const Home = () => {
  return (
    <div id="home" name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center items-center text-center h-full w-2/3 md:w-2/3">
          <h2 className="text-4xl animate-slide-from-above sm:text-7xl font-bold text-lime-600">&lt;Hello World/&gt;</h2>
          <h3 className="text-4xl sm:text-7xl font-bold text-white animate-slide-from-left">I'm Supreeta</h3>
          <p className="text-gray-300 mb-8 text-center text-lg max-w py-4 max-w-md">
            I'm a Software Engineer with over 2 years of work experience. Currently, I am a grad student at <br/><b className='text-1.5rem text-lime-600'> New York
            University, Courant</b> pursuing <b className = 'text-1.5rem text-lime-600'> Masters of Science in Computer Science </b>. I am passionate about the hows and whys of
            everything, and that makes me an amazing Software Engineer!
          </p>
          <div className="flex justify-center">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white animate-slide-from-left p-4 flex items-center font-semibold rounded-md bg-gradient-to-r from-lime-500 to-lime-900 cursor-pointer"
            >
              View my resumé
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <MdOutlineKeyboardArrowRight />
              </span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 ml-20 relative animate-slide-from-right" style={{ marginTop: '4rem' }}>
          <img
            src={photo}
            alt="my profile"
            className="rounded-3xl mx-auto justify-center items-center w-1/2 md:w-3/4 border border-lime-700 px-2 py-2 border-solid transform hover:rotate-45 hover:scale-125 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
