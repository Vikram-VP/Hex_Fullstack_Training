const express = require("express");
const router = express.Router();
const { createJob, getAllJobs, deleteJob } = require("../controllers/jobcontroller");

router.post("/createjob", createJob);
router.get("/getAllJobs", getAllJobs);
router.delete("/deleteJob/:id", deleteJob); // Added delete job route

module.exports = router;
