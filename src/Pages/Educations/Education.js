import React from "react";
import { IoCall } from "react-icons/io5";
import { MdImageSearch } from "react-icons/md"
import { FaCodeBranch } from "react-icons/fa";
import { IoIosCloudUpload } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h1 className="col-12  mb-2 text-center ">
          Work Process
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            iconStyle={{ background: "black", color: " #a434fa" }}
            icon={<IoCall />}
          >
            <h3 className="vertical-timeline-element-title">Discovery Call</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Root around into project specifics, fostering a collaborative understanding of goals and requirements.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
          
            iconStyle={{ background: "black", color: " #a434fa"}}
            icon={<MdImageSearch />}
          >
            <h3 className="vertical-timeline-element-title">Research & Designing</h3>
            <h4 className="vertical-timeline-element-subtitle">
            During research and design, I look at what's the trend and what becomes trend in the market and plan then design how the project will work.
            </h4>
          </VerticalTimelineElement>
      
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
         
            iconStyle={{ background: "black", color: " #a434fa"}}
            icon={<FaCodeBranch />}
          >
            <h3 className="vertical-timeline-element-title">Development</h3>
            <h4 className="vertical-timeline-element-subtitle">
            The crafted design transforms into a tangible reality as I bring the project to life with precision and expertise
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            iconStyle={{ background: "black", color: " #a434fa"}}
            icon={<IoIosCloudUpload />}
          >
            <h3 className="vertical-timeline-element-title">Deployment</h3>
            <h4 className="vertical-timeline-element-subtitle">
            The project undergoes a seamless deployment process, going live to fulfill its intended purpose in the digital landscape.
            </h4>
          </VerticalTimelineElement>
          
          </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;