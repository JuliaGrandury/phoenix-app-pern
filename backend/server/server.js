const express = require('express');
const app = express();
const cors = require('cors');

//can postgres queries with the pool
const pool = require('./db');


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ALL ROUTING BELOW 
// Create a job
app.post("/jobs", async (req, res) => {
    try {
        const { jobTitle, jobLocation, companyName, companyUrl, companyDesc, appStatus, appDate } = req.body;
        const newJob = await pool.query(
            "INSERT INTO jobs (jobTitle, jobLocation, companyName, companyUrl, companyDesc, appStatus, appDate) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [jobTitle, jobLocation, companyName, companyUrl, companyDesc, appStatus, appDate]
        );
        res.json(newJob.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// Get all jobs
app.get("/jobs", async (req, res) => {
    try {
        const allJobs = await pool.query("SELECT * FROM jobs");
        res.json(allJobs.rows);
    } catch (error) {
        console.error(error.message)
    }
})

// Get a job
app.get("/jobs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const job = await pool.query("SELECT * FROM jobs WHERE id = $1", [id]);
        res.json(job.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// Update a job
app.put("/jobs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { jobTitle, jobLocation, companyName, companyUrl, companyDesc, appStatus, appDate } = req.body;
        const updateJob = await pool.query(
            "UPDATE jobs SET jobTitle=$1, jobLocation=$2, companyName=$3, companyUrl=$4, companyDesc=$5, appStatus=$6, appDate=$7 WHERE id = $8",
            [jobTitle, jobLocation, companyName, companyUrl, companyDesc, appStatus, appDate, id]
        );
        res.json(`Job with id ${id} was updated`);
    } catch (error) {
        console.error(error.message)
    }
})

// Delete a job
app.delete("/jobs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteJob = await pool.query("DELETE FROM jobs WHERE id = $1", [id]);
        res.json(`Job with id ${id} was deleted`);
    } catch (error) {
        console.error(error.message)
    }
})

// ---------------------------------------------------------- //
// Querying jobs based on jobTitle, jobLocation and companyName
// ---------------------------------------------------------- //

// Query jobs based on location
app.get("/jobs", async (req, res) => {
    try {
        //check input here for appropriateness - can request 400 bad request or ignore and return all jobs
        const location = req.query.location;
        console.log(`Location is ${location}`);
        const results = await pool.query(`SELECT * FROM jobs WHERE jobLocation ILIKE '%$1%'`, [location]);
        res.json(results);
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log(`The server is up and running on port 5000`);
})
