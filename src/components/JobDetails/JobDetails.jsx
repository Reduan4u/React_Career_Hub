import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utilities/localStorage";



const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInst = parseInt(id);
    const job = jobs.find(job => job.id === idInst);

    const handleApplyJob = () => {
        saveJobApplication(idInst);
        toast("Job Application Completed");
    }


    return (
        <div className="mb-10">
            <h1 className="text-5xl font-bold text-center my-5">Job Details of: {id}</h1>
            <div className="grid grid-cols-4  gap-4">
                <div className="rounded-xl border col-span-3 p-6 ">
                    <p><strong>Job Description: </strong>{job.job_description} </p>
                    <p className="py-4"><strong>Job Responsibility: </strong>{job.job_responsibility} </p>
                    <p><strong>Educational Requirements: </strong><br />{job.educational_requirements} </p>
                    <p><strong>Experiences:</strong><br />{job.experiences} </p>
                </div>
                <div className=" ">
                    <div className="bg-purple-50 p-3 rounded-xl">
                        <h1 className="py-2"><strong>Job Details</strong></h1>
                        <hr />
                        <h1><strong>Salary: </strong>{job.salary}</h1>
                        <h1><strong>Job Title: </strong>{job.job_title}</h1>
                        <h1 className="py-2"><strong>Contact Information</strong></h1>
                        <hr />
                        <h1><strong>Phone: </strong>{job.contact_information.phone}</h1>
                        <h1><strong>Email: </strong>{job.contact_information.email}</h1>
                        <h1><strong>Address: </strong>{job.contact_information.address}</h1>
                    </div>
                    <div>
                        <button onClick={handleApplyJob} className="btn btn-secondary w-full mt-6">Apply Job</button>

                    </div>
                    <div className="flex justify-between  ">
                        <Link to="/"> <button className="btn btn-primary mt-6">More Jobs</button></Link>
                        <Link to="/applied"> <button className="btn btn-primary mt-6">Applied Jobs</button></Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;