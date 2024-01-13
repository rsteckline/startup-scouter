import React from "react";
import { Link } from "react-router-dom";
import "./JobPosting.css";

const JobPosting = ({ job }) => (
  <div className="job-posting-container">
    <h1>{job.title}</h1>
    {job.text && (
      <Link
        to={`/job/${job.id}`}
        className="job-link-icon"
        aria-label="View job details"
      >
        <i class="fa-solid fa-circle-info"></i>
      </Link>
    )}
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

export default JobPosting;
