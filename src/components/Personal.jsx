import React, { useState } from "react";
import travel1 from "../assets/travel1.jpg";
import saree from "../assets/saree.jpg";
import dogs from "../assets/dogs.jpg";

const Personal = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const images = [
    {
      src: travel1,
      text: "When I'm not immersed in code, you'll find me exploring new horizons and experiencing diverse cultures.",
    },
    {
      src: dogs,
      text: "I take \"Work hard and pet dogs that you meet on vacation harder\" quote very seriously! ",
    },
    {
      src: saree,
      text: "Just like draping a saree, I strive to weave creativity, passion, and authenticity into my work.",
    },
  ];

  return (
    <div>
      <div className="bg-black py-8 w-full">
        <div className="container mx-auto w-1/2 flex items-center justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative mx-9 cursor-pointer" 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className={`w-64 border-lime-700 border-solid h-auto rounded-lg transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-50" : "opacity-100"
                }`}
              />
              {activeIndex === index && (
                <div className="absolute inset-0 border-lime-700 flex items-center justify-between">
                  <p className="text-lg font-medium border-lime-700 text-center align-middle text-white">{image.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Personal;
