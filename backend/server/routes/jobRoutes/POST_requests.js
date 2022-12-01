const express = require('express')
const app = express()
const pool = require('../../config/db');

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

module.exports = app