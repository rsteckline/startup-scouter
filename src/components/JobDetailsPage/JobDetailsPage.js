import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getJobStoryDetails } from "../../apiCalls";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./JobDetailsPage.css";

const JobDetailsPage = () => {
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getJobStoryDetails(id)
      .then((jobDetails) => setJob(jobDetails))
      .catch((error) => {
        console.error("Error fetching job details:", error);
        setError(error);
      });
  }, [id]);

  
    if (error) {
      return <ErrorPage error={error} />; 
    }
    
    if (!job) {
      return <div>Loading...</div>;
    }

  return (
    <div className="job-details-page">
      <div className="details-header"></div>
      <div className="job-details">
        <h1>
          <span className="label">Title</span>
        </h1>
        <div className="job-title-content">{job.title}</div>
        <div className="details-section">
          <span className="label">Details</span>
          <div className="details-content">
            {job.text && (
              <div dangerouslySetInnerHTML={{ __html: job.text }}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
