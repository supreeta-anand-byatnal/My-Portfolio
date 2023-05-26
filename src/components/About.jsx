import React from 'react';
import Personal from './Personal';

const About = () => {
  return (
    <div name="about" className="h-100 w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="text-center">
          <h1 className="text-5xl mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">
            About Me
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-white text-lg text-center">
          Hi, I'm Supreeta Anand Byatnal. <b>I'm a graduate student at New York University (NYU), Courant Institute of Mathematical Sciences pursuing my Masters in 
          Computer Science. I will graduate in May 2024.</b> I'm originally from Bangalore, India. I did my Bachelors in Information Science and Engineering from BMS College of Engineering, Bangalore, India - Batch of 2020. With a strong passion for technology and problem-solving, I'm dedicated to expanding my knowledge and skills in the field of computer science.
          </p> <br />
          <p className="text-white text-lg text-center"> I worked at<b> McAfee Inc. for over 2 years as a Software 
          Development Engineer </b> in the Cloud BU on a product called "MVision Cloud".</p> <br />
<p className="text-white text-lg text-center"></p>
<p className='text-white text-lg text-center'>Proficient in a wide range of programming languages, including Java, Python, and JavaScript, I demonstrate versatility and adaptability in tackling complex coding challenges. Additionally, I am well-versed in utilizing frameworks such as React (This website is a great example) and Node.js to develop robust and scalable applications. With hands-on experience in cloud technologies, databases, and version control systems, I possess a comprehensive understanding of the modern tech stacks and my projects speak for them.</p><br/>
        <p className="text-white text-lg text-center">I am deeply committed to supporting and empowering <b>women in the tech industry </b>. Actively engaging with <b>Women Who Code</b>, a global organization dedicated to this cause, 
        I participate in networking, skill development, and knowledge sharing, supporting and empowering individuals in the tech industry. Furthermore, as a passionate member of <b>RTC (Rewriting the Code)</b>, a community focused on promoting diversity and inclusivity in technology, I collaborate with individuals from diverse backgrounds, share valuable experiences, and actively contribute to initiatives that drive positive change.</p><br/>
<p className="text-white text-lg text-center"> I actively participate in initiatives like <b> "Develop For Good" </b>, utilizing my technical skills for projects that have immense positive social impact. Additionally, I serve as a mentor and judge for hackathons dedicated to individuals from non-traditional backgrounds, empowering them to showcase their skills and drive
 innovation. Continuously building projects and exploring new tech stacks, I embrace learning and remain at the forefront of technological advancements. </p><br/>

 <p className="text-white text-lg text-center"> I am a dedicated and passionate individual, constantly seeking opportunities to grow as a professional, make an impact in the tech industry, and contribute to the betterment of society.</p>
        </div>
      </div>

      <div className="mt-auto py-6">
        <Personal />
      </div>
    </div>
  );
};

export default About;
