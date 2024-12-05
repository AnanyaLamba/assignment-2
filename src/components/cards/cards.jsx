import React, { useContext } from "react";
import { JobContext } from "../context/jobcontext";
import EmployersLogo from "../../Assets/EmployersLogo.png";
import "./cards.css"; // Importing the CSS file

const Card = () => {
  const { jobList } = useContext(JobContext);

  return (
    <div className="job-list">
      {jobList.map((job, index) => (
        <div key={index} className="job-card">
          <p className="title">{job.title}</p>
          <div className="salary">
            <p className="remote">{job.remote ? "Remote" : "On-site"}</p>
            <p className="salary-para">{job.salary}</p>
          </div>
          <div className="company">
            <img src={EmployersLogo} alt="" />
            <div className="company-text">
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Card;
