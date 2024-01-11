import React from "react";
import { Link } from 'react-router-dom'

const JobPosting = ({ job }) => {
  return (
    <div>
      <h3>
        <Link to={`/job/${job.id}`}>{job.title}</Link>
        <a href={job.url} target="_blank" rel="noopener noreferrer">{job.url}</a>
      </h3>
    </div>
  );
};

export default JobPosting;
