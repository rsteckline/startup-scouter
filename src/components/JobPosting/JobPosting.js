import React from "react";

const JobPosting = ({ job }) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: job.text }}></p>
    </div>
  );
};

export default JobPosting;
