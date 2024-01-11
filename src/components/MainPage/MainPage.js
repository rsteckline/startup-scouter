import React, { useState, useEffect } from "react";
import { getJobStoryIds, getJobStoryDetails } from "../../apiCalls";
import JobPosting from "../JobPosting/JobPosting";

const MainPage = () => {
  const [jobStories, setJobStories] = useState([]);

  useEffect(() => {
    getJobStoryIds()
      .then((ids) => Promise.all(ids.map((id) => getJobStoryDetails(id))))
      .then((jobs) => setJobStories(jobs))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {jobStories.map((job) => job && <JobPosting key={job.id} job={job} />)}
    </div>
  );
};

export default MainPage;
