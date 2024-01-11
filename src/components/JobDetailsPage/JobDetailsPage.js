import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getJobStoryDetails } from '../../apiCalls';

const JobDetailsPage = () => {
    const [job, setJob] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getJobStoryDetails(id)
        .then(job => setJob(job))
        .catch(error => console.error('Error fetching job details:', error))
    }, [id]);

    if (!job) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{job.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: job.text}}></p>
        </div>
    )
}

export default JobDetailsPage;