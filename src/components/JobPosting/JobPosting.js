import React from "react";
import { Link } from "react-router-dom";
import "./JobPosting.css";
import PropTypes from "prop-types";

const JobPosting = ({ job }) => {
  const batchNumberRegex =
    /\(YC\s+\w{1,2}\d{2}[^)]*?\)\s*,?|YC\s+\w{1,2}\d{2}\s*,?\s*/i;

  const cleanTitle = (title) => {
    return title.replace(batchNumberRegex, "").trim();
  };

  return (
    <div className="job-posting-container">
      <h1>{cleanTitle(job.title)}</h1>
      {job.text && (
        <Link
          to={`/job/${job.id}`}
          className="job-link-icon"
          aria-label="Job info"
        >
          info
        </Link>
      )}
      {job.url && (
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="job-link-icon"
          aria-label="Job info"
        >
          🔗
        </a>
      )}
    </div>
  );
};

JobPosting.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default JobPosting;
