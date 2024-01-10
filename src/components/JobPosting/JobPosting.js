import React, { useState } from 'react';
import './JobPosting.css';

const JobPosting = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="job">
            <h3 className="job-title">{job.title}</h3>
            
            {job.text && (
                <button onClick={toggleDropdown} className="job-button">
                    {isOpen ? 'Less Info' : 'More Info'}
                </button>
            )}

            {isOpen && job.text && (
                <div className="more-info" dangerouslySetInnerHTML={{ __html: job.text }}></div>
            )}

            {job.url && (
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="job-button">
                    Go to Job Posting
                </a>
            )}
        </div>
    );
};

export default JobPosting;
