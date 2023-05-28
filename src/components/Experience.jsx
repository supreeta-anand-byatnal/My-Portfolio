import React from 'react';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  let workIconStyles = { background: "#4d7c0f" };
  let schoolIconStyles = { background: "#4d7c0f" };

  return (
    <div name="experience" className="h-100 w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="text-center">
          <h1 className="text-5xl mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">
            Experience
          </h1>
        </div>    
        </ div> 
      <div className='py-5'><VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            
            <VerticalTimelineElement
            
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <div className="bg-lime-700 p-2 rounded-md text-white">

              <h3 className="first-letter:vertical-timeline-element-title  text-lg">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle text-sm">
                {element.location}
              </h5>
              </div>
              <p id="description">{element.description}</p>
          
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
