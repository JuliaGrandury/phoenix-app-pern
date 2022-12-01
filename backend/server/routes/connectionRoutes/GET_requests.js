const express = require('express')
const app = express()
const pool = require('../../config/db');

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

module.exports = app