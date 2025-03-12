import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import AdminNavbar from "./navbar"; // Import Admin Navbar

function AddJob() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [salary, setSalary] = useState("");
    const [experienceNeeded, setExperienceNeeded] = useState("");
    const [techStack, setTechStack] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const headers = {
                Authorization: "Bearer " + localStorage.getItem("token"),
            };

            const jobData = {
                title,
                shortDescription,
                salary,
                experienceNeeded,
                techStack,
            };

            await axios.post("http://localhost:5003/api/job/createjob", jobData, { headers });

            toast.success("Job added successfully!");
            navigate("/admin/jobs"); 
        } catch (error) {
            console.error("Error adding job:", error);
            toast.error("Failed to add job.");
        }
    };

    return (
        <>
            <AdminNavbar /> {/* Admin Navbar added here */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow-lg p-4">
                            <h3 className="text-center text-primary">Add Job</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Job Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Short Description</label>
                                    <textarea
                                        className="form-control"
                                        value={shortDescription}
                                        onChange={(e) => setShortDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Salary (₹)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Experience Needed (Years)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={experienceNeeded}
                                        onChange={(e) => setExperienceNeeded(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Tech Stack</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={techStack}
                                        onChange={(e) => setTechStack(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Add Job</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddJob;
