import React from 'react';
import Personal from './Personal';

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="text-center">
          <h1 className="text-5xl mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">
            About Me
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-white">
            Hey! I am Supreeta
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <Personal />
      </div>
    </div>
  );
};

export default About;
