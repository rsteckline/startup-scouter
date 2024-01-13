import React, { useState, useEffect } from "react";
import { getJobStoryIds, getJobStoryDetails } from "../../apiCalls";
import JobPosting from "../JobPosting/JobPosting";
import "./MainPage.css";
import PropTypes from "prop-types";

const MainPage = ({ searchQuery }) => {
  const [jobStories, setJobStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getJobStoryIds()
      .then((ids) => {
        const jobDetailsPromises = ids.map((id) => getJobStoryDetails(id));
        return Promise.all(jobDetailsPromises);
      })
      .then((jobs) => {
        setJobStories(jobs);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const filteredStories = jobStories.filter((job) => {
    const query = searchQuery.toLowerCase();
    const titleMatches = job.title
      ? job.title.toLowerCase().includes(query)
      : false;
    const textMatches = job.text
      ? job.text.toLowerCase().includes(query)
      : false;
    return titleMatches || textMatches;
  });

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="main-page">
      <h1 className="title">Job Listings</h1>
      {filteredStories.length > 0 ? (
        filteredStories.map((job) => <JobPosting key={job.id} job={job} />)
      ) : (
        <div>No job listings found.</div>
      )}
    </div>
  );
};

MainPage.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default MainPage;
