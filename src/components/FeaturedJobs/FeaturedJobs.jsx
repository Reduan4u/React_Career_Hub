import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">
                    Featured Jobs: {jobs.length}
                </h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-10 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`flex justify-center my-10 ${dataLength > 4 ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>

        </div >
    );
};

export default FeaturedJobs;