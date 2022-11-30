const express = require('express');
const app = express();
const cors = require('cors');

//can postgres queries with the pool
const pool = require('./db');

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log(`The server is up and running on port 5000`);
})


// ALL ROUTING FOR JOBS BELOW 
// Create a job
app.post("/jobs", async (req, res) => {
    try {
        const { role, role_link, city, state, country, company, company_link, description, connections, status, applied_on } = req.body;
        const newJob = await pool.query(
            "INSERT INTO jobs (role, role_link, city, state, country, company, company_link, description, connections, status, applied_on) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *", [role, role_link, city, state, country, company, company_link, description, connections, status, applied_on]
        );
        res.json(newJob.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.send("Addition of job unsuccessful");
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
        const { role, role_link, city, state, country, company, company_link, description, connections, status, applied_on, created_at } = req.body;
        const updateJob = await pool.query(
            "UPDATE jobs SET role=$1, role_link=$2, city=$3, state=$4, country=$5, company=$6, company_link=$7, description=$8, connections=$9, status=$10, applied_on=$11, created_at=$12 WHERE id = $13",
            [role, role_link, city, state, country, company, company_link, description, connections, status, applied_on, created_at, id]
        );
        res.json(`Job with id ${id} was updated to ${updateJob.rows[0]}`);
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

// ------------------------------------------------------------- //
// Querying jobs based on jobTitle, jobLocation and companyName
// ------------------------------------------------------------- //

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


// ALL ROUTING FOR CONNECTIONS BELOW
// Create a connection
app.post("/connections", async (req, res) => {
    try {
        const { fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status } = req.body;
        const newJob = await pool.query(
            "INSERT INTO connections (fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status]
        );
        res.json(newJob.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.send("Addition of connection unsuccessful");
    }
})

// Get all connections
app.get("/connections", async (req, res) => {
    try {
        const allJobs = await pool.query("SELECT * FROM connections");
        res.json(allJobs.rows);
    } catch (error) {
        console.error(error.message)
    }
})

// Get a connection
app.get("/connections/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const job = await pool.query("SELECT * FROM connections WHERE id = $1", [id]);
        res.json(job.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// Update a connection
app.put("/connections/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status } = req.body;
        const updateJob = await pool.query(
            "UPDATE connections SET fullname=$1, role=$2, company=$3, contact_dates=$4, contact_information=$5, offers=$6, secondary_cons=$7, homework=$8, status=$9 WHERE id = $10",
            [fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status, id]
        );
        res.json(`Job with id ${id} was updated to ${updateJob.rows[0]}`);
    } catch (error) {
        console.error(error.message)
    }
})

// Delete a connection
app.delete("/connections/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteConnection = await pool.query("DELETE FROM connections WHERE id = $1", [id]);
        res.json(`Connection with id ${id} was deleted`);
    } catch (error) {
        console.error(error.message)
    }
})

