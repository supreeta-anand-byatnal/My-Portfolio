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
            Hi, I'm Supreeta Anand Byatnal. <b>I'm a graduate student at New York University (NYU), Courant Institute of Mathematical Sciences pursuing my Masters in Computer Science. I will graduate in May 2024.</b> I'm originally from Bangalore, India. I did my Bachelors in Information Science and Engineering from BMS College of Engineering, Bangalore, India - Batch of 2020. With a strong passion for technology and problem-solving, I'm dedicated to expanding my knowledge and skills in the field of computer science.
          </p>
          <br />
          <p className="text-white text-lg text-center">
            I worked at <b>McAfee Inc.</b> for over 2 years as a Software Development Engineer in the Cloud BU on a product called "MVision Cloud".
          </p>
          <br />
          <p className="text-white text-lg text-center">
            Proficient in a wide range of programming languages, including Java, Python, and JavaScript, I demonstrate versatility and adaptability in tackling complex coding challenges. Additionally, I am well-versed in utilizing frameworks such as React and Node.js to develop robust and scalable applications. With hands-on experience in cloud technologies, databases, and version control systems, I possess a comprehensive understanding of modern tech stacks.
          </p>
          <br />
          <p className="text-white text-lg text-center">
            I am deeply committed to supporting and empowering women in the tech industry. Actively engaging with organizations like Women Who Code, I participate in networking, skill development, and knowledge sharing. Furthermore, as a member of RTC (Rewriting the Code), I collaborate with individuals from diverse backgrounds, share experiences, and contribute to initiatives promoting diversity and inclusivity in technology.
          </p>
          <br />
          <p className="text-white text-lg text-center">
            I actively participate in initiatives like "Develop For Good" and serve as a mentor for hackathons dedicated to individuals from non-traditional backgrounds. I believe in utilizing technology for positive social impact and strive to stay at the forefront of technological advancements.
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
