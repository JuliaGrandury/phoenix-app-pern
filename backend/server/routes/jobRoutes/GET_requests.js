const express = require('express')
const app = express()
const pool = require('../../config/db');

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

// ------------------------------------------------------------- //
// Querying jobs based on role, location and company
// ------------------------------------------------------------- //

// Query jobs based on location
app.get("/jobs", async (req, res) => {
    try {
        //check input here for appropriateness - can request 400 bad request or ignore and return all jobs
        const location = req.query.location;
        console.log(`Location is ${location}`);
        const results = await pool.query(`SELECT * FROM jobs WHERE location ILIKE '%$1%'`, [location]);
        res.json(results);
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = app