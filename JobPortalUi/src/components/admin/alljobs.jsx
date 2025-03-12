import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import AdminNavbar from "./navbar"; // Import Admin Navbar

function AllJobs() {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5; 
    const navigate = useNavigate();

    // Fetch jobs from the backend
    const fetchJobs = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5003/api/job/getAllJobs?page=${currentPage}&size=${pageSize}`
            );
            setJobs(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            toast.error("Failed to fetch jobs.");
        }
    };

    useEffect(() => {
        fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]); 

    // Function to handle edit
    const handleEdit = (jobId) => {
        navigate(`/admin/edit-job/${jobId}`);
    };

    // Function to delete a job
    const handleDelete = async (jobId) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            try {
                const headers = {
                    Authorization: "Bearer " + localStorage.getItem("token"), // Authentication
                };

                await axios.delete(`http://localhost:5003/api/job/deleteJob/${jobId}`, { headers });

                toast.success("Job deleted successfully!");
                fetchJobs(); 
            } catch (error) {
                console.error("Error deleting job:", error);
                toast.error("Failed to delete job.");
            }
        }
    };

    return (
        <>
            <AdminNavbar /> {/* Admin Navbar added here */}
            <div className="container mt-4">
                <h2 className="text-center text-primary">All Jobs</h2>

                <div className="card shadow-lg p-4">
                    {jobs.length > 0 ? (
                        <>
                            <table className="table table-bordered text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Short Description</th>
                                        <th>Salary (₹)</th>
                                        <th>Experience (Years)</th>
                                        <th>Tech Stack</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job, index) => (
                                        <tr key={job._id}>
                                            <td>{index + 1 + (currentPage - 1) * pageSize}</td>
                                            <td>{job.title}</td>
                                            <td>{job.shortDescription}</td>
                                            <td>{job.salary}</td>
                                            <td>{job.experienceNeeded}</td>
                                            <td>{job.techStack}</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary" onClick={() => handleEdit(job._id)}>
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                &nbsp;
                                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(job._id)}>
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Pagination Controls */}
                            <nav>
                                <ul className="pagination justify-content-center">
                                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                                    </li>

                                    {[...Array(totalPages)].map((_, index) => (
                                        <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
                                            <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                                        </li>
                                    ))}

                                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                                    </li>
                                </ul>
                            </nav>
                        </>
                    ) : (
                        <p className="text-center text-muted">No jobs found. Please add some jobs.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default AllJobs;
