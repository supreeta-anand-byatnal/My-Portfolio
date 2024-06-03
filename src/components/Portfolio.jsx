import React from "react";
import expense from "../assets/portfolio/expense.png";
import article from "../assets/portfolio/article.png";
import video from "../assets/portfolio/video.png";
import diggs from "../assets/portfolio/diggs.jpeg";
import devops from "../assets/portfolio/devops.png";
import dfg from "../assets/portfolio/dfg-1.png";

const Portfolio = () => {
  const portfolios = [
    
    {
      id: 5,
      src: devops,
      demoLink: "https://github.com/CSCI-GA-2820-SU23-001/wishlists",
      codeLink: "https://github.com/CSCI-GA-2820-SU23-001/wishlists",
      name:"E-commerce wishlists microservice",
      description: "Implemented a Python-based ecommerce Wishlist Microservice, leveraging Flask and containerized through Docker within Kubernetes on IBM Cloud. This project integrated CI/CD pipelines, utilized Swagger for API documentation, and was managed using Agile principles with Kanban board tracking. The development approach was rigorously test-driven, achieving 98% test coverage, alongside behavior-driven development for integration testing before code was merged into the Git feature branch."},
      {
        id: 3,
        src: video,
        demoLink: "https://drive.google.com/file/d/1JkunEebTmxSq2oHJdUjprZ37QxYm_VOS/view?usp=sharing",
        codeLink: "https://drive.google.com/file/d/1JkunEebTmxSq2oHJdUjprZ37QxYm_VOS/view?usp=sharing",
        name:"Video Verse",
        description: "VideoVerse is a decentralized P2P video editing platform that harnesses the power of AWS, GCP, and IBM Cloud to offer advanced features like video summarization, celebrity recognition, and video transcription. These functionalities aim to enhance the user experience by making video editing more accessible and engaging."   
       },
  
    {
      id: 1,
      src: expense,
      demoLink: "https://drive.google.com/file/d/1xe6RiPamYHGy0AeMe_d59joj0MTtWz8e/view?usp=drive_link",
      codeLink: "https://github.com/supreeta-anand-byatnal/Coin-Tracker",
      name:"Coin Tracker",
      description: " A full-stack expense tracker application with APIs to add, delete, and update expenses. The application is built using React, Node.js, Express, and MongoDB."
      
    },
    {
      id: 2,
      src: article,
      demoLink: "https://article-summarizer-gpt4.netlify.app/",
      codeLink: "https://github.com/supreeta-anand-byatnal/Article-Summarizer",
      name:"Article Summarizer",
      description: "An app built with Vite and React, leverages open API to generate concise summaries of lengthy articles. Users can input links, and the app processes the article and returns a summary"
    },

    
    {
      id: 4,
      src: diggs,
      demoLink: "https://www.diggs.pet/",
      codeLink: "",
      name:"Diggs",
      description: "The Real-Time Shipping Rate Optimization project involved the seamless integration of the FedEx API into the Shopify platform for DIGGS. This advanced integration elevated the accuracy of backend shipping cost calculations by 40%, yielding substantial savings of over $6 per shipment. The project harnessed skills in PHP, Python, and Shopify, demonstrating a high level of proficiency in API integration and e-commerce platform optimization." },

      {
      id: 6,
      src: dfg,
      demoLink: "https://drive.google.com/file/d/1iyP4i7-ug87Mm4Q2qGkO4Gs5nF1ICeDc/view",
      codeLink: "https://drive.google.com/file/d/1iyP4i7-ug87Mm4Q2qGkO4Gs5nF1ICeDc/view",
      name:"Find Your Art",
      description: "Develop for Good's \"Flow FYA (Find Your Arts) portal, developed using the MERN stack, enables art organizers to post events such as plays, musicals, and art exhibitions. It allows teachers to book these events, providing practical experiences for their students. The project involved leading a team of five full stack engineers to create user-friendly features, including event listings, booking capabilities, and seamless communication channels."    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <div
      name="portfolio" 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full py-10"
    >
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="text-center">
          <h1 className="text-5xl animate-slide-from-left mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">
            Portfolio
          </h1>
        </div>

        <div className="grid mt-20 md:h-full sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, description,name}) => (
            <div key={id} className="shadow-md shadow-lime-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
                <h2 className="text-center mt-7 text-lime-600 text-lg font-semibold mb-2">
                  {name}
                </h2>
                <p className="text-center text-gray-300">{description}</p>
              
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 text-lime-600 font-semibold hover:scale-105"
                  onClick={() => handleClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200  text-lime-600 font-semibold hover:scale-105"
                  onClick={() => handleClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;