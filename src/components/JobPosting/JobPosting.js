import React from "react";
import { Link } from "react-router-dom";
import './JobPosting.css'

const JobPosting = ({ job }) => {
  const hasText = !!job.text; //checks if text property exists and isn't empty

  return (
    <div>
      <h3>
        {hasText ? (
          <Link to={`/job/${job.id}`}>{job.title}</Link>
        ) : (
          <span>{job.title}</span>
        )}
        {job.url && (
          <a href={job.url} target="_blank" rel="noopener noreferrer" className="job-link-icon">
           <i className="fa-solid fa-link"></i>
          </a>
        )}
      </h3>
    </div>
  );
};

export default JobPosting;
