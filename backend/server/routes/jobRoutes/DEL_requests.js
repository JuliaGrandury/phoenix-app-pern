const express = require('express')
const app = express()
const pool = require('../../config/db');

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

module.exports = app