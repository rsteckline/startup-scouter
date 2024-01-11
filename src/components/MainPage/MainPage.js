import React, { useState, useEffect } from "react";
import { getJobStoryIds, getJobStoryDetails } from "../../apiCalls";
import JobPosting from "../JobPosting/JobPosting";
import "./MainPage.css"

const MainPage = ({ searchQuery }) => {
  const [jobStories, setJobStories] = useState([]);

  useEffect(() => {
    getJobStoryIds()
      .then((ids) => Promise.all(ids.map((id) => getJobStoryDetails(id))))
      .then((jobs) => setJobStories(jobs))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

const filteredStories = jobStories.filter(job => {
    const query = searchQuery.toLowerCase()
    const titleMatches = job.title ? job.title.toLowerCase().includes(query) : false;
    const textMatches = job.text ? job.text.toLowerCase().includes(query) : false;

    return titleMatches || textMatches;
  });

  return (
    <div className="main-page">
      <h1>Job Listings</h1>
      {filteredStories.map((job) => job && <JobPosting key={job.id} job={job} />)}
    </div>
  );
};

export default MainPage;
