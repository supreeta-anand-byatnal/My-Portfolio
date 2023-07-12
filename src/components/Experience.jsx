import React, { useState } from 'react';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const skills = [
    { name: "Skill 1", rating: 80 },
    { name: "Skill 2", rating: 60 },
    { name: "Skill 3", rating: 90 },
    // Add more skills as needed
  ];

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  let workIconStyles = { background: "#4d7c0f" };
  let schoolIconStyles = { background: "#4d7c0f" };

  return (
    <div id = "experience" name="experience" className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800">     
      
      <div className="text-center">
                <h1 className="text-5xl mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">Experience</h1>
       </div>

      <div className="tabs mt-10 text-black bg-black">
      <div className={`tab ${activeTab === "experience" ? "active" : ""}`} onClick={() => handleTabChange("experience")}>Experience</div>
       
        <div className={`tab ${activeTab === "schoolActivities" ? "active" : ""}`} onClick={() => handleTabChange("schoolActivities")}>School Activities</div>
         
        <div className={`tab ${activeTab === "skills" ? "active" : ""}`} onClick={() => handleTabChange("skills")}>Skills</div>
      </div>
      

      {activeTab === "schoolActivities" && (
        <div className="tab-content">
          <div name="school-activities" className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="w-2/3 mx-auto h-full">
              <div className="text-center">
                <h1 className="text-5xl mt-20 mb-15 font-bold border-b-4 text-white border-lime-700 inline-block">School Activities</h1>
              </div>
              {/* Content for the School Activities tab */}
            </div>
          </div>
        </div>
      )}

...
      {activeTab === "experience" && (
        <div className="tab-content">
           
              
              <div className='h-full py-4'>
                <VerticalTimeline>
                  {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";

                    return (
                      <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                      >
                        <div className="bg-lime-700 p-2 rounded-md text-white">
                          <h3 className="first-letter:vertical-timeline-element-title font-semibold text-md">{element.title}</h3>
                          <i><h6 className="vertical-timeline-element-subtitle text-sm">{element.location}</h6></i>
                        </div>
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
              </div>
            </div>
          
      )}

{activeTab === "skills" && (
  <div className="tab-content">
  
    <div className="flex text-center justify-center items-center h-full">
      <ul className="text-white">
        {skills.map((skill, index) => (
          <li key={index} className="text-xl mb-4">
            <span>{skill.name}</span>
            <div className="relative h-2 bg-gray-700 rounded overflow-hidden mt-2">
              <div
                className="absolute top-0 left-0 h-full bg-lime-500"
                style={{ width: `${skill.rating}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}
</div>
);
};

export default Experience;
