import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilities/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);



    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
        }

    }, [])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">Applied Job: {appliedJobs.length} </h1>
        </div>
    );
};

export default AppliedJobs;