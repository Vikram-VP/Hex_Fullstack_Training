const Job = require("../models/job");

exports.createJob = async (req, res) => {
    try {
        let job = req.body;
        const jobObj = new Job(job);
        job = await jobObj.save();
        res.status(200).json({ msg: "Job created successfully", job });
    } catch (err) {
        res.status(400).json({ msg: "Error in API: " + err.message });
    }
};

// Fixed: Parameter order corrected and added pagination logic
exports.getAllJobs = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 5;
        const skip = (page - 1) * size;

        const jobs = await Job.find().skip(skip).limit(size);
        const totalJobs = await Job.countDocuments();

        if (jobs.length === 0) {
            return res.status(404).json({ msg: "No jobs found" });
        }

        res.status(200).json({
            data: jobs,
            totalPages: Math.ceil(totalJobs / size),
            currentPage: page,
        });
    } catch (err) {
        res.status(400).json({ msg: "Error in API: " + err.message });
    }
};

// Added: Delete job API
exports.deleteJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const deletedJob = await Job.findByIdAndDelete(jobId);
        if (!deletedJob) {
            return res.status(404).json({ msg: "Job not found" });
        }
        res.status(200).json({ msg: "Job deleted successfully" });
    } catch (err) {
        res.status(400).json({ msg: "Error in API: " + err.message });
    }
};
