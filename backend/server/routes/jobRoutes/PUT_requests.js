const express = require('express')
const app = express()
const pool = require('../../config/db');

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

module.exports = app