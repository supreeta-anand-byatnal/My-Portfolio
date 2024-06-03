import React, { useState } from 'react';
import Personal from './Personal';

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className={"h-100 w-full bg-gradient-to-b from-black via-black to-gray-800 "}
    >
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="text-center">
          <h1 className="text-5xl animate-slide-from-left mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">
            About Me
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-white text-lg text-center">
            Hi, I'm Supreeta Anand Byatnal. <b className='text-lime-600'>I graduated with a Masters in Computer Science at New York University (NYU), Courant Institute of Mathematical Sciences.</b> I'm originally from Bangalore, India. I did my Bachelors in Information Science and Engineering from BMS College of Engineering, Bangalore, India - Batch of 2020. With a strong passion for technology and problem-solving, I'm dedicated to expanding my knowledge and skills in the field of computer science.
          </p>
          <br />
          <p className="text-white text-lg text-center">
            I worked at <b className='text-lime-600'>McAfee Inc. for over 2 years as a Software Development Engineer </b>  in the Cloud BU on a product called "MVision Cloud".
          </p>
          <br />
          <p className="text-white text-lg text-center">
            Proficient in a wide range of programming languages, including <b className='text-lime-600'>Java, Python, and JavaScript </b> , I demonstrate versatility and adaptability in tackling complex coding challenges. Additionally, I am well-versed in utilizing frameworks such as React and Node.js to develop robust and scalable applications. With hands-on experience in cloud technologies, databases, and version control systems, I possess a comprehensive understanding of modern tech stacks.
          </p>
          <br />
          <p className="text-white text-lg text-center">
            I am deeply committed to supporting and empowering women in the tech industry. Actively engaging with organizations like <b className='text-lime-600'> Women Who Code </b>, I participate in networking, skill development, and knowledge sharing. Furthermore, as a member of <b className='text-lime-600'> RTC (Rewriting the Code) </b>, I collaborate with individuals from diverse backgrounds, share experiences, and contribute to initiatives promoting diversity and inclusivity in technology.
          </p>
          <br />
          <p className="text-white text-lg text-center">
            I actively participate in initiatives like <b className='text-lime-600'> "Develop For Good" </b> and serve as a <b className='text-lime-600'>mentor in hackathons </b> dedicated to individuals from non-traditional backgrounds. I believe in utilizing technology for positive social impact and strive to stay at the forefront of technological advancements.
          </p>
          <br />
          <p className="text-white text-lg text-center">
            I am a dedicated and passionate individual, constantly seeking opportunities to grow as a professional and contribute to the betterment of society through technology.
          </p>
        </div>
      </div>

      <div className="mt-auto py-6">
        <Personal />
      </div>
    </div>
  );
};

export default About;
