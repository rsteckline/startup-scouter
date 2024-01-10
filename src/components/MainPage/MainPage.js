import React, { useState, useEffect } from "react";
import { getJobStoryIds, getJobStoryDetails } from "../../apiCalls";
import JobPosting from "../JobPosting/JobPosting";
import "./MainPage.css";

const MainPage = () => {
  const [jobStories, setJobStories] = useState([]);

  useEffect(() => {
    const fetchJobStories = async () => {
      try {
        const ids = await getJobStoryIds();
        const jobDetailsPromises = ids
          .slice(0, 10)
          .map((id) => getJobStoryDetails(id));
        const jobs = await Promise.all(jobDetailsPromises);
        setJobStories(jobs);
      } catch (error) {
        console.error("Error fetching job stories:", error);
      }
    };

    fetchJobStories();
  }, []);

  return (
    <div className="main-page">
      <h1>Job Listings</h1>
      {jobStories.map((job) => (
        <JobPosting key={job.id} job={job} />
      ))}
    </div>
  );
};

export default MainPage;
