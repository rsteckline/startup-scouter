import React from "react";
import { Link } from "react-router-dom";
import "./JobPosting.css";

const JobPosting = ({ job }) => {
  const hasText = job.text ? true : false; //checks if text property exists and isn't empty

  return (
    <div className="job-posting-container">
      <h1>
        {hasText ? (
          <Link to={`/job/${job.id}`}>{job.title}</Link>
        ) : (
          <span>{job.title}</span>
        )}
      </h1>
      {job.url && (
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="job-link-icon"
          aria-label={`Read more about ${job.title}`}
        >
          <i className="fa-solid fa-link"></i>
        </a>
      )}
    </div>
  );
};

export default JobPosting;
